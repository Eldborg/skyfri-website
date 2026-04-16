import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const CONFLUENCE_BASE = process.env.CONFLUENCE_BASE_URL!;
const CONFLUENCE_AUTH = Buffer.from(
  `${process.env.CONFLUENCE_EMAIL}:${process.env.CONFLUENCE_API_TOKEN}`
).toString('base64');

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

async function searchConfluence(query: string): Promise<string> {
  try {
    // Search across all spaces
    const searchUrl = `${CONFLUENCE_BASE}/wiki/rest/api/content/search?cql=text~"${encodeURIComponent(query)}" AND type=page&limit=5&expand=body.storage,title,space`;

    const res = await fetch(searchUrl, {
      headers: {
        Authorization: `Basic ${CONFLUENCE_AUTH}`,
        Accept: 'application/json',
      },
    });

    if (!res.ok) return '';

    const data = await res.json();
    const results = data.results || [];

    if (results.length === 0) return '';

    const sections = results.map((page: any) => {
      const title = page.title;
      const space = page.space?.name || '';
      const body = page.body?.storage?.value
        ? stripHtml(page.body.storage.value).slice(0, 1500)
        : '';
      return `### ${title} (${space})\n${body}`;
    });

    return sections.join('\n\n---\n\n');
  } catch {
    return '';
  }
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    const latestUserMessage = messages[messages.length - 1]?.content || '';

    // Pull relevant Confluence content
    const confluenceContext = await searchConfluence(latestUserMessage);

    const systemPrompt = `You are Skyfri's intelligent assistant, embedded on the Skyfri website (skyfri.com). Skyfri builds hardware-first solar intelligence — the SSI V04 Micro is their flagship edge computing device for solar and battery assets.

Your role is to help visitors understand Skyfri's products, technology, documentation, and capabilities. You are knowledgeable, concise, and technical when needed but accessible to non-technical users.

${confluenceContext
  ? `Here is relevant content pulled from Skyfri's Confluence knowledge base to help answer the user's question:\n\n${confluenceContext}\n\nUse this information to give accurate, specific answers. If the Confluence content doesn't fully answer the question, supplement with your general knowledge about Skyfri's products.`
  : 'No specific Confluence pages matched this query. Answer based on your general knowledge of Skyfri and solar energy technology.'
}

Keep responses concise and helpful. Use markdown formatting where appropriate. If a user asks about pricing, partnerships, or specific deployments, direct them to sales@skyfri.com.`;

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages.map((m: any) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const text = response.content[0]?.type === 'text' ? response.content[0].text : '';

    return NextResponse.json({ response: text });
  } catch (err) {
    console.error('Chat API error:', err);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}

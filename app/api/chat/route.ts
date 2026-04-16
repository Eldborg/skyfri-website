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

function stripMarkdown(text: string): string {
  return text
    .replace(/#{1,6}\s+/g, '')        // headings
    .replace(/\*\*(.+?)\*\*/g, '$1')  // bold
    .replace(/\*(.+?)\*/g, '$1')      // italic
    .replace(/`{1,3}[^`]*`{1,3}/g, (m) => m.replace(/`/g, '')) // code
    .replace(/^\s*[-*+]\s+/gm, '')    // bullet points — remove dash/bullet
    .replace(/^\s*\d+\.\s+/gm, '')    // numbered lists
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links
    .replace(/^---+$/gm, '')          // horizontal rules
    .replace(/\n{3,}/g, '\n\n')       // excess blank lines
    .trim();
}

async function searchConfluence(query: string): Promise<string> {
  try {
    // Search only public-facing spaces: KB (Knowledge base) and BRUK (Brukerdokumentasjon)
    const searchUrl = `${CONFLUENCE_BASE}/wiki/rest/api/content/search?cql=text~"${encodeURIComponent(query)}" AND type=page AND space in ("KB","BRUK")&limit=5&expand=body.storage,title,space`;

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

    const systemPrompt = `You are Sofia, Skyfri's friendly assistant on skyfri.com. Skyfri builds hardware-first solar intelligence — their flagship product is the SSI V04 Micro, an edge computing device for solar and battery assets.

Your personality: warm, helpful, and approachable. You make technical topics easy to understand without being condescending. You genuinely care about helping the person you're talking to.

Your role: help visitors learn about Skyfri's products, technology, and how Skyfri can help them. Keep answers conversational, clear and to the point — no more than a few short paragraphs.

Formatting rules — strictly follow these:
- Never use # or ## or ### headings
- Never use ** or * for bold or italic
- Never use markdown formatting of any kind
- Use plain sentences and short paragraphs
- If listing steps or items, use a simple numbered list (1. 2. 3.) or plain sentences — no dashes or bullet symbols

${confluenceContext
  ? `Here is relevant content from Skyfri's knowledge base to help you answer:\n\n${confluenceContext}\n\nUse this to give accurate, specific answers. If it doesn't fully cover the question, supplement with your general knowledge of Skyfri's products.`
  : 'No specific knowledge base articles matched this query. Answer based on your general knowledge of Skyfri and solar energy technology.'
}

If you don't have enough information to fully answer, be honest about it and warmly invite them to reach out to the Skyfri support team at support@skyfri.com — they'll be happy to help. For sales or partnership enquiries, point them to sales@skyfri.com.`;

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages.map((m: any) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const raw = response.content[0]?.type === 'text' ? response.content[0].text : '';
    const text = stripMarkdown(raw);

    return NextResponse.json({ response: text });
  } catch (err) {
    console.error('Chat API error:', err);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}

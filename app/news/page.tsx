import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    slug: "ssi-v04-micro-launch",
    date: "April 2026",
    tag: "Press Release",
    title: "Skyfri launches SSI V04 Micro — the world's first all-in-one solar monitoring gateway, seven years in the making.",
    excerpt: "Skyfri Corp has announced the commercial launch of the SSI V04 Micro, a purpose-built industrial IoT gateway that consolidates an entire solar monitoring cabinet into a single DIN-rail device the size of a Wi-Fi router.",
    image: "/news-hero.jpg",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-8 md:px-16 grid-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(29,107,255,0.10) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="animate-fade-up text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-6">Skyfri · News</p>
          <h1 className="animate-fade-up delay-100 text-5xl md:text-6xl font-bold text-white leading-tight">
            Latest News
          </h1>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto space-y-8">
          {articles.map((a) => (
            <Link key={a.slug} href={`/news/${a.slug}`} className="group block">
              <div className="card-glass rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all">
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,26,0.8) 0%, transparent 60%)" }} />
                  <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase text-blue-400 border border-blue-500/30 px-3 py-1.5 rounded-full font-mono" style={{ background: "rgba(5,10,26,0.7)" }}>
                    {a.tag}
                  </span>
                </div>
                <div className="p-8">
                  <p className="text-white/30 text-xs font-mono mb-3">{a.date}</p>
                  <h2 className="text-white font-bold text-xl md:text-2xl leading-tight mb-4 group-hover:text-blue-300 transition-colors">{a.title}</h2>
                  <p className="text-white/40 text-sm leading-relaxed">{a.excerpt}</p>
                  <p className="text-blue-400 text-sm font-mono mt-6">Read more →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-blue-500/10 px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 mt-auto" style={{ background: "rgba(5,10,26,0.9)" }}>
        <div className="flex items-center gap-3">
          <Image src="/skyfri-logo-white.png" alt="Skyfri" width={72} height={24} className="h-5 w-auto opacity-25" />
          <span className="text-white/20 text-xs tracking-widest uppercase">© {new Date().getFullYear()} Skyfri Group AS</span>
        </div>
        <p className="text-white/10 text-xs font-mono">SSI V04 Micro · Hardware-First Solar Intelligence</p>
      </footer>
    </div>
  );
}

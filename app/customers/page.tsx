import Nav from "@/components/Nav";
import Image from "next/image";

const stats = [
  { n: "100+", l: "Sites Monitored" },
  { n: "4", l: "Countries" },
  { n: "10+", l: "Years in the Field" },
  { n: "24/7", l: "Real-Time Monitoring" },
];

const markets = [
  {
    region: "Norway",
    flag: "🇳🇴",
    body: "Where Skyfri was founded. Our earliest deployments are here battle-tested across years of Nordic winters, grid constraints, and real operational complexity.",
  },
  {
    region: "Sweden",
    flag: "🇸🇪",
    body: "Expanding solar market with high standards for grid compliance and performance reporting. Skyfri's PPC and monitoring stack is purpose-built for this environment.",
  },
  {
    region: "Germany",
    flag: "🇩🇪",
    body: "One of Europe's most demanding energy markets. Strict regulatory requirements, high grid complexity and a customer base that expects precision.",
  },
  {
    region: "United States",
    flag: "🇺🇸",
    body: "Growing presence across the US solar market, with operations anchored out of Colorado Springs. FCC-certified hardware. Ready to scale.",
  },
];

const segments = [
  { title: "Independent Power Producers", body: "Asset owners who need reliable monitoring and reporting without depending on a third-party cloud platform." },
  { title: "O&M Providers", body: "Operational teams who need real-time data at the inverter and string level to respond faster and reduce truck rolls." },
  { title: "Project Developers", body: "Teams bringing new assets online who need IEC-compliant performance testing and bankable reporting from day one." },
  { title: "Asset Managers", body: "Portfolio managers overseeing multiple sites across geographies who need a unified view and consistent data standards." },
];

// Placeholder logos replace src values with actual customer logo files
const logos = [
  { name: "Dominion Energy", src: "/logo-dominion-energy.png" },
  { name: "Pareto Alternative Investments", src: "/logo-pareto.png" },
  { name: "Hafslund", src: "/logo-hafslund.png" },
  { name: "Innlandet Fornybar", src: "/logo-innlandet.png" },
  { name: "Sun Tribe", src: "/logo-suntribe.png" },
  { name: "Wise Energy", src: "/logo-wise.png" },
];

export default function CustomersPage() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-8 md:px-16 grid-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(29,107,255,0.10) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="animate-fade-up text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-6">
            Skyfri · Customers
          </p>
          <h1 className="animate-fade-up delay-100 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
            <span className="text-white">Trusted by</span>
            <br />
            <span className="gradient-text">solar professionals</span>
            <br />
            <span className="text-white">worldwide.</span>
          </h1>
          <p className="animate-fade-up delay-200 text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            Over 100 sites running live across Europe and the United States. Real operators, real assets, real conditions and hardware that has never flinched.
          </p>
        </div>
      </section>

      {/* STATS */}
      <div className="border-y border-blue-500/10" style={{ background: "rgba(10,18,40,0.8)" }}>
        <div className="max-w-5xl mx-auto px-8 py-8 flex flex-wrap justify-around gap-6">
          {stats.map(({ n, l }) => (
            <div key={l} className="text-center">
              <p className="text-3xl font-bold text-white font-mono">{n}</p>
              <p className="text-white/30 text-xs tracking-widest uppercase mt-1">{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CUSTOMER LOGOS */}
      <section className="py-24 px-8 md:px-16 border-b border-blue-500/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-4">Our Customers</p>
          <h2 className="text-3xl font-bold text-white mb-12">Companies that trust Skyfri.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className={`rounded-2xl h-24 flex items-center justify-center border transition-all px-6 ${
                  logo.src
                    ? "bg-white border-white/10 hover:border-white/30"
                    : "card-glass border-blue-500/10 hover:border-blue-500/30"
                }`}
              >
                {logo.src ? (
                  <Image src={logo.src} alt={logo.name} width={160} height={56} className="h-10 w-auto object-contain" />
                ) : (
                  <span className="text-white/15 text-xs tracking-widest uppercase font-mono">{logo.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-4">Who We Serve</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Built for the people who run solar.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {segments.map((s) => (
              <div key={s.title} className="card-glass rounded-2xl p-8 hover:border-blue-500/30 transition-all">
                <h3 className="text-white font-semibold text-lg mb-3">{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETS */}
      <section className="py-24 px-8 md:px-16 border-t border-blue-500/10" style={{ background: "rgba(10,18,40,0.5)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-4">Markets</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Where we operate.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {markets.map((m) => (
              <div key={m.region} className="card-glass rounded-2xl p-8 hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{m.flag}</span>
                  <h3 className="text-white font-semibold text-lg">{m.region}</h3>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 md:px-16 border-t border-blue-500/10" style={{ background: "rgba(10,18,40,0.7)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-6">Join Them</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to put Skyfri to work?
          </h2>
          <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you operate one site or a hundred, we have the hardware and the platform to give you full visibility and control. Reach out and let's talk.
          </p>
          <a
            href="mailto:sales@skyfri.com"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl"
            style={{ background: "linear-gradient(135deg, #1d6bff, #0ea5e9)", boxShadow: "0 0 40px rgba(29,107,255,0.3)" }}
          >
            sales@skyfri.com
          </a>
          <p className="text-white/20 text-xs mt-6 tracking-widest uppercase">Oslo, Norway · skyfri.com</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-blue-500/10 px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{ background: "rgba(5,10,26,0.9)" }}>
        <div className="flex items-center gap-3">
          <Image src="/skyfri-logo-white.png" alt="Skyfri" width={72} height={24} className="h-5 w-auto opacity-25" />
          <span className="text-white/20 text-xs tracking-widest uppercase">© {new Date().getFullYear()} Skyfri Group AS</span>
        </div>
        <p className="text-white/10 text-xs font-mono">SSI V04 Micro · Hardware-First Solar Intelligence</p>
      </footer>
    </div>
  );
}

import Nav from "@/components/Nav";
import Image from "next/image";

const services = [
  {
    tag: "Monitoring",
    title: "Solar PV Monitoring",
    body: "Real-time visibility at every level plant, inverter, and string with integrated weather station data for full context. Know exactly what your assets are doing, at all times, from anywhere.",
    features: [
      "Plant, inverter & string-level monitoring",
      "Weather station integration",
      "Real-time alerts and anomaly detection",
      "Multi-site portfolio overview",
    ],
  },
  {
    tag: "Grid Integration",
    title: "Power Plant Controller",
    body: "Advanced grid integration through our Power Plant Controller. Curtailment, reactive power, frequency response the V04 and our platform handle it automatically.",
    features: [
      "Power Plant Controller (PPC)",
      "Grid compliance and curtailment",
      "Reactive power & frequency response",
    ],
  },
  {
    tag: "Performance",
    title: "Performance Testing",
    body: "IEC 61724-3 compliant performance testing with bank-grade reporting. Whether you are acquiring an asset, refinancing, or benchmarking your fleet we give you numbers you can stand behind.",
    features: [
      "IEC 61724-3 compliant methodology",
      "Bank-grade reporting standards",
      "Pre-acquisition & refinancing testing",
      "Independent third-party assessment",
    ],
  },
];

const regions = ["Norway", "Sweden", "Germany", "United States"];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/services-hero.jpg"
          alt="Skyfri team on solar site"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,10,26,0.35) 0%, rgba(5,10,26,0.75) 60%, rgba(5,10,26,0.95) 100%)" }} />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-16 pb-20 text-center">
          <h1 className="animate-fade-up text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            <span className="text-white">Monitor. Control.</span>
            <br />
            <span className="text-white">Quality Assurance.</span>
          </h1>

          {/* Region strip */}
          <div className="animate-fade-up delay-300 flex flex-wrap justify-center gap-3 mt-10">
            {regions.map((r) => (
              <span key={r} className="text-[10px] tracking-widest uppercase text-blue-400/70 border border-blue-500/20 px-3 py-1.5 rounded-full font-mono">
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-8 md:px-16 border-t border-blue-500/10">
        <div className="max-w-6xl mx-auto space-y-6">
          {services.map((s, i) => (
            <div key={s.tag} className="card-glass rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start hover:border-blue-500/30 transition-all">
              {/* Left */}
              <div>
                <p className="text-blue-400 text-xs tracking-widest uppercase font-mono mb-4">{s.tag}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">{s.title}</h2>
                <p className="text-white/40 leading-relaxed">{s.body}</p>
              </div>
              {/* Right feature list */}
              <div className="space-y-3">
                {s.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-white/60 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 md:px-16 border-t border-blue-500/10" style={{ background: "rgba(10,18,40,0.7)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-6">Get Started</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to work together?
          </h2>
          <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you need monitoring, grid integration, or performance testing, we have been doing this for over a decade. Reach out and let's talk.
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

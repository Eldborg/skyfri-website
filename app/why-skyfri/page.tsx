import Nav from "@/components/Nav";
import Image from "next/image";

const advantages = [
  {
    title: "Deploy in minutes, not weeks.",
    body: "Traditional monitoring installations require days of configuration, custom cabling, and specialist engineers on site. The SSI V04 snaps onto a DIN rail, connects over RS-485 and Ethernet, and is live in under an hour. One device. One connection. Immediate visibility.",
  },
  {
    title: "No cloud. No compromise.",
    body: "Every competitor in this space routes your operational data through their servers. That means latency, dependency, and a third party sitting between you and your own assets. Skyfri processes everything at the edge, on-premise, with zero cloud requirement. Your data is yours.",
  },
  {
    title: "Protocol agnostic from day one.",
    body: "We speak Modbus, SCADA, and IEC 61850 natively across dual galvanically isolated RS-485 ports. Every inverter, every meter, every sensor — from every manufacturer — connects without custom firmware or integration work. Competitors lock you in. We open you up.",
  },
  {
    title: "FCC certified. Shipment-ready.",
    body: "We did not cut corners on compliance. Every unit ships with full FCC Part 15B certification, tested by an accredited third party. No waiting. No uncertainty. The hardware is certified, production-ready, and deployable the moment it arrives on site.",
  },
  {
    title: "AI-ready. Future-proof.",
    body: "The architecture was built for what is coming, not just what exists today. As machine learning moves to the edge, the SSI V04 is already positioned to run inference locally without a hardware upgrade. We are not catching up to the future. We designed for it.",
  },
];

const credentials = [
  { n: "100MW+", l: "Solar built by our founders" },
  { n: "$10M+", l: "Invested in R&D" },
  { n: "100+", l: "Devices live globally" },
  { n: "10+", l: "Years of domain expertise" },
];

const markets = [
  {
    title: "Commercial & Industrial (C&I)",
    body: "The C&I solar market is the fastest-growing segment in the energy transition. Rooftops, carports, behind-the-meter storage — complex, distributed, and completely underserved by legacy SCADA vendors. Skyfri was built exactly for this.",
  },
  {
    title: "Utility Ground Mount",
    body: "Large-scale ground-mounted solar is scaling faster than the grid can absorb it. Operators need hardware that is fast to deploy, protocol-flexible, and grid-compliant from day one. The SSI family is built to scale from a single inverter to an entire utility farm.",
  },
  {
    title: "Battery Storage Integration",
    body: "Solar and batteries are increasingly deployed together. The intelligence layer has to speak to both simultaneously, in real time, without a cloud round-trip. That is not a feature we are adding. It is how Skyfri was designed from the start.",
  },
  {
    title: "Decentralised Energy Networks",
    body: "The energy system is fragmenting. Generation is moving to the edge. Control is moving to the asset. The centralised, cloud-first model of the last decade is being replaced. Skyfri is the hardware and software stack for the decentralised energy future.",
  },
];

export default function WhySkyfriPage() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-8 md:px-16 grid-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(29,107,255,0.10) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="animate-fade-up text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            <span className="text-white">Built by the people</span>
            <br />
            <span className="gradient-text">who know what</span>
            <br />
            <span className="text-white">is broken.</span>
          </h1>
        </div>
      </section>

      {/* ORIGIN */}
      <section className="py-24 px-8 md:px-16 border-t border-blue-500/10" style={{ background: "rgba(10,18,40,0.6)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-6">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              Born out of frustration.<br />
              <span className="gradient-text">Built with conviction.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-6">
              Skyfri was built by a team that had already done the hard work. Our team has personally built and operated more than 100MW of solar power plants across the world, sat on the boards of listed energy companies, and been in the field for decades, not just reading about it.
            </p>
            <p className="text-white/50 text-lg leading-relaxed mb-6">
              And what Skyfri found, everywhere it looked, was the same problem. Monitoring platforms that were expensive, slow to deploy, cloud-dependent, and built for the projects of yesterday. Hardware that required specialists to install and weeks to configure.
            </p>
            <p className="text-white/50 text-lg leading-relaxed">
              So Skyfri was built not as a side project, not as an iteration on someone else's idea, but as a fundamental rethink of what the intelligence layer for solar and battery assets should look like, from the hardware up.
            </p>
          </div>

          {/* Credential stats */}
          <div className="grid grid-cols-2 gap-4">
            {credentials.map(({ n, l }) => (
              <div key={l} className="card-glass rounded-2xl p-8 text-center border border-blue-500/15 hover:border-blue-500/30 transition-all">
                <p className="text-4xl font-bold text-white font-mono mb-2">{n}</p>
                <p className="text-white/30 text-xs tracking-widest uppercase">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BETTER */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-4">The Difference</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Why Skyfri SSI wins in the field.
            </h2>
            <p className="text-white/40 text-lg mt-4 leading-relaxed">
              We did not build a marginally better version of what already exists. We started from first principles and built the hardware and software stack that the industry actually needs.
            </p>
          </div>
          <div className="space-y-4">
            {advantages.map((a, i) => (
              <div key={a.title} className="card-glass rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start hover:border-blue-500/30 transition-all">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-blue-500/30 flex items-center justify-center">
                  <span className="text-blue-400 text-xs font-mono font-bold">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xl mb-3">{a.title}</h3>
                  <p className="text-white/40 leading-relaxed">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE MARKET */}
      <section className="py-24 px-8 md:px-16 border-t border-blue-500/10" style={{ background: "rgba(10,18,40,0.5)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-4">The Moment</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              The market is moving.<br />
              <span className="gradient-text">We are already there.</span>
            </h2>
            <p className="text-white/40 text-lg mt-4 leading-relaxed">
              C&I solar and utility-scale ground mount are the two fastest-growing segments in the global energy transition. Both are highly distributed, operationally complex, and severely underserved by the tools that exist today. This is exactly the market Skyfri was designed for.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {markets.map((m) => (
              <div key={m.title} className="card-glass rounded-2xl p-8 hover:border-blue-500/30 transition-all">
                <h3 className="text-white font-semibold text-lg mb-3">{m.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACKED BY */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="card-glass rounded-2xl p-10 md:p-16 border border-blue-500/20 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 80% at 100% 50%, rgba(29,107,255,0.07) 0%, transparent 70%)" }} />
            <div className="relative z-10 max-w-3xl">
              <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-6">Backed By</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                The investors who bet on<br />
                <span className="gradient-text">the energy transition.</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-6">
                Skyfri is backed by some of the most ambitious and forward-thinking climate investors in the world. Investors who understand that the energy transition is not just an environmental necessity — it is the largest capital opportunity of the next fifty years — and that the intelligence layer sitting at the heart of every solar and battery asset is one of the most critical pieces of infrastructure in that transition.
              </p>
              <p className="text-white/50 text-lg leading-relaxed">
                They did not invest in a product. They invested in a team with the domain knowledge, the technology, and the conviction to change how an entire industry operates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-32 px-8 md:px-16 border-t border-blue-500/10" style={{ background: "rgba(10,18,40,0.6)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-6">The Vision</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            We are not here to improve<br />
            <span className="gradient-text">the category. We are here<br />to replace it.</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            The way solar and battery assets are deployed, monitored, and controlled today is fundamentally broken. It is slow. It is expensive. It is fragile. It depends on centralised infrastructure that was never designed for a decentralised energy world. And it leaves the people who actually operate these assets — the engineers, the O&M teams, the asset managers — without the real-time intelligence they need to do their jobs properly.
          </p>
          <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            Skyfri's vision is simple and total: a world where every solar and battery asset, from a 50kW rooftop to a 500MW utility farm, has an intelligent device at its core that monitors, controls, protects, and optimises it continuously, locally, and autonomously. No cloud dependency. No data sovereignty issues. No vendor lock-in. Just clean, real-time intelligence at every asset, everywhere on earth.
          </p>
          <p className="text-white/70 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            That is what we are building. And with over 100 units already live in the field, $10 million in R&D behind us, and the best team in the industry working on it — we are just getting started.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 md:px-16 border-t border-blue-500/10" style={{ background: "rgba(10,18,40,0.7)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-6">Work With Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Be part of what comes next.</h2>
          <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you are an operator, a developer, an investor, or an engineer — if you believe the energy transition deserves better tools, we want to hear from you.
          </p>
          <a
            href="mailto:sales@skyfri.com"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl"
            style={{ background: "linear-gradient(135deg, #1d6bff, #0ea5e9)", boxShadow: "0 0 40px rgba(29,107,255,0.3)" }}
          >
            sales@skyfri.com
          </a>
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

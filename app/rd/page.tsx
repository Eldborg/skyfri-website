import Nav from "@/components/Nav";
import Image from "next/image";

const v04StandardSpecs = [
  { label: "Power Supply", value: "DC 24V" },
  { label: "Connectivity", value: "RJ45 Ethernet + 4G/LTE" },
  { label: "Serial Ports", value: "RS-485 × 4 (ISO)" },
  { label: "Protocols", value: "Modbus, SCADA, IEC 61850" },
  { label: "Processing", value: "Edge AI inference ready" },
  { label: "Storage", value: "Local data buffering" },
  { label: "Form Factor", value: "DIN-Rail Mount" },
  { label: "Certification", value: "FCC · CE · IEC compliant" },
];

const ambitions = [
  {
    title: "More ports. More assets. One device.",
    body: "The V04 Standard takes everything proven in the Micro and scales it. Four isolated RS-485 ports. Built-in 4G/LTE for sites without fixed connectivity. The same DIN-rail form factor more capability, same footprint.",
  },
  {
    title: "IEC 61850 native.",
    body: "The energy transition runs on IEC 61850. The V04 Standard speaks it natively enabling seamless integration with grid-connected assets, substations, and utility-scale infrastructure without custom adapters or middleware.",
  },
  {
    title: "Offline-first intelligence.",
    body: "Full local data buffering means zero data loss even when connectivity drops. The device keeps logging, keeps processing, and syncs automatically when the connection returns. The plant never stops.",
  },
  {
    title: "Ready for inference at the edge.",
    body: "The Standard is architected to run machine learning models directly on-device. Fault prediction. Yield forecasting. Anomaly detection all running locally, with no cloud round-trip required.",
  },
];

export default function RDPage() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-8 md:px-16 grid-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(29,107,255,0.12) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="animate-fade-up text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-6">
            Skyfri · Research & Development
          </p>
          <h1 className="animate-fade-up delay-100 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
            <span className="text-white">What comes</span>
            <br />
            <span className="gradient-text">after the Micro.</span>
          </h1>
          <p className="animate-fade-up delay-200 text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            The SSI V04 Micro was the beginning. We are building a full hardware family each generation more capable than the last. Here is what is coming next.
          </p>
        </div>
      </section>

      {/* V04 STANDARD INTRO */}
      <section className="py-24 px-8 md:px-16 border-t border-blue-500/10" style={{ background: "rgba(10,18,40,0.6)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-4">Coming Next</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              SSI V04 Standard
            </h2>
            <p className="text-white/40 text-lg leading-relaxed">
              Built on the same proven architecture as the Micro, the V04 Standard is designed for larger, more complex solar and battery installations. More ports, more protocols, more intelligence in the same industrial form factor the market already trusts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Spec table */}
            <div className="card-glass rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-blue-500/10 flex items-center justify-between">
                <span className="text-blue-400 text-xs tracking-widest uppercase font-mono">Preliminary Specifications</span>
                <span className="text-white/20 text-xs font-mono border border-blue-500/20 px-2 py-0.5 rounded">Subject to change</span>
              </div>
              {v04StandardSpecs.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex items-center justify-between px-6 py-4 ${i < v04StandardSpecs.length - 1 ? "border-b border-blue-500/10" : ""}`}
                >
                  <span className="text-white/40 text-sm">{s.label}</span>
                  <span className="text-white font-mono text-sm font-medium">{s.value}</span>
                </div>
              ))}
            </div>

            {/* Status card */}
            <div className="space-y-5">
              <div className="card-glass rounded-2xl p-6 border border-blue-500/20">
                <p className="text-blue-400 text-xs tracking-widest uppercase font-mono mb-3">Development Status</p>
                <p className="text-3xl font-bold text-white mb-2">In Development</p>
                <p className="text-white/30 text-sm">Active R&D underway. Target availability to be announced.</p>
              </div>
              <div className="card-glass rounded-2xl p-6">
                <p className="text-blue-400 text-xs tracking-widest uppercase font-mono mb-3">Built On</p>
                <p className="text-white text-sm leading-relaxed">
                  The V04 Standard inherits the full hardware lineage of the Micro FCC-proven architecture, galvanically isolated RS-485, and edge-native processing extended for utility-scale deployments.
                </p>
              </div>
              <div className="card-glass rounded-2xl p-6">
                <p className="text-blue-400 text-xs tracking-widest uppercase font-mono mb-3">Target Use Cases</p>
                <div className="space-y-2 mt-1">
                  {["Utility-scale solar farms", "Battery storage integration", "Grid-connected hybrid assets", "Remote sites without fixed connectivity"].map((u) => (
                    <div key={u} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      <span className="text-white/50 text-sm">{u}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMBITIONS */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-4">What It Will Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Designed for what the industry is becoming.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ambitions.map((a) => (
              <div key={a.title} className="card-glass rounded-2xl p-8 hover:border-blue-500/30 transition-all">
                <h3 className="text-white font-semibold text-lg mb-3">{a.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V07 TEASER */}
      <section className="py-24 px-8 md:px-16 border-t border-blue-500/10" style={{ background: "rgba(10,18,40,0.5)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="card-glass rounded-2xl p-10 md:p-16 border border-blue-500/20 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(29,107,255,0.08) 0%, transparent 70%)" }} />

            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-blue-400 text-xs tracking-widest uppercase font-mono border border-blue-500/30 px-3 py-1 rounded-full">Further Ahead</span>
                <span className="text-white/20 text-xs font-mono">Confidential Roadmap</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                SSI V07.<br />
                <span className="gradient-text">A different category entirely.</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-6">
                The V07 is not an incremental upgrade. It is a rethink of what a solar intelligence device can be. Designed from first principles for a world where every asset generates data, every decision is AI-assisted, and the grid is a living system that needs to be managed in real time.
              </p>
              <p className="text-white/30 text-base leading-relaxed">
                We are not ready to talk about specifications. What we can say is this: everything we have learned from the Micro, the Standard, and years of real-world deployment has gone into its design. When it ships, it will redefine what operators expect from edge hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-32 px-8 md:px-16 border-t border-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-6">The Long Game</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            The vision is not a product.<br />
            <span className="gradient-text">It is an industry transformed.</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            Solar is the largest energy transition in human history. Trillions of dollars of assets. Millions of sites. Decades of operational complexity. And today, most of it is still managed with software that was not built for it, running on hardware that was never designed for the edge.
          </p>
          <p className="text-white/40 text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            Skyfri's endgame is a world where every solar and battery asset from a rooftop in Norway to a utility farm in Texas has a device at its core that monitors, controls, protects, and optimises it autonomously. No cloud dependency. No data leaving the site. No single point of failure.
          </p>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            The heart of solar in every asset, on every grid, in every market. That is what we are building toward. And we are just getting started.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 md:px-16 border-t border-blue-500/10" style={{ background: "rgba(10,18,40,0.7)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-6">Stay Ahead</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Interested in what&apos;s coming?</h2>
          <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            If you are an operator, developer, or investor who wants to be close to the hardware roadmap, reach out directly.
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

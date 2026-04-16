import Nav from "@/components/Nav";
import Image from "next/image";

export default function PressReleasePage() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* HERO IMAGE */}
      <div className="relative w-full h-[55vh] min-h-[400px] overflow-hidden">
        <Image
          src="/news-hero.jpg"
          alt="Skyfri SSI V04 Micro press release"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,10,26,0.3) 0%, rgba(5,10,26,0.85) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-12 max-w-4xl mx-auto w-full">
          <span className="text-[10px] tracking-widest uppercase text-blue-400 border border-blue-500/30 px-3 py-1.5 rounded-full font-mono" style={{ background: "rgba(5,10,26,0.7)" }}>
            Press Release
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mt-4 max-w-3xl">
            Skyfri launches SSI V04 Micro — the world's first all-in-one solar monitoring gateway, seven years in the making.
          </h1>
          <p className="text-white/40 text-sm font-mono mt-4">April 2026 · Source: Skyfri</p>
        </div>
      </div>

      {/* ARTICLE BODY */}
      <article className="max-w-3xl mx-auto px-8 md:px-16 py-20">

        {/* Lead */}
        <p className="text-white text-lg md:text-xl font-semibold leading-relaxed mb-10 border-l-2 border-blue-500 pl-6">
          Skyfri Corp, the US commercial arm of Norwegian solar technology group Skyfri, has announced the commercial launch of the SSI V04 Micro — a purpose-built industrial IoT gateway that consolidates an entire solar monitoring cabinet into a single DIN-rail device the size of a Wi-Fi router. The product carries both CE and FCC certification, is IEC 61724-1 ready, and is available for immediate deployment across the United States and Europe.
        </p>

        {/* Quote */}
        <blockquote className="card-glass rounded-2xl p-8 mb-10 border-l-4 border-blue-500">
          <p className="text-white/70 text-lg leading-relaxed italic mb-4">
            "We set out seven years ago to solve a problem the industry had simply accepted: solar monitoring systems that require tens of thousands of dollars in integration labor, proprietary components, and still don't produce bankable compliance data. The V04 Micro changes that equation entirely. One device. One installation. IEC 61724-1 compliant data from day one. We have shipped it into two regulatory markets, proven it with a 140-unit utility pipeline, and we are just getting started."
          </p>
          <p className="text-blue-400 text-sm font-mono">Greg Linder, CEO of Skyfri Corp</p>
        </blockquote>

        {/* Body paragraphs */}
        <div className="space-y-6 text-white/60 leading-relaxed text-base">
          <p>
            The SSI V04 Micro connects every legacy solar asset — inverters, sensors, energy meters, and weather stations — to cloud monitoring platforms through a single certified device. It introduces three industry firsts: auto-polarity RS-485 wiring that eliminates a major source of installation errors, Virtual Serial Port forwarding for full remote device configuration, and an integrated power supervisor with no commercial equivalent anywhere in the solar monitoring market. Competing devices from Moxa, Advantech, and Campbell Scientific offer none of these capabilities in a solar-specific integrated solution.
          </p>
          <p>
            Solar is the fastest-growing energy source on the planet, with over 300 GW of new capacity installed globally in 2024 alone — growing 15-20% per year. Every site must be monitored, yet no single certified device had integrated the full monitoring stack until now. System integrators have been forced to assemble the solution themselves, at a cost frequently exceeding $40,000 per site in integration labor. The SSI V04 Micro eliminates that entirely at a list price of $1,200 per unit.
          </p>
          <p>
            The product is already in production deployment. SSI is active across 45+ projects and monitoring 34+ MW of grid-connected solar assets in the United States and Norway. An active pipeline with Dominion Energy — one of the largest US electric utilities — represents 140+ units. The CE certification opens immediate access to a European market installing 60-70 GW annually. Skyfri's five-year target is 1,000 to 10,000 monitored sites, representing $30-50 million in hardware revenue before the recurring SaaS layer.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-500/10 my-12" />

        {/* Contacts */}
        <div className="mb-10">
          <p className="text-white font-semibold text-sm tracking-widest uppercase mb-4 font-mono">Contacts</p>
          <div className="space-y-2 text-white/50 text-sm">
            <p>Greg Linder, CEO Skyfri Corp — <a href="mailto:greg@skyfri.com" className="text-blue-400 hover:text-blue-300 transition-colors">greg@skyfri.com</a></p>
            <p>Christophe Schaillee, Chairman Skyfri Group — <a href="tel:+33678638533" className="text-blue-400 hover:text-blue-300 transition-colors">+33 6 78 63 85 33</a></p>
          </div>
        </div>

        {/* About */}
        <div className="card-glass rounded-2xl p-8">
          <p className="text-white font-semibold text-sm tracking-widest uppercase mb-4 font-mono">About Skyfri</p>
          <p className="text-white/50 text-sm leading-relaxed mb-3">
            Skyfri Group delivers complete end-to-end solar asset solutions through its technology platform that takes care of solar assets throughout their life-cycle.
          </p>
          <p className="text-white/50 text-sm leading-relaxed">
            Skyfri is a Norwegian cleantech firm headquartered in Oslo. Its US commercial arm, Skyfri Corp, is based in Richmond, Virginia. The Skyfri Intelligence platform monitors solar and BESS assets across North America, Europe, and beyond. The SSI hardware product line — invented and engineered by Greg Linder over seven years — is purpose-built for the commercial and utility-scale solar monitoring market, and is now CE and FCC certified for global sale.
          </p>
          <p className="mt-4">
            <a href="https://www.skyfri.com" className="text-blue-400 text-sm hover:text-blue-300 transition-colors font-mono">www.skyfri.com →</a>
          </p>
        </div>

      </article>

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

'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/why-skyfri", label: "Why Skyfri" },
  { href: "/product", label: "Product" },
  { href: "/services", label: "Services" },
  { href: "/customers", label: "Customers" },
  { href: "/rd", label: "R&D" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-blue-500/10 backdrop-blur-md"
        style={{ background: "rgba(5,10,26,0.85)" }}
      >
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/skyfri-logo-white.png"
            alt="Skyfri"
            width={110}
            height={34}
            className="h-8 w-auto"
            style={{ filter: "drop-shadow(0 0 8px rgba(29,107,255,0.5))" }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-white/40 hover:text-white text-xs tracking-widest uppercase transition-colors">
              {l.label}
            </Link>
          ))}
          <a
            href="https://app.skyfri.com"
            className="text-xs tracking-widest uppercase px-5 py-2.5 rounded-full border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 transition-all"
          >
            Login
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 rounded-full border border-white/20 items-center focus:outline-none"
          style={{ background: "rgba(255,255,255,0.07)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-4 h-[1.5px] bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-4 h-[1.5px] bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-4 h-[1.5px] bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-24 px-8 pb-12"
          style={{ background: "rgba(5,10,26,0.97)" }}
        >
          <div className="flex flex-col flex-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/50 hover:text-white text-sm tracking-widest uppercase font-mono py-4 border-b border-white/5 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <a
            href="https://app.skyfri.com"
            className="flex items-center justify-center px-7 py-3.5 rounded-full text-white text-xs tracking-widest uppercase font-mono transition-all border border-blue-500/40 hover:bg-blue-500/10"
            onClick={() => setOpen(false)}
          >
            Login
          </a>
        </div>
      )}
    </>
  );
}

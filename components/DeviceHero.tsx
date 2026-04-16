'use client';

export default function DeviceHero() {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[500px]">

      {/* Orbital rings */}
      <div className="absolute w-[420px] h-[420px] rounded-full border border-blue-500/10 animate-spin-slow" />
      <div className="absolute w-[520px] h-[520px] rounded-full border border-blue-500/5" style={{ animationDirection: 'reverse', animation: 'spin-slow 20s linear infinite reverse' }} />

      {/* Outer glow halo */}
      <div className="absolute w-[340px] h-[220px] rounded-2xl bg-blue-600/10 blur-3xl" />

      {/* Device wrapper — float + glow */}
      <div className="animate-float animate-glow relative" style={{ transformStyle: 'preserve-3d' }}>

        {/* Device body */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            width: 280,
            height: 190,
            background: 'linear-gradient(145deg, #f8faff 0%, #e8eeff 50%, #d0d8f8 100%)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.8), 0 4px 20px rgba(29,107,255,0.3), inset 0 1px 0 rgba(255,255,255,0.9)',
          }}
        >
          {/* Scan line */}
          <div className="scan-line" />

          {/* Top face — Skyfri mark on dark blue badge */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div style={{
              width: 90,
              height: 90,
              borderRadius: 16,
              background: '#0c1535',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
            }}>
              {/* Skyfri mark — 3 arms, bend faces inward, ends fan outward */}
              <svg width="58" height="58" viewBox="-50 -50 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke="white" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="-30,20 0,-13 30,20"/>
                  <polyline points="-30,20 0,-13 30,20" transform="rotate(120)"/>
                  <polyline points="-30,20 0,-13 30,20" transform="rotate(240)"/>
                </g>
              </svg>
            </div>
          </div>

          {/* Corner screws */}
          {[['12px','12px'],['12px','auto'],['auto','12px'],['auto','auto']].map(([t,r,b,l], i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full border border-gray-300/60 bg-gray-200/60"
              style={{ top: i < 2 ? '10px' : 'auto', bottom: i >= 2 ? '10px' : 'auto', left: i % 2 === 0 ? '10px' : 'auto', right: i % 2 !== 0 ? '10px' : 'auto' }}
            />
          ))}

          {/* Status LED */}
          <div className="absolute top-4 right-10 flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-blink shadow-lg shadow-green-400/60" />
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-blink delay-300 shadow-lg shadow-blue-400/60" />
          </div>

          {/* Surface reflection */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)' }}
          />
        </div>

        {/* Bottom edge — ports */}
        <div
          className="relative mx-4 rounded-b-sm flex items-center gap-1.5 px-3 py-2"
          style={{ background: 'linear-gradient(to bottom, #b0b8d0, #8a92a8)', height: 28 }}
        >
          {/* RJ45 */}
          <div className="w-7 h-5 rounded-sm bg-gray-700 border border-gray-600 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-px">
              {[...Array(8)].map((_,i) => <div key={i} className="w-px h-2 bg-yellow-400/70" />)}
            </div>
          </div>
          {/* Terminal blocks */}
          <div className="flex gap-0.5">
            {['#22c55e','#22c55e','#22c55e','#3b82f6','#3b82f6'].map((c,i) => (
              <div key={i} className="w-3 h-5 rounded-sm border border-gray-600" style={{ background: c, opacity: 0.9 }} />
            ))}
          </div>
          {/* More ports */}
          <div className="flex gap-0.5 ml-1">
            {[...Array(6)].map((_,i) => (
              <div key={i} className="w-2 h-4 rounded-sm bg-gray-600 border border-gray-500" />
            ))}
          </div>
        </div>

        {/* Side shadow */}
        <div
          className="absolute top-2 -right-3 rounded-r-xl"
          style={{ width: 12, height: 190, background: 'linear-gradient(to right, #8a92b0, #6a728a)', opacity: 0.9 }}
        />
        <div
          className="absolute -bottom-3 left-4 right-2 rounded-b-xl"
          style={{ height: 14, background: 'linear-gradient(to bottom, #8a92b0, #4a5270)', opacity: 0.8 }}
        />
      </div>

      {/* Data labels floating around device */}
      {[
        { label: 'DC 24V', sub: 'Power Input', x: '-180px', y: '-60px' },
        { label: 'RS-485', sub: 'Dual Port', x: '160px', y: '-40px' },
        { label: 'RJ45', sub: 'Ethernet', x: '-170px', y: '60px' },
        { label: 'FCC', sub: 'Certified', x: '150px', y: '70px' },
      ].map(({ label, sub, x, y }) => (
        <div
          key={label}
          className="absolute card-glass rounded-lg px-3 py-2 text-center"
          style={{ transform: `translate(${x}, ${y})` }}
        >
          <p className="text-blue-400 text-xs font-mono font-semibold">{label}</p>
          <p className="text-white/40 text-[10px]">{sub}</p>
        </div>
      ))}
    </div>
  );
}

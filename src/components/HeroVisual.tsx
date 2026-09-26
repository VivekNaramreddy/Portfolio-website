export default function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none" aria-hidden>
      <svg viewBox="0 0 480 480" className="w-full max-w-[440px] opacity-90" fill="none">
        {/* Outer ring */}
        <circle cx="240" cy="240" r="200" stroke="#222220" strokeWidth="1" />
        <circle cx="240" cy="240" r="148" stroke="#2a2a28" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="240" cy="240" r="90" stroke="#d4955a22" strokeWidth="1" />

        {/* Central node */}
        <circle cx="240" cy="240" r="28" fill="#d4955a14" stroke="#d4955a" strokeWidth="1.5" />
        <circle cx="240" cy="240" r="8" fill="#d4955a" />

        {/* Satellite nodes */}
        {[
          { x: 240, y: 92, label: 'Strategy', r: 14 },
          { x: 380, y: 170, label: 'Analytics', r: 10 },
          { x: 370, y: 318, label: 'Technology', r: 12 },
          { x: 240, y: 390, label: 'AI Tools', r: 10 },
          { x: 110, y: 318, label: 'Content', r: 8 },
          { x: 100, y: 170, label: 'Product', r: 11 },
        ].map(({ x, y, r }, i) => (
          <g key={i}>
            <line x1="240" y1="240" x2={x} y2={y} stroke="#2e2e2b" strokeWidth="1" />
            <circle cx={x} cy={y} r={r + 8} fill="#d4955a08" stroke="#d4955a22" strokeWidth="1" />
            <circle cx={x} cy={y} r={r} fill="#1a1a18" stroke="#d4955a55" strokeWidth="1.2" />
            <circle cx={x} cy={y} r={r * 0.35} fill="#d4955a" opacity="0.7" />
          </g>
        ))}

        {/* Secondary connections */}
        <line x1="240" y1="92" x2="380" y2="170" stroke="#2a2a28" strokeWidth="0.8" />
        <line x1="380" y1="170" x2="370" y2="318" stroke="#2a2a28" strokeWidth="0.8" />
        <line x1="370" y1="318" x2="240" y2="390" stroke="#2a2a28" strokeWidth="0.8" />
        <line x1="240" y1="390" x2="100" y2="318" stroke="#2a2a28" strokeWidth="0.8" />
        <line x1="100" y1="318" x2="100" y2="170" stroke="#2a2a28" strokeWidth="0.8" />
        <line x1="100" y1="170" x2="240" y2="92" stroke="#2a2a28" strokeWidth="0.8" />

        {/* Accent arc */}
        <path
          d="M 240 40 A 200 200 0 0 1 415 150"
          stroke="#d4955a"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M 240 440 A 200 200 0 0 1 65 330"
          stroke="#d4955a"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.25"
        />

        {/* Floating data points */}
        {[
          { x: 168, y: 156 }, { x: 320, y: 208 }, { x: 290, y: 340 },
          { x: 178, y: 310 }, { x: 340, y: 268 },
        ].map(({ x, y }, i) => (
          <circle key={i} cx={x} cy={y} r="2.5" fill="#d4955a" opacity="0.3" />
        ))}
      </svg>
    </div>
  )
}

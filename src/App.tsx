import { useState, useEffect } from 'react'

// ── Icons ──────────────────────────────────────────────────────────────────

function IconGithub({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function IconLinkedIn({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 8h10M8.5 3.5L13 8l-4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}


function IconDownload({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 2v8M5 7l3 3 3-3M2 12v1a1 1 0 001 1h10a1 1 0 001-1v-1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconEmail({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" strokeLinecap="round" />
    </svg>
  )
}

// ── Hero Visual ────────────────────────────────────────────────────────────

function HeroVisual() {
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

// ── Navigation ─────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(12,12,11,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #1e1e1c' : '1px solid transparent',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          className="font-display text-lg font-medium tracking-tight text-[#ede9e3] hover:text-[#d4955a] transition-colors duration-300"
        >
          Vivek Naramreddy
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-[#7a7a74] hover:text-[#ede9e3] transition-colors duration-200 tracking-wide"
              style={l === 'About' ? { boxShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 4px 0px' } : undefined}
            >
              {l}
            </a>
          ))}
          <a
            href="#resume"
            className="text-sm text-[#7a7a74] hover:text-[#ede9e3] transition-colors duration-200 tracking-wide"
          >
            Resume
          </a>
        </div>

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4a4a46] hover:text-[#ede9e3] transition-colors duration-200"
            aria-label="GitHub"
          >
            <IconGithub size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4a4a46] hover:text-[#ede9e3] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <IconLinkedIn size={18} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-[#ede9e3] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-[#ede9e3] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-[#ede9e3] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0c0c0b] border-t border-[#1e1e1c] px-6 py-6 flex flex-col gap-5">
          {[...links, 'Resume'].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-base text-[#ede9e3] tracking-wide"
            >
              {l}
            </a>
          ))}
          <div className="flex gap-4 pt-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#7a7a74]"><IconGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#7a7a74]"><IconLinkedIn /></a>
          </div>
        </div>
      )}
    </header>
  )
}

// ── Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex items-center pt-16 pb-24 px-6 lg:px-10 max-w-6xl mx-auto"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-8 items-center">
        {/* Text */}
        <div className="space-y-8">
          <div className="space-y-2">
            <p
              className="font-mono-label text-xs tracking-[0.2em] text-[#d4955a] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              MBA · Marketing · Technology
            </p>
          </div>
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-light text-[#ede9e3]"
            style={{ fontFamily: "'Fraunces', Georgia, serif", letterSpacing: '-0.02em' }}
          >
            Marketing,
            <br />
            Technology
            <span className="text-[#d4955a]"> &</span>
            <br />
            <em className="not-italic">Ideas</em> — Built
            <br />
            Into Real Projects.
          </h1>
          <p className="text-base md:text-lg text-[#7a7a74] leading-relaxed max-w-lg font-light">
            I combine marketing strategy, analytics, technology, and AI-assisted
            development to solve practical problems — from automating job searches
            to building audience intelligence tools.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#d4955a] text-[#0c0c0b] text-sm font-medium tracking-wide hover:bg-[#c8834a] transition-colors duration-200"
            >
              View My Work
              <IconArrow />
            </a>
            <a
              href="#resume"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#2e2e2b] text-[#ede9e3] text-sm font-medium tracking-wide hover:border-[#4a4a46] hover:bg-[#131312] transition-all duration-200"
            >
              <IconDownload />
              Download Resume
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="hidden lg:flex items-center justify-center h-[440px]">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}

// ── Divider ────────────────────────────────────────────────────────────────

function SectionDivider() {
  return <div className="max-w-6xl mx-auto px-6 lg:px-10"><div className="h-px bg-[#1e1e1c]" /></div>
}

// ── About ──────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-28 px-6 lg:px-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-20 items-start">
        {/* Label */}
        <div className="lg:pt-1.5">
          <p
            className="text-xs tracking-[0.2em] text-[#4a4a46] uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            About
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          <div className="space-y-6">
            <h2
              className="font-display text-3xl md:text-4xl font-light text-[#ede9e3] leading-snug"
              style={{ fontFamily: "'Fraunces', Georgia, serif", letterSpacing: '-0.015em' }}
            >
              I'm a marketer who builds things.
            </h2>
            <div className="space-y-4 text-[#7a7a74] leading-relaxed max-w-2xl">
              <p>
                Currently completing my MBA in Marketing & Digital Marketing, I spend my time at the
                intersection of strategy and execution — figuring out what the data says, then building
                tools to act on it faster. I use AI-assisted development not as a trend but as a practical
                lever for making ambitious ideas achievable as a solo builder.
              </p>
              <p>
                My work spans audience analytics, marketing automation, social-media strategy, and software
                tools that solve genuine friction points. I care about making things that are actually useful,
                not just things that look good in a slide deck.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Degree', value: 'MBA', sub: 'Marketing & Digital Marketing' },
              { label: 'Focus', value: 'Analytics + AI', sub: 'Data-driven decision making' },
              { label: 'Approach', value: 'Builder', sub: 'Strategy through execution' },
            ].map(({ label, value, sub }) => (
              <div key={label} className="border border-[#1e1e1c] rounded-2xl p-5 space-y-1 hover:border-[#2e2e2b] transition-colors duration-300">
                <p
                  className="text-xs tracking-widest text-[#4a4a46] uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {label}
                </p>
                <p className="text-[#ede9e3] font-medium">{value}</p>
                <p className="text-xs text-[#4a4a46]">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Projects ───────────────────────────────────────────────────────────────

// Dashboard mockup for the AI Job Application Assistant
function JobTrackerMockup() {
  const jobs = [
    { title: 'Senior Marketing Analyst', company: 'Google', status: 'Under Review', statusColor: '#d4955a', dot: '#d4955a' },
    { title: 'Digital Marketing Manager', company: 'Spotify', status: 'Approved', statusColor: '#6dab8e', dot: '#6dab8e' },
    { title: 'Brand Strategist', company: 'Nike', status: 'Applied', statusColor: '#6b8cba', dot: '#6b8cba' },
    { title: 'Growth Marketing Lead', company: 'Stripe', status: 'Rejected', statusColor: '#4a4a46', dot: '#3a3a36' },
    { title: 'Content Strategist', company: 'Airbnb', status: 'Pending Review', statusColor: '#a896c8', dot: '#a896c8' },
  ]
  return (
    <div
      className="w-full h-full flex flex-col select-none overflow-hidden"
      style={{ background: '#0a0a09', fontFamily: "'JetBrains Mono', monospace" }}
    >
      {/* Fake window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#1a1a18]" style={{ background: '#0f0f0e' }}>
        <div className="w-2.5 h-2.5 rounded-full bg-[#3a3a36]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#3a3a36]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#3a3a36]" />
        <span className="ml-3 text-[9px] text-[#3a3a36] tracking-wide">job-tracker — dashboard</span>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-28 flex-shrink-0 border-r border-[#1a1a18] p-3 flex flex-col gap-1" style={{ background: '#0d0d0c' }}>
          {['Dashboard', 'Search', 'Applications', 'Evaluate', 'Settings'].map((item, i) => (
            <div
              key={item}
              className="px-2 py-1.5 rounded text-[8px] tracking-wide"
              style={{
                color: i === 2 ? '#d4955a' : '#3a3a36',
                background: i === 2 ? '#d4955a14' : 'transparent',
              }}
            >
              {item}
            </div>
          ))}
          <div className="mt-auto pt-3 border-t border-[#1a1a18]">
            <div className="px-2 py-1.5 text-[7px] text-[#3a3a36]">
              <div className="text-[#d4955a] font-medium">47</div>
              <div>jobs found</div>
            </div>
          </div>
        </div>

        {/* Main panel */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Panel header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-[#1a1a18]">
            <span className="text-[8px] text-[#ede9e3] tracking-wide">Applications</span>
            <div className="flex gap-3">
              {['All', 'Review', 'Applied'].map((f, i) => (
                <span
                  key={f}
                  className="text-[7px] px-2 py-0.5 rounded-full"
                  style={{
                    color: i === 0 ? '#d4955a' : '#3a3a36',
                    border: i === 0 ? '1px solid #d4955a44' : '1px solid #1e1e1c',
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Job rows */}
          <div className="flex-1 overflow-hidden p-2 flex flex-col gap-1.5">
            {jobs.map(({ title, company, status, statusColor, dot }) => (
              <div
                key={title}
                className="flex items-center gap-3 px-3 py-2 rounded-lg group/row transition-colors duration-150"
                style={{ background: '#111110', border: '1px solid #1a1a18' }}
              >
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: dot }} />
                <div className="flex-1 min-w-0">
                  <div className="text-[8px] text-[#ede9e3] tracking-wide truncate">{title}</div>
                  <div className="text-[7px] text-[#4a4a46]">{company}</div>
                </div>
                <div
                  className="text-[7px] px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{ color: statusColor, border: `1px solid ${statusColor}33`, background: `${statusColor}10` }}
                >
                  {status}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="px-4 py-2 border-t border-[#1a1a18] flex items-center gap-3" style={{ background: '#0d0d0c' }}>
            <div className="flex gap-2">
              {[
                { label: 'Applied', n: '12', c: '#6b8cba' },
                { label: 'Review', n: '5', c: '#d4955a' },
                { label: 'Approved', n: '3', c: '#6dab8e' },
                { label: 'Rejected', n: '8', c: '#4a4a46' },
              ].map(({ label, n, c }) => (
                <div key={label} className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
                  <span className="text-[7px]" style={{ color: c }}>{n}</span>
                  <span className="text-[7px] text-[#3a3a36]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Analytics platform mockup
function AnalyticsMockup() {
  const platforms = [
    { name: 'Instagram', pct: 68, color: '#d4955a' },
    { name: 'LinkedIn', pct: 49, color: '#6b8cba' },
    { name: 'Twitter/X', pct: 31, color: '#a896c8' },
    { name: 'TikTok', pct: 55, color: '#6dab8e' },
  ]
  const weeks = [22, 35, 28, 51, 44, 63, 58, 72, 66, 80, 74, 88]
  const maxW = Math.max(...weeks)
  return (
    <div
      className="w-full h-full flex flex-col gap-3 p-5 select-none"
      style={{ background: '#0a0a09', fontFamily: "'JetBrains Mono', monospace" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[8px] text-[#ede9e3] tracking-wider">MARKETING INTELLIGENCE</span>
        <span className="text-[7px] text-[#d4955a] border border-[#d4955a33] px-2 py-0.5 rounded-full">Live</span>
      </div>

      {/* Sparkline chart */}
      <div className="flex-1 flex flex-col justify-end gap-1">
        <span className="text-[7px] text-[#4a4a46]">Engagement — 12 weeks</span>
        <div className="flex items-end gap-1 h-16">
          {weeks.map((v, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm transition-all duration-300"
              style={{
                height: `${(v / maxW) * 100}%`,
                background: i === weeks.length - 1 ? '#d4955a' : '#d4955a44',
              }}
            />
          ))}
        </div>
      </div>

      {/* Platform breakdown */}
      <div className="space-y-1.5">
        <span className="text-[7px] text-[#4a4a46]">Platform reach index</span>
        {platforms.map(({ name, pct, color }) => (
          <div key={name} className="flex items-center gap-2">
            <span className="text-[7px] w-14" style={{ color: '#7a7a74' }}>{name}</span>
            <div className="flex-1 h-1 bg-[#1a1a18] rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color, opacity: 0.75 }} />
            </div>
            <span className="text-[7px] w-6 text-right" style={{ color }}>{pct}</span>
          </div>
        ))}
      </div>

      {/* Metrics row */}
      <div className="grid grid-cols-3 gap-2 pt-1 border-t border-[#1a1a18]">
        {[
          { label: 'Profiles tracked', value: '24' },
          { label: 'Posts analyzed', value: '1.2k' },
          { label: 'Insights', value: '38' },
        ].map(({ label, value }) => (
          <div key={label}>
            <div className="text-[10px] text-[#ede9e3]">{value}</div>
            <div className="text-[7px] text-[#4a4a46]">{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// NHSO strategy mockup — editorial / report style
function NHSOMockup() {
  const audiences = [
    { segment: 'Core classical 55+', share: 42, color: '#a896c8' },
    { segment: 'Young professionals', share: 28, color: '#8da89e' },
    { segment: 'Families & students', share: 18, color: '#6b8cba' },
    { segment: 'Occasional attendees', share: 12, color: '#4a4a46' },
  ]
  return (
    <div
      className="w-full h-full flex flex-col p-5 select-none"
      style={{ background: '#0a0a09', fontFamily: "'JetBrains Mono', monospace" }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-5 h-5 rounded-full border border-[#a896c844] flex items-center justify-center">
          <span className="text-[6px] text-[#a896c8]">♪</span>
        </div>
        <div>
          <div className="text-[8px] text-[#ede9e3] tracking-wide">New Haven Symphony Orchestra</div>
          <div className="text-[7px] text-[#4a4a46]">Social Strategy · Audience Research</div>
        </div>
        <div className="ml-auto text-[7px] text-[#a896c8] border border-[#a896c833] px-2 py-0.5 rounded-full">2024</div>
      </div>

      {/* Audience donut visualization */}
      <div className="flex items-center gap-4 mb-4">
        <svg viewBox="0 0 60 60" className="w-14 h-14 flex-shrink-0">
          {(() => {
            let offset = 0
            const r = 22; const circ = 2 * Math.PI * r
            return audiences.map(({ share, color }, i) => {
              const dash = (share / 100) * circ
              const el = (
                <circle
                  key={i}
                  cx="30" cy="30" r={r}
                  fill="none"
                  stroke={color}
                  strokeWidth="10"
                  strokeDasharray={`${dash} ${circ}`}
                  strokeDashoffset={-offset}
                  transform="rotate(-90 30 30)"
                  opacity="0.8"
                />
              )
              offset += dash
              return el
            })
          })()}
          <circle cx="30" cy="30" r="13" fill="#0a0a09" />
          <text x="30" y="33" textAnchor="middle" fill="#a896c8" fontSize="6">NHSO</text>
        </svg>
        <div className="space-y-1 flex-1">
          {audiences.map(({ segment, share, color }) => (
            <div key={segment} className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
              <span className="text-[7px] text-[#7a7a74] flex-1 truncate">{segment}</span>
              <span className="text-[7px]" style={{ color }}>{share}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key findings */}
      <div className="space-y-1.5 flex-1">
        <div className="text-[7px] text-[#4a4a46] mb-2 uppercase tracking-widest">Key Findings</div>
        {[
          { icon: '↑', text: '3.2× higher engagement on behind-the-scenes content', c: '#6dab8e' },
          { icon: '●', text: 'Competitor orchestras index 2× higher on Instagram Reels', c: '#d4955a' },
          { icon: '◆', text: 'Audience skews 18 years above national peer median', c: '#a896c8' },
        ].map(({ icon, text, c }) => (
          <div key={text} className="flex gap-2 items-start">
            <span className="text-[8px] mt-0.5 flex-shrink-0" style={{ color: c }}>{icon}</span>
            <span className="text-[7px] text-[#7a7a74] leading-relaxed">{text}</span>
          </div>
        ))}
      </div>

      {/* Tools used */}
      <div className="flex gap-1.5 pt-2 border-t border-[#1a1a18]">
        {['HubSpot', 'HypeAuditor', 'Social APIs'].map((tool) => (
          <span key={tool} className="text-[6px] px-1.5 py-0.5 rounded border border-[#a896c833] text-[#a896c8]">{tool}</span>
        ))}
      </div>
    </div>
  )
}

// Tag pill
function Tag({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <span
      className="text-xs px-2.5 py-1 rounded-full border"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        borderColor: light ? '#ddd9d0' : '#2a2a28',
        color: light ? '#6a6a64' : '#4a4a46',
        background: 'transparent',
      }}
    >
      {label}
    </span>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-28 px-6 lg:px-10 max-w-6xl mx-auto">
      <div className="space-y-20">

        {/* ── Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6">
          <p
            className="text-xs tracking-[0.2em] text-[#4a4a46] uppercase lg:pt-1.5"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Projects
          </p>
          <div className="space-y-4">
            <h2
              className="font-display text-3xl md:text-4xl font-light text-[#ede9e3] leading-snug"
              style={{ fontFamily: "'Fraunces', Georgia, serif", letterSpacing: '-0.015em' }}
            >
              Things I've built & studied.
            </h2>
            <p className="text-[#7a7a74] max-w-lg leading-relaxed">
              Software tools, analytics platforms, and marketing strategy work — each tackling a real problem from end to end.
            </p>
          </div>
        </div>

        {/* ── 01 PRIMARY: AI Job Application Assistant ─────────────────── */}
        <div
          className="group rounded-3xl border border-[#1e1e1c] overflow-hidden transition-all duration-500 hover:border-[#2e2e2b]"
          style={{ background: '#111110' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px]">
            {/* Left: project info */}
            <div className="p-8 md:p-10 flex flex-col justify-between gap-8 border-b lg:border-b-0 lg:border-r border-[#1a1a18]">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs tracking-[0.2em] text-[#4a4a46]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    01 / Featured Project
                  </span>
                  <span
                    className="text-[10px] px-2.5 py-0.5 rounded-full border border-[#d4955a33] text-[#d4955a]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    In Development
                  </span>
                </div>

                <div className="space-y-3">
                  <h3
                    className="text-2xl md:text-3xl font-light text-[#ede9e3] leading-snug"
                    style={{ fontFamily: "'Fraunces', Georgia, serif", letterSpacing: '-0.015em' }}
                  >
                    AI Job Application<br />Assistant
                  </h3>
                  <p className="text-sm text-[#d4955a] leading-relaxed font-medium">
                    The problem: job searching is repetitive, inconsistent, and time-consuming.
                  </p>
                  <p className="text-sm text-[#7a7a74] leading-relaxed max-w-md">
                    A Python and Playwright-based tool that automates the entire job search pipeline — from discovering relevant roles to evaluating fit, organizing applications, and tracking every state — while keeping a human in the loop before anything is submitted.
                  </p>
                </div>

                {/* Feature list */}
                <div className="space-y-2">
                  <p
                    className="text-[10px] tracking-[0.2em] text-[#4a4a46] uppercase"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Key Capabilities
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {[
                      'Multi-board job search & scraping',
                      'AI-powered opportunity evaluation',
                      'Application state tracking',
                      'Review & approval workflow',
                      'Applied / Rejected / Failed states',
                      'Human-in-the-loop before submit',
                    ].map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#d4955a] mt-1.5 flex-shrink-0" />
                        <span className="text-xs text-[#7a7a74]">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Playwright', 'Browser Automation', 'LLM / OpenAI', 'SQLite', 'CLI'].map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#d4955a] text-[#0c0c0b] text-sm font-medium tracking-wide hover:bg-[#c8834a] transition-colors duration-200 group/btn"
                >
                  View Case Study
                  <span className="group-hover/btn:translate-x-0.5 transition-transform duration-200"><IconArrow /></span>
                </button>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#2e2e2b] text-[#7a7a74] text-sm tracking-wide hover:border-[#4a4a46] hover:text-[#ede9e3] transition-all duration-200"
                >
                  <IconGithub size={14} />
                  GitHub
                </a>
              </div>
            </div>

            {/* Right: dashboard mockup */}
            <div className="h-80 lg:h-auto relative overflow-hidden" style={{ background: '#0a0a09' }}>
              <div className="absolute inset-0 group-hover:scale-[1.01] transition-transform duration-700 origin-center">
                <JobTrackerMockup />
              </div>
              {/* Subtle gradient overlay at bottom edge */}
              <div
                className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
                style={{ background: 'linear-gradient(transparent, #111110)' }}
              />
            </div>
          </div>
        </div>

        {/* ── Secondary projects grid ───────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* 02: Marketing Analytics — visual LEFT, text RIGHT */}
          <div
            className="group rounded-3xl border border-[#1e1e1c] overflow-hidden flex flex-col transition-all duration-500 hover:border-[#2e2e2b]"
            style={{ background: '#111110' }}
          >
            {/* Mockup strip */}
            <div className="h-52 border-b border-[#1a1a18] overflow-hidden relative">
              <div className="absolute inset-0 group-hover:scale-[1.02] transition-transform duration-700 origin-center">
                <AnalyticsMockup />
              </div>
            </div>

            {/* Info */}
            <div className="p-7 flex flex-col gap-5 flex-1">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs tracking-[0.2em] text-[#4a4a46]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    02
                  </span>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full border border-[#1e1e1c] text-[#4a4a46]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Building
                  </span>
                </div>
                <h3
                  className="text-xl font-light text-[#ede9e3] leading-snug"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", letterSpacing: '-0.01em' }}
                >
                  Marketing Analytics<br />& Intelligence Platform
                </h3>
                <p className="text-sm text-[#7a7a74] leading-relaxed">
                  Turns public social-media and marketing data into structured competitive intelligence — tracking content performance, audience patterns, and platform-specific benchmarks across brands and competitors.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {['Python', 'Social APIs', 'React', 'Data Pipelines', 'Competitive Research'].map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>

              <div className="flex items-center gap-3 mt-auto">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-sm text-[#ede9e3] hover:text-[#d4955a] transition-colors duration-200 group/btn"
                >
                  Case Study
                  <span className="group-hover/btn:translate-x-0.5 transition-transform duration-200"><IconArrow /></span>
                </button>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[#4a4a46] hover:text-[#ede9e3] transition-colors duration-200"
                >
                  <IconGithub size={14} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* 03: NHSO — editorial, text-forward with inline visual */}
          <div
            className="group rounded-3xl border border-[#1e1e1c] overflow-hidden flex flex-col transition-all duration-500 hover:border-[#2e2e2b]"
            style={{ background: '#111110' }}
          >
            {/* Mockup strip */}
            <div className="h-52 border-b border-[#1a1a18] overflow-hidden relative">
              <div className="absolute inset-0 group-hover:scale-[1.02] transition-transform duration-700 origin-center">
                <NHSOMockup />
              </div>
            </div>

            {/* Info */}
            <div className="p-7 flex flex-col gap-5 flex-1">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs tracking-[0.2em] text-[#4a4a46]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    03
                  </span>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full border border-[#a896c833] text-[#a896c8]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Case Study
                  </span>
                </div>
                <h3
                  className="text-xl font-light text-[#ede9e3] leading-snug"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", letterSpacing: '-0.01em' }}
                >
                  New Haven Symphony<br />Orchestra
                </h3>
                <p className="text-sm text-[#7a7a74] leading-relaxed">
                  A data-driven social-media strategy engagement. Analyzed audience composition, competitor content, and platform-specific engagement patterns using HubSpot and HypeAuditor to build a prioritized digital marketing roadmap.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {['HubSpot', 'HypeAuditor', 'Audience Research', 'Competitive Analysis', 'Content Strategy'].map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>

              <div className="flex items-center gap-3 mt-auto">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-sm text-[#ede9e3] hover:text-[#a896c8] transition-colors duration-200 group/btn"
                >
                  View Case Study
                  <span className="group-hover/btn:translate-x-0.5 transition-transform duration-200"><IconArrow /></span>
                </button>
              </div>
            </div>
          </div>

        </div>
        {/* ── End projects ─────────────────────────────────────────────── */}

      </div>
    </section>
  )
}

// ── Skills ─────────────────────────────────────────────────────────────────

const skillGroups = [
  {
    category: 'Marketing & Strategy',
    items: [
      'Digital Marketing Strategy', 'Brand Positioning', 'Content Strategy',
      'Social Media Marketing', 'Campaign Planning', 'Marketing Analytics',
    ],
  },
  {
    category: 'Analytics & Research',
    items: [
      'Audience Research', 'Competitive Analysis', 'Performance Reporting',
      'HubSpot', 'HypeAuditor', 'Google Analytics',
    ],
  },
  {
    category: 'Technology',
    items: [
      'Python', 'React', 'SQL', 'Playwright', 'Web Scraping',
      'REST APIs', 'Git / GitHub',
    ],
  },
  {
    category: 'AI & Automation',
    items: [
      'LLM Prompt Engineering', 'AI-Assisted Development', 'Workflow Automation',
      'Data Pipelines', 'Tool Building',
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="py-28 px-6 lg:px-10">
      {/* Off-white surface */}
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-3xl px-8 md:px-14 py-16 space-y-14"
          style={{ background: '#f4f1eb' }}
        >
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6">
            <p
              className="text-xs tracking-[0.2em] text-[#9a9a94] uppercase lg:pt-1.5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Skills
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-light text-[#1a1a18] leading-snug"
              style={{ fontFamily: "'Fraunces', Georgia, serif", letterSpacing: '-0.015em' }}
            >
              Broad by design,<br />deep where it matters.
            </h2>
          </div>

          {/* Skill groups */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {skillGroups.map(({ category, items }) => (
              <div key={category} className="space-y-4">
                <p
                  className="text-xs tracking-[0.15em] text-[#9a9a94] uppercase border-b border-[#ddd9d0] pb-2"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 rounded-full bg-white text-[#3a3a36] border border-[#e0dcd4] hover:border-[#d4955a] hover:text-[#c87a3a] transition-colors duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Experience / Education ─────────────────────────────────────────────────

const timeline = [
  {
    period: '2023 – 2025',
    role: 'MBA Candidate',
    org: 'Marketing & Digital Marketing',
    type: 'Education',
    description:
      'Focused coursework in marketing strategy, digital marketing channels, consumer analytics, and brand management. Applied learning through consulting and strategy projects.',
    tags: ['Marketing Strategy', 'Consumer Analytics', 'Brand Management'],
  },
  {
    period: '2024',
    role: 'Social Media Strategy Consultant',
    org: 'New Haven Symphony Orchestra',
    type: 'Project',
    description:
      'Developed a data-driven social-media strategy using HubSpot and HypeAuditor. Studied audience engagement, benchmarked against peer orchestras, and translated findings into actionable content and distribution recommendations.',
    tags: ['Social Strategy', 'HubSpot', 'HypeAuditor', 'Analytics'],
  },
  {
    period: '2024 – Present',
    role: 'Independent Builder',
    org: 'Software Projects',
    type: 'Personal',
    description:
      'Building practical software tools — including an AI job application assistant and a marketing analytics platform — using Python, React, and AI APIs. Learning by shipping.',
    tags: ['Python', 'AI Tools', 'Product Development'],
  },
]

function Experience() {
  return (
    <section id="experience" className="py-28 px-6 lg:px-10 max-w-6xl mx-auto">
      <div className="space-y-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6">
          <p
            className="text-xs tracking-[0.2em] text-[#4a4a46] uppercase lg:pt-1.5"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Experience
          </p>
          <h2
            className="font-display text-3xl md:text-4xl font-light text-[#ede9e3] leading-snug"
            style={{ fontFamily: "'Fraunces', Georgia, serif", letterSpacing: '-0.015em' }}
          >
            Education & work.
          </h2>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6">
          <div /> {/* spacer */}
          <div className="relative space-y-0">
            {/* Vertical line */}
            <div className="absolute left-0 top-3 bottom-3 w-px bg-[#1e1e1c]" />

            {timeline.map(({ period, role, org, type, description, tags }, i) => (
              <div key={i} className="relative pl-8 pb-12 last:pb-0">
                {/* Dot */}
                <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full border border-[#d4955a] bg-[#0c0c0b]" />

                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <p
                      className="text-xs text-[#4a4a46] tracking-wide"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {period}
                    </p>
                    <span
                      className="text-[10px] px-2 py-0.5 rounded border border-[#2a2a28] text-[#4a4a46] tracking-wide uppercase"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {type}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-lg font-light text-[#ede9e3]"
                      style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                    >
                      {role}
                    </h3>
                    <p className="text-sm text-[#d4955a]">{org}</p>
                  </div>
                  <p className="text-sm text-[#7a7a74] leading-relaxed max-w-xl">{description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full border border-[#1e1e1c] text-[#4a4a46]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Contact ────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="py-28 px-6 lg:px-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6">
        <p
          className="text-xs tracking-[0.2em] text-[#4a4a46] uppercase lg:pt-2"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Contact
        </p>
        <div className="space-y-10">
          <div className="space-y-4">
            <h2
              className="font-display text-4xl md:text-5xl font-light text-[#ede9e3] leading-snug"
              style={{ fontFamily: "'Fraunces', Georgia, serif", letterSpacing: '-0.02em' }}
            >
              Let's build something
              <br />
              <em className="text-[#d4955a] not-italic">valuable.</em>
            </h2>
            <p className="text-[#7a7a74] leading-relaxed max-w-lg">
              Open to roles in marketing analytics, digital strategy, and product-adjacent positions.
              Always interested in interesting problems.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:vivek@example.com"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#d4955a] text-[#0c0c0b] text-sm font-medium tracking-wide hover:bg-[#c8834a] transition-colors duration-200"
            >
              <IconEmail size={15} />
              Send an Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#2e2e2b] text-[#ede9e3] text-sm font-medium tracking-wide hover:border-[#4a4a46] hover:bg-[#131312] transition-all duration-200"
            >
              <IconLinkedIn size={15} />
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#2e2e2b] text-[#ede9e3] text-sm font-medium tracking-wide hover:border-[#4a4a46] hover:bg-[#131312] transition-all duration-200"
            >
              <IconGithub size={15} />
              GitHub
            </a>
          </div>

          {/* Email display */}
          <p
            className="text-sm text-[#4a4a46] tracking-wide"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            vivek@example.com
          </p>
        </div>
      </div>
    </section>
  )
}

// ── Footer ─────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-[#1e1e1c] py-8 px-6 lg:px-10 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="text-xs text-[#3a3a36] tracking-wide"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          © 2026 Vivek Naramreddy
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#3a3a36] hover:text-[#7a7a74] transition-colors duration-200">
            <IconGithub size={16} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#3a3a36] hover:text-[#7a7a74] transition-colors duration-200">
            <IconLinkedIn size={16} />
          </a>
          <a
            href="mailto:vivek@example.com"
            className="text-xs text-[#3a3a36] hover:text-[#7a7a74] transition-colors duration-200 tracking-wide"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            vivek@example.com
          </a>
        </div>
      </div>
    </footer>
  )
}

// ── App ────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#0c0c0b' }}>
      <Nav />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export function JobTrackerMockup() {
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
export function AnalyticsMockup() {
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
export function NHSOMockup() {
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

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

export default function Experience() {
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

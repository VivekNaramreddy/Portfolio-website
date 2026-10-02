const skillGroups = [
  {
    category: 'Marketing & Strategy',
    items: [
      'Digital Marketing Strategy',
      'Social Media Strategy',
      'Content Strategy',
      'Campaign Planning',
      'Brand Positioning',
      'SEO',
    ],
  },
  {
    category: 'Analytics & Research',
    items: [
      'Marketing Analytics',
      'Audience Research',
      'Competitive Analysis',
      'Market Research',
      'Performance Reporting',
      'Survey Design',
      'Power BI',
      'Excel',
    ],
  },
  {
    category: 'Technology & Automation',
    items: [
      'Python',
      'Playwright',
      'Git / GitHub',
      'AI-Assisted Development',
      'Workflow Automation',
      'Browser Automation',
      'Tool Building',
      'Human-in-the-Loop Systems',
    ],
  },
  {
    category: 'Tools & Technologies Used',
    items: [
      'React',
      'SQL',
      'REST APIs',
      'Web Scraping',
      'Data Pipelines',
      'R / Shiny',
      'Qualtrics',
      'Google Analytics',
      'HubSpot',
      'HypeAuditor',
    ],
  },
]

export default function Skills() {
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

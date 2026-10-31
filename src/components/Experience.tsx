type TimelineEntry = {
  period: string
  role: string
  org: string
  type: string
  description: string
  tags: string[]
}

const experience: TimelineEntry[] = [
  {
    period: "Sep 2026 – Present",
    type: "PERSONAL PROJECTS",
    role: "Independent Projects — Marketing & Automation",
    org: "Software Projects",
    description:
      "Building practical marketing and automation projects, including a human-in-the-loop job application workflow and a marketing intelligence platform. The work has given me hands-on experience with Python, Playwright, workflow automation, and AI-assisted development.",
    tags: [
      "Python",
      "Playwright",
      "AI-Assisted Development",
      "Workflow Automation",
    ],
  },
  {
    period: "Sep 2024 – Dec 2024",
    type: "Client Project",
    role: "Digital Marketing Strategy",
    org: "New Haven Symphony Orchestra",
    description:
      "Worked with the New Haven Symphony Orchestra to analyze audience engagement, competitors, and content performance, then use those findings to develop recommendations for social media, outreach, partnerships, and audience growth.",
    tags: ["Digital Marketing", "Audience Research", "HubSpot", "HypeAuditor"],
  },
]

const education: TimelineEntry[] = [
  {
    period: "2023 – 2025",
    type: "MBA",
    role: "Master of Business Administration",
    org: "Marketing & Digital Marketing — University of New Haven",
    description:
      "Graduate coursework and applied projects in digital marketing, social media strategy, analytics, finance, and strategic management, including client work with the New Haven Symphony Orchestra and business analysis projects.",
    tags: [
      "Digital Marketing Strategy",
      "Social Media Marketing",
      "Data Visualization",
      "Strategic Management",
    ],
  },
  {
    period: "2019 – 2022",
    type: "BBA",
    role: "Bachelor of Business Administration",
    org: "Vel Tech Institute",
    description:
      "Built a foundation in marketing, management, finance, and business strategy, including an academic portfolio-management study focused on Kotak Securities.",
    tags: [
      "Business Administration",
      "Marketing",
      "Finance",
      "Portfolio Management",
    ],
  },
]

function TimelineSection({
  label,
  heading,
  entries,
}: {
  label: string
  heading: string
  entries: TimelineEntry[]
}) {
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6">
        <p
          className="text-xs tracking-[0.2em] text-[#4a4a46] uppercase lg:pt-1.5"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {label}
        </p>
        <h2
          className="font-display text-3xl md:text-4xl font-light text-[#ede9e3] leading-snug"
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            letterSpacing: "-0.015em",
          }}
        >
          {heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6">
        <div />
        <div className="relative space-y-0">
          <div className="absolute left-0 top-3 bottom-3 w-px bg-[#1e1e1c]" />

          {entries.map(({ period, role, org, type, description, tags }) => (
            <div
              key={`${period}-${role}`}
              className="relative pl-8 pb-12 last:pb-0"
            >
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
                <p className="text-sm text-[#7a7a74] leading-relaxed max-w-xl">
                  {description}
                </p>
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
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 lg:px-10 max-w-6xl mx-auto">
      <div className="space-y-20">
        <TimelineSection
          label="Experience"
          heading="Where strategy meets execution."
          entries={experience}
        />

        <div className="pt-20 border-t border-[#1e1e1c]">
          <TimelineSection
            label="Education"
            heading="The foundation behind the work."
            entries={education}
          />
        </div>
      </div>
    </section>
  )
}

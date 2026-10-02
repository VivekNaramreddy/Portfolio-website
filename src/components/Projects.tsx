import { IconArrow, IconGithub } from "./Icons"
import {
  AnalyticsMockup,
  GMStrategyMockup,
  JobTrackerMockup,
  NHSOMockup,
} from "./ProjectMockups"

function Tag({ label, light = false }: { label: string light?: boolean }) {
  return (
    <span
      className="text-xs px-2.5 py-1 rounded-full border"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        borderColor: light ? "#ddd9d0" : "#2a2a28",
        color: light ? "#6a6a64" : "#4a4a46",
        background: "transparent",
      }}
    >
      {label}
    </span>
  )
}

function KeyCapabilities({
  items,
  accent,
}: {
  items: string[]
  accent: string
}) {
  return (
    <div className="space-y-2">
      <p
        className="text-[10px] tracking-[0.2em] text-[#4a4a46] uppercase"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        Key Capabilities
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-2">
            <div
              className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
              style={{ background: accent }}
            />
            <span className="text-xs text-[#7a7a74]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
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
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                letterSpacing: "-0.015em",
              }}
            >
              Things I've built & studied.
            </h2>
            <p className="text-[#7a7a74] max-w-lg leading-relaxed">
              Software tools, analytics platforms, and marketing strategy work —
              each tackling a real problem from end to end.
            </p>
          </div>
        </div>

        {/* ── 01 PRIMARY: AI Job Application Assistant ─────────────────── */}
        <div
          className="group rounded-3xl border border-[#1e1e1c] overflow-hidden transition-all duration-500 hover:border-[#2e2e2b]"
          style={{ background: "#111110" }}
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
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    AI Job Application
                    <br />
                    Assistant
                  </h3>
                  <p className="text-sm text-[#d4955a] leading-relaxed font-medium">
                    Human-in-the-loop automation for discovering, reviewing,
                    tracking, and managing job applications.
                  </p>
                  <p className="text-sm text-[#7a7a74] leading-relaxed max-w-md">
                    Built with Python and Playwright, the system streamlines job
                    discovery and application tracking while keeping the user in
                    control. It supports review and approval workflows, Easy
                    Apply and external jobs, applied and rejected tracking,
                    failure logging, filtering, and spreadsheet export.
                  </p>
                </div>

                {/* Feature list */}
                <KeyCapabilities
                  accent="#d4955a"
                  items={[
                    "Automated job discovery",
                    "Human Review & Approval",
                    "Easy Apply + External Jobs",
                    "Application Tracking",
                    "Failure and Skip Logging",
                    "Excel Export & Filtering",
                  ]}
                />

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "Playwright",
                    "Browser Automation",
                    "LLM / OpenAI",
                    "SQLite",
                    "CLI",
                  ].map((t) => (
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
                  <span className="group-hover/btn:translate-x-0.5 transition-transform duration-200">
                    <IconArrow />
                  </span>
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
            <div
              className="h-80 lg:h-auto relative overflow-hidden"
              style={{ background: "#0a0a09" }}
            >
              <div className="absolute inset-0 group-hover:scale-[1.01] transition-transform duration-700 origin-center">
                <JobTrackerMockup />
              </div>
              {/* Subtle gradient overlay at bottom edge */}
              <div
                className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
                style={{ background: "linear-gradient(transparent, #111110)" }}
              />
            </div>
          </div>
        </div>

        {/* ── Secondary projects grid ───────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* 02: Marketing Intelligence */}
          <div
            className="group rounded-3xl border border-[#1e1e1c] overflow-hidden flex flex-col transition-all duration-500 hover:border-[#2e2e2b]"
            style={{ background: "#111110" }}
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
                    In Development
                  </span>
                </div>
                <h3
                  className="text-xl font-light text-[#ede9e3] leading-snug"
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Marketing Intelligence
                  <br />
                  Platform
                </h3>
                <p className="text-sm text-[#d4955a] leading-relaxed font-medium">
                  Transforming public digital signals into clearer competitive
                  and marketing insights.
                </p>
                <p className="text-sm text-[#7a7a74] leading-relaxed max-w-md">
                  An evolving marketing technology project designed to analyze
                  publicly available social and digital performance data. The
                  platform aims to compare brands, content activity, engagement
                  patterns, and competitive signals while turning fragmented
                  online information into useful insights for marketers.
                </p>
              </div>

              <KeyCapabilities
                accent="#d4955a"
                items={[
                  "Marketing Analytics",
                  "Competitive Intelligence",
                  "Social Data Analysis",
                  "Brand Comparison",
                  "Automation",
                  "Insight Generation",
                ]}
              />

              <div className="flex flex-wrap gap-1.5">
                {[
                  "Python",
                  "Social APIs",
                  "React",
                  "Data Pipelines",
                  "Competitive Research",
                ].map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>

              <div className="flex items-center gap-3 mt-auto">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-sm text-[#ede9e3] hover:text-[#d4955a] transition-colors duration-200 group/btn"
                >
                  Case Study
                  <span className="group-hover/btn:translate-x-0.5 transition-transform duration-200">
                    <IconArrow />
                  </span>
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

          {/* 03: NHSO Digital Marketing Strategy */}
          <div
            className="group rounded-3xl border border-[#1e1e1c] overflow-hidden flex flex-col transition-all duration-500 hover:border-[#2e2e2b]"
            style={{ background: "#111110" }}
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
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    letterSpacing: "-0.01em",
                  }}
                >
                  NHSO Digital Marketing Strategy
                </h3>
                <p className="text-sm text-[#a896c8] leading-relaxed font-medium">
                  Turning audience and content data into an actionable social
                  media strategy for a real arts organization.
                </p>
                <p className="text-sm text-[#7a7a74] leading-relaxed max-w-md">
                  Worked with the New Haven Symphony Orchestra over
                  approximately four months to analyze audience engagement,
                  competitors, and content performance. Using tools including
                  HubSpot and HypeAuditor, our team developed recommendations
                  for content strategy, community engagement, student outreach,
                  partnerships, and audience growth.
                </p>
              </div>

              <KeyCapabilities
                accent="#a896c8"
                items={[
                  "Audience Analysis",
                  "Competitor Research",
                  "Content Performance",
                  "Social Media Strategy",
                  "HubSpot",
                  "HypeAuditor",
                ]}
              />

              <div className="flex flex-wrap gap-1.5">
                {[
                  "HubSpot",
                  "HypeAuditor",
                  "Audience Research",
                  "Competitive Analysis",
                  "Content Strategy",
                ].map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>

              <div className="flex items-center gap-3 mt-auto">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-sm text-[#ede9e3] hover:text-[#a896c8] transition-colors duration-200 group/btn"
                >
                  View Case Study
                  <span className="group-hover/btn:translate-x-0.5 transition-transform duration-200">
                    <IconArrow />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* 04: General Motors Strategic Analysis */}
          <div
            className="group rounded-3xl border border-[#1e1e1c] overflow-hidden flex flex-col transition-all duration-500 hover:border-[#2e2e2b]"
            style={{ background: "#111110" }}
          >
            {/* Mockup strip */}
            <div className="h-52 border-b border-[#1a1a18] overflow-hidden relative">
              <div className="absolute inset-0 group-hover:scale-[1.02] transition-transform duration-700 origin-center">
                <GMStrategyMockup />
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
                    04
                  </span>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full border border-[#6b8cba33] text-[#6b8cba]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Case Study
                  </span>
                </div>
                <h3
                  className="text-xl font-light text-[#ede9e3] leading-snug"
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    letterSpacing: "-0.01em",
                  }}
                >
                  General Motors Strategic Analysis
                </h3>
                <p className="text-sm text-[#6b8cba] leading-relaxed font-medium">
                  Examining how a global automotive leader can compete through
                  major industry transformation.
                </p>
                <p className="text-sm text-[#7a7a74] leading-relaxed max-w-md">
                  Analyzed General Motors using PESTEL, Porter’s Five Forces,
                  SWOT, and value-chain frameworks to evaluate competitive
                  pressure, EV adoption, autonomous technology, sustainability,
                  and changing industry dynamics. The project concluded with
                  strategic recommendations based on GM’s market position and
                  future opportunities.
                </p>
              </div>

              <KeyCapabilities
                accent="#6b8cba"
                items={[
                  "Strategic Analysis",
                  "Market Research",
                  "PESTEL",
                  "Porter's Five Forces",
                  "SWOT Analysis",
                  "Value Chain Analysis",
                ]}
              />

              <div className="flex flex-wrap gap-1.5">
                {[
                  "Automotive Industry",
                  "EV Adoption",
                  "Autonomous Technology",
                  "Sustainability",
                ].map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>

              <div className="flex items-center gap-3 mt-auto">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-sm text-[#ede9e3] hover:text-[#6b8cba] transition-colors duration-200 group/btn"
                >
                  View Case Study
                  <span className="group-hover/btn:translate-x-0.5 transition-transform duration-200">
                    <IconArrow />
                  </span>
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

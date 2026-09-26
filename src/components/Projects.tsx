import { IconArrow, IconGithub } from './Icons'
import { AnalyticsMockup, JobTrackerMockup, NHSOMockup } from './ProjectMockups'

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

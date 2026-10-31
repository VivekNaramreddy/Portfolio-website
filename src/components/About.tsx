export default function About() {
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
                I'm an MBA graduate in Marketing & Digital Marketing from the University of New Haven.
                My background is in marketing strategy, audience research, analytics, and competitive
                analysis, and I’ve gradually expanded into automation and building practical tools.
              </p>
              <p>
                Most of my work starts with a problem I want to understand better — whether that means
                researching an audience, analyzing competitors, planning a digital strategy, or building
                a workflow that saves time. I’m especially interested in roles where marketing, analytics,
                and technology can be used together in a practical way.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Degree', value: 'MBA', sub: 'Marketing & Digital Marketing' },
              {
                label: 'Focus',
                value: 'Marketing + Analytics',
                sub: 'Strategy, research, and data-driven decision making',
              },
              { label: 'Approach', value: 'Practical Problem Solving', sub: 'Research, test, build, improve' },
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

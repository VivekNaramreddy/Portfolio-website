import { IconEmail, IconGithub, IconLinkedIn } from './Icons'

export default function Contact() {
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
            viveknaramreddy@gmail.com
          </p>
        </div>
      </div>
    </section>
  )
}

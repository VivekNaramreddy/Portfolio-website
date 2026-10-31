import HeroVisual from './HeroVisual'
import { IconArrow, IconDownload } from './Icons'

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex items-center pt-16 pb-24 px-6 lg:px-10 max-w-6xl mx-auto"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-8 items-center">
        {/* Text */}
        <div className="min-w-0 space-y-8">
          <div className="space-y-2">
            <p
              className="font-mono-label text-xs tracking-[0.2em] text-[#d4955a] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              MBA · MARKETING · ANALYTICS · TECHNOLOGY
            </p>
          </div>
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[2.75rem] xl:text-5xl leading-[1.05] font-light text-[#ede9e3]"
            style={{ fontFamily: "'Fraunces', Georgia, serif", letterSpacing: '-0.02em' }}
          >
            <span className="block text-balance lg:inline">Marketing, Analytics &amp;{' '}
              <span className="lg:hidden">Technology</span>
            </span>
            <span className="hidden lg:block">Technology Turned Into</span>
            <span className="block text-balance lg:text-wrap">
              <span className="lg:hidden">Turned Into </span>Practical Projects
            </span>
          </h1>
          <p className="text-base md:text-lg text-[#7a7a74] leading-relaxed max-w-lg font-light">
            My work combines marketing strategy, research, analytics, and technology. I’ve worked on digital marketing and audience research projects while also building practical tools for automation and workflow improvement.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#d4955a] text-[#0c0c0b] text-sm font-medium tracking-wide hover:bg-[#c8834a] transition-colors duration-200"
            >
              View Projects
              <IconArrow />
            </a>
            <a
              href="https://drive.google.com/drive/folders/1iPo5yXDHRPUGcm68IWsb95ey6gJXKnlF?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
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

import { useEffect, useState } from 'react'
import { IconGithub, IconLinkedIn } from './Icons'

export default function Navbar() {
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

import { useEffect, useState } from 'react'
import { IconGithub, IconLinkedIn } from './Icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 motion-reduce:transition-none"
      style={{
        backgroundColor: scrolled ? 'rgba(12,12,11,0.52)' : 'rgba(12,12,11,0.25)',
        backgroundImage: scrolled
          ? 'linear-gradient(115deg, rgba(237,233,227,0.10) 0%, rgba(237,233,227,0.02) 30%, rgba(212,149,90,0.06) 55%, rgba(237,233,227,0.09) 78%, rgba(237,233,227,0.02) 100%)'
          : 'none',
        backdropFilter: scrolled ? 'blur(24px) saturate(140%)' : 'blur(8px)',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(140%)' : 'blur(8px)',
        borderBottom: scrolled ? '1px solid rgba(237,233,227,0.16)' : '1px solid transparent',
        boxShadow: scrolled
          ? 'inset 0 1px 0 rgba(237,233,227,0.08), 0 8px 28px rgba(0,0,0,0.18)'
          : 'none',
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
              className="text-sm text-[#b4b4ac] hover:text-[#ede9e3] transition-colors duration-200 tracking-wide"
            >
              {l}
            </a>
          ))}
          <a
            href="https://drive.google.com/drive/folders/1iPo5yXDHRPUGcm68IWsb95ey6gJXKnlF?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#b4b4ac] hover:text-[#ede9e3] transition-colors duration-200 tracking-wide"
          >
            Resume
          </a>
        </div>

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/VivekNaramreddy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9a9a94] hover:text-[#ede9e3] transition-colors duration-200"
            aria-label="GitHub"
          >
            <IconGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/vivek-vardhan-reddy-naramreddy-954347285/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9a9a94] hover:text-[#ede9e3] transition-colors duration-200"
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
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className={`block w-5 h-px bg-[#ede9e3] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-[#ede9e3] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-[#ede9e3] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-navigation" className="md:hidden bg-[#0c0c0b]/90 border-t border-[#1e1e1c] px-6 py-6 flex flex-col gap-5 max-h-[calc(100dvh-4rem)] overflow-y-auto">
          {[...links, 'Resume'].map((l) => (
            <a
              key={l}
              href={l === 'Resume' ? 'https://drive.google.com/drive/folders/1iPo5yXDHRPUGcm68IWsb95ey6gJXKnlF?usp=drive_link' : `#${l.toLowerCase()}`}
              target={l === 'Resume' ? '_blank' : undefined}
              rel={l === 'Resume' ? 'noopener noreferrer' : undefined}
              onClick={() => setMenuOpen(false)}
              className="text-base text-[#ede9e3] tracking-wide"
            >
              {l}
            </a>
          ))}
          <div className="flex gap-4 pt-2">
            <a href="https://github.com/VivekNaramreddy" target="_blank" rel="noopener noreferrer" className="text-[#7a7a74]"><IconGithub /></a>
            <a href="https://www.linkedin.com/in/vivek-vardhan-reddy-naramreddy-954347285/" target="_blank" rel="noopener noreferrer" className="text-[#7a7a74]"><IconLinkedIn /></a>
          </div>
        </div>
      )}
    </header>
  )
}

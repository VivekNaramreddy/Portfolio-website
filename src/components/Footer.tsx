import { IconGithub, IconLinkedIn } from './Icons'

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e1c] py-8 px-6 lg:px-10 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="text-xs text-[#3a3a36] tracking-wide"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          © 2026 Vivek Naramreddy
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#3a3a36] hover:text-[#7a7a74] transition-colors duration-200">
            <IconGithub size={16} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#3a3a36] hover:text-[#7a7a74] transition-colors duration-200">
            <IconLinkedIn size={16} />
          </a>
          <a
            href="mailto:vivek@example.com"
            className="text-xs text-[#3a3a36] hover:text-[#7a7a74] transition-colors duration-200 tracking-wide"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            vivek@example.com
          </a>
        </div>
      </div>
    </footer>
  )
}

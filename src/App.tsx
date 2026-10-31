import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import SectionDivider from './components/SectionDivider'
import Skills from './components/Skills'
import type { MouseEvent } from 'react'

function showClickFeedback(event: MouseEvent<HTMLDivElement>) {
  if (!(event.target instanceof Element)) return
  const control = event.target.closest<HTMLElement>('a[href], button:not(:disabled)')
  if (!control || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  // The pulse continues after release, so a click has its own visible feedback.
  control.animate(
    [
      { outline: '2px solid rgba(212,149,90,0.7)', outlineOffset: '1px' },
      { outline: '2px solid rgba(212,149,90,0)', outlineOffset: '7px' },
    ],
    { duration: 420, easing: 'ease-out' },
  )
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#0c0c0b' }} onClickCapture={showClickFeedback}>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

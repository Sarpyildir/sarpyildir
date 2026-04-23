import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-base/80 backdrop-blur-xl border-b border-border-subtle shadow-[0_1px_0_rgba(255,255,255,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-mono text-sm font-semibold text-ink-primary hover:text-accent transition-colors flex items-center gap-2"
        >
          <span className="w-6 h-6 rounded bg-accent flex items-center justify-center text-white text-xs font-bold">
            S
          </span>
          sarp<span className="text-accent">.</span>dev
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-1.5 text-sm text-ink-secondary hover:text-ink-primary rounded-md hover:bg-bg-elevated transition-all duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-sm text-ink-secondary hover:text-ink-primary transition-colors"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors shadow-lg shadow-accent/20"
          >
            <Download size={13} />
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-ink-secondary hover:text-ink-primary hover:bg-bg-elevated transition-all"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-bg-base/95 backdrop-blur-xl border-b border-border-subtle overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm text-ink-secondary hover:text-ink-primary rounded-md hover:bg-bg-elevated transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-border-subtle flex gap-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 text-center py-2 text-sm text-ink-secondary border border-border rounded-lg hover:bg-bg-elevated transition-all"
                >
                  Contact
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-accent text-white text-sm font-medium"
                >
                  <Download size={13} />
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

import { Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle bg-bg-base py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded bg-accent flex items-center justify-center text-white text-[10px] font-bold">S</span>
          <span className="text-xs font-mono text-ink-tertiary">
            © {year} Sarp Yıldırım — All rights reserved
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-md text-ink-tertiary hover:text-ink-secondary hover:bg-bg-elevated transition-all"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md text-ink-tertiary hover:text-ink-secondary hover:bg-bg-elevated transition-all"
            aria-label="GitHub"
          >
            <Github size={15} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md text-ink-tertiary hover:text-ink-secondary hover:bg-bg-elevated transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}

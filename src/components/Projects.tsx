import { motion } from 'framer-motion'
import { Github, ExternalLink, ChevronRight } from 'lucide-react'
import { projects } from '../data/portfolio'
import SectionHeader from './ui/SectionHeader'
import Badge from './ui/Badge'
import TiltCard from './ui/TiltCard'

const stackColors: Record<string, string> = {
  'MERN Stack': 'blue',
  'Python / React': 'blue',
  'Java Desktop': 'blue',
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg-surface relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="// featured work"
          title="Projects"
          description="Side projects built outside of enterprise work — spanning full-stack web, event platforms, and desktop apps."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard className="group h-full">
                <div className="flex flex-col h-full bg-bg-card rounded-xl border border-border hover:border-border-strong transition-all duration-300 card-glow overflow-hidden">
                  {/* Accent strip */}
                  <div className="h-[2px] w-full bg-gradient-to-r from-accent/60 via-accent to-indigo-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge variant={stackColors[project.stack] as 'blue' ?? 'default'} size="sm">
                          {project.stack}
                        </Badge>
                        <h3 className="text-lg font-semibold text-ink-primary mt-2 group-hover:text-accent transition-colors">
                          {project.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <a
                          href={project.github}
                          aria-label="GitHub"
                          className="p-1.5 rounded-md text-ink-tertiary hover:text-ink-primary hover:bg-bg-elevated transition-all"
                        >
                          <Github size={15} />
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            aria-label="Live demo"
                            className="p-1.5 rounded-md text-ink-tertiary hover:text-ink-primary hover:bg-bg-elevated transition-all"
                          >
                            <ExternalLink size={15} />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-ink-secondary leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    <ul className="space-y-1.5 mb-5">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-ink-tertiary">
                          <ChevronRight size={11} className="text-accent/50 flex-shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border-subtle">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="muted" size="sm">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/sarpyildir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-ink-tertiary hover:text-ink-secondary transition-colors"
          >
            <Github size={14} />
            View more on GitHub
            <ChevronRight size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

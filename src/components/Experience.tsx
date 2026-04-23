import { motion } from 'framer-motion'
import { Briefcase, CheckCircle2 } from 'lucide-react'
import { experiences } from '../data/portfolio'
import SectionHeader from './ui/SectionHeader'
import Badge from './ui/Badge'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-bg-surface relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="// career path"
          title="Work Experience"
          description="Three years building mission-critical financial software for Turkey's leading banks, with growing ownership across the full stack."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-border via-border-subtle to-transparent hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot (desktop center) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-5 z-10">
                  <div
                    className={`w-3 h-3 rounded-full border-2 ${
                      exp.current
                        ? 'bg-accent border-accent shadow-[0_0_12px_rgba(59,130,246,0.6)]'
                        : 'bg-bg-surface border-border-strong'
                    }`}
                  />
                </div>

                {/* Mobile dot */}
                <div className="sm:flex md:hidden flex-shrink-0 mt-1.5">
                  <div
                    className={`w-2.5 h-2.5 rounded-full border-2 ${
                      exp.current
                        ? 'bg-accent border-accent'
                        : 'bg-bg-surface border-border-strong'
                    }`}
                  />
                </div>

                {/* Card — alternating sides on desktop */}
                <div className={`w-full md:w-[46%] ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="bg-bg-card rounded-xl border border-border p-6 card-glow hover:border-border-strong transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={13} className="text-ink-tertiary" />
                          <span className="text-xs font-mono text-ink-tertiary">{exp.period}</span>
                          {exp.current && (
                            <Badge variant="green" size="sm" dot>
                              Current
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-ink-primary">{exp.company}</h3>
                        <p className="text-sm text-accent font-medium mt-0.5">{exp.role}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-5">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-ink-secondary leading-relaxed">
                          <CheckCircle2 size={13} className="text-accent/60 flex-shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <Badge key={t} variant="muted" size="sm">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

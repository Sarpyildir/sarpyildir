import { motion } from 'framer-motion'
import { Code2, Layers, Wrench, Bot, Zap } from 'lucide-react'
import { skills } from '../data/portfolio'
import SectionHeader from './ui/SectionHeader'

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

function SkillPill({ name, color }: { name: string; color?: string }) {
  return (
    <div className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-bg-elevated hover:bg-bg-card border border-border-subtle hover:border-border transition-all duration-200 cursor-default">
      {color && (
        <span
          className="w-2 h-2 rounded-full flex-shrink-0 opacity-80"
          style={{ backgroundColor: color }}
        />
      )}
      <span className="text-sm text-ink-secondary group-hover:text-ink-primary transition-colors font-mono">
        {name}
      </span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="// technical stack"
          title="Skills & Tools"
          description="Enterprise Java as the backbone, TypeScript + React on the frontend, AI tools woven into every step of the workflow."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* Languages */}
          <motion.div
            custom={0}
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            className="bg-bg-card rounded-xl border border-border p-6 card-glow hover:border-border-strong transition-all duration-300"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-accent-muted flex items-center justify-center">
                <Code2 size={15} className="text-accent" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-ink-primary">Languages</h3>
                <p className="text-[11px] text-ink-tertiary font-mono">{skills.languages.length} languages</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((s) => (
                <SkillPill key={s.name} name={s.name} color={s.color} />
              ))}
            </div>
          </motion.div>

          {/* Frameworks */}
          <motion.div
            custom={1}
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            className="bg-bg-card rounded-xl border border-border p-6 card-glow hover:border-border-strong transition-all duration-300"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-accent-muted flex items-center justify-center">
                <Layers size={15} className="text-accent" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-ink-primary">Frameworks</h3>
                <p className="text-[11px] text-ink-tertiary font-mono">{skills.frameworks.length} frameworks</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((s) => (
                <SkillPill key={s.name} name={s.name} color={s.color} />
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            custom={2}
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            className="bg-bg-card rounded-xl border border-border p-6 card-glow hover:border-border-strong transition-all duration-300 md:col-span-2 xl:col-span-1"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-bg-elevated flex items-center justify-center">
                <Wrench size={15} className="text-ink-secondary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-ink-primary">DevOps & Tools</h3>
                <p className="text-[11px] text-ink-tertiary font-mono">{skills.tools.length} tools</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((s) => (
                <SkillPill key={s.name} name={s.name} />
              ))}
            </div>
          </motion.div>

          {/* AI Tools — full width, special treatment */}
          <motion.div
            custom={3}
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            className="md:col-span-2 xl:col-span-3 relative overflow-hidden rounded-xl border border-accent/20 bg-gradient-to-br from-accent-muted to-bg-card card-glow-blue p-6"
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Bot size={15} className="text-accent" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-ink-primary">AI-Augmented Workflow</h3>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/20 text-accent text-[10px] font-mono font-medium border border-accent/30">
                      <Zap size={9} />
                      ~30% faster
                    </span>
                  </div>
                  <p className="text-[11px] text-ink-tertiary font-mono mt-0.5">
                    Integrated across every phase of development at Garanti BBVA
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                {skills.aiTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="bg-bg-card/60 backdrop-blur-sm rounded-lg border border-border p-4 hover:border-accent/30 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-base">{tool.icon}</span>
                      <span className="font-medium text-sm text-ink-primary">{tool.name}</span>
                    </div>
                    <p className="text-xs text-ink-secondary leading-relaxed">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

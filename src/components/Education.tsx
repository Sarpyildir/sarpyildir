import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Star } from 'lucide-react'
import { education } from '../data/portfolio'
import SectionHeader from './ui/SectionHeader'
import Badge from './ui/Badge'

export default function Education() {
  return (
    <section id="education" className="py-24 bg-bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="// foundation"
          title="Education"
          description="Solid theoretical grounding from one of Turkey's top-ranked engineering universities."
        />

        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-bg-card rounded-xl border border-border p-8 card-glow hover:border-border-strong transition-all duration-300 overflow-hidden group"
          >
            {/* Decorative blue accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-transparent rounded-l-xl" />

            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/3 rounded-full blur-[60px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-muted border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink-primary">{education.school}</h3>
                  <p className="text-accent font-medium mt-0.5">{education.degree}</p>
                </div>
              </div>

              {/* Meta row */}
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-ink-secondary">
                <div className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-ink-tertiary" />
                  {education.period}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-ink-tertiary" />
                  {education.location}
                </div>
                <div className="flex items-center gap-1.5">
                  <Star size={13} className="text-accent" />
                  <span className="font-medium text-ink-primary">GPA {education.gpa}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5 mb-6">
                {education.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-ink-secondary leading-relaxed">
                    <div className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0 mt-2" />
                    {h}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {['Algorithms', 'Data Structures', 'Distributed Systems', 'Software Architecture', 'Database Systems'].map(
                  (tag) => (
                    <Badge key={tag} variant="muted" size="sm">
                      {tag}
                    </Badge>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

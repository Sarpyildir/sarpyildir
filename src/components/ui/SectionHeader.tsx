import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeader({ eyebrow, title, description, centered }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <p className="text-xs font-mono font-medium text-accent tracking-[0.15em] uppercase mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-primary mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-ink-secondary leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}

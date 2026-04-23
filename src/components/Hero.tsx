import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, Linkedin, Download, ArrowDown, Zap, MapPin } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'
import { useCountUp } from '../hooks/useCountUp'
import ScrambleText from './ui/ScrambleText'

const ROLES = [
  'Full-Stack Developer',
  'Java / Spring Boot Engineer',
  'React & TypeScript Developer',
  'AI-Augmented Developer',
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

function StatCounter({
  value,
  label,
  prefix = '',
  suffix = '',
  isFloat,
}: {
  value: number
  label: string
  prefix?: string
  suffix?: string
  isFloat?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { value: count, trigger } = useCountUp(isFloat ? value * 100 : value, 1800)

  useEffect(() => {
    if (inView) trigger()
  }, [inView, trigger])

  const display = isFloat ? (count / 100).toFixed(2) : count

  return (
    <div ref={ref}>
      <p className="text-2xl font-semibold text-ink-primary tabular-nums">
        {prefix}{display}{suffix}
      </p>
      <p className="text-xs text-ink-tertiary mt-0.5 font-mono">{label}</p>
    </div>
  )
}

export default function Hero() {
  const role = useTypewriter(ROLES)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, #252525 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, #080808 100%)',
        }}
      />
      {/* Animated blue glow blob */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          {/* Status badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-card border border-border text-xs font-mono text-ink-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
              Available for new opportunities
              <span className="text-ink-tertiary">·</span>
              <MapPin size={11} />
              {personalInfo.location}
            </span>
          </motion.div>

          {/* Name — ScrambleText on "Yıldırım" */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6 select-none"
          >
            <span className="text-ink-primary">Sarp </span>
            <ScrambleText
              text="Yıldırım"
              className="text-gradient-blue inline-block"
            />
          </motion.h1>

          {/* Typewriter role */}
          <motion.p
            variants={item}
            className="text-xl sm:text-2xl text-ink-secondary font-light mb-4 leading-relaxed h-9 flex items-center"
          >
            <span className="text-ink-primary font-medium">{role}</span>
            <span className="ml-0.5 inline-block w-[2px] h-6 bg-accent animate-blink" />
          </motion.p>

          {/* Sub-line */}
          <motion.p variants={item} className="text-base text-ink-secondary mb-6 max-w-xl">
            Building enterprise-grade systems at{' '}
            <span className="text-ink-primary">Garanti BBVA Teknoloji</span> with Java/Spring Boot
            &amp; React.
          </motion.p>

          {/* AI tagline */}
          <motion.div variants={item} className="mb-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-accent-muted border border-accent/20 text-accent text-sm font-medium">
              <Zap size={14} className="flex-shrink-0" />
              {personalInfo.tagline}
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-16">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download size={15} />
              Download Resume
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-bg-card hover:bg-bg-elevated border border-border hover:border-border-strong text-ink-primary font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-bg-card hover:bg-bg-elevated border border-border hover:border-border-strong text-ink-primary font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
          </motion.div>

          {/* Stats — animated count-up */}
          <motion.div variants={item} className="flex flex-wrap gap-8">
            <StatCounter value={2} suffix="+" label="Years in fintech" />
            <StatCounter value={3} label="Enterprise banks" />
            <StatCounter value={30} prefix="~" suffix="%" label="AI speed boost" />
            <StatCounter value={3.22} label="Bilkent GPA" isFloat />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#experience"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-tertiary hover:text-ink-secondary transition-colors"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.a>
    </section>
  )
}

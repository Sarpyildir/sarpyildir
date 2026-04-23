import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { terminalLines } from '../data/portfolio'

type LineType = 'command' | 'output' | 'hash' | 'success'

interface RenderedLine {
  type: LineType
  content: string
}

function TerminalLine({ line }: { line: RenderedLine }) {
  if (line.type === 'command') {
    return (
      <div className="flex items-center gap-2">
        <span className="text-emerald font-mono text-sm select-none">sarp@portfolio:~$</span>
        <span className="text-ink-primary font-mono text-sm">{line.content}</span>
      </div>
    )
  }
  if (line.type === 'hash') {
    const [hash, ...rest] = line.content.split('  ')
    return (
      <div className="font-mono text-sm pl-4">
        <span className="text-accent/70">{hash}</span>
        <span className="text-ink-secondary">{'  ' + rest.join('  ')}</span>
      </div>
    )
  }
  if (line.type === 'success') {
    return (
      <div className="font-mono text-sm pl-4 text-emerald">{line.content}</div>
    )
  }
  return (
    <div className="font-mono text-sm pl-4 text-ink-secondary">{line.content}</div>
  )
}

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState<RenderedLine[]>([])
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    terminalLines.forEach(({ delay, type, content }) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, { type, content }])
      }, delay)
    })
  }, [inView])

  return (
    <section className="py-24 bg-bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-10"
          >
            <p className="text-xs font-mono font-medium text-accent tracking-[0.15em] uppercase mb-3">
              // terminal
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-primary">
              In the machine
            </h2>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl overflow-hidden border border-border card-glow"
          >
            {/* macOS-style window chrome */}
            <div className="bg-[#1A1A1A] border-b border-border flex items-center gap-2 px-4 py-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <span className="flex-1 text-center text-xs font-mono text-ink-tertiary">
                sarp@portfolio — bash — 80×24
              </span>
            </div>

            {/* Terminal body */}
            <div className="bg-[#0D0D0D] p-5 min-h-[320px] space-y-1.5 overflow-y-auto">
              {visibleLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <TerminalLine line={line} />
                </motion.div>
              ))}

              {/* Blinking cursor */}
              <div className="flex items-center gap-2 mt-1">
                <span className="text-emerald font-mono text-sm select-none">sarp@portfolio:~$</span>
                <span className="inline-block w-2 h-4 bg-ink-primary animate-blink" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

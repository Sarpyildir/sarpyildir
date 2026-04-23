import { useRef, type ReactNode, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface TiltCardProps {
  children: ReactNode
  className?: string
  intensity?: number
}

export default function TiltCard({ children, className = '', intensity = 7 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(0.5)
  const rawY = useMotionValue(0.5)

  const x = useSpring(rawX, { stiffness: 220, damping: 26 })
  const y = useSpring(rawY, { stiffness: 220, damping: 26 })

  const rotateX = useTransform(y, [0, 1], [intensity, -intensity])
  const rotateY = useTransform(x, [0, 1], [-intensity, intensity])

  // Glow follows cursor inside the card
  const glowLeft = useTransform(x, [0, 1], ['0%', '100%'])
  const glowTop = useTransform(y, [0, 1], ['0%', '100%'])

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    rawX.set((e.clientX - rect.left) / rect.width)
    rawY.set((e.clientY - rect.top) / rect.height)
  }

  const onLeave = () => {
    rawX.set(0.5)
    rawY.set(0.5)
  }

  return (
    <div style={{ perspective: '900px' }} className={className}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative h-full"
      >
        {/* Moving inner glow */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(180px circle at ${glowLeft} ${glowTop}, rgba(59,130,246,0.10), transparent 70%)`,
          }}
        />
        {children}
      </motion.div>
    </div>
  )
}

import { useScroll, useSpring, motion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #3B82F6 0%, #818CF8 50%, #60A5FA 100%)',
        boxShadow: '0 0 8px rgba(59,130,246,0.6)',
      }}
    />
  )
}

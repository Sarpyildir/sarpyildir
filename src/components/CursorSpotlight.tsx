import { useEffect, useRef, useState } from 'react'

export default function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // No stale closure — always set the desired value directly
    const onMove = (e: MouseEvent) => {
      el.style.setProperty('--x', `${e.clientX}px`)
      el.style.setProperty('--y', `${e.clientY}px`)
      setVisible(true)
    }
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, []) // safe: no captured state

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[60] transition-opacity duration-500"
      style={{
        opacity: visible ? 1 : 0,
        background:
          'radial-gradient(650px circle at var(--x, -999px) var(--y, -999px), rgba(59,130,246,0.055) 0%, rgba(59,130,246,0.015) 35%, transparent 65%)',
      }}
    />
  )
}

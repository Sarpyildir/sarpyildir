import { useState, useEffect, useRef, useCallback } from 'react'

export function useCountUp(target: number, durationMs = 1800) {
  const [value, setValue] = useState(0)
  const [active, setActive] = useState(false)
  const rafRef = useRef<number>(0)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    if (!active) return
    startRef.current = null

    const tick = (ts: number) => {
      if (!startRef.current) startRef.current = ts
      const elapsed = ts - startRef.current
      const progress = Math.min(elapsed / durationMs, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [active, target, durationMs])

  const trigger = useCallback(() => setActive(true), [])
  return { value, trigger }
}

import { useState, useRef, type ReactNode } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%'

interface ScrambleTextProps {
  text: string
  className?: string
  tag?: 'span' | 'h1' | 'h2' | 'p'
  children?: ReactNode
}

export default function ScrambleText({ text, className, tag: Tag = 'span' }: ScrambleTextProps) {
  const [displayed, setDisplayed] = useState(text)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const iterRef = useRef(0)

  const scramble = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    iterRef.current = 0

    intervalRef.current = setInterval(() => {
      setDisplayed(
        text
          .split('')
          .map((char, i) => {
            if (/\s|\/|-|\./.test(char)) return char
            if (i < Math.floor(iterRef.current)) return text[i]
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join(''),
      )
      iterRef.current += 0.45
      if (iterRef.current >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setDisplayed(text)
      }
    }, 28)
  }

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setDisplayed(text)
  }

  return (
    <Tag onMouseEnter={scramble} onMouseLeave={reset} className={`cursor-default ${className ?? ''}`}>
      {displayed}
    </Tag>
  )
}

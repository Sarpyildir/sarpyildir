import { type ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'blue' | 'green' | 'outline' | 'muted'
  size?: 'sm' | 'md'
  dot?: boolean
}

export default function Badge({ children, variant = 'default', size = 'md', dot }: BadgeProps) {
  const variants = {
    default: 'bg-bg-elevated border border-border text-ink-secondary',
    blue: 'bg-accent-muted border border-accent/20 text-accent',
    green: 'bg-emerald-muted border border-emerald/20 text-emerald',
    outline: 'border border-border text-ink-secondary bg-transparent',
    muted: 'bg-bg-card text-ink-tertiary border border-border-subtle',
  }

  const sizes = {
    sm: 'px-2 py-0.5 text-[11px]',
    md: 'px-2.5 py-1 text-xs',
  }

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md font-mono font-medium ${variants[variant]} ${sizes[size]}`}>
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${variant === 'green' ? 'bg-emerald animate-pulse' : 'bg-accent animate-pulse'}`} />
      )}
      {children}
    </span>
  )
}

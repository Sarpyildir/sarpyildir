import { type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  target?: string
  rel?: string
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  target,
  rel,
  disabled,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 select-none'

  const variants = {
    primary:
      'bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/20 hover:shadow-accent/30',
    secondary:
      'bg-bg-card hover:bg-bg-elevated border border-border hover:border-border-strong text-ink-primary',
    ghost: 'text-ink-secondary hover:text-ink-primary hover:bg-bg-elevated',
    outline: 'border border-border hover:border-border-strong text-ink-primary hover:bg-bg-card',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }

  const disabledClass = disabled ? 'opacity-50 pointer-events-none' : ''

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${disabledClass} ${className}`

  if (href) {
    return (
      <a href={href} className={cls} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={cls} disabled={disabled}>
      {children}
    </button>
  )
}

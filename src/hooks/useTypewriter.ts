import { useState, useEffect } from 'react'

type Phase = 'typing' | 'pausing' | 'deleting'

interface State {
  phraseIdx: number
  charIdx: number
  phase: Phase
}

export function useTypewriter(
  phrases: string[],
  typingMs = 65,
  deletingMs = 38,
  pauseMs = 2400,
) {
  const [state, setState] = useState<State>({ phraseIdx: 0, charIdx: 0, phase: 'typing' })

  useEffect(() => {
    const phrase = phrases[state.phraseIdx]

    if (state.phase === 'typing') {
      if (state.charIdx < phrase.length) {
        const t = setTimeout(
          () => setState(s => ({ ...s, charIdx: s.charIdx + 1 })),
          typingMs,
        )
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setState(s => ({ ...s, phase: 'pausing' })), pauseMs)
      return () => clearTimeout(t)
    }

    if (state.phase === 'pausing') {
      setState(s => ({ ...s, phase: 'deleting' }))
      return
    }

    if (state.phase === 'deleting') {
      if (state.charIdx > 0) {
        const t = setTimeout(
          () => setState(s => ({ ...s, charIdx: s.charIdx - 1 })),
          deletingMs,
        )
        return () => clearTimeout(t)
      }
      setState(s => ({
        phraseIdx: (s.phraseIdx + 1) % phrases.length,
        charIdx: 0,
        phase: 'typing',
      }))
    }
  }, [state, phrases, typingMs, deletingMs, pauseMs])

  return phrases[state.phraseIdx].slice(0, state.charIdx)
}

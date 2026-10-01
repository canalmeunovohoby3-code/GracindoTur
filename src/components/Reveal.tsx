import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, ElementType, ReactNode } from 'react'

type RevealVariant = 'up' | 'fade' | 'left' | 'right' | 'scale' | 'rise'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  variant?: RevealVariant
  /** Atraso em ms para encadear elementos de uma mesma fileira. */
  delay?: number
  className?: string
  style?: CSSProperties
  id?: string
}

const VARIANTS: Record<RevealVariant, string> = {
  up: '',
  fade: 'reveal--fade',
  left: 'reveal--left',
  right: 'reveal--right',
  scale: 'reveal--scale',
  rise: 'reveal--rise',
}

/**
 * Entrada suave quando o elemento entra na viewport.
 * Usa IntersectionObserver, dispara uma única vez e respeita
 * prefers-reduced-motion via CSS.
 */
export function Reveal({
  children,
  as,
  variant = 'up',
  delay = 0,
  className = '',
  style,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  const Tag = (as ?? 'div') as ElementType

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -7% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={['reveal', VARIANTS[variant], visible ? 'is-visible' : '', className]
        .filter(Boolean)
        .join(' ')}
      style={{ '--reveal-delay': `${delay}ms`, ...style } as CSSProperties}
    >
      {children}
    </Tag>
  )
}

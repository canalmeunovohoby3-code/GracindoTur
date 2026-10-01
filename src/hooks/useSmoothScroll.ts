import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../lib/motionPrefs'

/** Easing suave (in-out cúbico), o mesmo espírito do sistema de movimento. */
function easeInOut(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

/**
 * Navegação suave entre as âncoras do menu.
 *
 * A rolagem é animada por requestAnimationFrame (e não pelo `behavior: smooth`
 * nativo) por dois motivos: o resultado é idêntico em todos os navegadores e
 * a duração acompanha a distância, evitando transições exageradamente lentas.
 * Com prefers-reduced-motion o salto é instantâneo.
 */
export function useSmoothScroll() {
  const cancelRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    const stop = () => {
      cancelRef.current?.()
      cancelRef.current = null
    }

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const target = event.target as HTMLElement | null
      const anchor = target?.closest?.('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return
      if (anchor.classList.contains('skip-link')) return

      const href = anchor.getAttribute('href') ?? ''
      if (href.length < 2 || href === '#') return

      const section = document.getElementById(href.slice(1))
      if (!section) return

      event.preventDefault()
      stop()

      const bar = document.querySelector<HTMLElement>('.header__bar')
      const offset = (bar?.offsetHeight ?? 96) + 20
      const destination = Math.max(
        0,
        section.getBoundingClientRect().top + window.scrollY - offset,
      )

      if (window.history?.pushState) {
        window.history.pushState(null, '', href)
      }

      if (prefersReducedMotion()) {
        window.scrollTo(0, destination)
        return
      }

      const startY = window.scrollY
      const delta = destination - startY
      if (Math.abs(delta) < 2) {
        window.scrollTo(0, destination)
        return
      }

      // Duração proporcional à distância, limitada para não ficar lenta.
      const duration = Math.min(950, Math.max(420, Math.abs(delta) * 0.42))
      const startedAt = performance.now()
      let frame = 0

      const step = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / duration)
        window.scrollTo(0, startY + delta * easeInOut(progress))
        if (progress < 1) {
          frame = window.requestAnimationFrame(step)
        } else {
          cancelRef.current = null
        }
      }

      frame = window.requestAnimationFrame(step)
      cancelRef.current = () => window.cancelAnimationFrame(frame)
    }

    document.addEventListener('click', onClick)
    window.addEventListener('wheel', stop, { passive: true })
    window.addEventListener('touchstart', stop, { passive: true })

    return () => {
      stop()
      document.removeEventListener('click', onClick)
      window.removeEventListener('wheel', stop)
      window.removeEventListener('touchstart', stop)
    }
  }, [])
}

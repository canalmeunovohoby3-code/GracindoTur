import { useEffect } from 'react'

/**
 * Parallax extremamente sutil.
 * Aplica um deslocamento vertical pequeno em elementos marcados com
 * `data-parallax` (valor = intensidade, ex.: data-parallax="0.1"),
 * atualizando `--parallax-shift` dentro de um requestAnimationFrame.
 * Desligado automaticamente com prefers-reduced-motion.
 */
export function useParallax() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-parallax]'),
    )
    if (elements.length === 0) return

    let frame = 0

    const update = () => {
      frame = 0
      const viewport = window.innerHeight

      for (const el of elements) {
        const rect = el.getBoundingClientRect()
        if (rect.bottom < -240 || rect.top > viewport + 240) continue

        const speed = Number(el.dataset.parallax) || 0.1
        const progress = (rect.top + rect.height / 2 - viewport / 2) / viewport
        const shift = (-progress * speed * rect.height) / 2
        el.style.setProperty('--parallax-shift', `${shift.toFixed(2)}px`)
      }
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])
}

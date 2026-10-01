/**
 * Preferências de movimento.
 *
 * O navegador informa `prefers-reduced-motion` a partir do sistema
 * operacional (no Windows: Configurações → Acessibilidade → Efeitos visuais).
 * Quando essa opção está desligada, o site reduz o movimento por acessibilidade.
 *
 * Para revisar a experiência completa sem alterar o sistema, use a URL:
 *   http://localhost:5173/?motion=full
 * O override é explícito e temporário (só vale para a aba atual).
 */

const FORCE_MOTION_CLASS = 'force-motion'

export function enableMotionOverrideFromUrl(): void {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  if (params.get('motion') === 'full') {
    document.documentElement.classList.add(FORCE_MOTION_CLASS)
  }
}

export function isMotionForced(): boolean {
  if (typeof document === 'undefined') return false
  return document.documentElement.classList.contains(FORCE_MOTION_CLASS)
}

/** true quando o usuário pediu menos movimento (e não houve override). */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  if (isMotionForced()) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

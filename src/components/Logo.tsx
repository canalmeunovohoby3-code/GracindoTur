import { LOGO } from '../data/site'
import './Logo.css'

type LogoProps = {
  /** 'dark' = sobre fundo claro; 'light' = sobre fundo escuro. */
  tone?: 'dark' | 'light'
  /** Esconde o descritor "Transporte executivo" (usado só na marca alternativa). */
  compact?: boolean
  className?: string
}

/**
 * Marca da Gracindo Tur.
 * Com a logo real disponível em /public/logo.svg, exibe apenas o arquivo —
 * ele já traz o nome "Gracindo Tur", então nada é duplicado ao lado.
 * Se o arquivo não existir, desenha um monograma tipográfico de apoio.
 */
export function Logo({ tone = 'dark', compact = false, className = '' }: LogoProps) {
  if (LOGO.src) {
    return (
      <span className={`logo logo--${tone} ${className}`.trim()}>
        <img
          className="logo__img"
          src={LOGO.src}
          alt={LOGO.alt}
          width={LOGO.width}
          height={LOGO.height}
          decoding="async"
        />
      </span>
    )
  }

  return (
    <span className={`logo logo--${tone} ${className}`.trim()}>
      <span className="logo__mark" aria-hidden>
        <svg viewBox="0 0 48 48" width="48" height="48">
          <rect width="48" height="48" rx="12" className="logo__mark-bg" />
          <path
            d="M15 31c0-6 3.8-10 9-10 3 0 5.3.8 6.8 2.3l-3 3.7c-.8-.8-2.2-1.5-3.8-1.5-3 0-4.6 2.3-4.6 5.4s1.7 5.5 4.7 5.5c.8 0 1.5-.1 2.1-.3v-2.6h-3v-3.8h7.6v9.1c-1.5 1-3.8 1.5-6.1 1.5-6 0-9.7-3.8-9.7-9.3Z"
            className="logo__mark-g"
          />
          <path d="M10 18h28" className="logo__mark-line" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
      </span>

      <span className="logo__text">
        <span className="logo__word">{LOGO.wordmark}</span>
        {!compact && <span className="logo__descriptor">Transporte executivo</span>}
      </span>
    </span>
  )
}

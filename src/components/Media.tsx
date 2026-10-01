import type { ImageAsset, VehicleKind } from '../types'
import { VehicleArt } from './VehicleArt'
import './Media.css'

type MediaProps = {
  image: ImageAsset
  /** Quando informado e não há foto, desenha a silhueta do veículo. */
  kind?: VehicleKind
  className?: string
  /** Rótulo opcional exibido em cima do placeholder. */
  showPlaceholderLabel?: boolean
  loading?: 'lazy' | 'eager'
}

/**
 * Renderiza a foto real quando existe; caso contrário, desenha um
 * placeholder sofisticado. Trocar a foto é só preencher `image.src`.
 */
export function Media({
  image,
  kind,
  className = '',
  showPlaceholderLabel = false,
  loading = 'lazy',
}: MediaProps) {
  const classes = ['media media-fill', className].filter(Boolean).join(' ')

  if (image.src) {
    return <img className={classes} src={image.src} alt={image.alt} loading={loading} />
  }

  return (
    <span className={`${classes} media--placeholder`} role="img" aria-label={image.alt}>
      <span className="media__sheen" aria-hidden />
      {kind ? <VehicleArt kind={kind} className="media__art" /> : <SceneLines />}
      {showPlaceholderLabel && image.placeholder ? (
        <span className="media__tag">{image.placeholder}</span>
      ) : null}
    </span>
  )
}

/** Linhas abstratas de rota — placeholder para imagens sem veículo. */
function SceneLines() {
  return (
    <svg
      className="media__art media__art--scene"
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <g fill="none" stroke="rgba(255,255,255,0.24)" strokeWidth="2">
        <path d="M-20 210 L120 120 L250 190 L420 90" />
        <path d="M-20 240 L120 150 L250 220 L420 120" />
        <path d="M-20 270 L120 180 L250 250 L420 150" />
      </g>
      <g fill="rgba(255,255,255,0.16)">
        <circle cx="120" cy="120" r="7" />
        <circle cx="250" cy="190" r="7" />
      </g>
      <circle cx="120" cy="120" r="3" fill="#dc6c16" />
      <circle cx="250" cy="190" r="3" fill="#dc6c16" />
    </svg>
  )
}

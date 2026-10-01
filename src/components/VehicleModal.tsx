import { useCallback, useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import type { Vehicle } from '../types'
import { whatsappUrl } from '../data/site'
import { vehiclePhotos } from '../data/vehicles'
import { prefersReducedMotion } from '../lib/motionPrefs'
import { Media } from './Media'
import { IconChevronLeft, IconChevronRight, IconClose, IconMapPin, IconWhatsApp } from './Icons'
import './VehicleModal.css'

type VehicleModalProps = {
  vehicle: Vehicle
  onClose: () => void
}

const stagger = (delay: number) => ({ '--d': `${delay}ms` }) as CSSProperties

/**
 * Detalhe do veículo em modal.
 *
 * As setas, o teclado e as miniaturas percorrem as fotos DESTE veículo.
 * Não há navegação entre veículos aqui: para ver outro, fecha e abre o card.
 */
export function VehicleModal({ vehicle, onClose }: VehicleModalProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)
  const [closing, setClosing] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const closingRef = useRef(false)

  const photos = vehiclePhotos(vehicle)
  const photoCount = photos.length
  const hasGallery = photoCount > 1

  const setHandlers = useRef({ onClose })
  setHandlers.current = { onClose }

  const reduceMotion = useRef(prefersReducedMotion()).current

  // Abrir outro veículo -> galeria recomeça na capa daquele veículo.
  useEffect(() => {
    setPhotoIndex(0)
  }, [vehicle.id])

  const goPrevPhoto = useCallback(() => {
    setPhotoIndex((current) => (current - 1 + photoCount) % photoCount)
  }, [photoCount])

  const goNextPhoto = useCallback(() => {
    setPhotoIndex((current) => (current + 1) % photoCount)
  }, [photoCount])

  const requestClose = useCallback(() => {
    if (closingRef.current) return
    closingRef.current = true
    setClosing(true)
    window.setTimeout(() => setHandlers.current.onClose(), reduceMotion ? 0 : 260)
  }, [reduceMotion])

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.classList.add('is-locked')

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') requestClose()
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setPhotoIndex((current) => (current - 1 + photoCount) % photoCount)
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setPhotoIndex((current) => (current + 1) % photoCount)
      }
      if (event.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])',
        )
        if (focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        } else if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        }
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('is-locked')
      previouslyFocused?.focus?.()
    }
  }, [requestClose, photoCount])

  const message = `Olá, Gracindo Tur! Gostaria de solicitar um orçamento para o veículo ${vehicle.name} (${vehicle.category}).`

  return (
    <div
      className={`vmodal ${closing ? 'is-closing' : ''}`}
      role="presentation"
      onClick={requestClose}
    >
      <div
        className="vmodal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="vmodal-title"
        ref={panelRef}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="vmodal__media">
          <Media
            key={photoIndex}
            image={photos[photoIndex]}
            kind={vehicle.kind}
            loading="eager"
            className="vmodal__img"
          />

          {hasGallery && (
            <>
              <span className="vmodal__counter">
                {String(photoIndex + 1).padStart(2, '0')} / {String(photoCount).padStart(2, '0')}
              </span>

              <button
                type="button"
                className="vmodal__nav vmodal__nav--prev"
                onClick={goPrevPhoto}
                aria-label="Foto anterior"
              >
                <IconChevronLeft size={22} />
              </button>
              <button
                type="button"
                className="vmodal__nav vmodal__nav--next"
                onClick={goNextPhoto}
                aria-label="Próxima foto"
              >
                <IconChevronRight size={22} />
              </button>

              <div className="vmodal__gallery">
                <div className="vmodal__thumbs" role="tablist" aria-label="Fotos deste veículo">
                  {photos.map((photo, i) => (
                    <button
                      key={`${vehicle.id}-${i}`}
                      type="button"
                      role="tab"
                      aria-selected={i === photoIndex}
                      aria-label={`Foto ${i + 1} de ${photoCount}`}
                      className={`vmodal__thumb ${i === photoIndex ? 'is-active' : ''}`}
                      onClick={() => setPhotoIndex(i)}
                    >
                      <Media image={photo} kind={vehicle.kind} />
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        <div className="vmodal__body">
          <button
            type="button"
            className="vmodal__close"
            onClick={requestClose}
            aria-label="Fechar detalhes"
            ref={closeRef}
          >
            <IconClose size={22} />
          </button>

          <span className="vmodal__cat vmodal__stagger" style={stagger(120)}>
            {vehicle.category}
          </span>
          <h3 className="vmodal__title vmodal__stagger" id="vmodal-title" style={stagger(180)}>
            {vehicle.name}
          </h3>
          <p className="vmodal__tagline vmodal__stagger" style={stagger(240)}>
            {vehicle.tagline}
          </p>
          <p className="vmodal__desc vmodal__stagger" style={stagger(300)}>
            {vehicle.description}
          </p>

          <ul className="vmodal__specs vmodal__stagger" style={stagger(360)}>
            {vehicle.specs.map((spec) => (
              <li key={spec.label}>
                <span className="vmodal__spec-label">{spec.label}</span>
                <span className="vmodal__spec-value">{spec.value}</span>
              </li>
            ))}
          </ul>

          <div className="vmodal__foot vmodal__stagger" style={stagger(430)}>
            <a
              className="btn btn--primary btn--block"
              href={whatsappUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp size={18} />
              Consultar este veículo
            </a>
            <span className="vmodal__note">
              <IconMapPin size={15} />
              Atendimento em Cuiabá — MT
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

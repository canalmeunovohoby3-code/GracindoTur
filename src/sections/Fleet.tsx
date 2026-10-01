import { useState } from 'react'
import { VEHICLES, vehiclePhotos } from '../data/vehicles'
import { WHATSAPP_MESSAGES, whatsappUrl } from '../data/site'
import { Media } from '../components/Media'
import { Reveal } from '../components/Reveal'
import { VehicleModal } from '../components/VehicleModal'
import { IconArrowRight, IconExpand, IconWhatsApp } from '../components/Icons'
import './Fleet.css'

export function Fleet() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const close = () => setOpenIndex(null)

  return (
    <section className="section fleet" id="frota">
      <div className="container">
        <div className="fleet__head">
          <Reveal className="fleet__head-text">
            <span className="eyebrow">Frota</span>
            <h2 className="section-title">Nossa frota</h2>
            <p className="section-lead">
              Veículos preparados para oferecer conforto, segurança e uma experiência diferenciada
              em cada viagem.
            </p>
          </Reveal>

          <Reveal className="fleet__head-aside" variant="right" delay={80}>
            <span className="fleet__count">
              <strong>Sedans, SUVs, vans e ônibus</strong>
              <span>Veículos executivos para diferentes necessidades</span>
            </span>
            <a
              className="btn btn--navy"
              href={whatsappUrl(WHATSAPP_MESSAGES.frota)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp size={18} />
              Consultar disponibilidade
            </a>
          </Reveal>
        </div>

        <ul className="fleet__grid">
          {VEHICLES.map((vehicle, index) => (
            <Reveal as="li" key={vehicle.id} variant="scale" delay={index * 90}>
              <button
                type="button"
                className="fleet-card"
                onClick={() => setOpenIndex(index)}
                aria-label={`Ver detalhes de ${vehicle.name} — ${vehicle.category}`}
              >
                <span className="fleet-card__media">
                  <Media image={vehiclePhotos(vehicle)[0]} kind={vehicle.kind} />
                  <span className="fleet-card__shade" aria-hidden />
                  <span className="fleet-card__cat">{vehicle.category}</span>
                  <span className="fleet-card__expand" aria-hidden>
                    <IconExpand size={18} />
                  </span>
                </span>

                <span className="fleet-card__body">
                  <span className="fleet-card__index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="fleet-card__text">
                    <strong className="fleet-card__name">{vehicle.name}</strong>
                    <span className="fleet-card__tagline">{vehicle.tagline}</span>
                  </span>
                  <span className="fleet-card__more">
                    Ver detalhes
                    <IconArrowRight size={16} />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {openIndex !== null && (
        <VehicleModal vehicle={VEHICLES[openIndex]} onClose={close} />
      )}
    </section>
  )
}

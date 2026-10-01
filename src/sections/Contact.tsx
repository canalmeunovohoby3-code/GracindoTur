import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LOCATION,
  MAP_EMBED_URL,
  MAP_LINK_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_MESSAGES,
  whatsappUrl,
} from '../data/site'
import { Reveal } from '../components/Reveal'
import { IconArrowUpRight, IconInstagram, IconMapPin, IconWhatsApp } from '../components/Icons'
import './Contact.css'

export function Contact() {
  return (
    <section className="section section--night contact" id="contato">
      <div className="container contact__grid">
        <Reveal className="contact__content" variant="rise">
          <span className="eyebrow">Orçamento</span>
          <h2 className="section-title">
            Seu próximo destino começa com uma experiência melhor.
          </h2>
          <p className="contact__lead">
            Fale com a Gracindo Tur e encontre a solução de transporte ideal para sua necessidade.
          </p>

          <a
            className="btn btn--primary btn--pulse contact__cta"
            href={whatsappUrl(WHATSAPP_MESSAGES.contato)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsApp size={20} />
            Solicitar orçamento pelo WhatsApp
          </a>

          <ul className="contact__channels">
            <li>
              <span className="contact__channel-icon">
                <IconWhatsApp size={19} />
              </span>
              <span className="contact__channel-text">
                <small>WhatsApp</small>
                <a
                  href={whatsappUrl(WHATSAPP_MESSAGES.geral)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </span>
            </li>
            <li>
              <span className="contact__channel-icon">
                <IconInstagram size={19} />
              </span>
              <span className="contact__channel-text">
                <small>Instagram</small>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  {INSTAGRAM_HANDLE}
                </a>
              </span>
            </li>
            <li>
              <span className="contact__channel-icon">
                <IconMapPin size={19} />
              </span>
              <span className="contact__channel-text">
                <small>Localização</small>
                <span>{LOCATION.label}</span>
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal className="contact__map-card" variant="right" delay={120}>
          <div className="contact__map-head">
            <span className="contact__map-title">Cuiabá — Mato Grosso</span>
            <a
              className="contact__map-link"
              href={MAP_LINK_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir no Google Maps
              <IconArrowUpRight size={16} />
            </a>
          </div>

          <div className="contact__map">
            <iframe
              title="Localização da Gracindo Tur — Cuiabá, Mato Grosso"
              src={MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

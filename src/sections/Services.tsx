import { SERVICES } from '../data/services'
import { WHATSAPP_MESSAGES, whatsappUrl } from '../data/site'
import { Media } from '../components/Media'
import { Reveal } from '../components/Reveal'
import { IconArrowUpRight, IconWhatsApp } from '../components/Icons'
import './Services.css'

export function Services() {
  return (
    <section className="section services" id="servicos">
      <div className="container">
        <div className="services__head">
          <Reveal className="services__head-text">
            <span className="eyebrow">Serviços</span>
            <h2 className="section-title">Transporte executivo para cada necessidade.</h2>
          </Reveal>
          <Reveal className="services__head-aside" variant="right" delay={80}>
            <p className="services__intro">
              Da locação de veículos executivos ao transporte de grupos, a Gracindo Tur atende
              diferentes perfis de deslocamento com o mesmo padrão de atendimento.
            </p>
          </Reveal>
        </div>

        <div className="services__grid">
          {SERVICES.map((service, index) => (
            <Reveal as="article" key={service.id} className="service" delay={index * 110}>
              <a className="service__link" href={whatsappUrl(service.whatsapp)} target="_blank" rel="noopener noreferrer">
                <span className="service__media">
                  <Media image={service.image} kind={service.kind} />
                  <span className="service__shade" aria-hidden />
                  <span className="service__number" aria-hidden>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="service__eyebrow">{service.eyebrow}</span>
                </span>

                <span className="service__body">
                  <span className="service__title-row">
                    <h3 className="service__title">{service.title}</h3>
                    <span className="service__icon" aria-hidden>
                      <IconArrowUpRight size={18} />
                    </span>
                  </span>
                  <p className="service__desc">{service.description}</p>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="services__cta" variant="fade">
          <p>Precisa de uma solução específica para o seu deslocamento?</p>
          <a
            className="btn btn--primary"
            href={whatsappUrl(WHATSAPP_MESSAGES.servicos)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsApp size={18} />
            Falar com a Gracindo Tur
          </a>
        </Reveal>
      </div>
    </section>
  )
}

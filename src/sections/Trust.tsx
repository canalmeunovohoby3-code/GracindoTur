import { FOUNDING_LABEL, LOCATION } from '../data/site'
import { TRUST_POINTS } from '../data/differentials'
import { Media } from '../components/Media'
import { Reveal } from '../components/Reveal'
import './Trust.css'

export function Trust() {
  return (
    <section className="section trust" id="confianca">
      <div className="container trust__grid">
        <Reveal className="trust__visual" variant="left">
          <div className="trust__media parallax" data-parallax="0.05">
            <Media
              image={{
                src: '/Master executiva luxo alto padrão para 11 passageiros/3.png',
                alt: 'Van executiva de luxo da Gracindo Tur',
                placeholder: 'Imagem de transporte executivo',
              }}
              kind="onibus"
            />
            <span className="trust__shade" aria-hidden />
          </div>

          <div className="trust__badge">
            <span className="trust__badge-year">{FOUNDING_LABEL}</span>
            <span className="trust__badge-text">
              Experiência no transporte de passageiros
            </span>
          </div>
        </Reveal>

        <Reveal className="trust__content" variant="right" delay={100}>
          <span className="eyebrow">Experiência</span>
          <h2 className="section-title">Confiança construída ao longo do caminho.</h2>
          <p className="trust__lead">
            Uma trajetória construída com dedicação em cada serviço, sempre com atendimento
            personalizado e compromisso com a qualidade.
          </p>

          <ul className="trust__list">
            {TRUST_POINTS.map((point, index) => (
              <li key={point.id} className="trust__item">
                <span className="trust__item-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="trust__item-text">
                  <strong>{point.label}</strong>
                  <small>{point.detail}</small>
                </span>
              </li>
            ))}
          </ul>

          <span className="trust__location">{LOCATION.label}</span>
        </Reveal>
      </div>
    </section>
  )
}

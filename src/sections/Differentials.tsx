import type { ComponentType } from 'react'
import { DIFFERENTIALS } from '../data/differentials'
import { Reveal } from '../components/Reveal'
import {
  IconClock,
  IconConcierge,
  IconRoute,
  IconSeat,
  IconShield,
  IconSparkle,
} from '../components/Icons'
import './Differentials.css'

const ICONS: Record<string, ComponentType<{ size?: number }>> = {
  experiencia: IconRoute,
  seguranca: IconShield,
  conforto: IconSeat,
  pontualidade: IconClock,
  atendimento: IconConcierge,
  frota: IconSparkle,
}

export function Differentials() {
  return (
    <section className="section section--night differentials" id="diferenciais">
      <div className="container">
        <div className="differentials__head">
          <Reveal className="differentials__head-text">
            <span className="eyebrow">Por que Gracindo Tur</span>
            <h2 className="section-title">O que sustenta cada viagem.</h2>
          </Reveal>
          <Reveal className="differentials__head-aside" variant="right" delay={80}>
            <p>
              Cada serviço é conduzido por critérios que acompanham a Gracindo Tur desde 2006 e
              seguem presentes em cada atendimento.
            </p>
          </Reveal>
        </div>

        <ul className="differentials__grid">
          {DIFFERENTIALS.map((item, index) => {
            const Icon = ICONS[item.id] ?? IconSparkle
            return (
              <Reveal as="li" key={item.id} className="differential" delay={index * 70}>
                <span className="differential__top">
                  <span className="differential__icon">
                    <Icon size={24} />
                  </span>
                  <span className="differential__index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </span>
                <h3 className="differential__title">{item.title}</h3>
                <p className="differential__desc">{item.description}</p>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

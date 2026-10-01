import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import {
  BRAND_SUPPORT,
  FOUNDING_LABEL,
  LOCATION,
  WHATSAPP_MESSAGES,
  whatsappUrl,
} from '../data/site'
import { IconArrowRight, IconArrowUpRight, IconWhatsApp } from '../components/Icons'
import './Hero.css'

const HERO_SOLUTIONS = [
  { label: 'Veículos executivos', detail: 'Sedans e SUVs' },
  { label: 'Vans executivas de luxo', detail: 'Grupos e deslocamentos' },
  { label: 'Ônibus executivos', detail: 'Transporte de grupos' },
]

/** Palavras do título, com atraso próprio: o texto é construído na tela. */
const TITLE_LINE_1 = [
  { text: 'Excelência', delay: 140 },
  { text: 'em', delay: 210 },
  { text: 'transporte.', delay: 280 },
]

const TITLE_LINE_2 = [
  { text: 'Conforto', delay: 390 },
  { text: 'em', delay: 460 },
  { text: 'cada', delay: 530 },
  { text: 'destino.', delay: 600, accent: true },
]

function HeroWord({
  text,
  delay,
  accent = false,
}: {
  text: string
  delay: number
  accent?: boolean
}) {
  return (
    <span
      className={`hero__word ${accent ? 'hero__word--accent' : ''}`}
      style={{ '--d': `${delay}ms` } as CSSProperties}
    >
      <span className="hero__word-inner">{text}</span>
    </span>
  )
}

export function Hero() {
  // Com movimento reduzido as animações viram fades; o estado é disparado
  // no primeiro frame para que o fade escalonado aconteça do mesmo jeito.
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Dois frames garantem que o estado inicial (opacity 0) foi pintado
    // antes da transição — sem isso o fade seria pulado.
    let second = 0
    const first = window.requestAnimationFrame(() => {
      second = window.requestAnimationFrame(() => setReady(true))
    })
    return () => {
      window.cancelAnimationFrame(first)
      window.cancelAnimationFrame(second)
    }
  }, [])

  return (
    <section className={`hero ${ready ? 'is-ready' : ''}`} id="inicio">
      <div className="hero__bg" aria-hidden>
        <div className="hero__media" data-parallax="0.05">
          <img
            className="hero__photo hero-anim hero-anim--bg"
            src="/hero.png"
            alt="Ônibus executivo da Gracindo Tur"
            width={2945}
            height={2211}
            loading="eager"
            decoding="async"
          />
        </div>
        <svg className="hero__grid" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1.4">
            <path d="M-100 760 L1540 700" />
            <path d="M-100 820 L1540 770" />
            <path d="M-100 880 L1540 850" />
            <path d="M240 900 L560 520" />
            <path d="M700 900 L760 520" />
            <path d="M1180 900 L980 520" />
          </g>
        </svg>
        <span className="hero__glow hero__glow--navy" />
        <span className="hero__glow hero__glow--amber" />
        <div className="hero__scrim" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow hero-anim" style={{ '--d': '60ms' } as CSSProperties}>
            <span className="hero__eyebrow-dot" />
            Transporte executivo • {LOCATION.label}
          </span>

          <h1 className="hero__title">
            <span className="hero__line">
              {TITLE_LINE_1.map((word) => (
                <HeroWord key={word.text} text={word.text} delay={word.delay} />
              ))}
            </span>
            <span className="hero__line hero__line--second">
              {TITLE_LINE_2.map((word) => (
                <HeroWord
                  key={word.text}
                  text={word.text}
                  delay={word.delay}
                  accent={word.accent}
                />
              ))}
            </span>
          </h1>

          <p className="hero__lead hero-anim" style={{ '--d': '740ms' } as CSSProperties}>
            {BRAND_SUPPORT}
          </p>

          <ul className="hero__trust hero-anim" style={{ '--d': '880ms' } as CSSProperties}>
            <li>{FOUNDING_LABEL}</li>
            <li>{LOCATION.label}</li>
            <li>Transporte executivo</li>
          </ul>

          <div className="hero__cta hero-anim" style={{ '--d': '980ms' } as CSSProperties}>
            <a
              className="btn btn--primary btn--pulse"
              href={whatsappUrl(WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp size={18} />
              Solicitar orçamento
            </a>
            <a className="btn btn--on-dark" href="#frota">
              Conhecer nossa frota
              <IconArrowRight size={18} />
            </a>
          </div>
        </div>

        <aside
          className="hero__aside hero-anim hero-anim--right"
          style={{ '--d': '560ms' } as CSSProperties}
        >
          <span className="hero__aside-title">Soluções</span>
          <ul className="hero__solutions">
            {HERO_SOLUTIONS.map((solution, index) => (
              <li key={solution.label}>
                <span className="hero__solution-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="hero__solution-text">
                  <strong>{solution.label}</strong>
                  <small>{solution.detail}</small>
                </span>
              </li>
            ))}
          </ul>
          <a
            className="hero__aside-link"
            href={whatsappUrl(WHATSAPP_MESSAGES.geral)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale com a Gracindo Tur
            <IconArrowUpRight size={16} />
          </a>
        </aside>
      </div>

      <a
        className="hero__scroll hero-anim hero-anim--center"
        style={{ '--d': '1250ms' } as CSSProperties}
        href="#empresa"
        aria-label="Ver mais conteúdo"
      >
        <span className="hero__scroll-line" aria-hidden />
        <span className="hero__scroll-label">Explorar</span>
      </a>
    </section>
  )
}

import { useEffect, useState } from 'react'
import {
  FOUNDING_LABEL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LOCATION,
  NAV_IDS,
  NAV_ITEMS,
  WHATSAPP_DISPLAY,
  WHATSAPP_MESSAGES,
  whatsappUrl,
} from '../data/site'
import { Logo } from './Logo'
import { IconClose, IconInstagram, IconMapPin, IconMenu, IconWhatsApp } from './Icons'
import './Header.css'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState<string>(NAV_IDS[0])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    )
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('is-locked', menuOpen)
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('is-locked')
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-open' : ''}`}>
      <div className="header__top">
        <div className="container header__top-inner">
          <span className="header__top-item">
            <IconMapPin size={15} />
            {LOCATION.label}
          </span>
          <span className="header__top-item header__top-item--sep">
            {FOUNDING_LABEL} no transporte de passageiros
          </span>
          <span className="header__top-links">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <IconInstagram size={15} />
              {INSTAGRAM_HANDLE}
            </a>
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.geral)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp size={15} />
              {WHATSAPP_DISPLAY}
            </a>
          </span>
        </div>
      </div>

      <div className="header__bar">
        <div className="container header__bar-inner">
          <a className="header__brand" href="#inicio" aria-label="Gracindo Tur — início" onClick={close}>
            <Logo />
          </a>

          <nav className="header__nav" aria-label="Navegação principal">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`header__link ${active === item.id ? 'is-active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <a
              className="btn btn--primary header__cta"
              href={whatsappUrl(WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp size={18} />
              Solicitar orçamento
            </a>
            <button
              type="button"
              className="header__toggle"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <IconClose size={24} /> : <IconMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className="header__mobile" aria-hidden={!menuOpen}>
        <nav className="header__mobile-nav" aria-label="Navegação principal (mobile)">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={close}
              className={`header__mobile-link ${active === item.id ? 'is-active' : ''}`}
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <span>{item.label}</span>
              <span className="header__mobile-index">{String(index + 1).padStart(2, '0')}</span>
            </a>
          ))}
        </nav>

        <div className="header__mobile-foot">
          <a
            className="btn btn--primary btn--block"
            href={whatsappUrl(WHATSAPP_MESSAGES.hero)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            <IconWhatsApp size={18} />
            Solicitar orçamento
          </a>
          <div className="header__mobile-meta">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <IconInstagram size={16} />
              {INSTAGRAM_HANDLE}
            </a>
            <span>
              <IconMapPin size={16} />
              {LOCATION.label}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

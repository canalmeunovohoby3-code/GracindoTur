import {
  BRAND_TAGLINE,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LOCATION,
  NAV_ITEMS,
  WHATSAPP_DISPLAY,
  WHATSAPP_MESSAGES,
  whatsappUrl,
} from '../data/site'
import { Logo } from './Logo'
import { IconArrowUpRight, IconInstagram, IconMapPin, IconWhatsApp } from './Icons'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo tone="light" />
          <p className="footer__tagline">{BRAND_TAGLINE}</p>
          <p className="footer__about">
            Locação de veículos executivos, vans de luxo e ônibus executivos em Cuiabá — MT.
            Transporte de passageiros com segurança, conforto e pontualidade desde 2006.
          </p>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Navegação</h3>
          <ul className="footer__links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Contato</h3>
          <ul className="footer__contact">
            <li>
              <a
                href={whatsappUrl(WHATSAPP_MESSAGES.contato)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsApp size={17} />
                {WHATSAPP_DISPLAY}
                <IconArrowUpRight size={15} className="footer__ext" />
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <IconInstagram size={17} />
                {INSTAGRAM_HANDLE}
                <IconArrowUpRight size={15} className="footer__ext" />
              </a>
            </li>
            <li>
              <span>
                <IconMapPin size={17} />
                {LOCATION.label}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} Gracindo Tur. Todos os direitos reservados.</span>
        <span className="footer__since">Desde 2006 • Cuiabá — MT</span>
      </div>
    </footer>
  )
}

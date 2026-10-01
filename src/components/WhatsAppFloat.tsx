import { useEffect, useState } from 'react'
import { WHATSAPP_MESSAGES, whatsappUrl } from '../data/site'
import { IconWhatsApp } from './Icons'
import './WhatsAppFloat.css'

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      className={`wa-float ${visible ? 'is-visible' : ''}`}
      href={whatsappUrl(WHATSAPP_MESSAGES.geral)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Gracindo Tur no WhatsApp"
    >
      <span className="wa-float__pulse" aria-hidden />
      <IconWhatsApp size={26} />
      <span className="wa-float__label">Falar no WhatsApp</span>
    </a>
  )
}

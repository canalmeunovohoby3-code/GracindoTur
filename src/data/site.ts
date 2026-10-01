import type { NavItem } from '../types'

/* ============================================================
   Marca e dados institucionais da Gracindo Tur
   ============================================================ */

export const SITE_NAME = 'Gracindo Tur'
export const SITE_URL = 'https://gracindotur.com.br'

export const BRAND_TAGLINE = 'Excelência em transporte, conforto e segurança.'
export const BRAND_SUPPORT =
  'Soluções em transporte executivo para quem valoriza segurança, conforto, pontualidade e qualidade em cada viagem.'

export const FOUNDING_YEAR = 2006
export const FOUNDING_LABEL = 'Desde 2006'

/**
 * Logomarca própria da Gracindo Tur.
 * Enquanto o arquivo final não é inserido, o componente desenha o
 * monograma da marca. Para usar a logo real, basta preencher `src`.
 * A logo nunca é redesenhada, recolorida nem distorcida.
 */
export const LOGO = {
  src: '/logo.svg' as string | undefined,
  alt: 'Gracindo Tur',
  /** Dimensões naturais do arquivo, para evitar layout shift. */
  width: 1938.56,
  height: 845.67,
  wordmark: 'Gracindo Tur',
} as const

/* ============================================================
   Contato
   ============================================================ */

export const WHATSAPP_NUMBER = '5565981029000'
export const WHATSAPP_DISPLAY = '(65) 98102-9000'

export const INSTAGRAM_HANDLE = '@gracindotur'
export const INSTAGRAM_URL = 'https://www.instagram.com/gracindotur'

/** Endereço completo da empresa, usado no mapa e no rodapé. */
const ADDRESS = 'R. Domingos Jorge Velho, 10 - Jardim Universitário, Cuiabá - MT, 78075-140'

export const LOCATION = {
  city: 'Cuiabá',
  state: 'MT',
  country: 'Brasil',
  label: 'Cuiabá — MT',
  address: ADDRESS,
}

/** Endereço do mapa incorporado — funciona sem chave de API. */
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS,
)}&z=16&hl=pt-BR&output=embed`

/** Link para abrir o mapa no Google Maps. */
export const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS,
)}`

/* ============================================================
   Mensagens contextualizadas de WhatsApp
   ============================================================ */

export const WHATSAPP_MESSAGES = {
  geral:
    'Olá, Gracindo Tur! Vim pelo site e gostaria de mais informações sobre o transporte executivo.',
  hero:
    'Olá, Gracindo Tur! Vim pelo site e gostaria de solicitar um orçamento de transporte executivo.',
  frota:
    'Olá, Gracindo Tur! Vi a frota no site e gostaria de verificar a disponibilidade de um veículo.',
  servicos:
    'Olá, Gracindo Tur! Gostaria de saber mais sobre os serviços de transporte executivo.',
  contato:
    'Olá, Gracindo Tur! Gostaria de solicitar um orçamento para o meu transporte.',
} as const

export function whatsappUrl(message: string = WHATSAPP_MESSAGES.geral): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/* ============================================================
   Navegação
   ============================================================ */

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'A empresa', id: 'empresa' },
  { label: 'Frota', id: 'frota' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
]

export const NAV_IDS = NAV_ITEMS.map((item) => item.id)

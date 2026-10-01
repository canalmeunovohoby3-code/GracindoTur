import type { Testimonial } from '../types'

/* ============================================================
   DEPOIMENTOS — avaliações reais do perfil da Gracindo Tur no Google.
   Textos extraídos das avaliações públicas, sem edição de sentido.
   Para atualizar, substitua os itens abaixo pelos novos depoimentos.
   ============================================================ */

export const GOOGLE_RATING = {
  score: '5,0',
  /** Total de avaliações no Google. */
  count: 38,
  /** Link do perfil da empresa no Google Maps. */
  url: 'https://www.google.com/maps/place/Gracindo+Tur.+Van+em+Cuiab%C3%A1+-+micro-%C3%B4nibus+-+%C3%B4nibus+-+ve%C3%ADculos+executivos/@-15.6145405,-56.0411297,1095m/data=!3m1!1e3!4m8!3m7!1s0x939dafe950d8e3d7:0xc3dbd8b77961b002!8m2!3d-15.6145405!4d-56.0385548!9m1!1b1!16s%2Fg%2F11f6y2zk6f',
} as const

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'paulo-motta',
    quote:
      'Já são mais de cinco anos de parceria com a Gracindo. Nesse tempo, utilizei desde transportes em fazenda até serviços executivos e sempre encontrei qualidade e confiança. A empresa se destaca por carros novos, limpos e muito bem equipados, além de motoristas experientes, atenciosos e profissionais. Todas as viagens são realizadas com a documentação em dia e seguro incluso, garantindo tranquilidade e segurança em qualquer situação.',
    author: 'Paulo Motta',
    meta: 'Avaliação no Google · set. 2025',
    rating: 5,
  },
  {
    id: 'yllen-almeida',
    quote:
      'Empresa extremamente profissional com carros novos que atendem a todas as necessidades. Indico com segurança.',
    author: 'Yllen Almeida',
    meta: 'Avaliação no Google · set. 2025',
    rating: 5,
  },
  {
    id: 'marcio-braga',
    quote:
      'Excelente e exemplar atendimento no horário combinado e na recepção do grupo, do começo ao fim do serviço contratado de van. Indico a todos que venham a Cuiabá!',
    author: 'Marcio Braga',
    meta: 'Avaliação no Google · jun. 2025',
    rating: 5,
  },
  {
    id: 'isabela-rocha',
    quote:
      'Ótima experiência vivida na Chapada dos Guimarães. Reginaldo foi uma pessoa incrível e essencial no passeio.',
    author: 'Isabela Rocha',
    meta: 'Avaliação no Google · jun. 2025',
    rating: 5,
  },
  {
    id: 'nicson-bispo',
    quote:
      'As melhores vans que já encontrei nesse Brasil: muito confortáveis, com videogame, TV e bancos reclináveis.',
    author: 'Nicson Bispo',
    meta: 'Avaliação no Google · jun. 2025',
    rating: 5,
  },
  {
    id: 'helison-souza',
    quote:
      'Serviço com padrão de excelência. Sem dúvidas, o melhor do MT.',
    author: 'Helison Souza',
    meta: 'Avaliação no Google · jun. 2025',
    rating: 5,
  },
]

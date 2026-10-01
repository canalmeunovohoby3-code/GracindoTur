import type { ImageAsset, Vehicle } from '../types'

/* ============================================================
   FROTA — 10 veículos independentes
   ------------------------------------------------------------
   Cada item deste arquivo é UM veículo. Tudo que aparece no card e no
   modal (capa, galeria, descrição e informações) vem exclusivamente do
   registro daquele veículo — nada é compartilhado ou genérico.

   COMO EDITAR CADA VEÍCULO (não é preciso mexer no layout):

   1. Fotos     -> `images`: lista de fotos DESTE veículo, na ordem.
                   A primeira é a capa do card. Ex.:
                     images: [
                       { src: '/midia/frota/veiculo-01/01.jpg', alt: 'Frente do veículo' },
                       { src: '/midia/frota/veiculo-01/02.jpg', alt: 'Interior' },
                     ]
                   Enquanto a lista estiver vazia, o card e o modal mostram
                   o placeholder (silhueta) no lugar.
   2. Nome      -> `name`      (nome/modelo real do veículo)
   3. Categoria -> `category`  (ex.: "Sedã Executivo", "Ônibus Executivo")
   4. Resumo    -> `tagline`   (frase curta do card)
   5. Descrição -> `description` (texto completo, aparece no modal)
   6. Extras    -> `specs`     (lista rótulo/valor do modal)
   7. Silhueta  -> `kind`      (sedan | suv | van | van-luxo | micro | onibus)
                   usada apenas enquanto não existe foto.

   Os textos abaixo são PROVISÓRIOS e serão substituídos veículo a veículo.
   ============================================================ */

export const VEHICLES: Vehicle[] = [
  {
    id: 'veiculo-01',
    name: 'BYD King 2026',
    category: 'Sedan Executivo',
    kind: 'sedan',
    tagline: 'Sedan executivo para até 04 passageiros.',
    description: `Com este veículo atendemos:
💑 Casamentos
🧳 Transfers e viagens corporativas
🕺 Shows e eventos
📸 Viagens por todo o Brasil`,
    specs: [
      { label: 'Capacidade', value: 'Até 04 passageiros' },
      { label: 'Atendimento', value: 'Cuiabá — MT' },
      { label: 'Disponibilidade', value: 'Sob consulta' },
    ],
    images: [
      { src: '/Sedan executivo Byd King 2026/1.png', alt: 'BYD King 2026 — foto 1' },
      { src: '/Sedan executivo Byd King 2026/2.png', alt: 'BYD King 2026 — foto 2' },
      { src: '/Sedan executivo Byd King 2026/3.png', alt: 'BYD King 2026 — foto 3' },
      { src: '/Sedan executivo Byd King 2026/4.png', alt: 'BYD King 2026 — foto 4' },
      { src: '/Sedan executivo Byd King 2026/5.png', alt: 'BYD King 2026 — foto 5' },
      { src: '/Sedan executivo Byd King 2026/6.png', alt: 'BYD King 2026 — foto 6' },
      { src: '/Sedan executivo Byd King 2026/7.png', alt: 'BYD King 2026 — foto 7' },
      { src: '/Sedan executivo Byd King 2026/8.png', alt: 'BYD King 2026 — foto 8' },
    ],
  },
  {
    id: 'veiculo-02',
    name: 'BYD Song Pro',
    category: 'SUV Executivo',
    kind: 'suv',
    tagline: 'SUV executivo para 04 passageiros.',
    description: `Com este veículo atendemos:
💑 Casamentos
🧳 Transfers e viagens corporativas
🕺 Shows e eventos
📸 Viagens por todo o Brasil`,
    specs: [
      { label: 'Capacidade', value: 'Até 04 passageiros' },
      { label: 'Atendimento', value: 'Cuiabá — MT' },
      { label: 'Disponibilidade', value: 'Sob consulta' },
    ],
    images: [
      { src: '/Suv executiva Byd Song Pró/1.png', alt: 'BYD Song Pro — foto 1' },
      { src: '/Suv executiva Byd Song Pró/2.png', alt: 'BYD Song Pro — foto 2' },
      { src: '/Suv executiva Byd Song Pró/3.png', alt: 'BYD Song Pro — foto 3' },
      { src: '/Suv executiva Byd Song Pró/4.png', alt: 'BYD Song Pro — foto 4' },
      { src: '/Suv executiva Byd Song Pró/5.png', alt: 'BYD Song Pro — foto 5' },
      { src: '/Suv executiva Byd Song Pró/6.png', alt: 'BYD Song Pro — foto 6' },
      { src: '/Suv executiva Byd Song Pró/7.png', alt: 'BYD Song Pro — foto 7' },
    ],
  },
  {
    id: 'veiculo-03',
    name: 'SW4 2025',
    category: 'SUV Executivo',
    kind: 'suv',
    tagline: 'SUV executivo 2025 com 7 lugares.',
    description: `Com este veículo atendemos:
💑 Casamentos
🎉 Aniversários de 15 anos
🕺 Shows e eventos
📸 Viagens por todo o Brasil`,
    specs: [
      { label: 'Capacidade', value: '7 lugares' },
      { label: 'Atendimento', value: 'Cuiabá — MT' },
      { label: 'Disponibilidade', value: 'Sob consulta' },
    ],
    images: [
      { src: '/SUV EXECUTIVA SW4 2025/1.png', alt: 'SW4 2025 — foto 1' },
      { src: '/SUV EXECUTIVA SW4 2025/2.png', alt: 'SW4 2025 — foto 2' },
      { src: '/SUV EXECUTIVA SW4 2025/3.png', alt: 'SW4 2025 — foto 3' },
      { src: '/SUV EXECUTIVA SW4 2025/4.png', alt: 'SW4 2025 — foto 4' },
      { src: '/SUV EXECUTIVA SW4 2025/5.png', alt: 'SW4 2025 — foto 5' },
      { src: '/SUV EXECUTIVA SW4 2025/6.png', alt: 'SW4 2025 — foto 6' },
      { src: '/SUV EXECUTIVA SW4 2025/7.png', alt: 'SW4 2025 — foto 7' },
      { src: '/SUV EXECUTIVA SW4 2025/8.png', alt: 'SW4 2025 — foto 8' },
      { src: '/SUV EXECUTIVA SW4 2025/9.png', alt: 'SW4 2025 — foto 9' },
    ],
  },
  {
    id: 'veiculo-04',
    name: 'Renault Master Executiva',
    category: 'Van Executiva de Luxo',
    kind: 'van-luxo',
    tagline: 'Van executiva de luxo alto padrão.',
    description: `❄️ Ar-condicionado
🔊 Som de cinema dentro da van
📺 TV digital
🎮 Vídeo game Play 4
💿 DVD
🛜 Wi-Fi a bordo
💺 Poltronas em couro reclináveis individuais
⬛ Cortinas blackout
🪫🔋 Tomadas USB individuais
🧳 Porta-malas de 2.000 litros
🔛 Porta automática
☑️ Empresa e veículos legalizados na AGER e ANTT
📍 Fretamento por todo o Brasil
📝 Peça já seu orçamento sem compromisso.`,
    specs: [
      { label: 'Atendimento', value: 'Cuiabá — MT' },
      { label: 'Disponibilidade', value: 'Sob consulta' },
    ],
    images: [
      { src: '/Renault Master Executiva luxo alto padrão/1.png', alt: 'Renault Master Executiva — foto 1' },
      { src: '/Renault Master Executiva luxo alto padrão/2.png', alt: 'Renault Master Executiva — foto 2' },
    ],
  },
  {
    id: 'veiculo-05',
    name: 'Master Executiva 15 lugares',
    category: 'Van Executiva de Luxo',
    kind: 'van-luxo',
    tagline: 'Van executiva de luxo alto padrão para até 15 passageiros.',
    description: `❄️ Ar-condicionado
🔊 Som de cinema dentro da van
📺 TV digital
🎮 Vídeo game Play 4
💿 DVD
🛜 Wi-Fi a bordo
💺 Poltronas em couro reclináveis individuais
⬛ Cortinas blackout
🪫🔋 Tomadas USB individuais
🧳 Porta-malas de 2.000 litros
🔛 Porta automática
☑️ Empresa e veículos legalizados na AGER e ANTT
📍 Fretamento por todo o Brasil
📝 Peça já seu orçamento sem compromisso.`,
    specs: [
      { label: 'Capacidade', value: 'Até 15 passageiros' },
      { label: 'Atendimento', value: 'Cuiabá — MT' },
      { label: 'Disponibilidade', value: 'Sob consulta' },
    ],
    images: [
      { src: '/Master executiva luxo alto padrão para até 15 passageiros/1.png', alt: 'Master Executiva 15 lugares — foto 1' },
      { src: '/Master executiva luxo alto padrão para até 15 passageiros/2.png', alt: 'Master Executiva 15 lugares — foto 2' },
      { src: '/Master executiva luxo alto padrão para até 15 passageiros/3.png', alt: 'Master Executiva 15 lugares — foto 3' },
      { src: '/Master executiva luxo alto padrão para até 15 passageiros/4.png', alt: 'Master Executiva 15 lugares — foto 4' },
      { src: '/Master executiva luxo alto padrão para até 15 passageiros/5.png', alt: 'Master Executiva 15 lugares — foto 5' },
      { src: '/Master executiva luxo alto padrão para até 15 passageiros/6.png', alt: 'Master Executiva 15 lugares — foto 6' },
      { src: '/Master executiva luxo alto padrão para até 15 passageiros/7.png', alt: 'Master Executiva 15 lugares — foto 7' },
      { src: '/Master executiva luxo alto padrão para até 15 passageiros/8.png', alt: 'Master Executiva 15 lugares — foto 8' },
      { src: '/Master executiva luxo alto padrão para até 15 passageiros/9.png', alt: 'Master Executiva 15 lugares — foto 9' },
    ],
  },
  {
    id: 'veiculo-06',
    name: 'Sprinter 516 Executiva 17 lugares',
    category: 'Van Executiva de Luxo',
    kind: 'van-luxo',
    tagline: 'Van executiva de luxo alto padrão para até 17 passageiros.',
    description: `❄️ Ar-condicionado digital independente
🔊 Som de cinema dentro da van
📺 TV digital
🎮 Vídeo game Play 4
💿 DVD
🛜 Wi-Fi a bordo
💺 Poltronas em couro reclináveis individuais
⬛ Cortinas blackout
🪫🔋 Tomadas USB individuais
🧳 Porta-malas de 3.000 litros
🔛 Porta automática
☑️ Empresa e veículos legalizados na AGER e ANTT
📍 Fretamento por todo o Brasil
📝 Peça já seu orçamento sem compromisso.`,
    specs: [
      { label: 'Capacidade', value: 'Até 17 passageiros' },
      { label: 'Atendimento', value: 'Cuiabá — MT' },
      { label: 'Disponibilidade', value: 'Sob consulta' },
    ],
    images: [
      { src: '/Sprinter 516 executiva luxo alto padrão para até 17 passageiros/1.png', alt: 'Sprinter 516 Executiva — foto 1' },
      { src: '/Sprinter 516 executiva luxo alto padrão para até 17 passageiros/2.png', alt: 'Sprinter 516 Executiva — foto 2' },
      { src: '/Sprinter 516 executiva luxo alto padrão para até 17 passageiros/3.png', alt: 'Sprinter 516 Executiva — foto 3' },
      { src: '/Sprinter 516 executiva luxo alto padrão para até 17 passageiros/4.png', alt: 'Sprinter 516 Executiva — foto 4' },
      { src: '/Sprinter 516 executiva luxo alto padrão para até 17 passageiros/5.png', alt: 'Sprinter 516 Executiva — foto 5' },
      { src: '/Sprinter 516 executiva luxo alto padrão para até 17 passageiros/6.png', alt: 'Sprinter 516 Executiva — foto 6' },
      { src: '/Sprinter 516 executiva luxo alto padrão para até 17 passageiros/7.png', alt: 'Sprinter 516 Executiva — foto 7' },
      { src: '/Sprinter 516 executiva luxo alto padrão para até 17 passageiros/8.png', alt: 'Sprinter 516 Executiva — foto 8' },
    ],
  },
  {
    id: 'veiculo-07',
    name: 'Master Executiva 11 lugares',
    category: 'Van Executiva de Luxo',
    kind: 'van-luxo',
    tagline: 'Van executiva de luxo alto padrão para 11 passageiros.',
    description: `❄️ Ar-condicionado
🔊 Som de cinema dentro da van
📺 TV digital
🎮 Vídeo game Play 4
💿 DVD
🛜 Wi-Fi a bordo
💺 Poltronas em couro reclináveis individuais
⬛ Cortinas blackout
🪫🔋 Tomadas USB individuais
🧳 Porta-malas de 2.000 litros
🔛 Porta automática
☑️ Empresa e veículos legalizados na AGER e ANTT
📍 Fretamento por todo o Brasil
📝 Peça já seu orçamento sem compromisso.`,
    specs: [
      { label: 'Capacidade', value: '11 passageiros' },
      { label: 'Atendimento', value: 'Cuiabá — MT' },
      { label: 'Disponibilidade', value: 'Sob consulta' },
    ],
    images: [
      { src: '/Master executiva luxo alto padrão para 11 passageiros/1.png', alt: 'Master Executiva 11 lugares — foto 1' },
      { src: '/Master executiva luxo alto padrão para 11 passageiros/2.png', alt: 'Master Executiva 11 lugares — foto 2' },
      { src: '/Master executiva luxo alto padrão para 11 passageiros/3.png', alt: 'Master Executiva 11 lugares — foto 3' },
      { src: '/Master executiva luxo alto padrão para 11 passageiros/4.png', alt: 'Master Executiva 11 lugares — foto 4' },
      { src: '/Master executiva luxo alto padrão para 11 passageiros/5.png', alt: 'Master Executiva 11 lugares — foto 5' },
      { src: '/Master executiva luxo alto padrão para 11 passageiros/6.png', alt: 'Master Executiva 11 lugares — foto 6' },
      { src: '/Master executiva luxo alto padrão para 11 passageiros/7.png', alt: 'Master Executiva 11 lugares — foto 7' },
      { src: '/Master executiva luxo alto padrão para 11 passageiros/8.png', alt: 'Master Executiva 11 lugares — foto 8' },
    ],
  },
  {
    id: 'veiculo-08',
    name: 'Van de Carga',
    category: 'Van de Carga',
    kind: 'van',
    tagline: 'Van destinada ao transporte de cargas e encomendas.',
    description: `Van destinada ao transporte de cargas e encomendas, com espaço interno e acesso facilitado para embarque e desembarque.

Com este veículo atendemos:
📦 Entregas e coletas
🏠 Mudanças e transporte de móveis
🛠️ Equipamentos, materiais e ferramentas
🏢 Empresas, eventos e produções
📝 Peça já seu orçamento sem compromisso.`,
    specs: [
      { label: 'Aplicação', value: 'Transporte de cargas e encomendas' },
      { label: 'Atendimento', value: 'Cuiabá — MT' },
      { label: 'Disponibilidade', value: 'Sob consulta' },
    ],
    images: [
      { src: '/Van cargo/1.png', alt: 'Van de Carga — foto 1' },
      { src: '/Van cargo/2.png', alt: 'Van de Carga — foto 2' },
      { src: '/Van cargo/3.png', alt: 'Van de Carga — foto 3' },
      { src: '/Van cargo/4.png', alt: 'Van de Carga — foto 4' },
    ],
  },
  {
    id: 'veiculo-09',
    name: 'Marcopolo G7 Executivo 42 lugares',
    category: 'Ônibus Executivo',
    kind: 'onibus',
    tagline: 'Ônibus executivo com 42 poltronas semi leito.',
    description: `🚍 42 lugares executivo
💺 42 poltronas semi leito
❄️ Ar-condicionado individual
🔊 Som de cinema
📺 TV digital
💿 DVD
🛜 Wi-Fi a bordo (Starlink)
💺 Poltronas em couro reclináveis individuais
⬛ Cortinas blackout
🪫🔋 Tomadas USB individuais
🧳 Porta-malas
🔛 Porta automática
☑️ Empresa e veículos legalizados na AGER e ANTT
📍 Fretamento por todo o Brasil
📝 Peça já seu orçamento sem compromisso.`,
    specs: [
      { label: 'Capacidade', value: 'Até 42 passageiros' },
      { label: 'Poltronas', value: '42 semi leito' },
      { label: 'Atendimento', value: 'Cuiabá — MT' },
      { label: 'Disponibilidade', value: 'Sob consulta' },
    ],
    images: [
      { src: '/Ônibus Marcopolo G7 Executivo para até 42 passageiros/1.png', alt: 'Marcopolo G7 Executivo — foto 1' },
      { src: '/Ônibus Marcopolo G7 Executivo para até 42 passageiros/2.png', alt: 'Marcopolo G7 Executivo — foto 2' },
      { src: '/Ônibus Marcopolo G7 Executivo para até 42 passageiros/3.png', alt: 'Marcopolo G7 Executivo — foto 3' },
      { src: '/Ônibus Marcopolo G7 Executivo para até 42 passageiros/4.png', alt: 'Marcopolo G7 Executivo — foto 4' },
      { src: '/Ônibus Marcopolo G7 Executivo para até 42 passageiros/5.png', alt: 'Marcopolo G7 Executivo — foto 5' },
      { src: '/Ônibus Marcopolo G7 Executivo para até 42 passageiros/6.png', alt: 'Marcopolo G7 Executivo — foto 6' },
      { src: '/Ônibus Marcopolo G7 Executivo para até 42 passageiros/7.png', alt: 'Marcopolo G7 Executivo — foto 7' },
      { src: '/Ônibus Marcopolo G7 Executivo para até 42 passageiros/8.png', alt: 'Marcopolo G7 Executivo — foto 8' },
      { src: '/Ônibus Marcopolo G7 Executivo para até 42 passageiros/9.png', alt: 'Marcopolo G7 Executivo — foto 9' },
      { src: '/Ônibus Marcopolo G7 Executivo para até 42 passageiros/10.png', alt: 'Marcopolo G7 Executivo — foto 10' },
    ],
  },
  {
    id: 'veiculo-10',
    name: 'Ônibus Executivo 46 lugares',
    category: 'Ônibus Executivo',
    kind: 'onibus',
    tagline: 'Ônibus executivo para até 46 passageiros.',
    description: `🚍 Ônibus executivo para até 46 passageiros
💺 Espaço interno amplo e confortável para grupos
🧳 Porta-malas para a bagagem do grupo
☑️ Empresa e veículos legalizados na AGER e ANTT
📍 Fretamento por todo o Brasil

Com este veículo atendemos:
💑 Casamentos
🎉 Eventos, excursões e formaturas
🏢 Empresas e equipes de trabalho
⛪ Igrejas e grupos organizados
📸 Passeios e viagens por todo o Brasil
📝 Peça já seu orçamento sem compromisso.`,
    specs: [
      { label: 'Capacidade', value: 'Até 46 passageiros' },
      { label: 'Atendimento', value: 'Cuiabá — MT' },
      { label: 'Disponibilidade', value: 'Sob consulta' },
    ],
    images: [
      { src: '/Ônibus executivo para 46 passageiros/1.png', alt: 'Ônibus Executivo 46 lugares — foto 1' },
      { src: '/Ônibus executivo para 46 passageiros/2.png', alt: 'Ônibus Executivo 46 lugares — foto 2' },
      { src: '/Ônibus executivo para 46 passageiros/3.png', alt: 'Ônibus Executivo 46 lugares — foto 3' },
      { src: '/Ônibus executivo para 46 passageiros/4.png', alt: 'Ônibus Executivo 46 lugares — foto 4' },
      { src: '/Ônibus executivo para 46 passageiros/5.png', alt: 'Ônibus Executivo 46 lugares — foto 5' },
      { src: '/Ônibus executivo para 46 passageiros/6.png', alt: 'Ônibus Executivo 46 lugares — foto 6' },
      { src: '/Ônibus executivo para 46 passageiros/7.png', alt: 'Ônibus Executivo 46 lugares — foto 7' },
      { src: '/Ônibus executivo para 46 passageiros/8.png', alt: 'Ônibus Executivo 46 lugares — foto 8' },
      { src: '/Ônibus executivo para 46 passageiros/9.png', alt: 'Ônibus Executivo 46 lugares — foto 9' },
      { src: '/Ônibus executivo para 46 passageiros/10.png', alt: 'Ônibus Executivo 46 lugares — foto 10' },
      { src: '/Ônibus executivo para 46 passageiros/11.png', alt: 'Ônibus Executivo 46 lugares — foto 11' },
    ],
  },
]

/**
 * Fotos de um veículo, já com o placeholder de reserva quando a galeria
 * ainda não foi preenchida. Card e modal usam sempre esta função, então
 * cada um exibe somente as fotos daquele veículo.
 */
export function vehiclePhotos(vehicle: Vehicle): ImageAsset[] {
  if (vehicle.images.length > 0) return vehicle.images
  return [
    {
      src: '',
      alt: `Foto do veículo — ${vehicle.category}`,
      placeholder: `Foto do ${vehicle.category}`,
    },
  ]
}

import type { Service } from '../types'

/* ============================================================
   SERVIÇOS — três frentes de atuação
   Para trocar a imagem de um serviço, preencha `image.src`.
   ============================================================ */

export const SERVICES: Service[] = [
  {
    id: 'executivos',
    eyebrow: 'Executivo',
    title: 'Veículos executivos',
    description:
      'Sedans e SUVs para deslocamentos executivos e transporte personalizado.',
    kind: 'sedan',
    image: {
      src: '/SUV EXECUTIVA SW4 2025/1.png',
      alt: 'SUV executivo SW4 2025 da Gracindo Tur',
      placeholder: 'Foto de veículo executivo',
    },
    whatsapp:
      'Olá, Gracindo Tur! Vi os veículos executivos no site e gostaria de solicitar um orçamento para um deslocamento em sedan ou SUV.',
  },
  {
    id: 'vans',
    eyebrow: 'Grupos',
    title: 'Vans executivas luxo alto padrão',
    description:
      'Conforto e praticidade para grupos e deslocamentos especiais.',
    kind: 'van-luxo',
    image: {
      src: '/Sprinter 516 executiva luxo alto padrão para até 17 passageiros/2.png',
      alt: 'Van executiva de luxo da Gracindo Tur',
      placeholder: 'Foto de van executiva de luxo',
    },
    whatsapp:
      'Olá, Gracindo Tur! Vi as vans executivas de luxo no site e gostaria de um orçamento para transporte de grupo com conforto.',
  },
  {
    id: 'onibus',
    eyebrow: 'Grupos',
    title: 'Ônibus executivos',
    description:
      'Estrutura para transporte de grupos com conforto e segurança.',
    kind: 'onibus',
    image: {
      src: '/Ônibus Marcopolo G7 Executivo para até 42 passageiros/11.png',
      alt: 'Ônibus executivo da Gracindo Tur',
      placeholder: 'Foto de ônibus executivo',
    },
    whatsapp:
      'Olá, Gracindo Tur! Vi os ônibus executivos no site e gostaria de um orçamento para transporte de um grupo grande.',
  },
]

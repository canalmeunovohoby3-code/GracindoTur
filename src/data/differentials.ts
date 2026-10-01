import type { Differential, TrustPoint } from '../types'

/* ============================================================
   DIFERENCIAIS — baseados apenas em informações reais da empresa.
   Nenhum número, prêmio ou estatística foi criado.
   ============================================================ */

export const DIFFERENTIALS: Differential[] = [
  {
    id: 'experiencia',
    title: 'Experiência',
    description: 'Atuação no transporte de passageiros desde 2006.',
  },
  {
    id: 'seguranca',
    title: 'Segurança',
    description: 'Compromisso com uma experiência de transporte segura e tranquila.',
  },
  {
    id: 'conforto',
    title: 'Conforto',
    description: 'Veículos preparados para oferecer conforto durante a viagem.',
  },
  {
    id: 'pontualidade',
    title: 'Pontualidade',
    description: 'Compromisso com horários e organização em cada atendimento.',
  },
  {
    id: 'atendimento',
    title: 'Atendimento personalizado',
    description: 'Equipe preparada para compreender as necessidades de cada cliente.',
  },
  {
    id: 'frota',
    title: 'Frota moderna',
    description:
      'Investimento contínuo em modernização, tecnologia e renovação da frota.',
  },
]

/* ============================================================
   CONFIANÇA — trajetória da empresa, sem depoimentos inventados.
   ============================================================ */

export const TRUST_POINTS: TrustPoint[] = [
  {
    id: 'desde-2006',
    label: 'Desde 2006',
    detail: 'Uma trajetória construída no transporte de passageiros.',
  },
  {
    id: 'experiencia',
    label: 'Experiência',
    detail: 'Atuação consolidada no mercado de transporte executivo.',
  },
  {
    id: 'atendimento',
    label: 'Atendimento personalizado',
    detail: 'Cada cliente é atendido conforme a sua necessidade.',
  },
  {
    id: 'modernizacao',
    label: 'Frota em constante modernização',
    detail: 'Investimento contínuo em renovação e tecnologia.',
  },
]

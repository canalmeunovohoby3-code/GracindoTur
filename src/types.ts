/* ============================================================
   Tipos compartilhados da Gracindo Tur.
   Toda a informação editorial vive em /src/data. Este arquivo só
   descreve o formato, para que trocar conteúdo não encoste no layout.
   ============================================================ */

export type NavItem = {
  label: string
  id: string
}

/** Família visual do veículo. Define a silhueta usada no placeholder. */
export type VehicleKind = 'sedan' | 'suv' | 'van' | 'van-luxo' | 'micro' | 'onibus'

/**
 * Imagem de um veículo ou seção.
 * `src` vazio = slot aguardando a foto real; o componente desenha um
 * placeholder elegante no lugar, sem quebrar o layout.
 */
export type ImageAsset = {
  src?: string
  alt: string
  /** Texto curto exibido no placeholder enquanto a foto real não chega. */
  placeholder?: string
}

export type VehicleSpec = {
  label: string
  value: string
}

/**
 * Veículo da frota.
 *
 * Cada veículo é um registro independente: nome, categoria, fotos,
 * descrição e informações próprios, sem herdar nada do vizinho.
 * Edite todos em /src/data/vehicles.ts.
 */
export type Vehicle = {
  id: string
  /** Nome/modelo do veículo, exibido no card e no modal. */
  name: string
  /** Categoria exibida como etiqueta, ex.: "Sedã Executivo". */
  category: string
  /** Define a silhueta do placeholder enquanto não houver foto. */
  kind: VehicleKind
  /** Frase curta, exibida no card. */
  tagline: string
  /** Descrição longa, exibida no modal. */
  description: string
  /** Informações adicionais listadas no modal. */
  specs: VehicleSpec[]
  /**
   * Galeria exclusiva deste veículo. A primeira foto é a capa do card.
   * Lista vazia = o card e o modal mostram o placeholder.
   */
  images: ImageAsset[]
}

export type Service = {
  id: string
  /** Rótulo curto acima do título. */
  eyebrow: string
  title: string
  description: string
  kind: VehicleKind
  image: ImageAsset
  /** Mensagem de WhatsApp enviada ao clicar neste card. */
  whatsapp: string
}

export type Differential = {
  id: string
  title: string
  description: string
}

export type TrustPoint = {
  id: string
  label: string
  detail: string
}

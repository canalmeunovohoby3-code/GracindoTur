import { useId } from 'react'
import type { VehicleKind } from '../types'

/* ============================================================
   Silhuetas de veículo desenhadas à mão.
   Usadas como placeholder elegante enquanto a foto real de cada
   veículo não é inserida. Não substituem a foto — apenas evitam
   buracos vazios no layout.
   ============================================================ */

type Shape = {
  body: string
  windows: string[]
  pillars: string[]
  wheels: number[]
  wheelR: number
  accent?: { x: number; y: number; w: number; h: number }
}

const SHAPES: Record<VehicleKind, Shape> = {
  sedan: {
    body: 'M14 132 C14 118 24 111 42 108 L102 100 C122 84 150 76 192 76 L262 76 C304 76 338 88 358 106 L378 112 C388 116 392 122 392 132 L392 140 L14 140 Z',
    windows: ['M116 100 C136 86 160 81 194 81 L252 81 C282 81 304 88 322 100 Z'],
    pillars: ['M228 82 L228 100'],
    wheels: [104, 306],
    wheelR: 22,
  },
  suv: {
    body: 'M14 132 C14 116 24 108 42 105 L94 100 L104 74 C108 64 116 58 128 58 L294 58 C310 58 322 64 328 76 L346 104 L378 110 C388 114 392 120 392 132 L392 140 L14 140 Z',
    windows: ['M128 70 C132 64 138 62 146 62 L286 62 C296 62 304 66 308 74 L324 98 L140 98 C128 90 124 80 128 70 Z'],
    pillars: ['M148 65 L302 65'],
    wheels: [106, 304],
    wheelR: 23,
  },
  van: {
    body: 'M14 132 C14 116 24 106 42 104 L62 101 L66 56 C68 45 76 38 88 38 L296 38 C308 38 316 45 318 56 L330 104 L378 110 C388 114 392 120 392 132 L392 140 L14 140 Z',
    windows: ['M84 52 H212 V96 H84 Z', 'M224 52 H304 L310 96 H224 Z'],
    pillars: [],
    wheels: [104, 310],
    wheelR: 22,
  },
  'van-luxo': {
    body: 'M14 132 C14 115 24 105 42 103 L62 100 L66 54 C68 43 76 36 88 36 L298 36 C310 36 318 43 320 54 L332 103 L378 110 C388 114 392 120 392 132 L392 140 L14 140 Z',
    windows: ['M84 50 H306 L312 94 H84 Z'],
    pillars: ['M160 50 L160 94', 'M232 50 L232 94'],
    wheels: [104, 312],
    wheelR: 22,
    accent: { x: 74, y: 102, w: 262, h: 5 },
  },
  micro: {
    body: 'M12 130 C12 114 22 104 40 102 L58 99 L62 50 C64 40 72 34 84 34 L314 34 C326 34 334 40 336 50 L348 102 L382 108 C390 112 394 118 394 130 L394 140 L12 140 Z',
    windows: ['M80 48 H180 V94 H80 Z', 'M192 48 H272 V94 H192 Z', 'M284 48 H330 L336 94 H284 Z'],
    pillars: [],
    wheels: [98, 318],
    wheelR: 22,
  },
  onibus: {
    body: 'M12 128 C12 112 22 102 40 100 L56 98 L60 38 C62 28 70 22 82 22 L328 22 C340 22 348 28 350 38 L362 100 L384 106 C392 110 396 116 396 128 L396 140 L12 140 Z',
    windows: ['M76 36 H158 V90 H76 Z', 'M170 36 H252 V90 H170 Z', 'M264 36 H336 L342 90 H264 Z'],
    pillars: [],
    wheels: [102, 324],
    wheelR: 21,
  },
}

export function VehicleArt({ kind, className }: { kind: VehicleKind; className?: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')
  const shape = SHAPES[kind]
  const bodyId = `va-body-${uid}`
  const glassId = `va-glass-${uid}`
  const hubId = `va-hub-${uid}`

  return (
    <svg
      viewBox="0 0 400 180"
      className={className}
      role="img"
      aria-label="Ilustração do veículo"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={bodyId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2f5fa" />
          <stop offset="0.55" stopColor="#cdd5e4" />
          <stop offset="1" stopColor="#9aa5bd" />
        </linearGradient>
        <linearGradient id={glassId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(96,116,158,0.78)" />
          <stop offset="1" stopColor="rgba(38,52,88,0.72)" />
        </linearGradient>
        <radialGradient id={hubId} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#e9edf5" />
          <stop offset="1" stopColor="#8f99b0" />
        </radialGradient>
      </defs>

      <ellipse cx="204" cy="143" rx="176" ry="9" fill="rgba(0,0,0,0.3)" />

      <path d={shape.body} fill={`url(#${bodyId})`} />

      {shape.windows.map((d) => (
        <path key={d} d={d} fill={`url(#${glassId})`} />
      ))}

      {shape.pillars.map((d) => (
        <path key={d} d={d} stroke="rgba(90,102,130,0.55)" strokeWidth="3" fill="none" />
      ))}

      {shape.accent && (
        <rect
          x={shape.accent.x}
          y={shape.accent.y}
          width={shape.accent.w}
          height={shape.accent.h}
          rx="2.5"
          fill="#dc6c16"
          opacity="0.9"
        />
      )}

      <rect x="374" y="116" width="16" height="9" rx="3" fill="#f4b27c" />
      <rect x="14" y="116" width="12" height="9" rx="3" fill="#e0744a" opacity="0.85" />

      {shape.wheels.map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="140" r={shape.wheelR} fill="#101114" />
          <circle cx={cx} cy="140" r={shape.wheelR * 0.44} fill={`url(#${hubId})`} />
        </g>
      ))}
    </svg>
  )
}

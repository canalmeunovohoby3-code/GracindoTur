import type { SVGProps } from 'react'

/* ============================================================
   Ícones proprietários — traço fino, geométrico e consistente.
   Todos herdam currentColor e aceitam tamanho configurável.
   ============================================================ */

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number
}

function base({ size = 24, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    focusable: false,
    ...props,
  }
}

export function IconWhatsApp({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.06 0 1.22.89 2.39 1.01 2.56.12.16 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  )
}

export function IconInstagram({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconPhone({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M6.2 3.5h3l1.4 4-2 1.4a12.6 12.6 0 0 0 5.5 5.5l1.4-2 4 1.4v3a1.8 1.8 0 0 1-1.9 1.8A16.3 16.3 0 0 1 4.4 5.4 1.8 1.8 0 0 1 6.2 3.5Z" />
    </svg>
  )
}

export function IconMapPin({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

export function IconArrowRight({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </svg>
  )
}

export function IconArrowUpRight({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export function IconMenu({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h10" />
    </svg>
  )
}

export function IconClose({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </svg>
  )
}

export function IconChevronLeft({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="m14 6-6 6 6 6" />
    </svg>
  )
}

export function IconChevronRight({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="m10 6 6 6-6 6" />
    </svg>
  )
}

export function IconExpand({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M4 9V5a1 1 0 0 1 1-1h4" />
      <path d="M20 9V5a1 1 0 0 0-1-1h-4" />
      <path d="M4 15v4a1 1 0 0 0 1 1h4" />
      <path d="M20 15v4a1 1 0 0 1-1 1h-4" />
    </svg>
  )
}

/* --- Diferenciais ---------------------------------------------------- */

export function IconShield({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M12 3 5 5.8v5.4c0 4.3 2.9 7.6 7 9.8 4.1-2.2 7-5.5 7-9.8V5.8L12 3Z" />
      <path d="m9 12 2 2 4-4.2" />
    </svg>
  )
}

export function IconClock({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7.6V12l3 1.8" />
    </svg>
  )
}

export function IconRoute({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
      <path d="M9 6.5h4.2A3.3 3.3 0 0 1 16.5 9.8v0a3.3 3.3 0 0 1-3.3 3.3H10a3.3 3.3 0 0 0-3.3 3.3v0a3.3 3.3 0 0 0 3.3 3.3h4.4" />
    </svg>
  )
}

export function IconSeat({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M6 4h6.5a2.5 2.5 0 0 1 2.5 2.5V13H8.5A2.5 2.5 0 0 1 6 10.5V4Z" />
      <path d="M6 18h12" />
      <path d="M8.5 13v3.5" />
      <path d="M15 13v5" />
    </svg>
  )
}

export function IconConcierge({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="m15.5 12.5 1.7 1.7 3.3-3.4" />
    </svg>
  )
}

export function IconSparkle({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M12 3.5c.5 3.9 2.6 6 6.5 6.5-3.9.5-6 2.6-6.5 6.5-.5-3.9-2.6-6-6.5-6.5 3.9-.5 6-2.6 6.5-6.5Z" />
      <path d="M18.5 15.5c.2 1.5 1 2.3 2.5 2.5-1.5.2-2.3 1-2.5 2.5-.2-1.5-1-2.3-2.5-2.5 1.5-.2 2.3-1 2.5-2.5Z" />
    </svg>
  )
}

export function IconUsers({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <circle cx="9.5" cy="8.5" r="3" />
      <path d="M4 19.5a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.6a3 3 0 0 1 0 5.8" />
      <path d="M17.5 14.3a5.5 5.5 0 0 1 3 5.2" />
    </svg>
  )
}

export function IconBuilding({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base({ size, ...props })}>
      <path d="M5 21V5.5A1.5 1.5 0 0 1 6.5 4h7A1.5 1.5 0 0 1 15 5.5V21" />
      <path d="M15 10h3.5A1.5 1.5 0 0 1 20 11.5V21" />
      <path d="M3.5 21h17" />
      <path d="M8.5 8h3M8.5 12h3M8.5 16h3" />
    </svg>
  )
}

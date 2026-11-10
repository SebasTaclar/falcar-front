export interface CategoryStyle {
  bgClass: string
  overlayClass: string
  labelClass: string
  chipClass: string
  infoClass: string
}

const PALETTES: CategoryStyle[] = [
  {
    bgClass: 'bg-gradient-to-br from-pink-300 via-pink-200 to-falcar-cream',
    overlayClass: 'bg-pink-400/10',
    labelClass: 'text-pink-600',
    chipClass: 'bg-pink-500/80',
    infoClass: 'bg-gradient-to-b from-pink-50/70 to-transparent',
  },
  {
    bgClass: 'bg-gradient-to-br from-blue-300 via-blue-200 to-falcar-cream',
    overlayClass: 'bg-blue-400/10',
    labelClass: 'text-blue-600',
    chipClass: 'bg-blue-500/80',
    infoClass: 'bg-gradient-to-b from-blue-50/70 to-transparent',
  },
  {
    bgClass: 'bg-gradient-to-br from-falcar-baby via-falcar-lavender/30 to-falcar-cream',
    overlayClass: 'bg-falcar-baby/15',
    labelClass: 'text-sky-600',
    chipClass: 'bg-sky-500/80',
    infoClass: 'bg-gradient-to-b from-sky-50/70 to-transparent',
  },
  {
    bgClass: 'bg-gradient-to-br from-falcar-yellow via-falcar-peach to-falcar-cream',
    overlayClass: 'bg-falcar-yellow/10',
    labelClass: 'text-amber-600',
    chipClass: 'bg-amber-500/80',
    infoClass: 'bg-gradient-to-b from-amber-50/70 to-transparent',
  },
  {
    bgClass: 'bg-gradient-to-br from-falcar-pink via-falcar-peach to-falcar-cream',
    overlayClass: 'bg-falcar-pink/10',
    labelClass: 'text-red-600',
    chipClass: 'bg-falcar-pink/80',
    infoClass: 'bg-gradient-to-b from-red-50/70 to-transparent',
  },
  {
    bgClass: 'bg-gradient-to-br from-falcar-lavender via-falcar-baby/30 to-falcar-cream',
    overlayClass: 'bg-falcar-lavender/10',
    labelClass: 'text-indigo-500',
    chipClass: 'bg-indigo-400/80',
    infoClass: 'bg-gradient-to-b from-indigo-50/70 to-transparent',
  },
]

function hashString(value: string): number {
  let h = 0
  for (let i = 0; i < value.length; i++) h = (h * 31 + value.charCodeAt(i)) | 0
  return Math.abs(h)
}

export function getCategoryStyle(name: string, id: string | number = ''): CategoryStyle {
  const lower = (name || '').toLowerCase()
  if (lower.includes('niña') || lower.includes('nina')) return PALETTES[0]
  if (lower.includes('niño') || lower.includes('nino')) return PALETTES[1]
  if (lower.includes('bebé') || lower.includes('bebe')) return PALETTES[2]
  if (lower.includes('accesorio')) return PALETTES[3]
  if (lower.includes('oferta') || lower.includes('sale') || lower.includes('descuento')) return PALETTES[4]
  return PALETTES[hashString(String(id || name) || 'x') % PALETTES.length]
}

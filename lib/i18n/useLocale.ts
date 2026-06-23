'use client'

import { usePathname } from 'next/navigation'
import { type Locale, defaultLocale, translations } from './translations'

export function useLocale(): { locale: Locale; t: typeof translations['en'] } {
  const pathname = usePathname()
  const segment = pathname.split('/')[1] as Locale
  const locale: Locale = ['en', 'de', 'ro'].includes(segment) ? segment : defaultLocale
  return { locale, t: translations[locale] }
}

export function localePath(locale: Locale, path: string): string {
  if (locale === 'en') return path
  return `/${locale}${path}`
}

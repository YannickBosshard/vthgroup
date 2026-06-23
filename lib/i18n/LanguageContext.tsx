'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { type Locale, defaultLocale, translations, type Translations } from './translations'

type LanguageContextType = {
  locale: Locale
  setLocale: (l: Locale) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  t: translations[defaultLocale],
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  useEffect(() => {
    const saved = localStorage.getItem('vth-locale') as Locale
    if (saved && ['en', 'de', 'ro'].includes(saved)) {
      setLocaleState(saved)
    }
  }, [])

  function setLocale(l: Locale) {
    setLocaleState(l)
    localStorage.setItem('vth-locale', l)
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

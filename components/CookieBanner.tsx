'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const { locale } = useLanguage()
  const isDE = locale === 'de'

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accepted = localStorage.getItem('vth_cookies_accepted')
      if (!accepted) setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('vth_cookies_accepted', '1')
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('vth_cookies_accepted', '0')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9998] border-t border-stone-light/30"
      style={{ background: 'rgba(10, 22, 40, 0.97)' }}
    >
      <div className="container-vth py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="font-sans text-xs text-stone leading-relaxed flex-1">
            {isDE
              ? 'Diese Website verwendet Cookies für statistische Zwecke. Mit der weiteren Nutzung stimmen Sie der Verwendung von Cookies zu.'
              : 'This website uses cookies for statistical purposes. By continuing to use this site, you agree to the use of cookies.'}
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleAccept}
              className="font-sans text-[11px] tracking-[0.15em] uppercase px-5 py-2 text-charcoal transition-all duration-200"
              style={{ background: '#C9A96E' }}
            >
              {isDE ? 'Akzeptieren' : 'Accept'}
            </button>
            <button
              onClick={handleDecline}
              className="font-sans text-[11px] tracking-[0.15em] uppercase px-5 py-2 border border-stone-dark/50 text-stone hover:text-cream-50 hover:border-stone transition-all duration-200"
            >
              {isDE ? 'Ablehnen' : 'Decline'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

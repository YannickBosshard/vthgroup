'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function Footer() {
  const { t, locale } = useLanguage()

  const sectors = ['Real Estate', 'Industrials & Construction', 'Mining & Quarrying', 'Infrastructure', 'Healthcare']
  const pages = [
    { href: '/sectors', label: t.nav.sectors },
    { href: '/portfolio', label: t.nav.portfolio },
    { href: '/leadership', label: t.nav.leadership },
    { href: '/process', label: 'Investment Process' },
    { href: '/acquisition', label: t.nav.acquisition },
    { href: '/contact', label: t.nav.contact },
  ]
  const legal = [
    { href: '/legal/imprint', label: t.footer.legal.imprint },
    { href: '/legal/privacy', label: t.footer.legal.privacy },
    { href: '/legal/disclaimer', label: t.footer.legal.disclaimer },
  ]

  return (
    <footer className="bg-charcoal text-cream-DEFAULT" role="contentinfo">
      <div className="container-vth py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <div className="font-serif text-3xl font-medium text-cream-50 tracking-tight mb-1">VTH Group</div>
              <div className="font-sans text-[9px] tracking-[0.35em] uppercase text-bronze">Switzerland</div>
            </div>
            <p className="font-sans text-sm text-stone leading-relaxed max-w-xs mb-8">
              {t.footer.tagline}
            </p>
            <div>
              <p className="section-label text-bronze mb-3">{t.footer.contact}</p>
              <a
                href="mailto:info@vthinvest.ch"
                className="font-sans text-sm text-stone hover:text-cream-50 transition-colors duration-200"
              >
                info@vthinvest.ch
              </a>
            </div>
          </div>

          {/* Pages column */}
          <div className="lg:col-span-2 lg:col-start-6">
            <p className="section-label text-bronze mb-6">{t.footer.navigation}</p>
            <ul className="space-y-3">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="font-sans text-sm text-stone hover:text-cream-50 transition-colors duration-200"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors column */}
          <div className="lg:col-span-2">
            <p className="section-label text-bronze mb-6">{t.footer.sectors}</p>
            <ul className="space-y-3">
              {sectors.map((s) => (
                <li key={s}>
                  <Link
                    href={`/sectors#${s.toLowerCase().replace(' ', '-')}`}
                    className="font-sans text-sm text-stone hover:text-cream-50 transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote column */}
          <div className="lg:col-span-3 lg:col-start-10">
            <blockquote className="font-serif text-xl font-light italic text-cream-100/70 leading-relaxed border-l border-bronze pl-6">
              &ldquo;{t.home.philosophy.quote}&rdquo;
              <footer className="mt-3 font-sans text-[10px] tracking-[0.15em] uppercase text-stone-dark not-italic">
                {t.home.philosophy.quoteAuthor}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-dark/30">
        <div className="container-vth py-6">
          <div className="mb-4">
            <p className="font-sans text-[10px] text-stone-dark leading-relaxed max-w-3xl">
              {locale === 'de'
                ? 'Diese Website richtet sich ausschliesslich an qualifizierte und professionelle Anleger. Die Informationen stellen kein Angebot dar. © ' + new Date().getFullYear() + ' VTH Management AG, Bahnhof-Park 2, 6340 Baar, Schweiz. Alle Rechte vorbehalten.'
                : 'This website is exclusively intended for qualified and professional investors. The information does not constitute an offer. © ' + new Date().getFullYear() + ' VTH Management AG, Bahnhof-Park 2, 6340 Baar, Switzerland. All rights reserved.'}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-sans text-[11px] text-stone-dark">
              © {new Date().getFullYear()} VTH Management AG. {t.footer.rights}
            </p>
            <div className="flex items-center gap-6">
              {legal.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-sans text-[11px] text-stone-dark hover:text-stone transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { locales, localeNames, type Locale } from '@/lib/i18n/translations'

const serviceLinks = [
  { href: '/services#advisory-heading', label: 'Real Estate Advisory' },
  { href: '/services#amc-heading', label: 'AMC & Structuring' },
  { href: '/services#credit-heading', label: 'Capital Structure & Credit' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const { locale, setLocale, t } = useLanguage()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const navLinks = [
    { href: '/sectors', label: t.nav.sectors },
    { href: '/portfolio', label: t.nav.portfolio },
    { href: '/leadership', label: t.nav.leadership },
    { href: '/process', label: t.nav.process },
    { href: '/acquisition', label: t.nav.acquisition },
    { href: '/contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const solid = scrolled || !isHome
  const navBg = solid ? 'bg-cream-50/95 backdrop-blur-sm border-b border-stone-light/30' : 'bg-transparent'
  const logoColor = solid ? 'text-charcoal' : 'text-cream-50'
  const linkColor = solid ? 'text-stone-dark hover:text-charcoal' : 'text-cream-50/70 hover:text-cream-50'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-vth">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className={`transition-colors duration-300 ${logoColor}`} aria-label="VTH Group — Home">
              <div className="flex flex-col leading-none">
                <span className="font-serif text-2xl font-medium tracking-tight">VTH Group</span>
                <span className={`font-sans text-[8px] tracking-[0.3em] uppercase mt-0.5 ${solid ? 'text-bronze' : 'text-bronze-light/80'}`}>
                  Switzerland
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-7">
              {/* Services dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex items-center gap-1 font-sans text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 ${linkColor} ${servicesOpen ? (solid ? '!text-bronze' : '!text-bronze-light') : ''}`}
                >
                  Services
                  <ChevronDown size={11} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-3 w-52 bg-cream-50 border border-stone-light/40 shadow-lg z-60">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-5 py-3.5 font-sans text-[11px] tracking-[0.15em] uppercase text-stone-dark hover:text-bronze hover:bg-cream-100 transition-colors duration-150 border-b border-stone-light/30 last:border-0"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Rest of nav links */}
              {navLinks.filter(l => l.href !== '/about').map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 ${linkColor} ${pathname === link.href ? (solid ? '!text-bronze' : '!text-bronze-light') : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Language switcher + CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <div className={`hidden lg:flex items-center gap-1 border-l pl-4 ${solid ? 'border-stone-light/40' : 'border-cream-50/20'}`}>
                {locales.map((l: Locale) => (
                  <button
                    key={l}
                    onClick={() => setLocale(l)}
                    className={`font-sans text-[10px] tracking-[0.15em] uppercase px-1.5 py-0.5 transition-colors duration-200 ${
                      locale === l
                        ? solid ? 'text-bronze' : 'text-bronze-light'
                        : solid ? 'text-stone hover:text-charcoal' : 'text-cream-50/50 hover:text-cream-50'
                    }`}
                  >
                    {localeNames[l]}
                  </button>
                ))}
              </div>

              <Link
                href="/contact"
                className={`hidden lg:inline-flex font-sans text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                  solid
                    ? 'border-charcoal text-charcoal hover:bg-charcoal hover:text-cream-50'
                    : 'border-cream-50/50 text-cream-50/90 hover:border-cream-50 hover:text-cream-50'
                }`}
              >
                {t.nav.cta}
              </Link>

              <button
                className={`lg:hidden p-1 transition-colors duration-200 ${solid ? 'text-charcoal' : 'text-cream-50'}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal transition-all duration-500 ease-premium lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col px-8 pb-10 overflow-y-auto" style={{ paddingTop: '96px' }}>
          <div className="flex flex-col gap-1">
            {/* Services in mobile */}
            <div className="border-b border-stone-dark/30 py-2">
              <p className="font-serif text-2xl font-light text-cream-50/50 mb-2">Services</p>
              {serviceLinks.map((s) => (
                <Link key={s.href} href={s.href} className="block font-sans text-xs tracking-widest uppercase text-stone hover:text-bronze-light transition-colors duration-200 py-1 pl-4">
                  {s.label}
                </Link>
              ))}
            </div>
            {navLinks.filter(l => l.href !== '/about').map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-serif text-2xl font-light text-cream-50 py-2 border-b border-stone-dark/30 hover:text-bronze-light transition-colors duration-200"
                style={{ transitionDelay: menuOpen ? `${(i + 2) * 50}ms` : '0ms' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-10">
            {locales.map((l: Locale) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`font-sans text-sm tracking-widest uppercase transition-colors duration-200 ${
                  locale === l ? 'text-bronze' : 'text-stone hover:text-cream-50'
                }`}
              >
                {localeNames[l]}
              </button>
            ))}
          </div>
          <div className="mt-8">
            <p className="section-label text-bronze mb-2">Contact</p>
            <a href="mailto:info@vthinvest.ch" className="font-sans text-stone text-sm hover:text-cream-50 transition-colors duration-200">
              info@vthinvest.ch
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

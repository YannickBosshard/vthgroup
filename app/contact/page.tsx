'use client'

import PageHero from '@/components/ui/PageHero'
import ContactForm from '@/components/ContactForm'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()
  const c = t.contact

  return (
    <>
      <PageHero label={c.hero.label} title={c.hero.title} subtitle={c.hero.subtitle} />

      <section className="py-section bg-cream-50">
        <div className="container-vth">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="section-label text-bronze mb-8">{c.reasons.label}</p>
              <div className="space-y-0 border-t border-stone-light/40">
                {c.reasons.items.map((r, i) => (
                  <div key={i} className="py-6 border-b border-stone-light/40">
                    <h3 className="font-serif text-base font-medium text-charcoal mb-1">{r.title}</h3>
                    <p className="font-sans text-sm text-stone leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 space-y-6">
                <div>
                  <p className="section-label text-bronze mb-2">{c.address}</p>
                  <p className="font-sans text-sm text-charcoal leading-relaxed">
                    Bahnhof-Park 2<br />
                    6340 Baar<br />
                    Switzerland
                  </p>
                </div>
                <div>
                  <p className="section-label text-bronze mb-2">{c.email}</p>
                  <a href="mailto:info@vthinvest.ch" className="font-sans text-sm text-charcoal hover:text-bronze transition-colors duration-200">
                    info@vthinvest.ch
                  </a>
                </div>
                <div>
                  <p className="section-label text-bronze mb-2">{c.general}</p>
                  <a href="tel:+41787479221" className="font-sans text-sm text-charcoal hover:text-bronze transition-colors duration-200">
                    +41 78 747 92 21
                  </a>
                </div>
                <div>
                  <p className="section-label text-bronze mb-2">{c.coInvestment}</p>
                  <a href="tel:+41792549700" className="font-sans text-sm text-charcoal hover:text-bronze transition-colors duration-200">
                    +41 79 254 97 00
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-light/20">
        <div className="w-full h-[400px]">
          <iframe
            src="https://maps.google.com/maps?q=Bahnhof-Park+2,+6340+Baar,+Switzerland&output=embed"
            width="100%"
            height="400"
            style={{ border: 0, filter: 'grayscale(1)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="VTH Group Office — Bahnhof-Park 2, Baar"
          />
        </div>
      </section>
    </>
  )
}

'use client'

import PageHero from '@/components/ui/PageHero'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function SectorsPage() {
  const { t } = useLanguage()
  const s = t.sectors

  return (
    <>
      <PageHero
        label={s.hero.label}
        title={s.hero.title}
        subtitle={s.hero.subtitle}
      />

      {s.items.map((sector, i) => (
        <section
          key={sector.id}
          id={sector.id}
          className={`py-section ${i % 2 === 0 ? 'bg-cream-50' : 'bg-cream-100'}`}
          aria-labelledby={`sector-${sector.id}`}
        >
          <div className="container-vth">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
              <div className={`lg:col-span-5 ${i % 2 !== 0 ? 'lg:order-2 lg:col-start-8' : ''}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={[
                      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&auto=format&fit=crop',
                      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop',
                      'https://images.unsplash.com/photo-1757488933744-83f652e1f806?w=1200&q=80&auto=format&fit=crop',
                      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop',
                      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80&auto=format&fit=crop',
                    ][i]}
                    alt={sector.name}
                    className="w-full h-full object-cover"
                    style={{ filter: 'saturate(0.85)' }}
                  />
                </div>
              </div>

              <div className={`lg:col-span-6 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:order-1' : 'lg:col-start-7'}`}>
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-serif text-6xl font-light text-stone-light/50 leading-none">{sector.number}</span>
                  <div>
                    <h2 id={`sector-${sector.id}`} className="font-serif text-3xl font-light text-charcoal">
                      {sector.name}
                    </h2>
                    <p className="font-sans text-sm text-bronze mt-1">{sector.tagline}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  {sector.body.map((para, j) => (
                    <p key={j} className="font-sans text-stone-dark text-sm leading-relaxed">{para}</p>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {sector.focus.map((f, j) => (
                    <div key={j} className="border-t border-stone-light/50 pt-4">
                      <h3 className="font-sans text-xs font-medium text-charcoal tracking-wide mb-1">{f.title}</h3>
                      <p className="font-sans text-xs text-stone leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

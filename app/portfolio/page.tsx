'use client'

import PageHero from '@/components/ui/PageHero'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const active = [
  {
    name: 'Swiss Open MRI',
    sector: 'Healthcare',
    location: 'Switzerland',
    category: 'Radiology — Open MRI & Diagnostics',
    description:
      'Swiss Open MRI is a venture-stage radiology concept offering accessible, patient-centred diagnostic imaging through open MRI technology. The service portfolio encompasses open MRI, CT, fluoroscopy, and sonography — addressing a structural gap in outpatient diagnostic capacity across the Swiss healthcare market.',
    highlights: [
      'Open MRI, CT, fluoroscopy & sonography',
      'Outpatient diagnostic services — Swiss market',
      'Venture investment — healthcare sector',
    ],
    image: '/images/portfolio/swiss-open-mri/swiss-open-mri.png',
    logo: '/images/portfolio/swiss-open-mri/swiss-open-mri-logo.png',
    logoHeight: 'h-24',
  },
  {
    name: 'Future Residence',
    sector: 'Real Estate',
    location: 'Târgu Mureș, Romania',
    category: 'Residential & Commercial Development',
    description:
      'A large-scale residential development encompassing 500 freehold apartments and commercial space across 13 buildings on a fully owned, debt-free plot. The project is structured in three consecutive construction phases, providing risk-controlled delivery with Phase 1 commencing Q3 2026.',
    highlights: [
      '500 apartments across 13 buildings',
      'Three-phase delivery structure',
      'Fully owned, equity-financed land',
    ],
    image: '/images/portfolio/future-residence/future-residence.png',
    logo: null,
  },
  {
    name: 'Airport Area',
    sector: 'Real Estate',
    location: 'Ungheni, Mureș, Romania',
    category: 'Industrial & Logistics Development',
    description:
      'A strategically located mixed-use development land parcel of 189,205 m² situated directly adjacent to the E60 motorway, designated for industrial and logistics development. The strategic plan envisages warehouse and logistics facilities targeting major international logistics and transport operators.',
    highlights: [
      '189,205 m² fully owned site',
      'E60 motorway access, industrial zoning',
      'Targeting major international logistics operators',
    ],
    image: '/images/portfolio/airport-area/airport-area.png',
    logo: null,
  },
  {
    name: 'Gravel Pit',
    sector: 'Infrastructure',
    location: 'Birk, Mureș, Romania',
    category: 'Infrastructure — Gravel Extraction',
    description:
      'A low-risk infrastructure investment on a 123-hectare site strategically positioned near the planned A3 motorway corridor. VTH manages all extraction activities directly, retaining full operational control. Romania\'s EU-funded infrastructure programme — with approximately EUR 100 billion allocated through 2027 — drives sustained regional demand for construction materials.',
    highlights: [
      '123 hectares, 4 million tonnes contracted volume',
      'Fully in-house operated — no third-party operator',
      'Structural demand from EU-funded Romanian infrastructure programme',
    ],
    image: '/images/portfolio/gravel-pit/gravel-pit.png',
    logo: null,
  },
]

export default function PortfolioPage() {
  const { t } = useLanguage()
  const po = t.portfolio

  return (
    <>
      <PageHero label={po.hero.label} title={po.hero.title} subtitle={po.hero.subtitle} />

      {/* Disclaimer */}
      <section className="py-6 bg-stone-light/10 border-b border-stone-light/40">
        <div className="container-vth">
          <p className="font-sans text-xs text-stone leading-relaxed max-w-3xl">
            {po.disclaimer}
          </p>
        </div>
      </section>

      {/* Active investments */}
      <section className="py-section bg-cream-50">
        <div className="container-vth">
          <div className="flex items-center gap-4 mb-12">
            <p className="section-label text-bronze">{po.activeLabel}</p>
            <div className="flex-1 h-px bg-stone-light/40" />
          </div>
          <div className="space-y-px bg-stone-light/30">
            {active.map((p, i) => (
              <div key={i} className="bg-cream-50">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Image */}
                  <div className="lg:col-span-4 relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                      style={{ filter: 'saturate(0.9)' }}
                    />
                    {p.logo && (
                      <div className="absolute bottom-5 left-5 right-5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.logo}
                          alt={`${p.name} logo`}
                          className={`${p.logoHeight ?? 'h-24'} w-auto object-contain`}
                          style={{ mixBlendMode: 'multiply' }}
                        />
                      </div>
                    )}
                  </div>
                  {/* Content */}
                  <div className="lg:col-span-8 p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-2 h-2 bg-bronze rounded-full" />
                      <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-bronze">{po.status}</span>
                    </div>
                    <h2 className="font-serif text-2xl font-medium text-charcoal mb-1">{p.name}</h2>
                    <p className="font-sans text-xs tracking-[0.12em] uppercase text-stone mb-1">{p.sector}</p>
                    <p className="font-sans text-xs text-stone-dark mb-4">{p.location}</p>
                    <p className="font-sans text-sm text-stone italic mb-6">{p.category}</p>
                    <p className="font-sans text-sm text-stone-dark leading-relaxed mb-6">{p.description}</p>
                    <ul className="space-y-2">
                      {p.highlights.map((h, j) => (
                        <li key={j} className="flex items-center gap-3 font-sans text-sm text-stone">
                          <span className="w-1 h-1 bg-bronze rounded-full shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic focus note */}
      <section className="py-section-sm bg-charcoal">
        <div className="container-vth">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="section-label text-bronze mb-4">{po.geoTitle}</p>
              <h2 className="font-serif text-2xl font-light text-cream-50 leading-tight mb-4">
                {po.geoSubTitle}
              </h2>
              <p className="font-sans text-stone text-sm leading-relaxed">
                {po.geoBody}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

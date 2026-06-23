import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'VTH Group\'s active investment portfolio across Real Estate and Infrastructure in European markets.',
}

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
    status: 'Active',
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
    status: 'Active',
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
    status: 'Active',
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
    status: 'Active',
    image: '/images/portfolio/gravel-pit/gravel-pit.png',
    logo: null,
  },
  {
    name: 'Royal Aesthetik',
    sector: 'Healthcare',
    location: 'Kanton Schwyz, Switzerland',
    category: 'Medical Aesthetics — Clinic',
    description:
      'Royal Aesthetik is a premium medical aesthetics clinic operating in Kanton Schwyz under the medical direction of Dr. med. Roya Jeyrani. The clinic combines modern medicine with individual care — delivering results that are noticed, not announced.',
    highlights: [
      'Medical aesthetics clinic, Kanton Schwyz',
      'Under medical direction of Dr. med. Roya Jeyrani',
      'Premium outpatient aesthetic treatments',
    ],
    status: 'Active',
    image: '/images/portfolio/royal-aesthetik/royal-aesthetik.jpg',
    logo: '/images/portfolio/royal-aesthetik/royal-aesthetik-logo.jpg',
    logoHeight: 'h-32',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        label="Portfolio"
        title="Investments built<br/>to last."
        subtitle="Our portfolio reflects disciplined investment across sectors where we have genuine conviction, operational knowledge, and long-term relationships. All investments are held on a fully owned, equity-financed basis."
      />

      {/* Disclaimer */}
      <section className="py-6 bg-stone-light/10 border-b border-stone-light/40">
        <div className="container-vth">
          <p className="font-sans text-xs text-stone leading-relaxed max-w-3xl">
            The information on this page is provided for general reference purposes only and does not constitute an offer, solicitation, or invitation to invest. VTH Group does not make investment recommendations through this website.
          </p>
        </div>
      </section>

      {/* Active investments */}
      <section className="py-section bg-cream-50">
        <div className="container-vth">
          <div className="flex items-center gap-4 mb-12">
            <p className="section-label text-bronze">Active Investments</p>
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
                      <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-bronze">{p.status}</span>
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
              <p className="section-label text-bronze mb-4">Geographic Focus</p>
              <h2 className="font-serif text-2xl font-light text-cream-50 leading-tight mb-4">
                Central and Eastern Europe — where fundamentals meet opportunity.
              </h2>
              <p className="font-sans text-stone text-sm leading-relaxed">
                Our current portfolio is concentrated in Romania — a market characterised by strong structural growth, EU accession tailwinds, and a significant infrastructure investment pipeline. We operate through local partnerships with deep regional expertise, enabling off-market access and efficient execution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

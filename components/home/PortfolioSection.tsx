'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const portfolio = [
  {
    name: 'Future Residence',
    category: 'Residential & Commercial Development',
    sector: 'Real Estate',
    location: 'Târgu Mureș, Romania',
    status: 'Active',
    image: '/images/portfolio/future-residence/future-residence.png',
    description: '500 freehold apartments across 13 buildings on a fully owned, equity-financed plot. Three-phase delivery structure with Phase 1 commencing Q3 2026.',
  },
  {
    name: 'Airport Area',
    category: 'Industrial & Logistics Development',
    sector: 'Real Estate',
    location: 'Ungheni, Mureș, Romania',
    status: 'Active',
    image: '/images/portfolio/airport-area/airport-area.png',
    description: '189,205 m² mixed-use development land adjacent to the E60 motorway, designated for warehouse and logistics facilities targeting major international operators.',
  },
  {
    name: 'Gravel Pit',
    category: 'Infrastructure — Gravel Extraction',
    sector: 'Mining & Quarrying',
    location: 'Birk, Mureș, Romania',
    status: 'Active',
    image: '/images/portfolio/gravel-pit/gravel-pit.png',
    description: '123-hectare site near the planned A3 motorway corridor. Fully in-house operated with 4 million tonnes contracted volume and structural demand from Romania\'s EU infrastructure programme.',
  },
  {
    name: 'Swiss Open MRI',
    category: 'Radiology — Open MRI & Diagnostics',
    sector: 'Healthcare',
    location: 'Switzerland',
    status: 'Active',
    image: '/images/portfolio/swiss-open-mri/swiss-open-mri.png',
    description: 'Venture-stage radiology concept offering open MRI, CT, fluoroscopy, and sonography — addressing a structural gap in outpatient diagnostic capacity in the Swiss market.',
  },
  {
    name: 'Royal Aesthetik',
    category: 'Aesthetic Medicine',
    sector: 'Healthcare',
    location: 'Switzerland',
    status: 'Active',
    image: '/images/portfolio/royal-aesthetik/royal-aesthetik.jpg',
    description: 'Premium aesthetic medicine practice offering non-surgical treatments and skin care. A growing healthcare brand with expansion potential in the Swiss market.',
  },
]

export default function PortfolioSection() {
  return (
    <section className="py-section bg-cream-50" aria-labelledby="portfolio-heading">
      <div className="container-vth">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="section-number">04</span>
              <div className="w-8 h-px bg-bronze" />
            </div>
            <p className="section-label text-bronze mb-4">Portfolio</p>
            <h2
              id="portfolio-heading"
              className="font-serif font-light text-charcoal"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              Active investments
              <br />
              across our sectors.
            </h2>
          </div>
          <Link href="/portfolio" className="btn-link self-start lg:self-auto">
            Full portfolio <ArrowUpRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-light/30">
          {portfolio.map((p, i) => (
            <div
              key={i}
              className="bg-cream-50 group hover:bg-cream-100 transition-colors duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
              </div>
              <div className="p-10">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase px-3 py-1 bg-bronze/10 text-bronze">
                    {p.status}
                  </span>
                  <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-stone">{p.sector}</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-charcoal mb-1 group-hover:text-bronze transition-colors duration-200">
                  {p.name}
                </h3>
                <p className="font-sans text-[10px] tracking-[0.12em] uppercase text-stone mb-1">{p.category}</p>
                <p className="font-sans text-xs text-stone-dark mb-4">{p.location}</p>
                <p className="font-sans text-sm text-stone leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

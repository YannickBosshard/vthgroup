import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Acquisition Criteria',
  description:
    'VTH Group acquisition criteria for real estate and private equity. Minimum EUR 5 million. Value-Add, Residential, Light Industrial, and company investments across Europe.',
}

const realEstate = [
  {
    number: '01',
    name: 'Value-Add & Opportunistic',
    tagline: 'Repositioning, conversion, and development across European markets.',
    criteria: [
      { label: 'Target uses', value: 'Residential, alternative housing, offices, logistics, retail' },
      { label: 'Further criteria', value: 'Renovations, conversions, development projects' },
      { label: 'Minimum size', value: 'Min. 5,000 – 15,000 m² buildable floor area (BGF)' },
      { label: 'Permitted use', value: 'Residential or commercial construction feasible' },
      { label: 'Locations', value: 'European A-tier cities · B, C and D-cities in economically strong regions' },
      { label: 'Other', value: 'Minimum EUR 5 million volume · Individual assets and portfolios as asset or share deal or JV structures · Equity, quasi-equity / mezzanine, debt / NPLs' },
    ],
  },
  {
    number: '02',
    name: 'Residential',
    tagline: 'Housing and senior living with strong structural demand.',
    criteria: [
      { label: 'Target uses', value: 'Residential, senior living' },
      { label: 'Further criteria', value: 'Built or unbuilt land · Existing buildings with conversion potential' },
      { label: 'Minimum size', value: 'Min. 5,000 – 15,000 m² buildable floor area (BGF)' },
      { label: 'Permitted use', value: 'Residential use feasible' },
      { label: 'Locations', value: 'European A-tier cities (suburbs / commuter belt) · B, C and D-cities in economically strong regions · Good transport links · Locations with medium to high quality of life' },
      { label: 'Other', value: 'Individual assets and portfolios as asset or share deal or JV structures' },
    ],
  },
  {
    number: '03',
    name: 'Light Industrial',
    tagline: 'Business parks for SMEs and growth-stage companies.',
    criteria: [
      { label: 'Target uses', value: 'Business parks / light industrial for SMEs and start-ups' },
      { label: 'Further criteria', value: 'Built or unbuilt land · Existing buildings with conversion potential' },
      { label: 'Minimum size', value: 'Min. 5,000 – 15,000 m² buildable floor area (BGF)' },
      { label: 'Permitted use', value: 'Industrial (GI), commercial (GE), mixed-use (MI), special designation zones (SO)' },
      { label: 'Locations', value: 'European A-tier cities (agglomerations) · B and C-cities in economically strong regions · Good transport links (proximity to arterial roads, motorway access) · Public transit preferred' },
      { label: 'Other', value: 'Individual assets and portfolios as asset or share deal or JV structures' },
    ],
  },
]

const privateEquity = [
  {
    number: '04',
    name: 'Growth-Stage Companies',
    tagline: 'Entrepreneurs and operators building scalable businesses.',
    criteria: [
      { label: 'Stage', value: 'Series A through growth stage · Proven business model with demonstrated traction' },
      { label: 'Sectors', value: 'Healthcare · Infrastructure technology · Real estate technology · Industrials & construction · Selected B2B sectors' },
      { label: 'Ticket size', value: 'EUR 1 – 10 million initial investment · Follow-on capacity available' },
      { label: 'Geography', value: 'Switzerland · DACH region · Selected Western and Central European markets' },
      { label: 'Structures', value: 'Minority or majority stakes · Co-investment alongside founders · Joint ventures · Convertible instruments' },
      { label: 'What we offer', value: 'Capital · Swiss network · Operational expertise · Board-level strategic support · Access to co-investors and institutional partners' },
    ],
  },
  {
    number: '05',
    name: 'Entrepreneurial Ventures & Business Concepts',
    tagline: 'Founding-stage concepts backed by exceptional teams.',
    criteria: [
      { label: 'Stage', value: 'Pre-seed through seed · Strong founding team with deep sector expertise required' },
      { label: 'Sectors', value: 'Healthcare & life sciences · Industrials & construction · Digital infrastructure · PropTech · AgriTech & food systems' },
      { label: 'Ticket size', value: 'EUR 250K – 2 million · Syndicated structures welcomed' },
      { label: 'What we assess', value: 'Quality and commitment of the founding team · Scalability of the concept · Defensibility of the business model · Addressable market size · Regulatory environment' },
      { label: 'Structures', value: 'Equity · Convertible notes · Joint venture creation alongside VTH Group partners' },
      { label: 'What we offer', value: 'Patient capital with no short-term exit pressure · Active strategic partnership · Access to our network of operators, investors, and advisors · Co-founder positioning where appropriate' },
    ],
  },
  {
    number: '06',
    name: 'Buy-and-Build / Corporate Acquisitions',
    tagline: 'Established businesses with platform and consolidation potential.',
    criteria: [
      { label: 'Stage', value: 'Profitable SMEs · Succession situations · Carve-outs · Distressed but operationally sound businesses' },
      { label: 'Sectors', value: 'Healthcare services · Industrial services · Infrastructure services · Specialised B2B businesses aligned with group sectors' },
      { label: 'Revenue', value: 'EUR 2 – 50 million annual revenue · Positive EBITDA preferred · Turnaround situations considered selectively' },
      { label: 'Geography', value: 'Switzerland · DACH region · Eastern European EU markets' },
      { label: 'Structures', value: 'Full acquisitions · Majority stakes · Management buy-outs with retained management · Succession buy-outs' },
      { label: 'What we offer', value: 'Certainty of execution · Rapid decision-making · Discreet process · Long-term ownership mindset · No forced exit timeline' },
    ],
  },
]

function CriteriaTable({ criteria }: { criteria: { label: string; value: string }[] }) {
  return (
    <div className="border-t border-stone-light/50">
      {criteria.map((c, j) => (
        <div key={j} className="flex gap-6 py-4 border-b border-stone-light/40">
          <div className="w-32 shrink-0">
            <span className="font-sans text-[10px] tracking-[0.12em] uppercase text-stone">{c.label}</span>
          </div>
          <div className="flex-1">
            <span className="font-sans text-sm text-charcoal leading-relaxed">{c.value}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function AcquisitionPage() {
  return (
    <>
      <PageHero
        label="Acquisition Criteria"
        title="We move fast.<br/>We decide directly."
        subtitle="VTH Group continuously seeks real estate and company investment opportunities matching our criteria. As a professional, owner-managed group we offer rapid decision-making and a discreet, efficient process."
      />

      {/* Intro */}
      <section className="py-12 bg-cream-100 border-b border-stone-light/40">
        <div className="container-vth">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <p className="section-label text-bronze mb-3">Two profiles</p>
              <div className="flex flex-col gap-3 mt-4">
                <a href="#real-estate" className="btn-link">Real Estate criteria</a>
                <a href="#private-equity" className="btn-link">Private Equity criteria</a>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="font-sans text-stone-dark text-base leading-relaxed font-light">
                VTH Group operates two distinct acquisition tracks — real estate and private equity / company investments. Both share the same core principles: off-market preference, rapid and direct decision-making, and genuine long-term partnership orientation.
              </p>
              <p className="font-sans text-stone-dark text-base leading-relaxed font-light mt-4">
                If you have an asset, site, company, or concept that may align with our criteria, reach out directly. We treat every submission with discretion and respond personally to every serious enquiry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REAL ESTATE */}
      <div id="real-estate">
        <section className="py-14 bg-cream-50 border-b border-stone-light/40">
          <div className="container-vth">
            <div className="flex items-center gap-4 mb-2">
              <p className="section-label text-bronze">Real Estate Acquisition Profile</p>
              <div className="flex-1 h-px bg-stone-light/40" />
            </div>
            <p className="font-sans text-sm text-stone mt-2 max-w-2xl">
              We continuously seek properties matching our acquisition criteria. As a professional, owner-managed partner we guarantee a swift decision process and — in case of a positive acquisition decision — a smooth and discreet transaction.
            </p>
          </div>
        </section>

        {realEstate.map((cat, i) => (
          <section
            key={cat.number}
            className={`py-section ${i % 2 === 0 ? 'bg-cream-50' : 'bg-cream-100'}`}
          >
            <div className="container-vth">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-serif text-5xl font-light text-stone-light/50 leading-none">{cat.number}</span>
                  </div>
                  <h2 className="font-serif text-2xl font-medium text-charcoal mb-2">{cat.name}</h2>
                  <p className="font-sans text-sm text-bronze">{cat.tagline}</p>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                  <CriteriaTable criteria={cat.criteria} />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* PRIVATE EQUITY */}
      <div id="private-equity">
        <section className="py-14 bg-charcoal border-b border-stone-dark/40">
          <div className="container-vth">
            <div className="flex items-center gap-4 mb-2">
              <p className="section-label text-bronze">Private Equity & Company Acquisition Profile</p>
              <div className="flex-1 h-px bg-stone-dark/40" />
            </div>
            <p className="font-sans text-sm text-stone mt-2 max-w-2xl">
              Beyond real estate, VTH Group invests in companies, entrepreneurial ventures, and business concepts across our five core sectors. We back exceptional teams with capital, network, and genuine operational partnership.
            </p>
          </div>
        </section>

        {privateEquity.map((cat, i) => (
          <section
            key={cat.number}
            className={`py-section ${i % 2 === 0 ? 'bg-charcoal-50' : 'bg-charcoal'}`}
          >
            <div className="container-vth">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-serif text-5xl font-light text-stone-dark/40 leading-none">{cat.number}</span>
                  </div>
                  <h2 className="font-serif text-2xl font-medium text-cream-50 mb-2">{cat.name}</h2>
                  <p className="font-sans text-sm text-bronze">{cat.tagline}</p>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                  <div className="border-t border-stone-dark/40">
                    {cat.criteria.map((c, j) => (
                      <div key={j} className="flex gap-6 py-4 border-b border-stone-dark/30">
                        <div className="w-32 shrink-0">
                          <span className="font-sans text-[10px] tracking-[0.12em] uppercase text-stone-dark">{c.label}</span>
                        </div>
                        <div className="flex-1">
                          <span className="font-sans text-sm text-stone leading-relaxed">{c.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-section-sm bg-cream-50 border-t border-stone-light/40">
        <div className="container-vth">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="section-label text-bronze mb-4">Submit an Opportunity</p>
              <h2 className="font-serif text-3xl font-light text-charcoal leading-tight mb-4">
                Have a property, company, or concept that fits?
              </h2>
              <p className="font-sans text-stone-dark text-sm leading-relaxed font-light">
                We welcome direct submissions from owners, founders, developers, brokers, and intermediaries. All enquiries are handled with full discretion and reviewed personally by our investment team.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 space-y-4">
              <Link href="/contact" className="btn-primary justify-center w-full block text-center">
                Submit an opportunity <ArrowUpRight size={14} className="inline" />
              </Link>
              <div className="text-center space-y-1 pt-2">
                <p className="font-sans text-[10px] text-stone-dark tracking-wide uppercase">Direct contact</p>
                <a href="tel:+41787479221" className="font-sans text-sm text-stone hover:text-charcoal transition-colors duration-200 block">
                  +41 78 747 92 21 — General
                </a>
                <a href="tel:+41792549700" className="font-sans text-sm text-stone hover:text-charcoal transition-colors duration-200 block">
                  +41 79 254 97 00 — Co-Investment Enquiries
                </a>
                <a href="mailto:info@vthinvest.ch" className="font-sans text-sm text-stone hover:text-charcoal transition-colors duration-200 block">
                  info@vthinvest.ch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description:
    'VTH Group is an independent Swiss investment and holding group. Learn about our origin, structure, values, and the vision that drives everything we do.',
}

const milestones = [
  { year: '2015', event: 'Foundation of VTH Invest AG in Switzerland.' },
  { year: '2016', event: 'First real estate co-investment with Eastern European developer network.' },
  { year: '2018', event: 'Expansion into healthcare with MediPark co-founding.' },
  { year: '2020', event: 'Private equity arm established. YASAI investment completed.' },
  { year: '2024', event: 'YASAI successfully divested. Group restructuring begins.' },
  { year: '2026', event: 'VTH Group formally established as diversified investment holding.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About VTH Group"
        title="Built to last.<br/>Designed to grow."
        subtitle="VTH Group is the evolution of a decade of conviction investing — from a Swiss real estate boutique to a diversified holding group with operational depth across five sectors."
      />

      {/* Divider */}
      <div className="h-px bg-stone-light/40" />

      {/* Origin story */}
      <section className="py-section bg-cream-50">
        <div className="container-vth">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="section-label text-bronze mb-4">Our Origin</p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-6">
              <h2 className="font-serif text-3xl font-light text-charcoal leading-tight">
                From a Swiss investment boutique to a modern holding group.
              </h2>
              <p className="font-sans text-stone-dark text-base leading-relaxed font-light">
                VTH Group began as VTH Invest AG — a Swiss private equity and real estate boutique working alongside carefully selected partners on off-market opportunities. Over a decade, we built a track record, a team, and a network that extended well beyond our original mandate.
              </p>
              <p className="font-sans text-stone-dark text-base leading-relaxed font-light">
                The rebrand to VTH Group reflects a structural reality: we have grown into a multi-sector investment and holding platform. We are no longer simply allocating capital on behalf of others. We are building businesses, acquiring assets, and stewarding them as long-term owners.
              </p>
              <p className="font-sans text-stone-dark text-base leading-relaxed font-light">
                What has not changed is our philosophy. We invest in people. We take a long view. We prefer complexity over competition. And we remain deeply Swiss in our discipline, our discretion, and our standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-section bg-cream-50">
        <div className="container-vth">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="section-label text-bronze mb-4">Who We Work With</p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="font-serif text-3xl font-light text-charcoal leading-tight mb-8">
                Working alongside a carefully selected group of co-investment partners.
              </h2>
              <p className="font-sans text-stone-dark text-base leading-relaxed font-light mb-6">
                VTH Group co-invests its own capital alongside a carefully selected group of partners. We source opportunities through relationships built over years across markets and geographies — focusing on off-market situations not accessible through conventional channels.
              </p>
              <p className="font-sans text-stone-dark text-base leading-relaxed font-light mb-6">
                The partners we work alongside typically include high-net-worth individuals, family offices, asset managers, and institutional partners who share our long-term investment philosophy and co-invest directly into transactions on their own account.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
                {['HNWIs', 'UHNWIs', 'Family Offices', 'Asset Managers', 'Wealth Managers', 'Institutional Partners'].map((t) => (
                  <div key={t} className="border border-stone-light/50 px-4 py-3">
                    <span className="font-sans text-xs text-stone-dark tracking-wide">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy & Mission */}
      <section className="py-section bg-cream-100">
        <div className="container-vth">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="section-label text-bronze mb-4">Strategy</p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="font-serif text-3xl font-light text-charcoal leading-tight mb-8">
                Integration of interdisciplinary strategies.
              </h2>
              <p className="font-sans text-stone-dark text-base leading-relaxed font-light mb-5">
                Our philosophy is to make unique investment opportunities accessible to our partners and clients. We achieve this through comprehensive networks and a multidimensional understanding of different cultures, markets, and geographies.
              </p>
              <p className="font-sans text-stone-dark text-base leading-relaxed font-light mb-5">
                Our investment strategy combines a thematic approach — targeting countries with high growth potential driven by rapidly developing consumer patterns — with a situational approach that acquires assets beyond the conventional market through relationships with developers, architects, and local partners.
              </p>
              <p className="font-sans text-stone-dark text-base leading-relaxed font-light">
                Not subject to liquidity pressure, we can remain strictly aligned with our investment strategy and select our opportunities with care. We invest only where we are convinced we are one step ahead of the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-section bg-charcoal">
        <div className="container-vth">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="section-label text-bronze mb-4">Mission</p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="font-serif text-3xl font-light text-cream-50 leading-tight mb-8">
                Sustainable, value-oriented real estate investments in Europe — with a focus on high-growth emerging markets.
              </h2>
              <p className="font-sans text-stone text-base leading-relaxed font-light mb-5">
                VTH Group invests across Core, Core+, and Value-Add strategies in commercial and residential real estate. Through rigorous selection criteria and active asset management, VTH Group co-invests alongside selected partners with a high standard of transparency throughout the entire investment lifecycle.
              </p>
              <p className="font-sans text-stone text-base leading-relaxed font-light mb-12">
                We do not aspire to be the largest. We aspire to be the most trusted — by our partners, our portfolio companies, and the people we invite to work alongside us.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/sectors" className="btn-link text-bronze border-bronze">
                  Our sectors <ArrowUpRight size={13} />
                </Link>
                <Link href="/acquisition" className="btn-link text-bronze border-bronze">
                  Acquisition criteria <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

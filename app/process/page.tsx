import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Investment Process',
  description:
    'VTH Group manages the entire value creation chain — from deal sourcing and due diligence through structuring, asset management, and exit. A rigorous 5-phase process with full transparency at every step.',
}

const managementRiskPhases = [
  {
    number: '01',
    name: 'Sourcing & Identification',
    timeline: 'Iterative — ongoing',
    left: {
      title: 'Sourcing',
      items: [
        'Screening investment opportunities via our extensive network',
        'Direct off-market origination through developer and architect relationships',
      ],
    },
    right: {
      title: 'Identification',
      items: [
        'Feasibility studies',
        'Location analyses',
        'Potential analyses',
        'Initial investment plan development',
      ],
    },
    description: 'Our acquisition team rigorously evaluates investment opportunities — whether sourced directly or through our extensive network — against strict investment criteria. Feasibility studies and comprehensive data, investment, and potential analyses are carried out. Investment volume and future value creation is estimated. With the initial investment calculation, VTH Group lays the foundation for an optimal asset strategy.',
  },
  {
    number: '02',
    name: 'Initial Due Diligence & Evaluation',
    timeline: 'Operative effort: 3–4 months',
    left: {
      title: 'Due Diligence',
      items: [
        'Data room analysis',
        'Development of investment assumptions based on findings',
      ],
    },
    right: {
      title: 'Evaluation',
      items: [
        'Investment plan update',
        'Sensitivity analyses',
        'Development of negotiation basis',
        'Non-binding price discovery',
      ],
    },
    description: 'After the decision to pursue a project, an initial due diligence review is conducted. The data room is rigorously analysed while the asset strategy and investment assumptions from phase one are stress-tested. All findings feed into the investment plan, which underpins the non-binding price discovery and solidifies the negotiation foundation.',
  },
  {
    number: '3a',
    name: 'Transaction Management & Due Diligence',
    timeline: 'Following investment committee approval',
    left: {
      title: 'Transaction Management',
      items: [
        'Development of negotiation foundations',
        'LOI submission',
        'Negotiation of terms',
        'Purchase contract structuring',
        'Signing and closing',
      ],
    },
    right: {
      title: 'Due Diligence',
      items: [
        'Detailed technical DD',
        'Legal & tax DD',
        'Financial DD',
        'Risk analysis',
      ],
    },
    description: 'Before a project is tabled and presented to co-investment partners, a positive due diligence signal must be given — conducted only after investment committee approval. Where necessary, external technical and legal experts are engaged. During this phase, negotiation foundations are established, terms negotiated, and a purchase contract drawn up covering land acquisition, title transfer, and financing.',
  },
  {
    number: '3b',
    name: 'Product & Investment Management',
    timeline: 'Project duration: 3–4 years',
    left: {
      title: 'Product Management',
      items: [
        'Product structure determination (financing, equity, corporate structure)',
        'Partner engagement',
        'Equity co-investment',
        'Debt structuring',
      ],
    },
    right: {
      title: 'Investment Management',
      items: [
        'Integration of product into the entity',
        'Partnership structuring: joint ventures, property managers, etc.',
      ],
    },
    description: 'We initiate market sounding and select the appropriate product structure, ensuring all regulatory requirements are met — including equity procurement and financing. Upon purchase contract close, the product is integrated into the entity. VTH Group co-invests its own capital in every transaction alongside selected partners.',
  },
]

const marketRiskPhases = [
  {
    number: '04',
    name: 'Investment & Asset Management',
    timeline: 'Ongoing through project lifetime',
    left: {
      title: 'Investment Management',
      items: [
        'Investment plan execution',
        'Value enhancement through investment and management measures',
        'Controlling',
      ],
    },
    right: {
      title: 'Asset Management',
      items: [
        'Administration and letting',
        'Predictive maintenance',
        'Analysis & reporting',
        'Valuation updates',
        'Contracts and insurance',
      ],
    },
    description: 'VTH Group executes the investment plan through active investment and management measures, with the objective of increasing asset value for all co-investing partners. The investment plan is transferred into the asset management controlling framework. VTH Management AG oversees the investment throughout its lifetime, ensuring continuous risk, cost and value optimisation.',
  },
  {
    number: '05',
    name: 'Transaction & Exit Management',
    timeline: 'Final phase of project lifecycle',
    left: {
      title: 'Transaction Management',
      items: [
        'Initiation of sale process',
        'Investment committee approval',
        'Partner engagement',
        'Due diligence coordination',
        'Price negotiations',
        'Purchase contract structuring',
        'Signing and closing',
      ],
    },
    right: {
      title: 'Exit Management',
      items: [
        'Data room preparation',
        'Transaction documentation',
        'Documentation provision',
        'Distribution to all co-investing partners',
        'Corporate structure dissolution',
      ],
    },
    description: 'In the final phase, the sales process is initiated with a focus on price negotiations with potential buyers, coordination of due diligence reviews, and purchase contract execution. Upon sale completion, proceeds are distributed to all co-investing partners and the corporate structure dissolved in an orderly fashion.',
  },
]

function PhaseRow({ p, alt }: { p: typeof managementRiskPhases[0], alt: boolean }) {
  return (
    <div className={`py-16 border-b border-stone-light/40 grid grid-cols-1 lg:grid-cols-12 gap-8 ${alt ? 'bg-cream-100' : 'bg-cream-50'}`}>
      <div className="lg:col-span-3 container-vth lg:pl-0">
        <div className="font-serif text-6xl font-light text-stone-light/40 leading-none mb-4 w-24">{p.number}</div>
        <h2 className="font-serif text-xl font-medium text-charcoal mb-2">{p.name}</h2>
        <p className="font-sans text-xs text-bronze">{p.timeline}</p>
      </div>
      <div className="lg:col-span-5 container-vth lg:pl-0">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="section-label text-stone-dark mb-3">{p.left.title}</p>
            <ul className="space-y-2">
              {p.left.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-bronze rounded-full shrink-0 mt-1.5" />
                  <span className="font-sans text-xs text-stone-dark leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-label text-stone-dark mb-3">{p.right.title}</p>
            <ul className="space-y-2">
              {p.right.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-bronze rounded-full shrink-0 mt-1.5" />
                  <span className="font-sans text-xs text-stone-dark leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:col-span-4 container-vth lg:pl-0">
        <p className="font-sans text-sm text-stone leading-relaxed">{p.description}</p>
      </div>
    </div>
  )
}

export default function ProcessPage() {
  return (
    <>
      <PageHero
        label="Investment Process"
        title="Rigorous. Transparent.<br/>End-to-end."
        subtitle="VTH Group manages the entire investment value chain — from initial sourcing through active asset management to exit. Five phases. Full transparency at every step."
      />

      {/* Key metrics */}
      <section className="py-12 bg-cream-100 border-b border-stone-light/40">
        <div className="container-vth">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '5', label: 'Process Phases' },
              { num: '3–4 mo.', label: 'Operative Due Diligence' },
              { num: '3–4 yr.', label: 'Typical Project Duration' },
              { num: '100%', label: 'Co-Investment Alignment' },
            ].map((s, i) => (
              <div key={i} className="border-l border-bronze pl-6">
                <div className="font-serif text-3xl font-light text-charcoal mb-1">{s.num}</div>
                <div className="font-sans text-[10px] tracking-[0.18em] uppercase text-stone">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANAGEMENT RISK zone */}
      <div className="relative">
        {/* Risk label — right side */}
        <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-14 items-center justify-center z-10 bg-stone-light/10 border-l border-stone-light/30">
          <span
            className="font-sans text-[10px] tracking-[0.25em] uppercase text-stone-dark whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Management Risk
          </span>
        </div>

        {/* Mobile label */}
        <div className="lg:hidden bg-stone-light/10 border-b border-stone-light/30 px-6 py-3">
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone-dark">
            Management Risk — Phases 01–3b
          </span>
        </div>

        <div className="pr-0 lg:pr-14">
          {managementRiskPhases.map((p, i) => (
            <PhaseRow key={p.number} p={p} alt={i % 2 !== 0} />
          ))}
        </div>
      </div>

      {/* MARKET RISK zone */}
      <div className="relative">
        {/* Risk label — right side */}
        <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-14 items-center justify-center z-10 bg-charcoal/5 border-l border-stone-light/30">
          <span
            className="font-sans text-[10px] tracking-[0.25em] uppercase text-bronze whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Market Risk
          </span>
        </div>

        {/* Mobile label */}
        <div className="lg:hidden bg-charcoal/5 border-b border-stone-light/30 px-6 py-3">
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-bronze">
            Market Risk — Phases 04–05
          </span>
        </div>

        <div className="pr-0 lg:pr-14">
          {marketRiskPhases.map((p, i) => (
            <PhaseRow key={p.number} p={p} alt={i % 2 !== 0} />
          ))}
        </div>
      </div>

      {/* Co-investment note */}
      <section className="py-section-sm bg-charcoal">
        <div className="container-vth">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="section-label text-bronze mb-4">Alignment of Interests</p>
              <h2 className="font-serif text-2xl font-light text-cream-50 leading-tight mb-4">
                VTH Group co-invests its own capital alongside selected partners in every transaction.
              </h2>
              <p className="font-sans text-stone text-sm leading-relaxed">
                We believe the best investment partnerships are built on complete alignment. By co-investing in every transaction, our interests are structurally linked to those of our partners — from the first commitment through to final distribution.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <Link href="/contact" className="btn-primary justify-center w-full">
                Discuss an opportunity <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Legal disclaimer */}
      <section className="py-8 bg-cream-100 border-t border-stone-light/40">
        <div className="container-vth">
          <p className="font-sans text-xs text-stone leading-relaxed max-w-3xl">
            VTH Management AG invests its own capital alongside selected co-investment partners. It does not manage third-party assets, act as a fund manager, or provide regulated financial services.
          </p>
        </div>
      </section>
    </>
  )
}


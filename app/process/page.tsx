'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const managementRiskPhases = [
  {
    number: '01',
    left: { title: 'Sourcing', items: ['Screening investment opportunities via our extensive network', 'Direct off-market origination through developer and architect relationships'] },
    right: { title: 'Identification', items: ['Feasibility studies', 'Location analyses', 'Potential analyses', 'Initial investment plan development'] },
  },
  {
    number: '02',
    left: { title: 'Due Diligence', items: ['Data room analysis', 'Development of investment assumptions based on findings'] },
    right: { title: 'Evaluation', items: ['Investment plan update', 'Sensitivity analyses', 'Development of negotiation basis', 'Non-binding price discovery'] },
  },
  {
    number: '3a',
    left: { title: 'Transaction Management', items: ['Development of negotiation foundations', 'LOI submission', 'Negotiation of terms', 'Purchase contract structuring', 'Signing and closing'] },
    right: { title: 'Due Diligence', items: ['Detailed technical DD', 'Legal & tax DD', 'Financial DD', 'Risk analysis'] },
  },
  {
    number: '3b',
    left: { title: 'Product Management', items: ['Product structure determination (financing, equity, corporate structure)', 'Partner engagement', 'Equity co-investment', 'Debt structuring'] },
    right: { title: 'Investment Management', items: ['Integration of product into the entity', 'Partnership structuring: joint ventures, property managers, etc.'] },
  },
]

const marketRiskPhases = [
  {
    number: '04',
    left: { title: 'Investment Management', items: ['Investment plan execution', 'Value enhancement through investment and management measures', 'Controlling'] },
    right: { title: 'Asset Management', items: ['Administration and letting', 'Predictive maintenance', 'Analysis & reporting', 'Valuation updates', 'Contracts and insurance'] },
  },
  {
    number: '05',
    left: { title: 'Transaction Management', items: ['Initiation of sale process', 'Investment committee approval', 'Partner engagement', 'Due diligence coordination', 'Price negotiations', 'Purchase contract structuring', 'Signing and closing'] },
    right: { title: 'Exit Management', items: ['Data room preparation', 'Transaction documentation', 'Documentation provision', 'Distribution to all co-investing partners', 'Corporate structure dissolution'] },
  },
]

export default function ProcessPage() {
  const { t } = useLanguage()
  const p = t.process

  const allPhases = [...p.phases.slice(0, 4), ...p.phases.slice(4)]

  function PhaseRow({ phase, tPhase, alt }: { phase: typeof managementRiskPhases[0], tPhase: typeof p.phases[0], alt: boolean }) {
    return (
      <div className={`py-16 border-b border-stone-light/40 ${alt ? 'bg-cream-100' : 'bg-cream-50'}`}>
        <div className="container-vth grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <div className="font-serif text-6xl font-light text-stone-light/40 leading-none mb-4 w-24">{phase.number}</div>
            <h2 className="font-serif text-xl font-medium text-charcoal mb-2">{tPhase.name}</h2>
            <p className="font-sans text-xs text-bronze">{tPhase.timeline}</p>
          </div>
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="section-label text-stone-dark mb-3">{tPhase.left.title}</p>
                <ul className="space-y-2">
                  {tPhase.left.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-bronze rounded-full shrink-0 mt-1.5" />
                      <span className="font-sans text-xs text-stone-dark leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="section-label text-stone-dark mb-3">{tPhase.right.title}</p>
                <ul className="space-y-2">
                  {tPhase.right.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-bronze rounded-full shrink-0 mt-1.5" />
                      <span className="font-sans text-xs text-stone-dark leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <p className="font-sans text-sm text-stone leading-relaxed">{tPhase.description}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <PageHero label={p.hero.label} title={p.hero.title} subtitle={p.hero.subtitle} />

      <section className="py-12 bg-cream-100 border-b border-stone-light/40">
        <div className="container-vth">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {p.metrics.map((s, i) => (
              <div key={i} className="border-l border-bronze pl-6">
                <div className="font-serif text-3xl font-light text-charcoal mb-1">{s.num}</div>
                <div className="font-sans text-[10px] tracking-[0.18em] uppercase text-stone">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANAGEMENT RISK */}
      <div className="relative">
        <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-14 items-center justify-center z-10 bg-stone-light/10 border-l border-stone-light/30">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-stone-dark whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            {p.managementRisk}
          </span>
        </div>
        <div className="lg:hidden bg-stone-light/10 border-b border-stone-light/30 px-6 py-3">
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone-dark">{p.managementRiskMobile}</span>
        </div>
        <div className="pr-0 lg:pr-14">
          {managementRiskPhases.map((phase, i) => (
            <PhaseRow key={phase.number} phase={phase} tPhase={p.phases[i]} alt={i % 2 !== 0} />
          ))}
        </div>
      </div>

      {/* MARKET RISK */}
      <div className="relative">
        <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-14 items-center justify-center z-10 bg-charcoal/5 border-l border-stone-light/30">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-bronze whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            {p.marketRisk}
          </span>
        </div>
        <div className="lg:hidden bg-charcoal/5 border-b border-stone-light/30 px-6 py-3">
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-bronze">{p.marketRiskMobile}</span>
        </div>
        <div className="pr-0 lg:pr-14">
          {marketRiskPhases.map((phase, i) => (
            <PhaseRow key={phase.number} phase={phase} tPhase={p.phases[4 + i]} alt={i % 2 !== 0} />
          ))}
        </div>
      </div>

      <section className="py-section-sm bg-charcoal">
        <div className="container-vth">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="section-label text-bronze mb-4">{p.alignmentLabel}</p>
              <h2 className="font-serif text-2xl font-light text-cream-50 leading-tight mb-4">{p.alignmentTitle}</h2>
              <p className="font-sans text-stone text-sm leading-relaxed">{p.alignmentBody}</p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <Link href="/contact" className="btn-primary justify-center w-full">
                {p.alignmentCta} <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-cream-100 border-t border-stone-light/40">
        <div className="container-vth">
          <p className="font-sans text-xs text-stone leading-relaxed max-w-3xl">{p.disclaimer}</p>
        </div>
      </section>
    </>
  )
}

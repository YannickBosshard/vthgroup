import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const insights = [
  {
    date: 'June 2026',
    category: 'Group News',
    title: 'VTH Group Announces Strategic Rebrand and Expanded Group Structure',
    excerpt:
      'VTH Group formally launches its new identity, reflecting the evolution from a real estate boutique to a diversified investment and holding group across four core sectors.',
    readTime: '3 min read',
  },
  {
    date: 'May 2026',
    category: 'Perspective',
    title: 'The Case for Patient Capital in European Mid-Market Infrastructure',
    excerpt:
      'As institutional capital chases scale, the European infrastructure mid-market offers compelling risk-adjusted returns for long-term partners with genuine operational capabilities.',
    readTime: '6 min read',
  },
  {
    date: 'April 2026',
    category: 'Sector Insight',
    title: 'Healthcare Services: Why the Best Opportunities Remain Off-Market',
    excerpt:
      'Operational healthcare businesses trade infrequently and rarely publicly. Understanding why — and building the relationships that create access — is the foundation of our healthcare strategy.',
    readTime: '5 min read',
  },
]

export default function InsightsSection() {
  return (
    <section className="py-section bg-cream-100" aria-labelledby="insights-heading">
      <div className="container-vth">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="section-number">06</span>
              <div className="w-8 h-px bg-bronze" />
            </div>
            <p className="section-label text-bronze mb-4">Insights</p>
            <h2
              id="insights-heading"
              className="font-serif font-light text-charcoal"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              Perspectives on
              <br />
              capital and strategy.
            </h2>
          </div>
          <Link href="/insights" className="btn-link self-start lg:self-auto">
            All insights <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Articles */}
        <div className="space-y-0">
          {insights.map((a, i) => (
            <Link
              key={i}
              href="/insights"
              className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12 py-10 border-b border-stone-light/40 group hover:bg-cream-50 -mx-6 px-6 lg:-mx-12 lg:px-12 xl:-mx-20 xl:px-20 transition-colors duration-300"
            >
              <div className="lg:w-32 shrink-0">
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone">{a.date}</p>
              </div>
              <div className="lg:w-36 shrink-0">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-bronze">{a.category}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl font-medium text-charcoal mb-3 group-hover:text-bronze transition-colors duration-200 leading-snug">
                  {a.title}
                </h3>
                <p className="font-sans text-sm text-stone-dark leading-relaxed">{a.excerpt}</p>
              </div>
              <div className="lg:w-20 shrink-0 flex lg:flex-col items-center lg:items-end gap-2 lg:gap-1">
                <span className="font-sans text-[10px] text-stone">{a.readTime}</span>
                <ArrowUpRight size={16} className="text-stone group-hover:text-bronze transition-colors duration-200" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

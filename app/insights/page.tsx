import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Perspectives, news, and market commentary from VTH Group across Real Estate, Industrials, Mining, Infrastructure, and Healthcare.',
}

const articles = [
  {
    date: 'June 2026',
    category: 'Group News',
    title: 'VTH Group Announces Strategic Rebrand and Expanded Group Structure',
    excerpt:
      'VTH Group formally launches its new identity, reflecting the evolution from a real estate boutique to a diversified investment and holding group across five core sectors: Real Estate, Industrials & Construction, Mining & Quarrying, Infrastructure, and Healthcare.',
    readTime: '3 min',
  },
  {
    date: 'May 2026',
    category: 'Perspective',
    title: 'The Case for Patient Capital in European Mid-Market Infrastructure',
    excerpt:
      'As institutional capital chases scale and short-term returns, the European infrastructure mid-market offers compelling risk-adjusted returns for long-term partners with genuine operational capabilities and truly long-term horizons.',
    readTime: '6 min',
  },
  {
    date: 'April 2026',
    category: 'Sector Insight',
    title: 'Healthcare Services: Why the Best Opportunities Remain Off-Market',
    excerpt:
      'Operational healthcare businesses trade infrequently and rarely publicly. Understanding why — and building the relationships that create proprietary access — is the foundation of our healthcare strategy.',
    readTime: '5 min',
  },
  {
    date: 'March 2026',
    category: 'Perspective',
    title: 'What Makes a Great Co-Investment Partner: Lessons From a Decade of Deals',
    excerpt:
      'Capital is abundant. What is scarce is the kind of partnership that adds genuine value beyond the cheque — and what makes the difference between a passive participant and a true co-investment partner.',
    readTime: '7 min',
  },
  {
    date: 'February 2026',
    category: 'Sector Insight',
    title: 'Industrials & Construction: The Family Business Succession Wave',
    excerpt:
      'Europe\'s industrial mid-market faces a structural succession challenge as founder-owners retire without qualified successors. This creates a rare window for patient, operationally capable capital — and VTH Group is positioned to act.',
    readTime: '6 min',
  },
  {
    date: 'January 2026',
    category: 'Group News',
    title: 'VTH Group Welcomes Tobias Baur as Partner & Director',
    excerpt:
      'VTH Group is pleased to announce the appointment of Tobias Baur as Partner & Director, strengthening the Group\'s capabilities in strategic investment oversight and real estate business development.',
    readTime: '2 min',
  },
]

export default function InsightsPage() {
  return (
    <>
      <PageHero
        label="Insights"
        title="Perspectives on<br/>capital and value."
        subtitle="We write when we have something worth saying. Our insights reflect the investment convictions and sector perspectives that guide how we allocate capital."
      />

      <section className="py-section bg-cream-50">
        <div className="container-vth">
          {/* Filter labels */}
          <div className="flex gap-6 mb-12 border-b border-stone-light/40 pb-6">
            {['All', 'Group News', 'Perspective', 'Sector Insight'].map((cat) => (
              <button
                key={cat}
                className={`font-sans text-[11px] tracking-[0.18em] uppercase pb-2 transition-colors duration-200 ${
                  cat === 'All'
                    ? 'text-charcoal border-b-2 border-charcoal -mb-[25px]'
                    : 'text-stone hover:text-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles list */}
          <div className="space-y-0">
            {articles.map((a, i) => (
              <article
                key={i}
                className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-10 py-10 border-b border-stone-light/40 group cursor-pointer hover:bg-cream-100 -mx-6 px-6 lg:-mx-12 lg:px-12 xl:-mx-20 xl:px-20 transition-colors duration-300"
              >
                <div className="lg:w-28 shrink-0">
                  <time className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone">{a.date}</time>
                </div>
                <div className="lg:w-32 shrink-0">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-bronze">{a.category}</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-xl font-medium text-charcoal mb-3 leading-snug group-hover:text-bronze transition-colors duration-200">
                    {a.title}
                  </h2>
                  <p className="font-sans text-sm text-stone-dark leading-relaxed">{a.excerpt}</p>
                </div>
                <div className="lg:w-16 shrink-0 text-right">
                  <span className="font-sans text-[10px] text-stone">{a.readTime} read</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

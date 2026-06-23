import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Sectors',
  description:
    'VTH Group invests across five core sectors: Real Estate, Industrials & Construction, Mining & Quarrying, Infrastructure, and Healthcare.',
}

const sectors = [
  {
    id: 'real-estate',
    number: '01',
    name: 'Real Estate',
    tagline: 'Value-add and opportunistic investments across European markets.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&auto=format&fit=crop',
    body: [
      'Real estate has been at the core of VTH Group since our founding. Over a decade, we have developed a differentiated approach built on deep developer relationships, local market presence, and a clear preference for complexity over competition.',
      'We target value-add and opportunistic projects — situations where execution skill, local knowledge, and transaction expertise can unlock value that passive capital cannot. Our primary markets include Switzerland and emerging European markets with above-average growth potential.',
      'We structure investments as co-investments alongside developers and operators, maintaining active oversight throughout the asset lifecycle from sourcing through exit.',
    ],
    focus: [
      { title: 'Value-add residential', desc: 'Repositioning and development projects with clear value creation thesis.' },
      { title: 'Commercial properties', desc: 'Office, retail, and mixed-use assets in growth locations.' },
      { title: 'Eastern European markets', desc: 'Emerging EU markets with structural tailwinds and limited institutional competition.' },
      { title: 'Off-market sourcing', desc: 'Proprietary deal flow from decades of developer and architect relationships.' },
    ],
  },
  {
    id: 'industrials',
    number: '02',
    name: 'Industrials & Construction',
    tagline: 'Backing owner-operated businesses with enduring industrial foundations.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop',
    body: [
      'Industrial and construction businesses form the backbone of European economies — yet they are systematically underserved by mainstream private equity. Family-owned enterprises in this sector often possess decades of operational know-how, loyal client bases, and real assets, but lack succession solutions or growth capital aligned with their long-term values.',
      'VTH Group approaches this sector as an operational partner, not a financial buyer. We are particularly focused on family businesses at inflection points — whether succession, expansion, or professionalisation — where patient capital and genuine industry respect make the difference.',
      'Our network spans contractors, materials suppliers, engineering firms, and construction services businesses across Switzerland and Central Europe.',
    ],
    focus: [
      { title: 'Family business succession', desc: 'Partnering with owner-founders seeking continuity of culture alongside capital.' },
      { title: 'Construction services', desc: 'Specialist contractors and civil engineering businesses with proven track records.' },
      { title: 'Building materials & supply', desc: 'Upstream suppliers serving structural demand from infrastructure and housing.' },
      { title: 'Industrial services', desc: 'Maintenance, inspection, and technical services underpinning industrial operations.' },
    ],
  },
  {
    id: 'mining',
    number: '03',
    name: 'Mining & Quarrying',
    tagline: 'Essential raw materials at the foundation of physical infrastructure.',
    image: 'https://images.unsplash.com/photo-1757488933744-83f652e1f806?w=1200&q=80&auto=format&fit=crop',
    body: [
      'Gravel, stone, and construction aggregates are foundational to every infrastructure programme, housing development, and industrial expansion. Despite this essentiality, the extraction and processing sector remains fragmented and overlooked by institutional capital — creating genuine opportunity for disciplined operators.',
      'VTH Group has direct operational experience in this sector, managing extraction activities in-house across its portfolio assets. We retain full operational control of our extraction sites, ensuring quality, scheduling, and cost discipline without reliance on third-party operators.',
      'Our current exposure in Romania benefits directly from EU-funded infrastructure programmes, with approximately EUR 100 billion allocated through 2027 driving sustained regional demand for construction materials.',
    ],
    focus: [
      { title: 'Aggregate extraction', desc: 'Gravel and stone quarrying operations serving construction and infrastructure demand.' },
      { title: 'In-house operations', desc: 'Direct management of all extraction activities — no third-party operator dependency.' },
      { title: 'Infrastructure-linked demand', desc: 'Positioning alongside EU-funded motorway and civil infrastructure programmes.' },
      { title: 'Site consolidation', desc: 'Acquiring and consolidating extraction licences in structurally undersupplied regions.' },
    ],
  },
  {
    id: 'infrastructure',
    number: '04',
    name: 'Infrastructure',
    tagline: 'Long-duration assets with essential service characteristics.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop',
    body: [
      'Infrastructure investments offer a combination of characteristics we find compelling: essential services, long asset lives, stable cash flows, and meaningful barriers to competition. They suit our long-term orientation and patient capital approach.',
      'We focus on mid-market infrastructure in Europe — a segment that is often underserved by large infrastructure funds and where our operational capabilities and network create genuine advantages in origination and execution.',
      'Our team has direct experience in digital infrastructure through iNovitas AG, giving us both operational credibility and a network in one of the fastest-growing infrastructure sub-sectors.',
    ],
    focus: [
      { title: 'Digital infrastructure', desc: 'Fibre, towers, data centres, and digital networks.' },
      { title: 'Transport & logistics', desc: 'Critical logistics assets and mobility infrastructure.' },
      { title: 'Social infrastructure', desc: 'Education, healthcare, and civic facilities.' },
      { title: 'Utilities & environment', desc: 'Water, waste, and environmental infrastructure.' },
    ],
  },
  {
    id: 'healthcare',
    number: '05',
    name: 'Healthcare',
    tagline: 'Operational expertise meets investment conviction.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80&auto=format&fit=crop',
    body: [
      'Healthcare is not simply a sector we have chosen to allocate capital to — it is a space our team has helped to build. Our co-founders have founded health centers and led healthcare service companies. We bring genuine operational experience alongside investment capital.',
      'This distinction matters. Healthcare businesses are complex to operate, deeply relationship-dependent, and frequently misunderstood by purely financial investors. Our operational credibility opens doors that others cannot access.',
      'We focus on healthcare services, health infrastructure, and medtech businesses where the intersection of strong operators, structural demographic demand, and fragmented markets creates compelling investment cases.',
    ],
    focus: [
      { title: 'Health centers & clinics', desc: 'Multi-disciplinary integrated care facilities.' },
      { title: 'Medical technology', desc: 'Device and diagnostics companies with clinical validation.' },
      { title: 'Healthcare services', desc: 'Specialised service businesses in high-demand segments.' },
      { title: 'Digital health', desc: 'Software and data platforms serving clinical workflows.' },
    ],
  },
]

export default function SectorsPage() {
  return (
    <>
      <PageHero
        label="Core Sectors"
        title="Five sectors.<br/>One enduring philosophy."
        subtitle="We invest where our expertise, networks, and conviction intersect. Each sector has been chosen deliberately — not for diversification, but for depth."
      />

      {/* Real Estate Advisory Services — added after Real Estate sector */}
      {sectors.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-section ${i % 2 === 0 ? 'bg-cream-50' : 'bg-cream-100'}`}
          aria-labelledby={`sector-${s.id}`}
        >
          <div className="container-vth">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
              {/* Image — alternating side */}
              <div className={`lg:col-span-5 ${i % 2 !== 0 ? 'lg:order-2 lg:col-start-8' : ''}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover"
                    style={{ filter: 'saturate(0.85)' }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`lg:col-span-6 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:order-1' : 'lg:col-start-7'}`}>
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-serif text-6xl font-light text-stone-light/50 leading-none">{s.number}</span>
                  <div>
                    <h2
                      id={`sector-${s.id}`}
                      className="font-serif text-3xl font-light text-charcoal"
                    >
                      {s.name}
                    </h2>
                    <p className="font-sans text-sm text-bronze mt-1">{s.tagline}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  {s.body.map((para, j) => (
                    <p key={j} className="font-sans text-stone-dark text-sm leading-relaxed">{para}</p>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {s.focus.map((f, j) => (
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

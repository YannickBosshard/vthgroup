import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Leadership',
  description:
    'Meet the VTH Group leadership team — six specialists combining backgrounds in investment banking, entrepreneurship, tax law, and operational management.',
}

const leaders = [
  {
    name: 'Christian Meier',
    photo: '/team/christian-meier.png',
    role: 'CEO · Founder · Member of the Board',
    subtitle: 'Entrepreneur · Visionary · Business Strategist',
    isManagement: true,
    quote: 'I am fascinated by developing marketable business models from ideas — with a focus on sustainable impact and long-term partnerships.',
    bio: 'Christian Meier is an experienced entrepreneur with a focus on innovative technologies and strategic healthcare projects. He has founded and led companies across digital infrastructure and integrated healthcare, and holds board mandates in construction, medical technology, financial services, and healthcare.',
    experience: 'As a highly networked communicator, he leads partner relations, business development, and strategic partnerships at VTH Group.',
    background: ['Serial entrepreneur: digital infrastructure & healthcare', 'Board mandates: construction, medtech, financial services, healthcare', 'Track record of building and scaling companies across sectors'],
    competencies: ['Corporate strategy development & execution', 'Financing concepts & capital structuring', 'Relationship management & network cultivation', 'Partner relations & strategic advisory'],
  },
  {
    name: 'Yannick Bosshard',
    photo: '/team/yannick-bosshard.png',
    role: 'CIO · Co-Founder · Member of the Board',
    subtitle: 'Entrepreneur · Investment & Asset Management',
    isManagement: true,
    quote: 'My passion lies in intelligent capital structuring — creating lasting value through analytical depth drives me daily.',
    bio: 'Yannick Bosshard specialises in the structuring and valuation of investment opportunities across private equity, real estate, and capital market transactions. With experience at UBS, Lakeward Management AG, and as Head of Investment & Asset Management at allswiss, he combines deep analytical capability with a broad understanding of the economic, tax, and legal dimensions of complex investment structures.',
    experience: 'He leads the full investment lifecycle at VTH Group — from initial assessment and due diligence through structuring, financial modelling, and active asset management.',
    background: ['UBS', 'Lakeward Management AG', 'allswiss — Head of Investment & Asset Management'],
    competencies: ['Investment analysis & structuring', 'Capital market transactions & SPAC structuring', 'Tax-optimised ownership structures', 'Asset management & performance controlling', 'Financial modelling & sensitivity analysis'],
  },
  {
    name: 'Bruno Tringaniello',
    photo: '/team/bruno-tringaniello.png',
    role: 'CFO · Partner · Member of the Board',
    subtitle: 'Entrepreneur · Tax & Legal Consultant',
    isManagement: true,
    quote: 'I find fulfilment translating complex tax and legal challenges into pragmatic solutions — creating genuine value for clients.',
    bio: 'Bruno Tringaniello brings decades of experience in tax and legal advisory for companies and private individuals. As founder of awr AG — a firm specialising in tax law and corporate structuring — he advises on national and international mandates covering restructurings, transactions, and succession planning. He is also CEO of Medipool Group, an interdisciplinary physician network focused on ambulatory and inpatient care.',
    experience: 'He converts complex tax and legal challenges into practical, implementable solutions — central to VTH Group\'s ability to structure transactions that others cannot.',
    background: ['Founder, awr AG (tax law & corporate structuring)', 'CEO, Medipool Group (interdisciplinary physician network)', 'National & international transaction mandates'],
    competencies: ['Tax transaction & structuring advisory', 'Company formation, relocation & succession', 'Economic criminal law & regulatory proceedings', 'Corporate, commercial & contract law', 'Senior healthcare sector leadership'],
  },
  {
    name: 'Stefano Augstburger',
    photo: '/team/stefano-augstburger.jpg',
    role: 'Partner Relations & Networking',
    subtitle: 'Entrepreneur · Partner Relations · Networking',
    isManagement: false,
    quote: 'Building bridges between capital and opportunity — across borders, asset classes, and generations of partners.',
    bio: 'Stefano Augstburger began his career at UBS in 2006 and has since worked across asset management and capital markets. He serves international institutional clients, family offices, asset managers, and UHNWIs with genuine passion, and has co-founded and led entrepreneurial ventures in deep-tech and sustainability.',
    experience: 'He leads VTH Group\'s institutional partner relationships, co-investment engagement, and partner communications across all sectors.',
    background: ['UBS (since 2006)', 'Entrepreneur: deep-tech & sustainability (exited 2024)', 'International institutional clients, family offices & UHNWIs'],
    competencies: ['Mutual and private equity funds', 'Energy, infrastructure & real estate investments', 'Capital markets', 'Company management & start-up leadership', 'Co-investment relations & partner engagement', 'Public speaking & networking'],
  },
  {
    name: 'Tobias Baur',
    photo: '/team/tobias-baur.png',
    role: 'Partner & Director, VTH Management AG',
    subtitle: 'Partner · Director',
    isManagement: false,
    quote: 'Real estate and businesses follow the same principles: we invest where solid fundamentals meet development potential — creating enduring value.',
    bio: 'Tobias Baur is Partner and Director at VTH Management AG, responsible for the strategic direction and execution of investments in real estate and company building. He brings extensive experience as Head of Investment Management in private equity, with a pronounced focus on real estate development. He combines deep analytical competence with entrepreneurial judgment.',
    experience: 'His focus lies in identifying investment opportunities through targeted activation and realisation of development potential, and consistent value creation for all co-investing partners.',
    background: ['Head of Investment Management, private equity', 'Partner & Director, VTH Management AG', 'Real estate development specialist'],
    competencies: ['Identifying value creation potential', 'Developing investment strategies', 'Executing defined investment strategies', 'Optimising processes, structures & operations'],
  },
  {
    name: 'Damjan Gojkovic',
    photo: '/team/damjan-gojkovic.jpg',
    role: 'Investment Manager',
    subtitle: 'Investment Manager',
    isManagement: false,
    quote: 'Capital reaches its full potential through proper structure — precise analysis and entrepreneurial thinking reflect my passion for sustainable investment decisions.',
    bio: 'Damjan Gojkovic is responsible for the identification, evaluation, and execution of investment opportunities across real estate, private equity, and structured finance. With experience at UBS and ISP Securities in structured financial products, he combines deep analytical capability with a comprehensive understanding of alternative investment markets, complex capital structures, and regulatory requirements.',
    experience: 'He leads deal sourcing, due diligence, financial modelling, and the preparation of investment documentation for VTH Group.',
    background: ['UBS', 'ISP Securities — structured financial products'],
    competencies: ['Investment strategy development & execution', 'Due diligence & stakeholder management', 'Financial modelling, scenario & sensitivity analysis', 'Investment documentation & presentations'],
  },
]

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        label="Leadership"
        title="The people behind<br/>VTH Group."
        subtitle="Six specialists. Complementary expertise. A shared conviction that the best investments are built on trust, transparency, and genuine partnership."
      />

      {/* Management note */}
      <section className="py-10 bg-cream-100 border-b border-stone-light/40">
        <div className="container-vth">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4">
              <p className="section-label text-bronze mb-2">Executive Management</p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="font-sans text-sm text-stone-dark leading-relaxed">
                The executive management of VTH Group — Bruno Tringaniello, Christian Meier, and Yannick Bosshard — jointly lead the Group&rsquo;s strategic direction and day-to-day operations, with the ambition to create lasting value and to earn partner trust through depth, clarity, and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section bg-cream-50">
        <div className="container-vth">
          <div className="space-y-0">
            {leaders.map((l, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 border-b border-stone-light/40"
              >
                {/* Left — identity */}
                <div className="lg:col-span-4">
                  <div className="mb-6">
                    <div className="w-full aspect-[3/4] overflow-hidden bg-stone-light/20 mb-5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={l.photo}
                        alt={l.name}
                        className="w-full h-full object-cover object-top grayscale"
                      />
                    </div>
                    {l.isManagement && (
                      <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-bronze bg-bronze/10 px-2 py-1">
                        Management
                      </span>
                    )}
                  </div>
                  <h2 className="font-serif text-2xl font-medium text-charcoal mb-1">{l.name}</h2>
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-bronze mb-1">{l.role}</p>
                  <p className="font-sans text-[11px] text-stone italic mb-6">{l.subtitle}</p>
                  <div className="space-y-2 border-t border-stone-light/40 pt-5">
                    <p className="section-label text-stone-dark mb-3">Background</p>
                    {l.background.map((b: string, j: number) => (
                      <div key={j} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-bronze rounded-full shrink-0 mt-1.5" />
                        <span className="font-sans text-xs text-stone leading-relaxed">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — bio */}
                <div className="lg:col-span-7 lg:col-start-6">
                  <blockquote className="font-serif text-lg italic font-light text-charcoal/70 border-l-2 border-bronze pl-5 mb-7 leading-relaxed">
                    &ldquo;{l.quote}&rdquo;
                  </blockquote>
                  <p className="font-sans text-stone-dark text-sm leading-relaxed mb-3">{l.bio}</p>
                  <p className="font-sans text-stone text-sm leading-relaxed mb-8">{l.experience}</p>
                  <div className="pt-6 border-t border-stone-light/40">
                    <p className="section-label text-stone-dark mb-4">Key Competencies</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {l.competencies.map((c: string, j: number) => (
                        <div key={j} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-bronze rounded-full shrink-0 mt-1.5" />
                          <span className="font-sans text-xs text-stone-dark leading-relaxed">{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-investor culture */}
      <section className="py-section-sm bg-charcoal">
        <div className="container-vth">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <p className="section-label text-bronze mb-4">Our Culture</p>
              <h2 className="font-serif text-2xl font-light text-cream-50 leading-tight">
                Every person at VTH Group is an entrepreneur and a co-investor.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center gap-6">
              <p className="font-sans text-stone text-sm leading-relaxed">
                Our philosophy is to make unique investment opportunities accessible to our partners and clients. We achieve this through our comprehensive networks and a multidimensional understanding of different cultures, markets, and disciplines.
              </p>
              <p className="font-sans text-stone text-sm leading-relaxed">
                Every member of the VTH Group contributes through their individual performance to our collective success. For this reason, every team member is also an entrepreneur and a co-investor — we invest alongside our partners in every transaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

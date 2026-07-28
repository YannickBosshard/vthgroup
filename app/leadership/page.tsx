'use client'

import PageHero from '@/components/ui/PageHero'
import { useLanguage } from '@/lib/i18n/LanguageContext'

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
    bio: 'Bruno Tringaniello brings decades of experience in tax and legal advisory for companies and private individuals. As founder of awr AG — a firm specialising in tax law and corporate structuring — he advises on national and international mandates covering restructurings, transactions, and succession planning.',
    experience: 'He converts complex tax and legal challenges into practical, implementable solutions — central to VTH Group\'s ability to structure transactions that others cannot.',
    background: ['Founder, awr AG (tax law & corporate structuring)', 'CEO, Medipool Group (interdisciplinary physician network)', 'National & international transaction mandates'],
    competencies: ['Tax transaction & structuring advisory', 'Company formation, relocation & succession', 'Economic criminal law & regulatory proceedings', 'Corporate, commercial & contract law', 'Senior healthcare sector leadership'],
  },
  {
    name: 'Stefano Augstburger',
    photo: '/team/stefano-augstburger.png',
    role: 'Partner Relations & Networking',
    subtitle: 'Entrepreneur · Partner Relations · Networking',
    isManagement: false,
    quote: 'Building bridges between capital and opportunity — across borders, asset classes, and generations of partners.',
    bio: 'Stefano Augstburger began his career at UBS in 2006 and has since worked across asset management and capital markets. He serves international institutional clients, family offices, asset managers, and UHNWIs with genuine passion.',
    experience: 'He leads VTH Group\'s institutional partner relationships, co-investment engagement, and partner communications across all sectors.',
    background: ['UBS (since 2006)', 'Entrepreneur: deep-tech & sustainability (exited 2024)', 'International institutional clients, family offices & UHNWIs'],
    competencies: ['Mutual and private equity funds', 'Energy, infrastructure & real estate investments', 'Capital markets', 'Company management & start-up leadership', 'Co-investment relations & partner engagement', 'Public speaking & networking'],
  },
  {
    name: 'Tobias Baur',
    photo: '/team/tobias-baur.png',
    role: 'COO & Partner',
    subtitle: 'COO · Partner',
    isManagement: false,
    quote: 'Real estate and businesses follow the same principles: we invest where solid fundamentals meet development potential — creating enduring value.',
    bio: 'Tobias Baur is Partner and Director at VTH Management AG, responsible for the strategic direction and execution of investments in real estate and company building.',
    experience: 'His focus lies in identifying investment opportunities through targeted activation and realisation of development potential.',
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
    bio: 'Damjan Gojkovic is responsible for the identification, evaluation, and execution of investment opportunities across real estate, private equity, and structured finance.',
    experience: 'He leads deal sourcing, due diligence, financial modelling, and the preparation of investment documentation for VTH Group.',
    background: ['UBS', 'ISP Securities — structured financial products'],
    competencies: ['Investment strategy development & execution', 'Due diligence & stakeholder management', 'Financial modelling, scenario & sensitivity analysis', 'Investment documentation & presentations'],
  },
]

export default function LeadershipPage() {
  const { t } = useLanguage()
  const l = t.leadership

  return (
    <>
      <PageHero label={l.hero.label} title={l.hero.title} subtitle={l.hero.subtitle} />

      <section className="py-10 bg-cream-100 border-b border-stone-light/40">
        <div className="container-vth">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4">
              <p className="section-label text-bronze mb-2">{l.executiveLabel}</p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="font-sans text-sm text-stone-dark leading-relaxed">{l.executiveBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section bg-cream-50">
        <div className="container-vth">
          <div className="space-y-0">
            {leaders.map((person, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 border-b border-stone-light/40">
                <div className="lg:col-span-4">
                  <div className="mb-6">
                    <div className="w-full aspect-[3/4] overflow-hidden bg-stone-light/20 mb-5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={person.photo} alt={person.name} className="w-full h-full object-cover object-center grayscale" />
                    </div>
                    {person.isManagement && (
                      <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-bronze bg-bronze/10 px-2 py-1">
                        {l.managementTag}
                      </span>
                    )}
                  </div>
                  <h2 className="font-serif text-2xl font-medium text-charcoal mb-1">{person.name}</h2>
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-bronze mb-1">{person.role}</p>
                  <p className="font-sans text-[11px] text-stone italic mb-6">{person.subtitle}</p>
                  <div className="space-y-2 border-t border-stone-light/40 pt-5">
                    <p className="section-label text-stone-dark mb-3">{l.background}</p>
                    {person.background.map((b, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-bronze rounded-full shrink-0 mt-1.5" />
                        <span className="font-sans text-xs text-stone leading-relaxed">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                  <blockquote className="font-serif text-lg italic font-light text-charcoal/70 border-l-2 border-bronze pl-5 mb-7 leading-relaxed">
                    &ldquo;{person.quote}&rdquo;
                  </blockquote>
                  <p className="font-sans text-stone-dark text-sm leading-relaxed mb-3">{person.bio}</p>
                  <p className="font-sans text-stone text-sm leading-relaxed mb-8">{person.experience}</p>
                  <div className="pt-6 border-t border-stone-light/40">
                    <p className="section-label text-stone-dark mb-4">{l.competencies}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {person.competencies.map((c, j) => (
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

      <section className="py-section-sm bg-charcoal">
        <div className="container-vth">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <p className="section-label text-bronze mb-4">{l.cultureLabel}</p>
              <h2 className="font-serif text-2xl font-light text-cream-50 leading-tight">{l.cultureTitle}</h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center gap-6">
              <p className="font-sans text-stone text-sm leading-relaxed">{l.cultureBody1}</p>
              <p className="font-sans text-stone text-sm leading-relaxed">{l.cultureBody2}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

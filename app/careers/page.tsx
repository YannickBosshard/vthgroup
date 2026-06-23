import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join VTH Group. We look for exceptional people who combine investment rigour with entrepreneurial instinct and a genuine long-term orientation.',
}

const values = [
  { title: 'Co-investors, not employees', desc: 'Every member of our team thinks and acts as an owner. We structure our relationships to align interests, not just incentivise output.' },
  { title: 'Complexity over competition', desc: 'We prefer difficult, relationship-dependent situations over crowded, easily comparable processes. We expect the same instinct from our people.' },
  { title: 'Generalist depth', desc: 'Our best people move fluidly between deal analysis, strategic thinking, and relationship management. We value range as much as rigour.' },
  { title: 'Long-term thinking', desc: 'We do not optimise for the next deal. We build for the next decade. The people who thrive here share that orientation.' },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Careers"
        title="Work that<br/>compounds."
        subtitle="We are a small group of people doing serious work. If you combine investment rigor with entrepreneurial instinct and a genuine long-term orientation, we want to hear from you."
      />

      {/* Culture */}
      <section className="py-section bg-cream-50">
        <div className="container-vth">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="section-label text-bronze mb-4">Our Culture</p>
              <h2 className="font-serif text-3xl font-light text-charcoal leading-tight">
                What it means to work at VTH Group.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-stone-light/40">
                {values.map((v, i) => (
                  <div key={i} className="py-8 pr-8 border-b border-stone-light/40">
                    <h3 className="font-serif text-lg font-medium text-charcoal mb-3">{v.title}</h3>
                    <p className="font-sans text-sm text-stone-dark leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-section bg-cream-100">
        <div className="container-vth">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="section-label text-bronze mb-4">Open Positions</p>
              <h2 className="font-serif text-3xl font-light text-charcoal leading-tight">
                Current opportunities.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              {/* No current open roles placeholder */}
              <div className="border border-stone-light/40 p-10">
                <p className="font-serif text-xl font-light text-charcoal mb-4">
                  We do not have formal open positions at this time.
                </p>
                <p className="font-sans text-sm text-stone-dark leading-relaxed mb-8">
                  That said, we are always interested in meeting exceptional people. If you believe your background, skills, and orientation align with VTH Group, we encourage you to reach out directly. The most interesting conversations rarely come from a posted job description.
                </p>
                <Link href="/contact" className="btn-link">
                  Introduce yourself <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

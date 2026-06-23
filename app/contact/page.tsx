import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with VTH Group. Whether you are a potential co-investment partner, an entrepreneur with a compelling opportunity, or an industry contact, we welcome the conversation.',
}

const reasons = [
  { title: 'Investment opportunities', desc: 'You have an asset, company, or project that may align with our investment focus.' },
  { title: 'Partnership enquiries', desc: 'You are exploring a joint venture, co-investment, or strategic collaboration.' },
  { title: 'Co-investment enquiries', desc: 'You are an existing or prospective co-investment partner.' },
  { title: 'Career introduction', desc: 'You are an exceptional individual who believes you belong at VTH Group.' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let&rsquo;s start<br/>a conversation."
        subtitle="We are selective about our time, which means we give our full attention to every conversation we do have. If there is genuine alignment, we will know quickly."
      />

      <section className="py-section bg-cream-50">
        <div className="container-vth">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left — reasons + info */}
            <div className="lg:col-span-4">
              <p className="section-label text-bronze mb-8">Reasons to reach out</p>
              <div className="space-y-0 border-t border-stone-light/40">
                {reasons.map((r, i) => (
                  <div key={i} className="py-6 border-b border-stone-light/40">
                    <h3 className="font-serif text-base font-medium text-charcoal mb-1">{r.title}</h3>
                    <p className="font-sans text-sm text-stone leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 space-y-6">
                <div>
                  <p className="section-label text-bronze mb-2">Address</p>
                  <p className="font-sans text-sm text-charcoal leading-relaxed">
                    Bahnhof-Park 2<br />
                    6340 Baar<br />
                    Switzerland
                  </p>
                </div>
                <div>
                  <p className="section-label text-bronze mb-2">Email</p>
                  <a href="mailto:info@vthinvest.ch" className="font-sans text-sm text-charcoal hover:text-bronze transition-colors duration-200">
                    info@vthinvest.ch
                  </a>
                </div>
                <div>
                  <p className="section-label text-bronze mb-2">General Enquiries</p>
                  <a href="tel:+41787479221" className="font-sans text-sm text-charcoal hover:text-bronze transition-colors duration-200">
                    +41 78 747 92 21
                  </a>
                </div>
                <div>
                  <p className="section-label text-bronze mb-2">Co-Investment Enquiries</p>
                  <a href="tel:+41792549700" className="font-sans text-sm text-charcoal hover:text-bronze transition-colors duration-200">
                    +41 79 254 97 00
                  </a>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-7 lg:col-start-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

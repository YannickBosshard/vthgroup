import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Disclaimer',
  robots: { index: false },
}

export default function DisclaimerPage() {
  return (
    <>
      <PageHero label="Legal" title="Disclaimer" />
      <section className="py-section-sm bg-cream-50">
        <div className="container-vth max-w-2xl">
          <div className="space-y-8 font-sans text-sm text-stone-dark leading-relaxed">
            <div>
              <h2 className="font-serif text-xl font-medium text-charcoal mb-3">No Offer or Solicitation</h2>
              <p>Nothing on this website constitutes an offer, solicitation, or recommendation to buy or sell any investment, security, or financial product. The content is for general informational purposes only.</p>
            </div>
            <div>
              <h2 className="font-serif text-xl font-medium text-charcoal mb-3">Forward-Looking Statements</h2>
              <p>This website may contain forward-looking statements and projections. These statements involve known and unknown risks and uncertainties. Actual results, performance, or achievements may differ materially from those expressed or implied.</p>
            </div>
            <div>
              <h2 className="font-serif text-xl font-medium text-charcoal mb-3">Regulatory Status</h2>
              <p>VTH Group AG is a private holding and investment company incorporated in Switzerland. It is not a licensed financial institution, bank, investment advisor, or collective investment scheme manager. Activities described on this website are conducted on a private, direct basis and not as a regulated financial service.</p>
            </div>
            <div>
              <h2 className="font-serif text-xl font-medium text-charcoal mb-3">Limitation of Liability</h2>
              <p>VTH Group AG shall not be liable for any loss or damage arising from reliance on information contained on this website. Users access and use this website at their own risk.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

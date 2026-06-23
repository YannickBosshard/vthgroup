import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="relative py-section-sm bg-charcoal overflow-hidden" aria-labelledby="cta-heading">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze to-transparent" aria-hidden="true" />

      <div className="container-vth text-center">
        <p className="section-label text-bronze mb-8">Get in Touch</p>
        <h2
          id="cta-heading"
          className="font-serif font-light text-cream-50 mb-8 max-w-3xl mx-auto"
          style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
        >
          Interested in building
          <br />
          something meaningful together?
        </h2>
        <p className="font-sans text-stone text-base leading-relaxed max-w-lg mx-auto mb-12 font-light">
          Whether you are a potential co-investment partner, an entrepreneur with a compelling opportunity,
          or an industry contact, we welcome the conversation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Contact VTH Group <ArrowUpRight size={14} />
          </Link>
          <Link href="/about" className="btn-ghost text-cream-50 border-stone-dark hover:bg-stone-dark/20 hover:border-stone-dark">
            Learn more
          </Link>
        </div>
      </div>
    </section>
  )
}

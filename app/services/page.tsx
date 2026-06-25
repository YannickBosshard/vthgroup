import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'VTH Group offers Real Estate Advisory, Structuring & Capital Markets, and Capital Structure & Credit Advisory services alongside its investment activities.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Expert advisory.<br/>Exceptional execution."
        subtitle="Beyond our direct investment activities, VTH Group provides specialist advisory services in real estate and capital markets structuring."
      />

      {/* Real Estate Advisory */}
      <section className="py-section bg-charcoal" aria-labelledby="advisory-heading">
        <div className="container-vth">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <p className="section-label text-bronze mb-4">Real Estate Advisory</p>
              <h2
                id="advisory-heading"
                className="font-serif text-3xl font-light text-cream-50 leading-tight"
              >
                Expert support for your real estate decisions.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="font-sans text-stone text-sm leading-relaxed mb-4">
                Beyond our direct investment activities, VTH Group offers comprehensive real estate advisory services. Our technical expertise provides clients with the confidence to make informed decisions — uncovering untapped potential and developing the strategic and financial foundations for successful projects.
              </p>
              <p className="font-sans text-stone text-sm leading-relaxed">
                We accompany clients through the entire planning and construction process, maintaining a critical and value-oriented perspective at every stage. Quality, cost, and schedule are never compromised.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-dark/30">
            {[
              {
                title: 'Initial Costing & Potential Analysis',
                desc: 'The potential analysis enables high-level calculations and identification of the optimal strategy for a given property or site.',
              },
              {
                title: 'Business Plan Development',
                desc: 'We develop business plans and validate the strategies they contain through comprehensive financial modelling and plausibility testing.',
              },
              {
                title: 'Investment Management',
                desc: 'VTH Group translates business plans into controlling frameworks and accompanies clients through the entire planning and construction process.',
              },
              {
                title: 'Real Estate Financing & Tax',
                desc: 'Our tax specialists calculate the tax implications of property transactions and advise on the optimal financing of planned real estate projects.',
              },
              {
                title: 'Location Analysis',
                desc: 'Precise location analyses as the basis for real estate investment decisions. Our experts consider all critical factors and provide detailed assessments.',
              },
              {
                title: 'Property Valuation',
                desc: 'Comprehensive real estate valuations supporting purchase or sale decisions. Our experts draw on an extensive professional network.',
              },
            ].map((s, i) => (
              <div key={i} className="bg-charcoal-50 p-8 group hover:bg-charcoal transition-colors duration-300">
                <h3 className="font-serif text-lg font-medium text-cream-50 mb-3 group-hover:text-bronze transition-colors duration-200">
                  {s.title}
                </h3>
                <p className="font-sans text-xs text-stone leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMC & Structuring */}
      <section className="py-section bg-cream-50" aria-labelledby="amc-heading">
        <div className="container-vth">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <p className="section-label text-bronze mb-4">Structuring & Capital Markets</p>
              <h2
                id="amc-heading"
                className="font-serif text-3xl font-light text-charcoal leading-tight"
              >
                AMC & Structuring.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="font-sans text-stone-dark text-sm leading-relaxed mb-4">
                VTH Group acts exclusively as a structuring advisor — not as an issuer, promoter, or distributor of investment products. We support clients and partners in converting an investment strategy into a tradeable, bankable vehicle by providing the advisory framework, issuer introductions, and documentation expertise required to bring a structure to market.
              </p>
              <p className="font-sans text-stone-dark text-sm leading-relaxed mb-4">
                The Actively Managed Certificate (AMC) is one widely used vehicle for this purpose — a structured product whose underlying is managed discretionarily during the term according to a defined strategy. Our role is to advise on vehicle selection, structure, issuer, and regulatory requirements. The issuer, distribution, and product liability remain with the regulated counterparties.
              </p>
              <p className="font-sans text-[11px] text-stone leading-relaxed border-l-2 border-stone-light/50 pl-4 italic">
                VTH Group acts exclusively as a structural advisor and does not act as promoter, distributor, or placement agent for any financial product. VTH Group does not receive distribution fees, retrocessions, or volume-based compensation in connection with any AMC or structured product. All introductions to issuers and structuring partners are provided on a purely advisory basis.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-light/40">
            {[
              {
                title: 'AMC Advisory',
                desc: 'End-to-end advisory on Actively Managed Certificates — from strategy definition and issuer selection through to ongoing product management.',
              },
              {
                title: 'Vehicle Selection',
                desc: 'Identifying the right vehicle for each mandate: AMC, dedicated fund, or securitisation — based on strategy, volume, cost, and investor base.',
              },
              {
                title: 'Issuer Network',
                desc: 'Access to our established network of regulated issuers and structuring partners across Switzerland and Europe.',
              },
              {
                title: 'Regulatory Framework',
                desc: 'Guidance on FIDLEG obligations, FINMA classification, and product documentation requirements for structured products in Switzerland.',
              },
              {
                title: 'Investor Documentation',
                desc: 'Preparation of Key Information Documents (KID), Basis Information Sheets, and product term sheets for regulated distribution.',
              },
              {
                title: 'Wealth & Succession Structuring',
                desc: 'Distinct from product structuring: estate planning, trust and foundation structures for wealth transfer and succession mandates.',
              },
            ].map((s, i) => (
              <div key={i} className="bg-cream-100 p-8 group hover:bg-cream-50 border border-stone-light/30 transition-colors duration-300">
                <h3 className="font-serif text-lg font-medium text-charcoal mb-3 group-hover:text-bronze transition-colors duration-200">
                  {s.title}
                </h3>
                <p className="font-sans text-xs text-stone leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capital Structure & Credit Advisory */}
      <section className="py-section bg-charcoal" aria-labelledby="credit-heading">
        <div className="container-vth">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <p className="section-label text-bronze mb-4">Capital Structure & Credit Advisory</p>
              <h2
                id="credit-heading"
                className="font-serif text-3xl font-light text-cream-50 leading-tight"
              >
                Financing strategy.<br/>Built for the capital markets.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="font-sans text-stone text-sm leading-relaxed mb-4">
                VTH Group advises companies and project sponsors on the optimisation of their capital structure and the development of debt financing strategies. We bring analytical rigour and capital markets experience to support clients across the full lifecycle of a financing — from initial structuring through to investor-ready documentation.
              </p>
              <p className="font-sans text-stone text-sm leading-relaxed mb-4">
                Our advisory covers the selection and structuring of debt instruments — including bonds, Schuldscheindarlehen, and private debt — as well as the assessment of how planned financings affect key credit metrics and a company&apos;s overall rating profile. Where relevant, we prepare clients for formal rating processes, applying international rating methodologies to build a defensible credit narrative in advance.
              </p>
              <p className="font-sans text-[11px] text-stone leading-relaxed border-l-2 border-stone-light/50 pl-4 italic">
                VTH Group acts exclusively as an advisory firm. We do not arrange, place, or underwrite financial instruments, act as broker or arranger, operate as a rating agency, or issue official credit ratings. We do not receive or transmit investor funds. All advisory services are provided on a strictly consultative basis and do not constitute an offer or solicitation to invest.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-dark/30">
            {[
              {
                title: 'Capital Structure Optimisation',
                desc: 'Analysis and advisory on the optimal balance of debt, equity, and leverage — aligned with business strategy, cash flow profile, and investor expectations.',
              },
              {
                title: 'Debt Financing Strategy',
                desc: 'Development of bespoke financing strategies for instruments including bonds, Schuldscheindarlehen, and private debt facilities.',
              },
              {
                title: 'Capital Markets Preparation',
                desc: 'End-to-end support in preparing companies and project sponsors for debt capital market processes and financing mandates.',
              },
              {
                title: 'Credit Metrics & Rating Impact',
                desc: 'Quantitative analysis of how planned financings affect key credit ratios and the overall rating profile of the borrower.',
              },
              {
                title: 'Rating Process Preparation',
                desc: 'Structured preparation for rating engagements, based on international rating methodologies, to build a coherent and defensible credit narrative.',
              },
              {
                title: 'Financing Documentation',
                desc: 'Development of credit-ready and investor-grade financing documentation supporting debt transactions and capital market processes.',
              },
            ].map((s, i) => (
              <div key={i} className="bg-charcoal-50 p-8 group hover:bg-charcoal transition-colors duration-300">
                <h3 className="font-serif text-lg font-medium text-cream-50 mb-3 group-hover:text-bronze transition-colors duration-200">
                  {s.title}
                </h3>
                <p className="font-sans text-xs text-stone leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal disclaimer */}
      <section className="py-8 bg-cream-100 border-t border-stone-light/40">
        <div className="container-vth">
          <p className="font-sans text-xs text-stone leading-relaxed max-w-3xl">
            VTH Management AG acts exclusively as an advisor. We do not arrange, place, underwrite or distribute financial instruments and do not manage third-party assets. All services are provided on a strictly consultative basis.
          </p>
        </div>
      </section>
    </>
  )
}


'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const content = {
  en: {
    title: 'TERMS OF USE & LEGAL NOTICES',
    sections: [
      {
        heading: 'About Us',
        body: 'VTH Management AG is an independent investor focused on alternative investments and co-investments in European real estate and companies. We invest our own capital alongside selected partners. This website is provided for information purposes only.',
      },
      {
        heading: 'Access Restriction',
        body: 'This website is exclusively intended for qualified investors pursuant to Art. 10 para. 3 and 3ter of the Swiss Collective Investment Schemes Act (CISA) domiciled or resident in Switzerland, and for professional investors pursuant to Art. 4 para. (1) letter ag) of EU Directive 2011/61/EU (AIFM Directive) domiciled or resident in an EU or EEA member state. Access by any other persons is not permitted.',
      },
      {
        heading: 'No Offer',
        body: 'The information on this website does not constitute an offer, recommendation, or solicitation to make investments or to buy or sell financial instruments. VTH Management AG makes investments using its own capital and acts as a co-investor. It does not provide financial services within the meaning of FIDLEG, does not arrange financial instruments, and does not manage third-party assets. All investment decisions are the sole responsibility of the respective investor.',
      },
      {
        heading: 'No Prospectus',
        body: 'This website does not constitute a prospectus under Swiss corporate law, the Collective Investment Schemes Act, or the Financial Services Act, nor under the EU Prospectus Regulation or any corresponding national regulation of an EU member state.',
      },
      {
        heading: 'Local Legal Restrictions',
        body: 'The information is exclusively intended for qualified investors in Switzerland and professional investors in the EU/EEA. It is expressly not intended for persons subject to the law of a state that prohibits the dissemination of this information — in particular not for persons domiciled in the USA, the United Kingdom, or Japan. By clicking "I Agree", you confirm that you are NOT a US person.',
      },
      {
        heading: 'Risk Notice',
        body: 'Every investment involves risks, in particular fluctuations in value and income. In the case of foreign currencies, there is a risk of loss in value relative to the reference currency. Past performance data provides no guarantee of future results. In extreme cases, the risk of total loss of capital exists.',
      },
      {
        heading: 'Disclaimer of Liability',
        body: 'VTH Management AG assumes no guarantee with regard to the content and completeness of the information on this website and disclaims all liability for losses arising from the use of this information. The opinions expressed on this website may be changed at any time without notice.',
      },
      {
        heading: 'Intellectual Property',
        body: 'The contents of this website are the intellectual property of VTH Management AG, Bahnhof-Park 2, 6340 Baar, Switzerland. Information may only be used for personal purposes.',
      },
      {
        heading: 'Data Protection & Cookies',
        body: 'This website uses cookies for statistical purposes. VTH Management AG respects your privacy and is committed to protecting your personal data.',
      },
      {
        heading: 'Applicable Law',
        body: 'Legal matters are subject to the laws of Switzerland. The courts of Zurich have jurisdiction.',
      },
    ],
    agree: 'I Agree',
    decline: 'Decline',
  },
  de: {
    title: 'NUTZUNGSBEDINGUNGEN & RECHTLICHE HINWEISE',
    sections: [
      {
        heading: 'Über uns',
        body: 'VTH Management AG ist ein unabhängiger Investor mit Fokus auf alternative Investments und Co-Investments in europäische Immobilien und Unternehmen. Wir investieren aus eigenem Kapital gemeinsam mit ausgewählten Partnern. Diese Website dient ausschliesslich zu Informationszwecken.',
      },
      {
        heading: 'Zugangsbeschränkung',
        body: 'Diese Website richtet sich ausschliesslich an qualifizierte Anleger gemäss Art. 10 Abs. 3 und 3ter des Schweizer Kollektivanlagengesetzes (KAG) mit Sitz oder Wohnsitz in der Schweiz sowie an professionelle Anleger gemäss Art. 4 Abs. (1) Buchstabe ag) der EU-Richtlinie 2011/61/EU (AIFM-Richtlinie) mit Sitz oder Wohnsitz in einem EU- oder EWR-Mitgliedsstaat. Anderen Personen ist der Zugang nicht gestattet.',
      },
      {
        heading: 'Kein Angebot',
        body: 'Die Informationen auf dieser Website stellen weder ein Angebot noch eine Empfehlung oder Aufforderung dar, Investitionen zu tätigen oder Finanzinstrumente zu kaufen oder zu verkaufen. VTH Management AG tätigt Investitionen aus eigenem Kapital und tritt dabei als Mitinvestor auf. Sie erbringt keine Finanzdienstleistungen im Sinne des FIDLEG, vermittelt keine Finanzinstrumente und verwaltet keine Vermögenswerte Dritter. Jede Investitionsentscheidung liegt ausschliesslich beim jeweiligen Anleger selbst.',
      },
      {
        heading: 'Kein Prospekt',
        body: 'Diese Website stellt weder einen Prospekt gemäss schweizerischem Gesellschaftsrecht, Kollektivanlagengesetz oder Finanzdienstleistungsgesetz dar, noch gemäss der EU-Prospektverordnung oder einer entsprechenden nationalen Regulierung eines EU-Mitgliedsstaates.',
      },
      {
        heading: 'Lokale gesetzliche Einschränkung',
        body: 'Die Informationen richten sich ausschliesslich an qualifizierte Anleger in der Schweiz sowie professionelle Anleger in der EU/EWR. Sie sind ausdrücklich nicht für Personen bestimmt, die dem Recht eines Staates unterliegen, welches die Verbreitung dieser Informationen untersagt – insbesondere nicht für Personen mit Wohnsitz in den USA, Grossbritannien oder Japan. Mit Klick auf „Ich stimme zu" bestätigen Sie, dass Sie KEINE in den USA ansässige Person sind.',
      },
      {
        heading: 'Risikohinweis',
        body: 'Mit jeder Anlage gehen Risiken einher, insbesondere Wert- und Ertragsschwankungen. Bei Fremdwährungen besteht das Risiko des Wertverlusts gegenüber der Referenzwährung. Historische Renditeangaben bieten keine Gewähr für zukünftige Ergebnisse. Im Extremfall besteht das Risiko des vollständigen Kapitalverlusts.',
      },
      {
        heading: 'Haftungsausschluss',
        body: 'Die VTH Management AG übernimmt keine Gewähr hinsichtlich Inhalt und Vollständigkeit der auf dieser Website enthaltenen Informationen und lehnt jede Haftung für Verluste ab, die sich aus der Verwendung dieser Informationen ergeben. Die auf dieser Website geäusserten Meinungen können jederzeit und ohne Mitteilung geändert werden.',
      },
      {
        heading: 'Geistiges Eigentum',
        body: 'Die Inhalte dieser Website sind geistiges Eigentum der VTH Management AG, Bahnhof-Park 2, 6340 Baar, Schweiz. Informationen dürfen ausschliesslich für persönliche Zwecke verwendet werden.',
      },
      {
        heading: 'Datenschutz & Cookies',
        body: 'Auf dieser Website werden Cookies für statistische Auswertungen verwendet. Die VTH Management AG respektiert Ihre Privatsphäre und verpflichtet sich, Ihre persönlichen Daten zu schützen.',
      },
      {
        heading: 'Anwendbares Recht',
        body: 'Rechtliche Fragen unterliegen den Gesetzen der Schweiz. Zuständig sind die Gerichte in Zürich.',
      },
    ],
    agree: 'Ich stimme zu',
    decline: 'Ablehnen',
  },
}

export default function DisclaimerGate() {
  const [visible, setVisible] = useState(false)
  const { locale } = useLanguage()
  const lang = locale === 'de' ? 'de' : 'en'
  const c = content[lang]

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accepted = localStorage.getItem('vth_disclaimer_accepted')
      if (!accepted) setVisible(true)
    }
  }, [])

  const handleAgree = () => {
    localStorage.setItem('vth_disclaimer_accepted', '1')
    setVisible(false)
  }

  const handleDecline = () => {
    window.location.href = 'https://www.google.com'
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: 'rgba(10, 22, 40, 0.85)' }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="disclaimer-title"
    >
      <div
        className="bg-cream-50 w-full flex flex-col"
        style={{ maxWidth: 800, maxHeight: '90vh', borderTop: '3px solid #C9A96E' }}
      >
        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-stone-light/40 shrink-0">
          <div className="font-serif text-2xl font-medium text-charcoal tracking-tight mb-0.5">VTH Management AG</div>
          <div className="font-sans text-[9px] tracking-[0.3em] uppercase text-bronze mb-6">Switzerland</div>
          <h1
            id="disclaimer-title"
            className="font-sans text-xs font-medium tracking-[0.18em] uppercase text-charcoal"
          >
            {c.title}
          </h1>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto px-8 py-6 flex-1">
          {c.sections.map((s, i) => (
            <div key={i} className="mb-6">
              <h2 className="font-sans text-xs font-medium text-charcoal tracking-wide mb-2">{s.heading}</h2>
              <p className="font-sans text-xs text-stone leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Sticky footer buttons */}
        <div className="px-8 pt-5 pb-4 border-t border-stone-light/40 flex flex-col gap-3 shrink-0 bg-cream-50">
          <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAgree}
            className="flex-1 font-sans text-xs tracking-[0.18em] uppercase px-6 py-3 text-cream-50 transition-all duration-200"
            style={{ background: '#0A1628' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#0D1E34')}
            onMouseLeave={e => (e.currentTarget.style.background = '#0A1628')}
          >
            {c.agree}
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 font-sans text-xs tracking-[0.18em] uppercase px-6 py-3 bg-stone-light/30 text-stone-dark hover:bg-stone-light/50 transition-all duration-200"
          >
            {c.decline}
          </button>
          </div>
          <div className="flex gap-4 justify-center">
            <a
              href="/legal/imprint"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[10px] text-stone hover:text-bronze transition-colors duration-200"
            >
              {lang === 'de' ? 'Impressum' : 'Imprint'}
            </a>
            <span className="font-sans text-[10px] text-stone-light">·</span>
            <a
              href="/legal/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[10px] text-stone hover:text-bronze transition-colors duration-200"
            >
              {lang === 'de' ? 'Datenschutz' : 'Privacy Policy'}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

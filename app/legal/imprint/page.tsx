import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false },
}

export default function ImprintPage() {
  return (
    <>
      <PageHero label="Legal" title="Impressum" />
      <section className="py-section bg-cream-50">
        <div className="container-vth max-w-2xl">
          <div className="space-y-10 font-sans text-sm text-stone-dark leading-relaxed">

            <div>
              <h2 className="font-serif text-xl font-medium text-charcoal mb-4">Angaben gemäss Art. 13 ZGB</h2>
              <div className="space-y-1">
                <p className="font-medium text-charcoal">VTH Management AG</p>
                <p>Bahnhof-Park 2</p>
                <p>6340 Baar</p>
                <p>Schweiz</p>
              </div>
              <div className="mt-4 space-y-1">
                <p>UID: CHE-212.957.526</p>
                <p>Handelsregister: Kanton Zug</p>
              </div>
              <div className="mt-4 space-y-1">
                <p>
                  E-Mail:{' '}
                  <a href="mailto:info@vthinvest.ch" className="text-bronze hover:underline">
                    info@vthinvest.ch
                  </a>
                </p>
                <p>
                  Telefon:{' '}
                  <a href="tel:+41787479221" className="text-bronze hover:underline">
                    +41 78 747 92 21
                  </a>
                </p>
              </div>
            </div>

            <div className="h-px bg-stone-light/40" />

            <div>
              <h2 className="font-serif text-xl font-medium text-charcoal mb-4">Haftungsausschluss</h2>
              <p>
                Die Inhalte dieser Website dienen ausschliesslich zu allgemeinen Informationszwecken. VTH Management AG übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit, Aktualität oder Verfügbarkeit der bereitgestellten Informationen. Jegliche Haftung für Schäden, die direkt oder indirekt aus der Nutzung dieser Website entstehen, wird ausgeschlossen, soweit gesetzlich zulässig.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium text-charcoal mb-4">Kein Anlage- oder Finanzierungsangebot</h2>
              <p>
                Die auf dieser Website enthaltenen Informationen stellen weder eine Anlageberatung noch ein Angebot zum Kauf oder Verkauf von Finanzinstrumenten oder zur Beteiligung an einer kollektiven Kapitalanlage dar. VTH Management AG erbringt keine regulierten Finanzdienstleistungen im Sinne des FIDLEG oder des KAG und verfügt über keinen SRO-Anschluss. Alle dargestellten Aktivitäten beziehen sich ausschliesslich auf die Co-Investition von Eigenmitteln der VTH Management AG zusammen mit ausgewählten Partnern.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium text-charcoal mb-4">Urheberrecht</h2>
              <p>
                Sämtliche Inhalte dieser Website — Texte, Bilder, Grafiken und sonstiges Material — sind urheberrechtlich geschützt. Eine Vervielfältigung, Bearbeitung oder Verbreitung ohne ausdrückliche schriftliche Genehmigung von VTH Management AG ist untersagt.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium text-charcoal mb-4">Externe Links</h2>
              <p>
                Diese Website kann Links zu externen Websites Dritter enthalten. Auf deren Inhalt haben wir keinen Einfluss und übernehmen dafür keine Haftung. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
              </p>
            </div>

            <div className="h-px bg-stone-light/40" />

            <p className="text-xs text-stone">Stand: Juni 2026</p>
          </div>
        </div>
      </section>
    </>
  )
}

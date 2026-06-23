import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero label="Legal" title="Datenschutzerklärung" />
      <section className="py-section bg-cream-50">
        <div className="container-vth max-w-2xl">
          <div className="space-y-10 font-sans text-sm text-stone-dark leading-relaxed">

            <div>
              <h2 className="font-serif text-xl font-medium text-charcoal mb-4">1. Verantwortliche Stelle</h2>
              <div className="space-y-1">
                <p className="font-medium text-charcoal">VTH Management AG</p>
                <p>Bahnhof-Park 2</p>
                <p>6340 Baar, Schweiz</p>
                <p className="mt-2">
                  E-Mail:{' '}
                  <a href="mailto:info@vthinvest.ch" className="text-bronze hover:underline">
                    info@vthinvest.ch
                  </a>
                </p>
              </div>
              <p className="mt-4">
                Diese Datenschutzerklärung informiert Sie gemäss dem Schweizer Datenschutzgesetz (DSG) sowie der EU-Datenschutz-Grundverordnung (DSGVO), soweit anwendbar, über die Bearbeitung Ihrer Personendaten im Zusammenhang mit der Nutzung dieser Website.
              </p>
            </div>

            <div className="h-px bg-stone-light/40" />

            <div>
              <h2 className="font-serif text-xl font-medium text-charcoal mb-4">2. Welche Daten wir erheben</h2>
              <p className="mb-3">Wir erheben Personendaten ausschliesslich in dem Umfang, der für den jeweiligen Zweck erforderlich ist:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-bronze rounded-full shrink-0 mt-2" />
                  <span><span className="font-medium text-charcoal">Kontaktformular:</span> Name, E-Mail-Adresse, Unternehmen (optional) und Nachrichteninhalt, die Sie uns freiwillig übermitteln.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-bronze rounded-full shrink-0 mt-2" />
                  <span><span className="font-medium text-charcoal">Server-Logfiles:</span> Beim Besuch dieser Website werden automatisch technische Informationen erfasst (IP-Adresse anonymisiert, Browsertyp, Betriebssystem, Datum/Uhrzeit, aufgerufene Seiten). Diese Daten werden ausschliesslich zur Sicherstellung des Betriebs verwendet und sind nicht personenbezogen identifizierbar.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-bronze rounded-full shrink-0 mt-2" />
                  <span><span className="font-medium text-charcoal">Cookies:</span> Diese Website verwendet ausschliesslich technisch notwendige Cookies (z. B. zur Speicherung Ihrer Einwilligung zum Disclaimer). Es werden keine Tracking- oder Marketing-Cookies eingesetzt.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium text-charcoal mb-4">3. Zweck der Datenbearbeitung</h2>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-bronze rounded-full shrink-0 mt-2" />
                  <span>Beantwortung von Anfragen über das Kontaktformular</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-bronze rounded-full shrink-0 mt-2" />
                  <span>Sicherstellung des technischen Betriebs und der Sicherheit der Website</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-bronze rounded-full shrink-0 mt-2" />
                  <span>Einhaltung gesetzlicher Pflichten</span>
                </li>
              </ul>
              <p className="mt-3">
                Eine Weitergabe Ihrer Daten an Dritte erfolgt nicht, ausser dies ist zur Vertragserfüllung erforderlich oder gesetzlich vorgeschrieben.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium text-charcoal mb-4">4. Speicherdauer</h2>
              <p>
                Personendaten aus Kontaktanfragen werden nur so lange aufbewahrt, wie dies zur Bearbeitung der Anfrage und zur Erfüllung allfälliger gesetzlicher Aufbewahrungspflichten erforderlich ist. Danach werden sie gelöscht oder anonymisiert.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium text-charcoal mb-4">5. Ihre Rechte</h2>
              <p className="mb-3">Nach geltendem Schweizer Datenschutzrecht (DSG) haben Sie folgende Rechte:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-bronze rounded-full shrink-0 mt-2" />
                  <span><span className="font-medium text-charcoal">Auskunft:</span> Sie können jederzeit Auskunft über die zu Ihrer Person gespeicherten Daten verlangen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-bronze rounded-full shrink-0 mt-2" />
                  <span><span className="font-medium text-charcoal">Berichtigung:</span> Sie haben das Recht auf Korrektur unrichtiger Daten.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-bronze rounded-full shrink-0 mt-2" />
                  <span><span className="font-medium text-charcoal">Löschung:</span> Sie können die Löschung Ihrer Daten verlangen, soweit keine gesetzliche Aufbewahrungspflicht entgegensteht.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-bronze rounded-full shrink-0 mt-2" />
                  <span><span className="font-medium text-charcoal">Einschränkung:</span> Sie können die Einschränkung der Bearbeitung Ihrer Daten verlangen.</span>
                </li>
              </ul>
              <p className="mt-3">
                Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an:{' '}
                <a href="mailto:info@vthinvest.ch" className="text-bronze hover:underline">
                  info@vthinvest.ch
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium text-charcoal mb-4">6. Datensicherheit</h2>
              <p>
                Wir treffen angemessene technische und organisatorische Massnahmen zum Schutz Ihrer Daten vor unbefugtem Zugriff, Verlust oder Missbrauch. Die Übertragung erfolgt verschlüsselt über HTTPS.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium text-charcoal mb-4">7. Externe Dienste</h2>
              <p>
                Diese Website wird auf der Infrastruktur von Vercel Inc. (San Francisco, USA) gehostet. Vercel verarbeitet dabei technische Zugangsdaten im Rahmen des Hostingbetriebs. Weitere Informationen finden Sie in der{' '}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-bronze hover:underline">
                  Datenschutzerklärung von Vercel
                </a>
                . Bilder werden über Unsplash (Unsplash Inc., Kanada) eingebunden. Es findet keine Weitergabe von Nutzerdaten an Unsplash statt.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium text-charcoal mb-4">8. Änderungen dieser Erklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen. Die jeweils aktuelle Version ist auf dieser Seite abrufbar.
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

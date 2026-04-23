import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="glass fixed top-0 left-0 right-0 z-50 py-3">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="font-display text-xl font-bold tracking-tight text-foreground">
            Webwerk<span className="text-gradient">Studio</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Zurück zur Startseite
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-12">Datenschutzerklärung</h1>

        <div className="space-y-10 text-muted-foreground text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-semibold text-foreground mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
              identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Verantwortliche Stelle</h2>
            <p>
              Sean-Lucas Chahin<br />
              WebwerkStudio<br />
              Beispielstraße 42<br />
              10115 Berlin<br />
              E-Mail: kontakt@webwerkstudio.de<br />
              Telefon: +49 152 21798780
            </p>
            <p className="mt-3">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
              die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o.&nbsp;Ä.)
              entscheidet.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Datenerfassung auf dieser Website</h2>
            <h3 className="font-semibold text-foreground mb-2">Server-Log-Dateien</h3>
            <p className="mb-3">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien,
              die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mb-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten
              erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an
              der technisch fehlerfreien Darstellung und der Optimierung seiner Website — hierzu müssen die
              Server-Log-Dateien erfasst werden.
            </p>
            <h3 className="font-semibold text-foreground mb-2">Kontaktaufnahme per E-Mail</h3>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden
              personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und
              verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt
              auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Hosting</h2>
            <p>
              Diese Website wird gehostet bei Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, USA. Wenn
              Sie unsere Website besuchen, werden Ihre personenbezogenen Daten (insbesondere IP-Adressen) auf den Servern
              von Netlify verarbeitet. Weitere Informationen finden Sie in der Datenschutzerklärung von Netlify:{" "}
              <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://www.netlify.com/privacy/
              </a>
            </p>
            <p className="mt-3">
              Die Nutzung von Netlify erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes
              Interesse an einer zuverlässigen und schnellen Bereitstellung unserer Website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Keine Cookies, kein Tracking</h2>
            <p>
              Diese Website verwendet keine Cookies, keine Tracking-Tools und keine Analyse-Software. Es werden keine
              externen Schriftarten (z.&nbsp;B. Google Fonts) über Drittanbieter-Server geladen. Alle Schriftarten sind lokal
              eingebunden.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Ihre Rechte</h2>
            <p className="mb-3">Sie haben jederzeit das Recht:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
              <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten (Datenübertragbarkeit)</li>
              <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen</li>
              <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
              „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          <p className="text-xs text-muted-foreground/60 pt-4">Stand: April 2026</p>
        </div>
      </main>
    </div>
  );
}

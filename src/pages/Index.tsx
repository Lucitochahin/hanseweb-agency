import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  TrendingUp,
  Zap,
  Shield,
  MessageSquare,
  Palette,
  Rocket,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const navLinks = [
  { label: "Startseite", href: "#hero" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Pakete", href: "#pakete" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Über mich", href: "#ueber" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="font-display text-xl font-bold tracking-tight text-foreground">
          Webwerk<span className="text-gradient">Studio</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Beratung sichern
          </a>
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass mt-2 mx-4 rounded-xl p-6 flex flex-col gap-4"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-foreground text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMobileOpen(false)}
            className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium text-center"
          >
            Beratung sichern
          </a>
        </motion.div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-8"
        >
          <Zap size={14} className="text-primary" />
          Premium Webdesign für Unternehmer
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.08] tracking-tight mb-6"
        >
          Deine Website wird zur{" "}
          <span className="text-gradient">Kundenmaschine.</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Wir entwickeln Websites, die nicht nur beeindrucken — sondern messbar
          Kunden gewinnen. Conversion-optimiert. Premium-Design. Ergebnisorientiert.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="mailto:kontakt@webwerkstudio.de?subject=Anfrage%20%C3%BCber%20WebwerkStudio&body=Hallo%20Sean-Lucas%2C%0A%0Aich%20habe%20Ihre%20Website%20gesehen%20und%20interessiere%20mich%20f%C3%BCr%20ein%20Webdesign-Projekt.%0A%0ABitte%20kontaktieren%20Sie%20mich%20f%C3%BCr%20ein%20unverbindliches%20Beratungsgespr%C3%A4ch.%0A%0AMit%20freundlichen%20Gr%C3%BC%C3%9Fen%0A"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-all glow-box"
          >
            Jetzt Beratung sichern
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#leistungen"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-medium text-base hover:bg-secondary transition-colors"
          >
            Leistungen entdecken
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto"
        >
          {[
            { icon: TrendingUp, text: "Mehr Umsatz" },
            { icon: Globe, text: "Modern & responsive" },
            { icon: Zap, text: "Blitzschnell" },
            { icon: Shield, text: "100% zuverlässig" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 justify-center text-sm text-muted-foreground">
              <item.icon size={16} className="text-primary" />
              {item.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Leistungen() {
  const services = [
    {
      icon: Palette,
      title: "Premium Webdesign",
      desc: "Individuelles Design, das deine Marke perfekt repräsentiert und Besucher in Kunden verwandelt. Kein Template — maßgeschneidert für deinen Erfolg.",
    },
    {
      icon: TrendingUp,
      title: "Conversion-Optimierung",
      desc: "Jedes Element hat ein Ziel: mehr Anfragen, mehr Kunden. Wir optimieren Struktur, Texte und Benutzerführung für maximale Ergebnisse.",
    },
    {
      icon: Zap,
      title: "Performance & Speed",
      desc: "Ladezeiten unter 2 Sekunden. Deine Website performt auf Top-Niveau — für bessere Rankings und weniger Absprünge.",
    },
    {
      icon: Globe,
      title: "Responsive Design",
      desc: "Perfekte Darstellung auf jedem Gerät. Vom Smartphone bis zum 4K-Monitor — deine Website überzeugt überall.",
    },
    {
      icon: MessageSquare,
      title: "Verkaufsstarke Texte",
      desc: "Professionelles Copywriting, das verkauft. Klar, direkt und psychologisch fundiert — damit Besucher zu Kunden werden.",
    },
    {
      icon: Rocket,
      title: "SEO & Sichtbarkeit",
      desc: "Technisch saubere Grundlage für organische Sichtbarkeit. Damit deine Zielgruppe dich findet — nicht die Konkurrenz.",
    },
  ];

  return (
    <section id="leistungen" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-3">Leistungen</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Alles, was dein Unternehmen <span className="text-gradient">online braucht.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Kein Baukastensystem. Keine halben Sachen. Nur Ergebnisse, die sich in deinem Umsatz widerspiegeln.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              custom={i}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow-box"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <s.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pakete() {
  return (
    <section id="pakete" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-3">Pakete</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Transparente Preise.{" "}
            <span className="text-gradient">Keine Überraschungen.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Du weißt von Anfang an, was dein Projekt kostet. Kein Stundensatz-Chaos, kein Nachverhandeln — nur klare Leistung zum fairen Festpreis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={1}
            className="p-8 rounded-2xl bg-card border border-border flex flex-col"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-secondary/50 text-xs text-muted-foreground w-fit mb-6">
              Für Einsteiger
            </div>
            <div className="mb-2">
              <span className="font-display text-5xl font-bold">499 €</span>
            </div>
            <p className="text-xs text-muted-foreground mb-1">Einmalige Zahlung</p>
            <p className="text-xs text-muted-foreground mb-6">+ 20 €/Monat für Hosting & Wartung</p>
            <h3 className="font-display text-lg font-semibold mb-3">Starter</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Ideal für Selbstständige und kleine Betriebe, die professionell online auftreten wollen — ohne großen Aufwand. Du bekommst eine moderne, mobile-optimierte Einseite, die dein Unternehmen klar vorstellt, Vertrauen aufbaut und Kunden direkt zur Kontaktaufnahme bewegt.
            </p>
            <p className="text-xs text-primary font-medium mb-6">
              Perfekt für: Friseure · Bäcker · Handwerker · Coaches · Fotografen
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Professionelle Einseite (Landing Page)",
                "Mobil optimiert für alle Geräte",
                "Kontaktformular integriert",
                "Schnelle Ladezeit & SEO-Grundlage",
                "Lieferung in 5–7 Werktagen",
                "2 Korrekturschleifen inklusive",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#kontakt"
              className="w-full py-3 rounded-xl border border-border text-center text-sm font-medium hover:bg-secondary/50 transition-all duration-300"
            >
              Jetzt anfragen
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={2}
            className="p-8 rounded-2xl bg-card border border-primary/40 flex flex-col glow-box"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-xs text-primary font-medium w-fit mb-6">
              Empfohlen
            </div>
            <div className="mb-2">
              <span className="font-display text-5xl font-bold">899 €</span>
            </div>
            <p className="text-xs text-muted-foreground mb-1">Einmalige Zahlung</p>
            <p className="text-xs text-muted-foreground mb-6">+ 20 €/Monat für Hosting & Wartung</p>
            <h3 className="font-display text-lg font-semibold mb-3">Business</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Für Unternehmen, die mehr brauchen als eine digitale Visitenkarte. Eine vollständige mehrseitige Website mit allen wichtigen Unterseiten — plus ein eingebettetes Buchungs- oder Reservierungssystem, damit deine Kunden direkt online einen Termin buchen können.
            </p>
            <p className="text-xs text-primary font-medium mb-6">
              Perfekt für: Restaurants · Kosmetikstudios · Arztpraxen · Dienstleister
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Mehrseitige Website (4–6 Seiten)",
                "Buchungs- oder Reservierungssystem",
                "Mobil optimiert für alle Geräte",
                "Kontaktformular & Google Maps",
                "Schnelle Ladezeit & SEO-Grundlage",
                "Lieferung in 7–10 Werktagen",
                "3 Korrekturschleifen inklusive",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#kontakt"
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground text-center text-sm font-medium hover:bg-primary/90 transition-all duration-300"
            >
              Jetzt anfragen
            </a>
          </motion.div>
        </div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          custom={3}
          className="text-center text-xs text-muted-foreground mt-10"
        >
          Alle Preise zzgl. gesetzlicher MwSt. · Individuelle Anfragen: kontakt@webwerkstudio.de
        </motion.p>
      </div>
    </section>
  );
}

function Ablauf() {
  const steps = [
    {
      num: "01",
      title: "Beratung",
      desc: "Wir analysieren dein Unternehmen, deine Ziele und deine Zielgruppe. Kostenlos und unverbindlich.",
    },
    {
      num: "02",
      title: "Planung",
      desc: "Struktur, Design-Konzept und Inhalte werden strategisch geplant — für maximale Wirkung.",
    },
    {
      num: "03",
      title: "Umsetzung",
      desc: "Dein Projekt wird pixelgenau umgesetzt. Du erhältst regelmäßige Updates und gibst Feedback.",
    },
    {
      num: "04",
      title: "Launch",
      desc: "Deine Website geht live. Optimiert, getestet und bereit, Kunden zu gewinnen.",
    },
  ];

  return (
    <section id="ablauf" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-3">Ablauf</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            In 4 Schritten zu deiner <span className="text-gradient">neuen Website.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ein klarer, transparenter Prozess — damit du immer weißt, was passiert.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              custom={i}
              className="relative text-center md:text-left"
            >
              <span className="font-display text-5xl font-bold text-primary/15 block mb-2">
                {step.num}
              </span>
              <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-3 w-6 text-border">
                  <ArrowRight size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UeberMich() {
  return (
    <section id="ueber" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-3">Über mich</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Der Kopf hinter <span className="text-gradient">WebwerkStudio.</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          custom={1}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img
                src="/sean-lucas.png"
                alt="Sean-Lucas Chahin"
                className="w-16 h-16 rounded-2xl object-cover shrink-0"
              />
              <div>
                <h3 className="font-display text-2xl font-bold mb-1">Sean-Lucas Chahin</h3>
                <p className="text-sm text-primary font-medium mb-4">Gründer & Webdesigner — 16 Jahre</p>
                <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Was andere in meinem Alter als Hobby betreiben, ist für mich Berufung. Seit Jahren
                    beschäftige ich mich intensiv mit Webdesign, UX und digitalem Marketing. Nicht
                    nebenbei — sondern mit dem Anspruch, Ergebnisse zu liefern, die sich mit jeder
                    etablierten Agentur messen können.
                  </p>
                  <p>
                    Mein Alter ist kein Nachteil — es ist mein Vorteil. Ich denke digital, arbeite mit
                    den neuesten Technologien und bringe eine Leidenschaft mit, die man bei kaum einem
                    Dienstleister findet. Meine Kunden schätzen die Kombination aus frischem Denken,
                    Qualitätsbewusstsein und absoluter Zuverlässigkeit.
                  </p>
                  <p>
                    Jedes Projekt behandle ich, als wäre es mein eigenes Unternehmen. Weil ich weiß:
                    Dein Erfolg ist mein Erfolg.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="kontakt" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.05] to-transparent pointer-events-none" />
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Bereit, dein Unternehmen auf das{" "}
            <span className="text-gradient">nächste Level</span> zu bringen?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Eine Website, die verkauft, beginnt mit einem Gespräch. Kostenlos. Unverbindlich. Lass uns herausfinden, was für dich möglich ist.
          </p>
          <a
            href="mailto:kontakt@webwerkstudio.de?subject=Anfrage%20%C3%BCber%20WebwerkStudio&body=Hallo%20Sean-Lucas%2C%0A%0Aich%20habe%20Ihre%20Website%20gesehen%20und%20interessiere%20mich%20f%C3%BCr%20ein%20Webdesign-Projekt.%0A%0ABitte%20kontaktieren%20Sie%20mich%20f%C3%BCr%20ein%20unverbindliches%20Beratungsgespr%C3%A4ch.%0A%0AMit%20freundlichen%20Gr%C3%BC%C3%9Fen%0A"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-all glow-box"
          >
            Jetzt Beratung sichern
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#hero" className="font-display text-xl font-bold tracking-tight text-foreground">
          Webwerk<span className="text-gradient">Studio</span>
        </a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} WebwerkStudio. Alle Rechte vorbehalten.
        </p>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#kontakt" className="hover:text-foreground transition-colors">Kontakt</a>
          <Link to="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Leistungen />
        <Pakete />
        <Ablauf />
        <UeberMich />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

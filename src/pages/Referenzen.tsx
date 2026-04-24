import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const projects = [
  {
    name: "Restaurant Goldener Hirsch",
    desc: "Moderne Website mit integriertem Reservierungssystem und Speisekarte. Optimiert für mobile Endgeräte und lokale Sichtbarkeit.",
    tags: ["Business-Paket", "Responsive", "Buchungssystem"],
    gradient: "from-amber-500/20 via-orange-500/10 to-red-500/20",
    url: "#",
  },
  {
    name: "Friseur Salon Eleganz",
    desc: "Einseite mit Online-Terminbuchung, Preisliste und Galerie. Klares Design, das die Marke perfekt widerspiegelt.",
    tags: ["Starter-Paket", "SEO", "Kontaktformular"],
    gradient: "from-pink-500/20 via-purple-500/10 to-violet-500/20",
    url: "#",
  },
  {
    name: "Handwerk Müller & Söhne",
    desc: "Professionelle Unternehmensseite mit Leistungsübersicht, Referenzgalerie und direkter Angebotsanfrage per Formular.",
    tags: ["Business-Paket", "Responsive", "SEO"],
    gradient: "from-blue-500/20 via-cyan-500/10 to-teal-500/20",
    url: "#",
  },
];

export default function Referenzen() {
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

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Unsere <span className="text-gradient">Referenzen.</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ein Auszug aus bisherigen Projekten — jedes einzelne mit dem Anspruch,
            echte Ergebnisse zu liefern.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={i + 1}
              className="group rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden hover:glow-box"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <span className="font-display text-lg font-semibold text-foreground/60">
                  {project.name}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full border border-border bg-secondary/50 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  disabled
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground/50 cursor-not-allowed"
                >
                  <ExternalLink size={14} />
                  Demnächst verfügbar
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          Weitere Projekte folgen in Kürze. Du möchtest das nächste sein?{" "}
          <Link to="/#kontakt" className="text-primary hover:underline">
            Jetzt anfragen.
          </Link>
        </motion.p>
      </main>

      <footer className="border-t border-border/50 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="font-display text-xl font-bold tracking-tight text-foreground">
            Webwerk<span className="text-gradient">Studio</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WebwerkStudio. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/#kontakt" className="hover:text-foreground transition-colors">Kontakt</Link>
            <Link to="/referenzen" className="hover:text-foreground transition-colors">Referenzen</Link>
            <Link to="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

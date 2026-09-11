import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Instagram, Linkedin, GraduationCap } from "lucide-react";

const nav = [
  { to: "/", label: "Sobre" },
  { to: "/formacao-professores", label: "Formação" },
  { to: "/metodologias-ativas", label: "Metodologias Ativas" },
  { to: "/avaliacao-formativa", label: "Avaliação Formativa" },
  { to: "/projetos", label: "Projetos" },
  { to: "/convites", label: "Convites" },
] as const;

export function SiteHeader() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-5 flex items-center justify-between gap-8">
        <Link to="/" className="flex items-baseline gap-2 group font-display">
          <span className="text-primary">&gt;_</span>
          <span className="text-lg font-bold tracking-tight text-foreground">jadson.fernando</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground hidden sm:inline font-sans">
            // CT&I
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {nav.map((n) => {
            const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`relative py-1 transition-colors hover:text-foreground uppercase tracking-wider text-[11px] ${
                  active ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {n.label}
                {active && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary glow-sky" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
      {/* mobile nav */}
      <nav className="lg:hidden border-t border-border/50 overflow-x-auto">
        <div className="flex gap-5 px-6 py-3 text-xs whitespace-nowrap">
          {nav.map((n) => {
            const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className={active ? "text-foreground" : "text-muted-foreground"}
              >
                {n.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-0 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 grid md:grid-cols-3 gap-12 text-sm">
        <div>
          <div className="font-display text-xl font-bold text-foreground"><span className="text-primary">&gt;_</span> jadson.fernando</div>
          <p className="text-muted-foreground mt-2">Professor e Pesquisador</p>
          <div className="text-muted-foreground mt-6 space-y-2 text-sm">
            <div>GEG Brasil</div>
            <div>Google Workspace for Education</div>
            <div>Google Gemini Academy</div>
          </div>
        </div>
        <div className="space-y-2 text-muted-foreground">
          <div className="uppercase text-[11px] tracking-[0.2em] text-foreground mb-4">Navegar</div>
          {nav.slice(1).map((n) => (
            <div key={n.to}><Link to={n.to} className="hover:text-foreground transition-colors">{n.label}</Link></div>
          ))}
        </div>
        <div className="space-y-3 text-muted-foreground">
          <div className="uppercase text-[11px] tracking-[0.2em] text-foreground mb-4">Contato</div>
          <div>jadson.langkammer@educacao.mg.gov.br</div>
          <div className="pt-2">
            <a
              href="https://wa.me/5533987138346?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20Jadson%20sobre%20aulas%2C%20oficinas%20ou%20palestras."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 text-primary px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] font-medium hover:bg-primary hover:text-primary-foreground transition-colors glow-sky"
            >
              Falar com o Profe!
            </a>
          </div>
          <div className="flex items-center gap-3 pt-4">
            <a
              href="http://instagram.com/jadsonfernandofc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center w-9 h-9 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/jadsonfernando/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-9 h-9 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="http://lattes.cnpq.br/4145159773500733"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Currículo Lattes"
              title="Currículo Lattes"
              className="inline-flex items-center justify-center w-9 h-9 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <GraduationCap size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Jadson Fernando — Todos os direitos reservados.
      </div>
    </footer>
  );
}

export function PageShell({ kicker, title, lede, children }: { kicker: string; title: string; lede?: string; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-12 py-24 lg:py-32">
      <div className="max-w-3xl">
        <div className="font-display text-xs tracking-wider text-primary">
          <span className="text-muted-foreground">//</span> {kicker}
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-6 text-balance leading-[1.02]">{title}</h1>
        {lede && <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">{lede}</p>}
      </div>
      <div className="mt-20">{children}</div>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col grain">
      <SiteHeader />
      <main className="flex-1 pt-[88px] lg:pt-[72px]">{children}</main>
      <SiteFooter />
    </div>
  );
}

export default function LayoutRoute() {
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  );
}

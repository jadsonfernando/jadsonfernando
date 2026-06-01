import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Sobre" },
  { to: "/eventos", label: "Eventos" },
  { to: "/metodologias-ativas", label: "Metodologias Ativas" },
  { to: "/avaliacao-formativa", label: "Avaliação Formativa" },
  { to: "/projetos", label: "Projetos" },
  { to: "/convites", label: "Convites" },
] as const;

export function SiteHeader() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-5 flex items-center justify-between gap-8">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl tracking-tight">Jadson Fernando</span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground hidden sm:inline">
            · prof.
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {nav.map((n) => {
            const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`relative py-1 transition-colors hover:text-foreground ${
                  active ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {n.label}
                {active && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>
        <Link
          to="/convites"
          className="text-xs uppercase tracking-[0.18em] border border-foreground px-4 py-2.5 hover:bg-foreground hover:text-background transition-colors"
        >
          Convidar
        </Link>
      </div>
      {/* mobile nav */}
      <nav className="lg:hidden border-t border-border overflow-x-auto">
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
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-display text-xl">Jadson Fernando</div>
          <p className="text-muted-foreground mt-2 max-w-xs">
            Professor, palestrante e entusiasta de metodologias ativas e avaliação formativa.
          </p>
        </div>
        <div className="space-y-1 text-muted-foreground">
          <div className="uppercase text-xs tracking-[0.2em] text-foreground mb-3">Navegar</div>
          {nav.slice(1).map((n) => (
            <div key={n.to}><Link to={n.to} className="hover:text-foreground">{n.label}</Link></div>
          ))}
        </div>
        <div className="space-y-1 text-muted-foreground">
          <div className="uppercase text-xs tracking-[0.2em] text-foreground mb-3">Contato</div>
          <div>contato@jadsonfernando.com.br</div>
          <div>Palestras · Mentorias · Formações</div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Jadson Fernando — Todos os direitos reservados.
      </div>
    </footer>
  );
}

export function PageShell({ kicker, title, lede, children }: { kicker: string; title: string; lede?: string; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 lg:py-28">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-[0.25em] text-accent-foreground/80">
          <span className="inline-block w-8 h-px bg-accent align-middle mr-3" />
          {kicker}
        </div>
        <h1 className="font-display text-5xl md:text-7xl mt-6 text-balance leading-[0.95]">{title}</h1>
        {lede && <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">{lede}</p>}
      </div>
      <div className="mt-16">{children}</div>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col grain">
      <SiteHeader />
      <main className="flex-1">{children}</main>
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

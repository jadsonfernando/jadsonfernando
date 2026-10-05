import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, PageShell } from "@/components/SiteLayout";

export const Route = createFileRoute("/praticas-pedagogicas")({
  head: () => ({
    meta: [
      { title: "Práticas Pedagógicas — Jadson Fernando" },
      { name: "description", content: "Metodologias Ativas e Avaliação Formativa em um mesmo movimento: planejar experiências e avaliar para ensinar." },
      { property: "og:title", content: "Práticas Pedagógicas — Jadson Fernando" },
      { property: "og:description", content: "Metodologias Ativas + Avaliação Formativa: o método projeta a experiência; a avaliação orienta o caminho." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/praticas-pedagogicas" }],
  }),
  component: Page,
});

const areas = [
  {
    n: "01",
    t: "Metodologias Ativas",
    d: "Sala de aula invertida, PBL, peer instruction, gamificação e outras estratégias que substituem a passividade pela autoria. Aqui, ensinar é projetar experiências em que aprender faz sentido.",
    href: "/metodologias-ativas",
    tags: ["Sala de aula invertida", "PBL", "Peer instruction", "Gamificação"],
  },
  {
    n: "02",
    t: "Avaliação Formativa",
    d: "Avaliar é, antes de tudo, ensinar. Feedback descritivo, rubricas e devolutivas que acompanham o caminho — em vez de apenas medir o fim — e o transformam.",
    href: "/avaliacao-formativa",
    tags: ["Feedback descritivo", "Rubricas", "Devolutivas", "Replanejamento"],
  },
];

function Page() {
  return (
    <SiteLayout>
      <PageShell
        kicker="Práticas Pedagógicas"
        title="Do método à devolutiva."
        lede="Metodologias Ativas e Avaliação Formativa não são disciplinas separadas — são um mesmo movimento. O método projeta a experiência; a avaliação orienta o caminho e o transforma."
      >
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {areas.map((a) => (
            <Link
              key={a.n}
              to={a.href}
              className="group bg-card p-10 relative overflow-hidden transition-colors hover:bg-secondary"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-6xl text-accent">{a.n}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Trilha</span>
              </div>
              <h3 className="font-display text-3xl mt-8 text-foreground">{a.t}</h3>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{a.d}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {a.tags.map((tag) => (
                  <span key={tag} className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground border border-border px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-primary">
                Explorar
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-24 border-t border-border pt-16 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">O elo</div>
            <h2 className="font-display text-3xl md:text-4xl mt-4 leading-tight">
              Uma prática <em className="text-accent">sustenta</em> a outra.
            </h2>
          </div>
          <p className="md:col-span-7 text-lg text-muted-foreground leading-relaxed">
            Nenhuma metodologia ativa sobrevive a uma avaliação que apenas classifica — e nenhuma avaliação formativa funciona em uma aula em que o aluno está passivo. Juntas, elas completam o ciclo: o aluno no centro do método, a aprendizagem no centro da avaliação.
          </p>
        </div>
      </PageShell>
    </SiteLayout>
  );
}

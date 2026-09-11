import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageShell } from "@/components/SiteLayout";

export const Route = createFileRoute("/avaliacao-formativa")({
  head: () => ({
    meta: [
      { title: "Avaliação Formativa — Jadson Fernando" },
      { name: "description", content: "Avaliar para ensinar: feedback contínuo, rubricas e devolutivas que transformam a aprendizagem." },
      { property: "og:title", content: "Avaliação Formativa — Jadson Fernando" },
      { property: "og:description", content: "Avaliação como instrumento de aprendizagem, não de classificação." },
    ],
    links: [{ rel: "canonical", href: "/avaliacao-formativa" }],
  }),
  component: Page,
});

const passos = [
  { n: "01", t: "Diagnosticar", d: "Compreender o ponto de partida real do aluno — não o ideal, o real." },
  { n: "02", t: "Acompanhar", d: "Observar, escutar e registrar evidências de aprendizagem ao longo do percurso." },
  { n: "03", t: "Devolver", d: "Feedback descritivo, oportuno e acionável. Quem recebe sabe o próximo passo." },
  { n: "04", t: "Replanejar", d: "A avaliação reorienta o ensino — não apenas o aluno. Quem ajusta a rota é o professor." },
];

function Page() {
  return (
    <SiteLayout>
      <PageShell
        kicker="04 — Avaliação Formativa"
        title="Avaliar é, antes de tudo, ensinar."
        lede="A avaliação formativa devolve à aprendizagem seu sentido pedagógico. Em vez de medir o fim, ela acompanha o caminho — e o transforma."
      >
        {/* CICLO */}
        <div className="grid md:grid-cols-4 gap-px bg-border border border-border">
          {passos.map((p, i) => (
            <div key={p.n} className="bg-card p-8 relative">
              <div className="font-display text-6xl text-accent">{p.n}</div>
              <h3 className="font-display text-2xl mt-4 text-foreground">{p.t}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.d}</p>
              {i < passos.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-3 text-accent text-2xl">→</div>
              )}
            </div>
          ))}
        </div>

        {/* MANIFESTO */}
        <div className="mt-24 max-w-3xl">
          <div className="font-sans text-3xl md:text-4xl mt-6 space-y-6 leading-snug text-foreground">
            <p>Manifesto Breve</p>
            <p>A prova não é o fim. É apenas o <em className="text-accent">indício da jornada</em>.</p>
            <p>A nota não ensina. É a <em className="text-accent">devolutiva</em> que gera transformação.</p>
            <p>O erro não é um defeito. É a nossa principal <em className="text-accent">matéria-prima</em>.</p>
            <p>O aluno não é objeto de avaliação. É o sujeito ativo da sua própria aprendizagem, é a <em className="text-accent">potência em construção</em>.</p>
          </div>
        </div>

        {/* RUBRICA SAMPLE */}
        <div className="mt-24 border-t border-border pt-12">
          <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Exemplo · Rubrica formativa</div>
          <div className="mt-6 grid grid-cols-4 text-sm border border-border">
            {["Critério", "Emergente", "Em desenvolvimento", "Consolidado"].map((h) => (
              <div key={h} className="bg-foreground text-background p-4 font-medium uppercase text-[11px] tracking-[0.15em]">{h}</div>
            ))}
            {[
              ["Clareza da ideia", "Apresenta a ideia de forma fragmentada.", "Comunica a ideia com pequenas lacunas.", "Articula a ideia de forma clara e consistente."],
              ["Argumentação", "Afirmações sem sustentação.", "Argumentos com algumas evidências.", "Argumentos sustentados por evidências."],
              ["Autoria", "Reproduz referências sem síntese.", "Mescla referências com análise inicial.", "Constrói posicionamento autoral."],
            ].map((row) =>
              row.map((c, i) => (
                <div key={row[0] + i} className={`p-4 border-t border-border ${i === 0 ? "font-medium bg-card text-foreground" : "text-muted-foreground"}`}>{c}</div>
              ))
            )}
          </div>
        </div>
      </PageShell>
    </SiteLayout>
  );
}

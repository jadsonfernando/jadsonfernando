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
          <div className="font-display text-lg md:text-xl mt-6 space-y-5 leading-relaxed text-foreground">
            <p className="text-muted-foreground uppercase tracking-[0.2em] text-xs">Manifesto Breve</p>
            <p>A prova não é o <em className="text-primary not-italic font-medium">fim</em>. É apenas o <em className="text-primary not-italic font-medium">indício da jornada</em>.</p>
            <p>A nota <em className="text-primary not-italic font-medium">não ensina</em>. É a <em className="text-primary not-italic font-medium">devolutiva</em> que gera transformação.</p>
            <p>O erro não é um defeito. É a nossa principal <em className="text-primary not-italic font-medium">matéria-prima</em>.</p>
            <p>O aluno não é objeto de avaliação. É o <em className="text-primary not-italic font-medium">sujeito ativo</em> da sua própria aprendizagem, é a <em className="text-primary not-italic font-medium">potência em construção</em>.</p>
          </div>
        </div>

        {/* AF vs AS */}
        <div className="mt-24 border-t border-border pt-12">
          <div className="font-display text-xs tracking-wider text-primary">
            <span className="text-muted-foreground">//</span> comparativo — AF vs AS
          </div>
          <h2 className="font-display text-2xl md:text-4xl font-bold mt-5 leading-tight">
            Formativa <span className="text-primary">vs.</span> Somativa
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-sm leading-relaxed">
            A Avaliação Formativa (AF) e a Avaliação Somativa (AS) respondem a perguntas diferentes.
            Uma orienta o caminho; a outra registra a chegada.
          </p>
          <div className="mt-8 grid grid-cols-3 text-sm border border-border">
            {["Dimensão", "Avaliação Formativa (AF)", "Avaliação Somativa (AS)"].map((h) => (
              <div key={h} className="bg-foreground text-background p-4 font-medium uppercase text-[11px] tracking-[0.15em]">{h}</div>
            ))}
            {[
              ["Propósito", "Acompanhar e reorientar a aprendizagem.", "Certificar e classificar o resultado."],
              ["Momento", "Durante o percurso — contínua.", "Ao final do ciclo — pontual."],
              ["Pergunta-chave", "Como seguir aprendendo?", "Quanto foi aprendido?"],
              ["Feedback", "Descritivo, oportuno e acionável.", "Nota ou conceito, sem devolutiva."],
              ["Nota", "Registro da jornada, nunca o fim.", "Síntese que entra no boletim."],
              ["Erro", "Matéria-prima para replanejar.", "Penalidade a ser evitada."],
              ["Quem avalia", "Professor e aluno, em parceria.", "Professor, sobre o aluno."],
            ].map((row) =>
              row.map((c, i) => (
                <div
                  key={row[0] + i}
                  className={`p-4 border-t border-border ${i === 0 ? "font-medium bg-card text-foreground" : i === 1 ? "text-foreground bg-primary/5" : "text-muted-foreground"}`}
                >
                  {i === 1 && <span className="text-primary mr-1">›</span>}
                  {c}
                </div>
              ))
            )}
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Na prática, <span className="text-foreground font-medium">elas se complementam</span>: a AF constrói a aprendizagem, e a AS registra o que ela produziu. O risco é inverter os papéis — quando a nota passa a guiar o processo, a avaliação deixa de ensinar.
          </p>
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

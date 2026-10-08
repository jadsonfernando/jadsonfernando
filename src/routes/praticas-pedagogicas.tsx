import { createFileRoute } from "@tanstack/react-router";
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

const metodos = [
  { n: "01", t: "Sala de aula invertida", d: "O conteúdo vai para casa; a sala vira espaço de problema, debate e aplicação." },
  { n: "02", t: "Aprendizagem baseada em problemas", d: "Desafios reais como ponto de partida — o conteúdo emerge da necessidade." },
  { n: "03", t: "Peer instruction", d: "O aluno ensina o aluno. A explicação entre pares consolida e revela lacunas." },
  { n: "04", t: "Gamificação", d: "Mecânicas de jogo a serviço do engajamento, da progressão e do erro produtivo." },
  { n: "05", t: "Estudo de caso", d: "Narrativas concretas que conectam teoria, prática e tomada de decisão." },
  { n: "06", t: "Design thinking", d: "Empatia, ideação e prototipação aplicadas à construção de soluções educativas." },
];

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
        kicker="Práticas Pedagógicas"
        title="Do método à devolutiva."
        lede="Metodologias Ativas e Avaliação Formativa não são disciplinas separadas — são um mesmo movimento. O método projeta a experiência; a avaliação orienta o caminho e o transforma."
      >
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {areas.map((a) => (
            <article
              key={a.n}
              className="bg-card p-10 relative overflow-hidden"
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
            </article>
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

        <section className="mt-24 border-t border-border pt-16">
          <div className="font-display text-xs tracking-wider text-primary"><span className="text-muted-foreground">//</span> Metodologias Ativas</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-5 leading-tight">Ativo mais precioso do processo — <span className="text-primary">o estudante.</span></h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">Métodos que substituem a passividade pela autoria. Aqui, ensinar é projetar experiências em que aprender faz sentido.</p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {metodos.map((m) => (
              <div key={m.n} className="bg-card p-8 hover:bg-secondary transition-colors">
                <div className="flex items-baseline justify-between"><span className="font-display text-5xl text-accent">{m.n}</span><span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Método</span></div>
                <h3 className="font-display text-2xl mt-6 text-foreground">{m.t}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 grid md:grid-cols-12 gap-10 items-center border-t border-border pt-16">
            <div className="md:col-span-5"><div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Princípio</div><h3 className="font-display text-4xl md:text-5xl mt-4 leading-tight">Estratégia <em className="text-accent">a serviço</em> do encontro.</h3></div>
            <p className="md:col-span-7 text-lg text-muted-foreground leading-relaxed">Nenhuma metodologia é solução pronta. O método existe para sustentar a relação entre quem ensina e quem aprende — nunca para substituí-la. Toda formação que conduzo parte do contexto da escola, do professor e dos estudantes.</p>
          </div>
        </section>

        <section className="mt-24 border-t border-border pt-16">
          <div className="font-display text-xs tracking-wider text-primary"><span className="text-muted-foreground">//</span> Avaliação Formativa</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-5 leading-tight">Avaliar é, antes de tudo, <span className="text-primary">ensinar.</span></h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">A avaliação formativa devolve à aprendizagem seu sentido pedagógico. Em vez de medir o fim, ela acompanha o caminho — e o transforma.</p>
          <div className="mt-10 grid md:grid-cols-4 gap-px bg-border border border-border">
            {passos.map((p, i) => (
              <div key={p.n} className="bg-card p-8 relative">
                <div className="font-display text-6xl text-accent">{p.n}</div><h3 className="font-display text-2xl mt-4 text-foreground">{p.t}</h3><p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.d}</p>
                {i < passos.length - 1 && <div className="hidden md:block absolute top-12 -right-3 text-accent text-2xl">→</div>}
              </div>
            ))}
          </div>

          <div className="mt-24 max-w-3xl">
            <div className="font-display text-lg md:text-xl space-y-5 leading-relaxed text-foreground">
              <p className="text-muted-foreground uppercase tracking-[0.2em] text-xs">Manifesto Breve</p>
              <p>A prova não é o <em className="text-primary not-italic font-medium">fim</em>. É apenas o <em className="text-primary not-italic font-medium">indício da jornada</em>.</p>
              <p>A nota <em className="text-primary not-italic font-medium">não ensina</em>. É a <em className="text-primary not-italic font-medium">devolutiva</em> que gera transformação.</p>
              <p>O erro não é um defeito. É a nossa principal <em className="text-primary not-italic font-medium">matéria-prima</em>.</p>
              <p>O aluno não é objeto de avaliação. É o <em className="text-primary not-italic font-medium">sujeito ativo</em> da sua própria aprendizagem, é a <em className="text-primary not-italic font-medium">potência em construção</em>.</p>
            </div>
          </div>

          <div className="mt-24 border-t border-border pt-12">
            <div className="font-display text-xs tracking-wider text-primary"><span className="text-muted-foreground">//</span> comparativo — AS vs AF</div>
            <h3 className="font-display text-2xl md:text-4xl font-bold mt-5">Somativa <span className="text-primary">vs.</span> Formativa</h3>
            <p className="mt-4 text-muted-foreground max-w-2xl text-sm leading-relaxed">A Avaliação Somativa (AS) e a Avaliação Formativa (AF) respondem a perguntas diferentes. Uma registra a chegada; a outra orienta o caminho.</p>
            <div className="mt-8 grid grid-cols-3 text-sm border border-border">
              {["Dimensão", "Avaliação Somativa (AS)", "Avaliação Formativa (AF)"].map((h) => <div key={h} className="bg-foreground text-background p-4 font-medium uppercase text-[11px] tracking-[0.15em]">{h}</div>)}
              {[
                ["Propósito", "Certificar e classificar o resultado.", "Acompanhar e reorientar a aprendizagem."], ["Momento", "Ao final do ciclo — pontual.", "Durante o percurso — contínua."], ["Pergunta-chave", "Quanto foi aprendido?", "Como seguir aprendendo?"], ["Feedback", "Nota ou conceito, sem devolutiva.", "Descritivo, oportuno e acionável."], ["Nota", "Síntese que entra no boletim.", "Registro da jornada, nunca o fim."], ["Erro", "Penalidade a ser evitada.", "Matéria-prima para replanejar."], ["Quem avalia", "Professor, sobre o aluno.", "Professor e aluno, em parceria."],
              ].map((row) => row.map((c, i) => <div key={row[0] + i} className={`p-4 border-t border-border ${i === 0 ? "font-medium bg-card text-foreground" : i === 2 ? "text-foreground bg-primary/5" : "text-muted-foreground"}`}>{i === 2 && <span className="text-primary mr-1">›</span>}{c}</div>))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground max-w-2xl leading-relaxed">Na prática, <span className="text-foreground font-medium">elas se complementam</span>: a AF constrói a aprendizagem, e a AS registra o que ela produziu. O risco é inverter os papéis — quando a nota passa a guiar o processo, a avaliação deixa de ensinar.</p>
          </div>

          <div className="mt-24 border-t border-border pt-12">
            <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Exemplo · Rubrica formativa</div>
            <div className="mt-6 grid grid-cols-4 text-sm border border-border">
              {["Critério", "Emergente", "Em desenvolvimento", "Consolidado"].map((h) => <div key={h} className="bg-foreground text-background p-4 font-medium uppercase text-[11px] tracking-[0.15em]">{h}</div>)}
              {[
                ["Clareza da ideia", "Apresenta a ideia de forma fragmentada.", "Comunica a ideia com pequenas lacunas.", "Articula a ideia de forma clara e consistente."], ["Argumentação", "Afirmações sem sustentação.", "Argumentos com algumas evidências.", "Argumentos sustentados por evidências."], ["Autoria", "Reproduz referências sem síntese.", "Mescla referências com análise inicial.", "Constrói posicionamento autoral."],
              ].map((row) => row.map((c, i) => <div key={row[0] + i} className={`p-4 border-t border-border ${i === 0 ? "font-medium bg-card text-foreground" : "text-muted-foreground"}`}>{c}</div>))}
            </div>
          </div>
        </section>
      </PageShell>
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageShell } from "@/components/SiteLayout";

export const Route = createFileRoute("/metodologias-ativas")({
  head: () => ({
    meta: [
      { title: "Metodologias Ativas — Jadson Fernando" },
      { name: "description", content: "Sala de aula invertida, PBL, peer instruction, gamificação e outras estratégias centradas no aluno." },
      { property: "og:title", content: "Metodologias Ativas — Jadson Fernando" },
      { property: "og:description", content: "Estratégias práticas para colocar o aluno no centro." },
    ],
    links: [{ rel: "canonical", href: "/metodologias-ativas" }],
  }),
  component: Page,
});

const metodos = [
  { n: "01", t: "Sala de aula invertida", d: "O conteúdo vai para casa; a sala vira espaço de problema, debate e aplicação." },
  { n: "02", t: "Aprendizagem baseada em problemas", d: "Desafios reais como ponto de partida — o conteúdo emerge da necessidade." },
  { n: "03", t: "Peer instruction", d: "O aluno ensina o aluno. A explicação entre pares consolida e revela lacunas." },
  { n: "04", t: "Gamificação", d: "Mecânicas de jogo a serviço do engajamento, da progressão e do erro produtivo." },
  { n: "05", t: "Estudo de caso", d: "Narrativas concretas que conectam teoria, prática e tomada de decisão." },
  { n: "06", t: "Design thinking", d: "Empatia, ideação e prototipação aplicadas à construção de soluções educativas." },
];

function Page() {
  return (
    <SiteLayout>
      <PageShell
        kicker="03 — Metodologias Ativas"
        title="O aluno é o verbo da aula."
        lede="Métodos que substituem a passividade pela autoria. Aqui, ensinar é projetar experiências em que aprender faz sentido."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {metodos.map((m) => (
            <div key={m.n} className="bg-background p-8 hover:bg-card transition-colors">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-5xl text-accent">{m.n}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Método</span>
              </div>
              <h3 className="font-display text-2xl mt-6">{m.t}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-12 gap-10 items-center border-t border-border pt-16">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Princípio</div>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">Estratégia <em className="text-accent">a serviço</em> do encontro.</h2>
          </div>
          <p className="md:col-span-7 text-lg text-muted-foreground leading-relaxed">
            Nenhuma metodologia é solução pronta. O método existe para sustentar a relação entre quem ensina e quem aprende — nunca para substituí-la. Toda formação que conduzo parte do contexto da escola, do professor e dos estudantes.
          </p>
        </div>
      </PageShell>
    </SiteLayout>
  );
}

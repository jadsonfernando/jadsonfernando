import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageShell } from "@/components/SiteLayout";
import { ArrowRight, BookOpen, Repeat, Quote, Route as RouteIcon, Eye } from "lucide-react";
import coverRepeticao from "@/assets/livro-metodologia-da-repeticao.png";
import coverStorytelling from "@/assets/livro-storytelling.png";
import coverMetodos from "@/assets/livro-metodos-e-processos.png";
import coverBrinde from "@/assets/livro-um-brinde-a-mudanca.png";

export const Route = createFileRoute("/store")({
  head: () => ({
    meta: [
      { title: "Store — Jadson Fernando" },
      { name: "description", content: "As obras do Prof. Jadson Fernando Langkammer: Metodologia da Repetição, Métodos e Processos, Storytelling e Um brinde à mudança." },
      { property: "og:title", content: "Store — livros de Jadson Fernando Langkammer" },
      { property: "og:description", content: "Metodologia da Repetição, Métodos e Processos, Storytelling e Um brinde à mudança — garanta o seu exemplar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/store" }],
  }),
  component: Page,
});

const waLink = (msg: string) =>
  `https://wa.me/5533987138346?text=${encodeURIComponent(msg)}`;

const AUTOR = "Jadson Fernando O M Langkammer";

function CtaButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-3 border border-primary/40 bg-primary/10 text-primary px-8 py-3.5 text-xs uppercase tracking-[0.18em] font-medium hover:bg-primary hover:text-primary-foreground transition-colors glow-sky whitespace-nowrap"
    >
      {label}
      <ArrowRight size={16} />
    </a>
  );
}

function Page() {
  return (
    <SiteLayout>
      <PageShell
        kicker="07 — Store"
        title="Obras."
        lede="A coleção de livros do Prof. Jadson Fernando — método, mentalidade e prática para transformar rotina em resultado."
      >
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-8">
          {[
            {
              cover: coverRepeticao,
              vol: "01",
              alt: `Livro Metodologia da Repetição, de ${AUTOR}`,
              title: "METODOLOGIA DA REPETIÇÃO",
              subtitle: "",
              icon: Repeat,
              desc: "Grandes resultados raramente nascem de grandes acidentes: nascem de pequenas repetições bem orientadas. Uma leitura prática para estudantes, professores e profissionais que querem transformar disciplina em competência — e competência em carreira.",
              tags: "Repetição · Constância · Evolução",
              wa: "Olá, quero garantir o meu exemplar do livro METODOLOGIA DA REPETIÇÃO do Prof. Jadson Fernando.",
            },
            {
              cover: coverMetodos,
              vol: "02",
              alt: `Livro Métodos e Processos — Metodologias Ativas aplicada, de ${AUTOR}`,
              title: "MÉTODOS E PROCESSOS",
              subtitle: "Metodologias Ativas aplicada",
              icon: RouteIcon,
              desc: "Teoria sem método é apenas intenção. Aqui, o autor traduz sala de aula invertida, aprendizagem baseada em problemas, peer instruction e gamificação em processos claros, passo a passo — um guia nobre e prático para professores e gestores que querem tirar as metodologias ativas do discurso e colocar na prática.",
              tags: "Método · Processo · Prática",
              wa: "Olá, quero garantir o meu exemplar do livro MÉTODOS E PROCESSOS do Prof. Jadson Fernando.",
            },
            {
              cover: coverStorytelling,
              vol: "03",
              alt: `Livro Storytelling — 48 histórias para modelar a sua mente, de ${AUTOR}`,
              title: "STORYTELLING",
              subtitle: "48 histórias para modelar a sua mente",
              icon: Quote,
              desc: "Histórias não servem apenas para entreter: reprogramam. Neste livro, Jadson Fernando Langkammer reúne 48 narrativas curtas que desmontam crenças limitantes, ampliam o repertório e ensinam o leitor a enxergar sentido — e oportunidade — onde antes havia apenas rotina.",
              tags: "Repertório · Mentalidade · Narrativa",
              wa: "Olá, quero garantir o meu exemplar do livro STORYTELLING do Prof. Jadson Fernando.",
            },
            {
              cover: coverBrinde,
              vol: "04",
              alt: `Livro Um brinde à mudança — ressignificando processos, de ${AUTOR}`,
              title: "UM BRINDE À MUDANÇA",
              subtitle: "ressignificando processos",
              icon: Eye,
              desc: "A mudança raramente começa no mundo — começa no olhar. Nesta belíssima obra sobre mentalidade, Jadson Fernando Langkammer convida o leitor a brindar à própria transformação: enxergar os mesmos fatos por novos ângulos, processar as experiências com mais consciência e converter cada recomeço em vantagem.",
              tags: "Mentalidade · Perspectiva · Transformação",
              wa: "Olá, quero garantir o meu exemplar do livro UM BRINDE À MUDANÇA do Prof. Jadson Fernando.",
            },
          ].map((b) => (
            <article key={b.vol} className="group bg-card border border-border p-6 lg:p-7 flex flex-col hover:border-primary/60 transition-colors">
              <div className="relative">
                <div className="absolute -inset-2 border border-primary/30 translate-x-2 translate-y-2" />
                <img
                  src={b.cover}
                  alt={b.alt}
                  className="relative w-full border border-border"
                  width={1024}
                  height={1536}
                  loading="lazy"
                />
              </div>
              <div className="font-display text-xs tracking-wider text-primary mt-10">
                <span className="text-muted-foreground">{"{"}</span> volume {b.vol} <span className="text-muted-foreground">{"}"}</span>
              </div>
              <h3 className="font-display text-xl lg:text-2xl font-bold mt-4 text-foreground leading-tight">
                {b.title}
                {b.subtitle && (
                  <>
                    {" — "}
                    <span className="text-primary">{b.subtitle}</span>
                  </>
                )}
              </h3>
              <div className="text-sm text-muted-foreground mt-2">
                por <span className="text-foreground font-medium">{AUTOR}</span>
              </div>
              <p className="text-muted-foreground mt-4 leading-relaxed text-sm flex-1">{b.desc}</p>
              <div className="text-xs text-muted-foreground mt-6 flex items-center gap-2">
                <b.icon size={14} className="text-primary" />
                {b.tags}
              </div>
              <div className="mt-6">
                <CtaButton href={waLink(b.wa)} label="Quero o meu exemplar" />
              </div>
            </article>
          ))}
        </div>
      </PageShell>
    </SiteLayout>
  );
}

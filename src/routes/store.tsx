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
      { name: "description", content: "A coleção de livros do Prof. Jadson Fernando Langkammer: Metodologia da Repetição, Storytelling, Métodos e Processos e Um brinde à mudança." },
      { property: "og:title", content: "Store — livros de Jadson Fernando Langkammer" },
      { property: "og:description", content: "Metodologia da Repetição, Storytelling, Métodos e Processos e Um brinde à mudança — garanta o seu exemplar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/store" }],
  }),
  component: Page,
});

const waLink = (msg: string) =>
  `https://wa.me/5533987138346?text=${encodeURIComponent(msg)}`;

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
        title="Biblioteca."
        lede="A coleção de livros do Prof. Jadson Fernando — método, mentalidade e prática para transformar rotina em resultado."
      >
        {/* Livro 1 — destaque */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-3 border border-primary/40 translate-x-3 translate-y-3" />
            <img
              src={coverRepeticao}
              alt="Livro Metodologia da Repetição — o poder da metodologia da repetição, de Jadson Fernando Langkammer"
              className="w-full border border-border"
              width={1024}
              height={1536}
              loading="eager"
            />
            <div className="absolute -bottom-5 -left-5 bg-card border border-border px-5 py-4 glow-sky">
              <div className="font-display text-[10px] text-primary">{"{ volume: \"01\" }"}</div>
              <div className="text-xs text-muted-foreground mt-1">Repetição · Constância · Evolução</div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="font-display text-xs tracking-wider text-muted-foreground">
              <span className="text-primary">{"{"}</span> volume 01 <span className="text-primary">{"}"}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              METODOLOGIA DA REPETIÇÃO — <span className="text-primary">o poder da metodologia da repetição</span>
            </h2>
            <div className="text-sm text-muted-foreground">
              por <span className="text-foreground font-medium">Jadson F O M Langkammer</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Neste livro, Jadson Fernando Langkammer mostra que grandes resultados raramente nascem de
              grandes acidentes: nascem de pequenas repetições bem orientadas. Uma leitura prática para
              estudantes, professores e profissionais que querem transformar disciplina em competência —
              e competência em carreira.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Repeat,
                  t: "A metodologia da repetição",
                  d: "Por que repetir não é decoreba: é como o cérebro consolida competências e transforma prática em maestria.",
                },
                {
                  icon: BookOpen,
                  t: "Da rotina ao resultado",
                  d: "Processo, constância e mentalidade aplicados à aprendizagem, à carreira e ao desenvolvimento pessoal.",
                },
              ].map((p) => (
                <div key={p.t} className="bg-card border border-border p-7">
                  <div className="inline-flex items-center justify-center w-11 h-11 border border-primary/40 bg-primary/10 text-primary">
                    <p.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-bold mt-4 text-foreground">{p.t}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>

            <div className="border border-primary/30 bg-primary/5 p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="flex-1">
                <div className="font-display text-[11px] uppercase tracking-[0.2em] text-primary">garanta o seu exemplar</div>
                <p className="text-muted-foreground text-sm mt-2">
                  Fale com a minha assistente, reserve o seu e combine o envio.
                </p>
              </div>
              <CtaButton
                href={waLink("Olá, quero garantir o meu exemplar do livro METODOLOGIA DA REPETIÇÃO do Prof. Jadson Fernando.")}
                label="Quero o meu exemplar"
              />
            </div>
          </div>
        </div>

        {/* Livros 2, 3 e 4 */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-12 mt-24">
          {[
            {
              cover: coverStorytelling,
              vol: "02",
              alt: "Livro Storytelling — 48 histórias para transformar a sua mentalidade, de Jadson Fernando Langkammer",
              title: "STORYTELLING",
              subtitle: "48 histórias para transformar a sua mentalidade",
              icon: Quote,
              desc: "Histórias não servem apenas para entreter: reprogramam. Neste livro, Jadson Fernando Langkammer reúne 48 narrativas curtas que desmontam crenças limitantes, ampliam o repertório e ensinam o leitor a enxergar sentido — e oportunidade — onde antes havia apenas rotina.",
              tags: "Repertório · Mentalidade · Narrativa",
              wa: "Olá, quero garantir o meu exemplar do livro STORYTELLING do Prof. Jadson Fernando.",
            },
            {
              cover: coverMetodos,
              vol: "03",
              alt: "Livro Métodos e Processos — como aplicar metodologias ativas, de Jadson Fernando Langkammer",
              title: "MÉTODOS E PROCESSOS",
              subtitle: "como aplicar metodologias ativas",
              icon: RouteIcon,
              desc: "Teoria sem método é apenas intenção. Aqui, o autor traduz sala de aula invertida, aprendizagem baseada em problemas, peer instruction e gamificação em processos claros, passo a passo — um guia nobre e prático para professores e gestores que querem tirar as metodologias ativas do discurso e colocar na prática.",
              tags: "Método · Processo · Prática",
              wa: "Olá, quero garantir o meu exemplar do livro MÉTODOS E PROCESSOS do Prof. Jadson Fernando.",
            },
            {
              cover: coverBrinde,
              vol: "04",
              alt: "Livro Um brinde à mudança — diferentes formas de enxergar e processar o mundo, de Jadson Fernando Langkammer",
              title: "UM BRINDE À MUDANÇA",
              subtitle: "diferentes formas de enxergar e processar o mundo",
              icon: Eye,
              desc: "A mudança raramente começa no mundo — começa no olhar. Nesta belíssima obra sobre mentalidade, Jadson Fernando Langkammer convida o leitor a brindar à própria transformação: enxergar os mesmos fatos por novos ângulos, processar as experiências com mais consciência e converter cada recomeço em vantagem.",
              tags: "Mentalidade · Perspectiva · Transformação",
              wa: "Olá, quero garantir o meu exemplar do livro UM BRINDE À MUDANÇA do Prof. Jadson Fernando.",
            },
          ].map((b) => (
            <div key={b.vol} className="group bg-card border border-border p-7 lg:p-9 flex flex-col hover:border-primary/60 transition-colors">
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
              <h3 className="font-display text-2xl lg:text-3xl font-bold mt-4 text-foreground leading-tight">
                {b.title} — <span className="text-primary">{b.subtitle}</span>
              </h3>
              <div className="text-sm text-muted-foreground mt-2">
                por <span className="text-foreground font-medium">Jadson F O M Langkammer</span>
              </div>
              <p className="text-muted-foreground mt-4 leading-relaxed text-sm lg:text-base flex-1">{b.desc}</p>
              <div className="text-xs text-muted-foreground mt-6 flex items-center gap-2">
                <b.icon size={14} className="text-primary" />
                {b.tags}
              </div>
              <div className="mt-6">
                <CtaButton href={waLink(b.wa)} label="Quero o meu exemplar" />
              </div>
            </div>
          ))}
        </div>
      </PageShell>
    </SiteLayout>
  );
}

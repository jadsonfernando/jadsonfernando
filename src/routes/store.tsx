import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageShell } from "@/components/SiteLayout";
import { BookOpen, Repeat, ArrowRight } from "lucide-react";
import bookCover from "@/assets/livro-tudo-e-treino.png";

export const Route = createFileRoute("/store")({
  head: () => ({
    meta: [
      { title: "Store — Jadson Fernando" },
      { name: "description", content: "TUDO É TREINO — o poder da metodologia da repetição, de Jadson Fernando Langkammer." },
      { property: "og:title", content: "Store — Tudo é Treino, de Jadson Fernando Langkammer" },
      { property: "og:description", content: "O poder da metodologia da repetição — garanta o seu exemplar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/store" }],
  }),
  component: Page,
});

const pilares = [
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
];

function Page() {
  return (
    <SiteLayout>
      <PageShell
        kicker="05 — Store"
        title="Tudo é treino."
        lede="O poder da metodologia da repetição — o livro em que a rotina disciplinada encontra a evolução real."
      >
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Livro */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-3 border border-primary/40 translate-x-3 translate-y-3" />
            <img
              src={bookCover}
              alt="Livro Tudo é Treino — o poder da metodologia da repetição, de Jadson Fernando Langkammer"
              className="w-full border border-border"
              width={1024}
              height={1024}
              loading="eager"
            />
            <div className="absolute -bottom-5 -left-5 bg-card border border-border px-5 py-4 glow-sky">
              <div className="font-display text-[10px] text-primary">{"{ titulo: \"tudo_e_treino\" }"}</div>
              <div className="text-xs text-muted-foreground mt-1">Repetição · Constância · Evolução</div>
            </div>
          </div>

          {/* Produto */}
          <div className="lg:col-span-7 space-y-6">
            <div className="font-display text-xs tracking-wider text-muted-foreground">
              <span className="text-primary">{"{"}</span> lancamento {"}"}
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              TUDO É TREINO — <span className="text-primary">o poder da metodologia da repetição</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Neste livro, Jadson Fernando Langkammer mostra que grandes resultados raramente nascem de
              grandes acidentes: nascem de pequenas repetições bem orientadas. Uma leitura prática para
              estudantes, professores e profissionais que querem transformar disciplina em competência —
              e competência em carreira.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {pilares.map((p) => (
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
              <a
                href="https://wa.me/5533987138346?text=Ol%C3%A1%2C%20quero%20garantir%20o%20meu%20exemplar%20do%20livro%20TUDO%20%C3%89%20TREINO%20do%20Prof.%20Jadson%20Fernando."
                className="inline-flex items-center justify-center gap-3 border border-primary/40 bg-primary/10 text-primary px-8 py-3.5 text-xs uppercase tracking-[0.18em] font-medium hover:bg-primary hover:text-primary-foreground transition-colors glow-sky whitespace-nowrap"
              >
                QUERO O MEU EXEMPLAR
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </PageShell>
    </SiteLayout>
  );
}

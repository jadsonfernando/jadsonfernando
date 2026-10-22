import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageShell } from "@/components/SiteLayout";
import { ArrowRight, Route as RouteIcon, CheckCircle2, Zap, Users, Clock } from "lucide-react";
import coverMetodos from "@/assets/livro-metodos-e-processos.png";

export const Route = createFileRoute("/store")({
  head: () => ({
    meta: [
      { title: "Store — Jadson Fernando" },
      { name: "description", content: "Métodos e Processos — Metodologias Ativas aplicada, do Prof. Jadson Fernando Langkammer. O guia prático para tirar as metodologias ativas do discurso e colocar na sala de aula." },
      { property: "og:title", content: "Store — Métodos e Processos, de Jadson Fernando Langkammer" },
      { property: "og:description", content: "Teoria sem método é apenas intenção. Garanta o seu exemplar e transforme sua prática docente." },
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

const beneficios = [
  { icon: Zap, text: "Passo a passo claro: cada metodologia vira processo, do planejamento à devolutiva." },
  { icon: Users, text: "Aluno no centro: sala de aula invertida, PBL, peer instruction e gamificação na prática real." },
  { icon: CheckCircle2, text: "Pronto para a sala: exemplos, sequências e critérios que funcionam na segunda-feira seguinte." },
  { icon: Clock, text: "Resultado que fica: mais engajamento, mais protagonismo e avaliação que ensina." },
];

function Page() {
  return (
    <SiteLayout>
      <PageShell
        kicker="07 — Store"
        title="Métodos e Processos."
        lede="Um livro para quem cansou de teoria bonita e quer transformar a aula — hoje."
      >
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl">
          {/* CAPA */}
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-2 border border-primary/30 translate-x-2 translate-y-2" />
              <img
                src={coverMetodos}
                alt={`Livro Métodos e Processos — Metodologias Ativas aplicada, de ${AUTOR}`}
                className="relative w-full border border-border"
                width={1024}
                height={1536}
                loading="lazy"
              />
            </div>
          </div>

          {/* VENDA */}
          <div className="md:col-span-7">
            <div className="font-display text-xs tracking-wider text-primary">
              <span className="text-muted-foreground">{"{"}</span> volume 01 <span className="text-muted-foreground">{"}"}</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mt-4 text-foreground leading-tight">
              MÉTODOS E PROCESSOS
              {" — "}
              <span className="text-primary">Metodologias Ativas aplicada</span>
            </h2>
            <div className="text-sm text-muted-foreground mt-3">
              por <span className="text-foreground font-medium">{AUTOR}</span>
            </div>
            <p className="text-muted-foreground mt-6 leading-relaxed text-base md:text-lg text-pretty">
              <strong className="text-foreground">Teoria sem método é apenas intenção.</strong> Neste livro, o autor
              traduz sala de aula invertida, aprendizagem baseada em problemas, peer instruction e gamificação em
              <strong className="text-foreground"> processos claros, passo a passo</strong> — um guia nobre e prático
              para professores e gestores que querem tirar as metodologias ativas do discurso e colocar na prática.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {beneficios.map((b) => (
                <div key={b.text} className="flex gap-3 items-start bg-card border border-border p-4">
                  <b.icon size={18} className="text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>

            <div className="text-xs text-muted-foreground mt-8 flex items-center gap-2">
              <RouteIcon size={14} className="text-primary" />
              Método · Processo · Prática
            </div>

            <div className="mt-8">
              <a
                href={waLink("Olá, Prof. Jadson! Quero comprar o seu livro MÉTODOS E PROCESSOS — Metodologias Ativas aplicada. Como faço para garantir o meu exemplar?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-accent hover:text-accent-foreground transition-colors glow-sky whitespace-nowrap"
              >
                Comprar meu livro
                <ArrowRight size={16} />
              </a>
              <p className="text-xs text-muted-foreground mt-4">
                Atendimento direto com o autor — clique e finalize no WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </PageShell>
    </SiteLayout>
  );
}

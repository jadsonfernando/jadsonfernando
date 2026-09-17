import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageShell } from "@/components/SiteLayout";
import { Users, Shuffle, Briefcase, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/comunidade")({
  head: () => ({
    meta: [
      { title: "Comunidade — Jadson Fernando" },
      { name: "description", content: "Espaço para educadores que conectam disciplinas, trocam práticas e construem carreiras de impacto." },
      { property: "og:title", content: "Comunidade de Educadores Multipotenciais — Jadson Fernando" },
      { property: "og:description", content: "Junte-se a educadores que transformam a sala de aula em laboratório de possibilidades." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/comunidade" }],
  }),
  component: Page,
});

const cards = [
  {
    icon: Shuffle,
    title: "Multidisciplinaridade",
    body: "Quebre barreiras entre áreas do saber. Aqui a tecnologia, as ciências e as humanidades se encontram para criar aprendizagens significativas.",
  },
  {
    icon: Users,
    title: "Troca Prática",
    body: "Compartilhe estratégias, recursos e experiências reais de sala de aula. Aprenda com quem está na prática todos os dias.",
  },
  {
    icon: Briefcase,
    title: "Carreira de Impacto",
    body: "Desenvolva competências que vão além da escola: liderança, inovação, comunicação e projetos que abrem novos caminhos profissionais.",
  },
];

function Page() {
  return (
    <SiteLayout>
      <PageShell
        kicker="Comunidade"
        title="CEM >> Comunidade de Educadores Multipotenciais"
        lede="Junte-se a educadores que transformam a sala de aula em laboratório de possibilidades."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group bg-card border border-border p-8 hover:border-primary/60 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 border border-primary/40 bg-primary/10 text-primary mb-6">
                <card.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl text-foreground">{card.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed text-sm">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 border border-primary/30 bg-primary/5 p-10 md:p-14 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-foreground">
            QUERO SER PARTE
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Entre para o ecossistema e comece a interagir com outros pares [educadores multipotenciais].
          </p>
          <a
            href="https://chat.whatsapp.com/CwvGn9kLCS046fhd5vc2D0"
            className="inline-flex items-center gap-3 mt-8 border border-primary/40 bg-primary/10 text-primary px-8 py-3.5 text-xs uppercase tracking-[0.18em] font-medium hover:bg-primary hover:text-primary-foreground transition-colors glow-sky"
          >
            ENTRAR NA COMUNIDADE
            <ArrowRight size={16} />
          </a>
        </div>
      </PageShell>
    </SiteLayout>
  );
}

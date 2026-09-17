import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageShell } from "@/components/SiteLayout";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Jadson Fernando" },
      { name: "description", content: "Projetos educacionais, pesquisas e iniciativas em tecnologia, inovação e formação docente." },
      { property: "og:title", content: "Projetos — Jadson Fernando" },
      { property: "og:description", content: "Projetos e iniciativas em educação e tecnologia." },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
  component: Page,
});

const projetos = [
  { y: "2026", t: "Soft Skills", k: "Formação", d: "O talento contrata, o comportamento promove: uma experiência imersiva que transforma comunicação, empatia e resiliência em vantagem competitiva real — a habilidade que nenhum algoritmo substitui." },
  { y: "2025", t: "Trilha Carreira em Tech", k: "Mentoria", d: "Programa de mentoria coletiva para estudantes em transição da escola para o mercado de tecnologia." },
  { y: "2024", t: "Avaliar para Ensinar", k: "Formação docente", d: "Curso de formação continuada em avaliação formativa para redes públicas e privadas." },
  { y: "2024", t: "Sala Invertida·Br", k: "Pesquisa", d: "Estudo de caso sobre adoção de sala de aula invertida em escolas brasileiras de Ensino Médio." },
  { y: "2023", t: "Hackathon Estudantil", k: "Evento", d: "Organização e curadoria pedagógica de hackathon multidisciplinar para 300+ alunos." },
  { y: "2023", t: "Diário de Bordo Digital", k: "Ferramenta", d: "Modelo de devolutiva contínua para acompanhamento individual do percurso do estudante." },
  { y: "2022", t: "Podcast Aula Aberta", k: "Mídia", d: "Conversas com educadores sobre os bastidores da prática pedagógica contemporânea." },
  { y: "2021", t: "Currículo Exponencial", k: "Formação", d: "Programa de construção de currículo e marca pessoal. Superação do modelo tradicional de currículo. Capacitou estudantes a estruturar suas trajetórias a partir do protagonismo, mapeando competências técnicas e soft skills para criar portfólios de alto impacto alinhados às demandas do mercado de tecnologia e inovação." },
];

function Page() {
  return (
    <SiteLayout>
      <PageShell
        kicker="05 — Projetos"
        title="Ideias que viraram prática."
        lede="Uma seleção de projetos, formações e pesquisas em educação, tecnologia e desenvolvimento pessoal."
      >
        <div className="border-t border-border">
          {projetos.map((p) => (
            <article key={p.t} className="grid md:grid-cols-12 gap-6 py-10 border-b border-border items-baseline group hover:bg-card -mx-4 px-4 transition-colors">
              <div className="md:col-span-1 font-display text-2xl text-accent">{p.y}</div>
              <div className="md:col-span-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{p.k}</div>
              <h3 className="md:col-span-5 font-display text-3xl md:text-4xl text-foreground">{p.t}</h3>
              <p className="md:col-span-4 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </article>
          ))}
        </div>
      </PageShell>
    </SiteLayout>
  );
}

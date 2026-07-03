import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageShell } from "@/components/SiteLayout";

export const Route = createFileRoute("/formacao-professores")({
  head: () => ({
    meta: [
      { title: "Formação Professores — Jadson Fernando" },
      { name: "description", content: "Formações, oficinas e trilhas de desenvolvimento docente com foco em metodologias ativas, avaliação formativa e IA na educação." },
      { property: "og:title", content: "Formação Professores — Jadson Fernando" },
      { property: "og:description", content: "Trilhas de desenvolvimento docente com metodologias ativas, avaliação formativa e IA na educação." },
    ],
  }),
  component: FormacaoProfessores,
});

const trilhas = [
  {
    n: "01",
    title: "IA na Educação",
    desc: "Do letramento em IA ao uso pedagógico do Gemini em planejamento, avaliação e produção de materiais autorais.",
  },
  {
    n: "02",
    title: "Metodologias Ativas",
    desc: "Sala de aula invertida, aprendizagem baseada em projetos e problemas, gamificação e rotação por estações.",
  },
  {
    n: "03",
    title: "Avaliação Formativa",
    desc: "Rubricas, devolutivas descritivas, evidências de aprendizagem e ciclos curtos de feedback com apoio de tecnologia.",
  },
  {
    n: "04",
    title: "Google Workspace for Education",
    desc: "Fluxos com Classroom, Documentos, Formulários e complementos para diminuir tarefas operacionais e ampliar mediação.",
  },
];

const formatos = [
  { title: "Formação continuada", desc: "Encontros ao longo do semestre com estudo, prática em sala e devolutivas." },
  { title: "Oficinas intensivas", desc: "Encontros de 3h a 8h com produto pedagógico ao final." },
  { title: "Palestras de abertura", desc: "Provocações para jornadas pedagógicas e semanas de planejamento." },
  { title: "Mentoria de equipe", desc: "Acompanhamento de coordenadores e lideranças escolares em ciclos mensais." },
];

function FormacaoProfessores() {
  return (
    <SiteLayout>
    <PageShell
      kicker="Edição 07 · Formação"
      title="Formação de Professores."
      lede="Trilhas desenhadas para que professores experimentem, adaptem e sustentem novas práticas — não apenas conheçam ferramentas."
    >
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
        {trilhas.map((t) => (
          <div key={t.n} className="border-t border-border pt-6">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{t.n}</div>
            <h3 className="font-display text-3xl mt-3">{t.title}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <div className="text-xs uppercase tracking-[0.25em] text-accent-foreground/80">
          <span className="inline-block w-8 h-px bg-accent align-middle mr-3" />
          Formatos
        </div>
        <h2 className="font-display text-4xl md:text-5xl mt-6 max-w-2xl text-balance">
          Do encontro pontual à jornada continuada.
        </h2>
        <div className="mt-10 grid md:grid-cols-2 gap-x-16 gap-y-10">
          {formatos.map((f) => (
            <div key={f.title}>
              <h3 className="font-display text-2xl">{f.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
    </SiteLayout>
  );
}

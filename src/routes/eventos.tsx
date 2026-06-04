import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageShell } from "@/components/SiteLayout";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos — Jadson Fernando" },
      { name: "description", content: "Agenda de palestras, formações e eventos do Prof. Jadson Fernando." },
      { property: "og:title", content: "Eventos — Jadson Fernando" },
      { property: "og:description", content: "Próximas palestras e formações." },
    ],
    links: [{ rel: "canonical", href: "/eventos" }],
  }),
  component: Page,
});

const eventos = [
  { d: "10.06", m: "Jun 2026", t: "Gemini Summit 2026", l: "Google · Online", tag: "Summit" },
  { d: "13.06", m: "Jun 2026", t: "Seminário de Educação Empreendedora", l: "Escola do Futuro", tag: "Seminário" },
  { d: "16.06", m: "Jun 2026", t: "IA na Educação — Formação de Professores", l: "EEAB", tag: "Formação" },
  { d: "18.06", m: "Jun 2026", t: "Gemini Summit 2026", l: "Google · Online", tag: "Summit" },
  { d: "22.06", m: "Jun 2026", t: "Gemini Summit 2026", l: "Google · Online", tag: "Summit" },
  { d: "24.06", m: "Jun 2026", t: "IA na Educação — Formação de Professores", l: "EEAB", tag: "Formação" },
];

function Page() {
  return (
    <SiteLayout>
      <PageShell
        kicker="02 — Eventos"
        title="Onde estarei. Onde estive."
        lede="Palestras, formações e encontros em escolas, universidades e eventos de inovação. Quer me ter no seu evento? Mande um convite."
      >
        <div className="border-t border-border">
          {eventos.map((e) => (
            <article key={e.t} className="grid md:grid-cols-12 gap-6 py-8 border-b border-border items-baseline group hover:bg-card -mx-4 px-4 transition-colors">
              <div className="md:col-span-2">
                <div className="font-display text-4xl">{e.d}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{e.m}</div>
              </div>
              <div className="md:col-span-7">
                <div className="text-[10px] uppercase tracking-[0.3em] text-accent-foreground/70">{e.tag}</div>
                <h3 className="font-display text-2xl md:text-3xl mt-1">{e.t}</h3>
              </div>
              <div className="md:col-span-3 text-sm text-muted-foreground md:text-right">{e.l}</div>
            </article>
          ))}
        </div>
      </PageShell>
    </SiteLayout>
  );
}

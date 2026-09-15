import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageShell } from "@/components/SiteLayout";


export const Route = createFileRoute("/convites")({
  head: () => ({
    meta: [
      { title: "Convites — Jadson Fernando" },
      { name: "description", content: "Convide o Prof. Jadson Fernando para palestras, formações, mentorias e bancas." },
      { property: "og:title", content: "Convites — Jadson Fernando" },
      { property: "og:description", content: "Contrate palestras, formações e mentorias sob medida." },
    ],
    links: [{ rel: "canonical", href: "/convites" }],
  }),
  component: Page,
});

const formatos = [
  { t: "Palestra", d: "Tecnologia, inovação e carreira. 45–90 min, presencial ou online.", n: "01" },
  { t: "Formação", d: "Metodologias ativas e avaliação formativa para equipes docentes.", n: "02" },
  { t: "Mentoria", d: "Acompanhamento individual ou coletivo para professores e estudantes.", n: "03" },
  { t: "Curadoria", d: "Curadoria pedagógica de eventos, hackathons e trilhas formativas.", n: "04" },
];

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageShell
        kicker="06 — Convites"
        title="Contrate uma experiência transformadora."
        lede="Escolha o formato e conte o contexto — eu cuido do resto: conteúdo sob medida, entrega impecável e impacto que fica. Respondo pessoalmente em até dois dias úteis."
      >
        <div className="grid md:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* FORMATOS */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Formatos</div>
            {formatos.map((f) => (
              <div key={f.t} className="flex gap-5 border-b border-border pb-5">
                <div className="font-display text-3xl text-accent shrink-0">{f.n}</div>
                <div className="min-w-0">
                  <div className="font-display text-2xl leading-tight text-foreground">{f.t}</div>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed text-pretty">{f.d}</p>
                </div>
              </div>
            ))}

          </div>

          {/* FORM */}
          <form
            className="md:col-span-7 bg-card p-8 lg:p-12 border border-border space-y-6 self-start"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            {sent ? (
              <div className="py-16 text-center">
                <div className="font-display text-4xl text-foreground">Obrigado.</div>
                <p className="text-muted-foreground mt-3">Seu convite chegou. Responderei em breve.</p>
              </div>
            ) : (
              <>
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Convite</div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Nome" name="nome" />
                  <Field label="Instituição" name="org" />
                  <Field label="E-mail" name="email" type="email" />
                  <Field label="Telefone / WhatsApp" name="tel" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Select label="Formato" name="formato" options={["Palestra", "Formação", "Mentoria", "Curadoria", "Outro"]} />
                  <Field label="Data prevista" name="data" type="date" />
                </div>
                <Field label="Sobre o evento" name="msg" textarea />
                <button className="w-full bg-foreground text-background py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition-colors">
                  Enviar convite →
                </button>
              </>
            )}
          </form>
        </div>
      </PageShell>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", textarea = false }: { label: string; name: string; type?: string; textarea?: boolean }) {
  const cls = "w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-base text-foreground placeholder:text-muted-foreground";
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} className={cls + " resize-none mt-1"} required />
      ) : (
        <input name={name} type={type} className={cls + " mt-1"} required />
      )}
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      <select name={name} className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 text-base mt-1 text-foreground" required>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

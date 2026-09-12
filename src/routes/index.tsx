import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jadson Fernando — Professor de Tecnologia" },
      { name: "description", content: "Sobre o Prof. Jadson Fernando: educação centrada no aluno, metodologias ativas e avaliação formativa." },
      { property: "og:title", content: "Jadson Fernando — Professor de Tecnologia" },
      { property: "og:description", content: "Educação centrada no aluno, metodologias ativas e avaliação formativa." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* HERO — broken grid: texto deslocado, foto sobreposta, stats flutuando */}
      <section className="relative overflow-hidden">
        {/* glow decorativo */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-20 lg:pt-28 pb-32 lg:pb-40 relative">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 relative z-10">
              <div className="font-display text-xs tracking-wider text-primary">
                <span className="text-muted-foreground">//</span> 01 — sobre mim
              </div>
              <h1 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] font-bold leading-[0.98] mt-8 text-balance">
                Ensinar é<br />
                <span className="text-primary text-glow">despertar_</span><br />
                não preencher.
              </h1>
              <p className="mt-10 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Sou <strong className="text-foreground font-medium">Jadson Fernando Langkammer</strong>, professor do núcleo de
                Ciência, Tecnologia e Inovação. Minha atuação na Educação Profissional e Tecnológica (EPT) é guiada por uma certeza:
                o aluno é o sujeito ativo da sua aprendizagem. À frente de projetos de multidesenvolvimento, crio caminhos práticos
                que preparam estudantes do crescimento pessoal à construção de carreiras de impacto.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/convites" className="bg-primary text-primary-foreground px-7 py-4 text-[11px] font-display uppercase tracking-[0.18em] hover:bg-accent hover:text-accent-foreground transition-colors glow-sky">
                  Convites para eventos
                </Link>
                <Link to="/metodologias-ativas" className="border border-border px-7 py-4 text-[11px] font-display uppercase tracking-[0.18em] text-foreground hover:border-primary hover:text-primary transition-colors">
                  Conhecer o método
                </Link>
              </div>
            </div>

            {/* Foto quebrando a coluna — sobrepõe o texto no desktop */}
            <div className="lg:col-span-5 relative lg:-ml-16 lg:mt-16 z-0">
              <div className="absolute -inset-3 border border-primary/40 translate-x-3 translate-y-3" />
              <img
                src="/jadson-sobre.jpg"
                alt="Prof. Jadson Fernando"
                className="w-full aspect-[3/4] object-cover grayscale-[0.2] contrast-[1.05]"
                loading="eager"
              />
              <div className="absolute -bottom-5 -left-5 bg-card border border-border px-5 py-4 glow-sky">
                <div className="font-display text-[10px] text-primary">{"{ status: \"online\" }"}</div>
                <div className="text-xs text-muted-foreground mt-1">Ciência · Tecnologia · Inovação</div>
              </div>
            </div>
          </div>

          {/* STATS — card deslocado, cruzando a dobra do hero */}
          <div className="relative lg:absolute lg:left-12 lg:right-12 lg:-bottom-0 mt-16 lg:mt-0 z-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border glow-sky">
              {[
                ["+20", "anos em sala de aula"],
                ["+80", "palestras realizadas"],
                ["+10K", "alunos impactados"],
                ["100%", "centrado no aluno"],
              ].map(([n, l]) => (
                <div key={l} className="bg-card p-6 lg:p-8">
                  <div className="font-display text-4xl md:text-5xl font-bold text-primary">{n}</div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-2">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILARES — grid quebrado com blocos deslocados */}
      <section className="border-t border-border bg-background lg:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4 md:sticky md:top-32 self-start">
              <div className="font-display text-xs tracking-wider text-primary">
                <span className="text-muted-foreground">//</span> 02 — pilares
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-6 leading-tight">
                Quatro princípios<br/>que orientam<br/><span className="text-primary">o trabalho.</span>
              </h2>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              {[
                { n: "01", t: "Aluno no centro", d: "Cada decisão pedagógica parte do contexto, do interesse e do ritmo de quem aprende.", off: "" },
                { n: "02", t: "Metodologias ativas", d: "Sala de aula invertida, PBL, peer instruction e gamificação aplicadas ao cotidiano.", off: "sm:mt-12" },
                { n: "03", t: "Avaliação formativa", d: "Avaliar para ensinar — feedback contínuo, devolutivas e rubricas transparentes.", off: "sm:-mt-12" },
                { n: "04", t: "Tecnologia & carreira", d: "Inovação aplicada e desenvolvimento pessoal como eixos da formação.", off: "" },
              ].map((p) => (
                <div key={p.n} className={`group bg-card border border-border p-8 hover:border-primary/60 transition-colors ${p.off}`}>
                  <div className="font-display text-sm text-primary">{`[${p.n}]`}</div>
                  <h3 className="font-display text-xl font-bold mt-4 text-foreground">{p.t}</h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{p.d}</p>
                  <div className="mt-6 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="border-y border-border bg-card relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto max-w-5xl px-6 lg:px-12 py-24 lg:py-32 relative">
          <div className="font-display text-xs tracking-wider text-primary">
            <span className="text-muted-foreground">//</span> 03 — manifesto
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-6 leading-[1.05] text-balance">
            O que <span className="text-primary">me move_</span>
          </h2>
          <div className="mt-12 space-y-7 text-lg md:text-xl leading-relaxed text-foreground/90 max-w-3xl">
            <p>
              Olhando para trás, percebo que a minha jornada nunca foi apenas sobre computadores,
              códigos ou sistemas; sempre foi sobre <strong className="font-medium">pessoas e transformações</strong>.
              Da monitoria de lógica na FATEC à coordenação de cursos técnicos e superior,
              passando por salas de institutos e universidades, meu propósito central sempre foi
              o mesmo: traduzir a complexidade da tecnologia para abrir portas de oportunidade real.
            </p>
            <p>
              Não acredito em uma educação estática. Por isso, <em>metodologias ativas</em> continuam
              sendo o coração da minha prática pedagógica, mas hoje elas ganharam superpoderes:
              associo-as diretamente ao uso das <strong className="font-medium">Inteligências Artificiais</strong>.
              Como especialista em EPT e multiplicador da Google Gemini Academy, minha missão atual
              é usar ferramentas de tecnologia e inovação para potencializar o protagonismo do aluno,
              personalizando o aprendizado e preparando professores e estudantes para liderarem a
              maior revolução tecnológica da nossa era.
            </p>
            <p>
              A tecnologia avança de forma exponencial, mais o coração da transformação continua
              sendo humano. E eu sigo aqui, na linha de frente, pronto para o próximo código,
              para a próxima aula e para a próxima revolução.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 lg:px-12 py-24 text-center">
          <div className="font-display text-2xl md:text-4xl font-bold leading-snug text-balance">
            “A boa aula não é a que cabe no plano —<br className="hidden md:block"/> é a que <span className="text-primary">cabe no aluno</span>.”
          </div>
          <div className="font-display text-xs tracking-wider text-muted-foreground mt-8">— jadson.fernando</div>
        </div>
      </section>

      {/* CTA grid */}
      <section className="bg-background pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { to: "/eventos", k: "agenda", t: "Eventos" },
              { to: "/projetos", k: "trabalhos", t: "Projetos" },
              { to: "/convites", k: "fale comigo", t: "Convites" },
            ].map((c) => (
              <Link key={c.to} to={c.to} className="group bg-card border border-border p-10 hover:border-primary hover:bg-primary/5 transition-colors">
                <div className="font-display text-xs tracking-wider text-muted-foreground group-hover:text-primary">
                  <span className="text-muted-foreground">//</span> {c.k}
                </div>
                <div className="font-display text-3xl font-bold mt-4 flex items-baseline justify-between text-foreground">
                  {c.t} <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

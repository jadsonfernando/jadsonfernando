import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import jadsonAsset from "@/assets/jadson.jpg.asset.json";

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
      {/* HERO — full-width band */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-3">
                <span className="w-10 h-px bg-accent" /> Edição 01 — Sobre mim
              </div>
              <h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.88] mt-8 text-balance">
                Ensinar é<br />
                <span className="italic text-accent">despertar</span> —<br />
                não preencher.
              </h1>
              <p className="mt-10 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Sou <strong className="text-foreground font-medium">Jadson Fernando</strong>, professor de tecnologia
                e apaixonado por pesquisa. Minha metodologia coloca o aluno no centro —
                do desenvolvimento pessoal à carreira. Sou especialista em EPT e lidero um
                <strong className="text-foreground font-medium"> projeto de multidesenvolvimento</strong>.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/convites" className="bg-foreground text-background px-7 py-4 text-[11px] uppercase tracking-[0.18em] hover:bg-accent hover:text-accent-foreground transition-colors">
                  Convites para eventos
                </Link>
                <Link to="/metodologias-ativas" className="border border-foreground px-7 py-4 text-[11px] uppercase tracking-[0.18em] hover:bg-foreground hover:text-background transition-colors">
                  Conhecer o método
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-3 border border-accent translate-x-3 translate-y-3 -z-10" />
              <img
                src={jadsonAsset.url}
                alt="Prof. Jadson Fernando"
                className="w-full aspect-[3/4] object-cover grayscale-[0.15]"
                loading="eager"
              />
              <div className="absolute -left-2 top-6 -rotate-90 origin-top-left text-[10px] uppercase tracking-[0.4em] text-muted-foreground hidden md:block">
                Retrato · 2025
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS — full-width band */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["+20", "anos em sala de aula"],
            ["+80", "palestras realizadas"],
            ["+10K", "alunos impactados"],
            ["100%", "centrado no aluno"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-5xl md:text-6xl text-foreground">{n}</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-2">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PILARES — full-width band */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">02 — Pilares</div>
              <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
                Quatro princípios<br/>que orientam<br/><em className="text-accent">o trabalho.</em>
              </h2>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-px bg-border border border-border">
              {[
                { n: "I", t: "Aluno no centro", d: "Cada decisão pedagógica parte do contexto, do interesse e do ritmo de quem aprende." },
                { n: "II", t: "Metodologias ativas", d: "Sala de aula invertida, PBL, peer instruction e gamificação aplicadas ao cotidiano." },
                { n: "III", t: "Avaliação formativa", d: "Avaliar para ensinar — feedback contínuo, devolutivas e rubricas transparentes." },
                { n: "IV", t: "Tecnologia & carreira", d: "Inovação aplicada e desenvolvimento pessoal como eixos da formação." },
              ].map((p) => (
                <div key={p.n} className="bg-card p-8 hover:bg-secondary transition-colors">
                  <div className="font-display text-3xl text-accent">{p.n}</div>
                  <h3 className="font-display text-2xl mt-3 text-foreground">{p.t}</h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO — full-width band */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 lg:px-12 py-24 lg:py-32">
          <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-3">
            <span className="w-10 h-px bg-accent" /> 03 — Manifesto
          </div>
          <h2 className="font-display text-4xl md:text-6xl mt-6 leading-[0.95] text-balance">
            O que <em className="text-accent">me move.</em>
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

      {/* QUOTE — full-width band */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 lg:px-12 py-24 text-center">
          <div className="font-display text-3xl md:text-5xl italic leading-snug text-balance">
            “A boa aula não é a que cabe no plano —<br className="hidden md:block"/> é a que cabe no aluno.”
          </div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mt-8">Jadson Fernando</div>
        </div>
      </section>

      {/* CTA grid — full-width band */}
      <section className="bg-background pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {[
              { to: "/eventos", k: "Agenda", t: "Eventos" },
              { to: "/projetos", k: "Trabalhos", t: "Projetos" },
              { to: "/convites", k: "Fale comigo", t: "Convites" },
            ].map((c) => (
              <Link key={c.to} to={c.to} className="group bg-card p-10 hover:bg-foreground hover:text-background transition-colors">
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground group-hover:text-background/60">{c.k}</div>
                <div className="font-display text-4xl mt-4 flex items-baseline justify-between text-foreground group-hover:text-background">
                  {c.t} <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

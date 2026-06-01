import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/rheviva-logo.png";
import founder from "@/assets/founder.jpg";
import { WhatsappFloat } from "@/components/WhatsappFloat";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--cream)]/85 backdrop-blur-md border-b border-[color:var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between h-24">
        <a href="#top" className="flex items-center" aria-label="Rheviva">
          <img
            src={logo}
            alt="Rheviva — Saúde Mental e Gestão de Riscos Psicossociais"
            className="h-16 md:h-[72px] w-auto object-contain select-none"
            draggable={false}
          />
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="hover-gold text-[12px] tracking-[0.18em] uppercase text-[color:var(--ink)]/80 hover:text-[color:var(--primary)] transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-3 px-6 py-3 bg-[color:var(--primary)] text-[color:var(--primary-foreground)] text-[11px] tracking-[0.22em] uppercase font-medium hover:bg-[color:var(--ink)] transition-colors duration-500"
        >
          Agendar reunião
          <span className="h-px w-6 bg-[color:var(--gold)]" />
        </a>
      </div>
    </header>
  );
}

function CTAButton({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "gold";
}) {
  const base =
    "inline-flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.22em] uppercase font-medium transition-all duration-500 group";
  const styles = {
    primary:
      "bg-[color:var(--primary)] text-[color:var(--primary-foreground)] hover:bg-[color:var(--ink)]",
    ghost:
      "border border-[color:var(--ink)]/30 text-[color:var(--ink)] hover:border-[color:var(--gold)] hover:text-[color:var(--primary)]",
    gold:
      "bg-[color:var(--gold)] text-[color:var(--ink)] hover:bg-[color:var(--gold-soft)]",
  }[variant];
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles}`}
    >
      {children}
      <span
        className={`h-px w-6 transition-all duration-500 group-hover:w-10 ${
          variant === "gold" ? "bg-[color:var(--ink)]" : "bg-[color:var(--gold)]"
        }`}
      />
    </a>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden">
      <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 reveal">
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px w-12 bg-[color:var(--gold)]" />
            <span className="eyebrow">RHEVIVA · Integração Humana</span>
          </div>
          <div className="text-[11px] tracking-[0.28em] uppercase text-[color:var(--gold)] font-medium mb-6">
            Saúde Mental e Gestão de Riscos Psicossociais
          </div>
          <h1 className="font-serif text-[40px] sm:text-[54px] lg:text-[68px] leading-[1.05] tracking-[-0.015em] text-[color:var(--primary)]">
            Implementação e Gestão da{" "}
            <em className="not-italic text-[color:var(--ink)]">Nova Reescrita da NR-1</em>
          </h1>
          <p className="mt-8 max-w-xl text-[16px] leading-[1.7] text-[color:var(--ink)]/75 font-light">
            Método Conformidade Ativa Estruturado · Metodologia VIDA
          </p>
          <p className="mt-6 font-serif italic text-[color:var(--primary)] text-lg">
            — Prevenção é o respeito em ação.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <CTAButton variant="primary">Agende uma reunião agora mesmo</CTAButton>
            <a
              href="#metodologia"
              className="inline-flex items-center gap-3 px-2 py-4 text-[11px] tracking-[0.22em] uppercase font-medium text-[color:var(--ink)] hover-gold"
            >
              Conhecer metodologia
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 reveal flex flex-col items-center gap-10">
          <div className="relative w-full flex items-center justify-center">
            <div className="absolute inset-0 border border-[color:var(--gold)]/25" aria-hidden />
            <div className="absolute inset-4 border border-[color:var(--gold)]/10" aria-hidden />
            <img
              src={logo}
              alt="Rheviva — Saúde Mental e Gestão de Riscos Psicossociais"
              className="relative w-56 sm:w-72 lg:w-80 h-auto object-contain py-14 px-8 select-none"
              draggable={false}
            />
          </div>
          <div className="text-center">
            <span className="font-serif text-3xl text-[color:var(--primary)]/60">+4.000</span>
            <p className="text-[11px] tracking-[0.14em] uppercase text-[color:var(--ink)]/45 font-light mt-1">
              atendimentos realizados
            </p>
            <p className="text-[11px] text-[color:var(--ink)]/40 font-light mt-1">
              Sessões individuais, palestras, workshops e imersões.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-28 md:py-36 border-t border-[color:var(--border)]">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 reveal">
            <span className="eyebrow">Quem somos</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.1] text-[color:var(--primary)]">
              Olá, somos a Rheviva.
            </h2>
            <div className="h-px w-16 bg-[color:var(--gold)] mt-8" />
          </div>
          <div className="lg:col-span-7 reveal space-y-6 text-[16px] leading-[1.8] text-[color:var(--ink)]/80 font-light">
            <p>
              Uma empresa especializada na gestão de riscos psicossociais, implementação e
              assessoria, com foco na prevenção do adoecimento no ambiente de trabalho, na
              formalização documental e na adequação legal.
            </p>
            <p>
              Atuamos alinhados à base técnica da NR-17, que orienta a análise e organização do
              trabalho, integrando essas diretrizes às exigências da nova NR-1.
            </p>
            <p>
              Com uma abordagem preventiva, estruturamos soluções técnicas e estratégicas que
              conectam a legislação ao desenvolvimento humano, gerando valor e fortalecendo a
              imagem das empresas perante trabalhadores, clientes e o mercado.
            </p>
            <p>
              Construindo de forma <strong className="text-[color:var(--primary)] font-medium">contínua</strong> ambientes de
              trabalho mais saudáveis, produtivos e sustentáveis, enquanto a organização se mantém{" "}
              <strong className="text-[color:var(--primary)] font-medium">resguardada legalmente</strong> e se beneficia da
              redução dos riscos humanos, operacionais, jurídicos e prejuízos financeiros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const PROBLEMS = [
  {
    n: "I",
    tag: "Urgente",
    title: "Fiscalização iminente",
    text: "A nova reescrita da NR-1 exige das empresas a ação de identificar os fatores e gerenciar os riscos psicossociais. A fiscalização e autuação, assim como as penalidades pelos órgãos competentes, começam em maio de 2026.",
  },
  {
    n: "II",
    tag: "Impacto financeiro",
    title: "Custos invisíveis com afastamentos",
    text: "Afastamentos com nexo ocupacional reconhecido aumentam o FAP e elevam o SAT/RAT sobre toda a folha. Além disso, a documentação adequada é sua defesa contra processos trabalhistas onerosos.",
  },
  {
    n: "III",
    tag: "Risco jurídico",
    title: "Documento sem processo é autuado; processo sem documento não é conformidade",
    text: "A lei exige documentação completa e ações efetivamente executadas. Fiscais entrevistam trabalhadores e verificam evidências reais — o processo é tão importante quanto o papel.",
  },
  {
    n: "IV",
    tag: "Universal",
    title: "Risco em qualquer empresa",
    text: "Riscos psicossociais existem independentemente do porte, setor, cargo ou número de funcionários. Nem todas as empresas estão isentas da obrigação legal, nenhuma do impacto humano.",
  },
];

function Problems() {
  return (
    <section className="py-28 md:py-36 bg-[color:var(--card)] border-y border-[color:var(--border)]">
      <div className="container-editorial">
        <div className="max-w-3xl mb-16 reveal">
          <span className="eyebrow">Diagnóstico</span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.1] text-[color:var(--primary)]">
            O seu problema, nós resolvemos.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[color:var(--border)] border border-[color:var(--border)]">
          {PROBLEMS.map((p) => (
            <article key={p.n} className="reveal bg-[color:var(--cream)] p-10 md:p-12 group">
              <div className="flex items-baseline gap-5">
                <div className="font-serif text-[64px] leading-none text-[color:var(--gold)]/70 group-hover:text-[color:var(--gold)] transition-colors duration-500">
                  {p.n}
                </div>
                <div className="text-[10px] tracking-[0.28em] uppercase text-[color:var(--gold)] font-medium">
                  {p.tag}
                </div>
              </div>
              <div className="h-px w-12 bg-[color:var(--gold)] my-6" />
              <h3 className="font-serif text-2xl md:text-[26px] leading-[1.2] text-[color:var(--primary)]">
                {p.title}
              </h3>
              <p className="mt-5 text-[15px] leading-[1.75] text-[color:var(--ink)]/70 font-light">
                {p.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyInvest() {
  const risks = [
    "Multas e penalidades",
    "Processos trabalhistas",
    "Perda de produtividade e retenção de talentos",
    "Danos à imagem e reputação da empresa",
  ];
  return (
    <section className="py-28 md:py-36">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-6 reveal">
            <span className="eyebrow">Investimento</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.1] text-[color:var(--primary)]">
              Por que a sua empresa deve investir na Rheviva.
            </h2>
            <div className="h-px w-16 bg-[color:var(--gold)] mt-8 mb-8" />
            <p className="text-[16px] leading-[1.8] text-[color:var(--ink)]/75 font-light">
              A gestão dos riscos psicossociais exige mais do que ações genéricas, palestras
              isoladas ou medidas pontuais; demanda a implementação de processos interligados e
              contínuos.
            </p>
            <p className="mt-6 font-serif italic text-xl text-[color:var(--primary)]">
              A Rheviva atua de forma personalizada.
            </p>
            <div className="mt-10">
              <div className="text-[11px] tracking-[0.24em] uppercase text-[color:var(--ink)]/65 font-medium mb-5">
                Empresas que não se adequam estão sujeitas a:
              </div>
              <ul className="space-y-3">
                {risks.map((r) => (
                  <li key={r} className="flex items-start gap-4 text-[15px] text-[color:var(--ink)]/80 font-light">
                    <span className="mt-2 h-[6px] w-[6px] bg-[color:var(--gold)] shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 reveal">
            <div className="relative bg-[color:var(--primary)] text-[color:var(--primary-foreground)] p-10 md:p-14">
              <div className="absolute inset-3 border border-[color:var(--gold)]/30 pointer-events-none" />
              <div className="relative">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--gold)] font-medium">
                  Cenário Brasil
                </div>
                <div className="h-px w-10 bg-[color:var(--gold)] mt-5 mb-6" />
                <p className="font-serif text-3xl md:text-4xl leading-[1.15]">
                  <span className="text-[color:var(--gold)]">472.328</span> licenças médicas em 2024 e{" "}
                  <span className="text-[color:var(--gold)]">546.254</span> em 2025.
                </p>
                <p className="mt-6 text-[15px] leading-[1.75] text-[color:var(--primary-foreground)]/80 font-light">
                  Concedidas por transtornos mentais. Custo estimado para o INSS: R$ 3,5 bilhões.
                  Segundo dados do Ministério da Previdência Social, no Brasil (INSS).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PMV = [
  {
    t: "Propósito",
    d: "Multiplicar o conhecimento da educação preventiva, auxiliar para o fortalecimento da performance humana e organizacional.",
  },
  {
    t: "Missão",
    d: "Por meio da gestão estruturada dos fatores de riscos psicossociais, contribuir com as organizações na formalização documental, visando à segurança jurídica.",
  },
  {
    t: "Visão",
    d: "Ser referência para empresas que buscam fortalecer a cultura contínua de prevenção e cuidado com a saúde mental e bem-estar emocional no trabalho.",
  },
];

function PurposeMissionVision() {
  return (
    <section className="py-28 md:py-36 bg-[color:var(--card)] border-y border-[color:var(--border)]">
      <div className="container-editorial">
        <div className="max-w-2xl mb-16 reveal">
          <span className="eyebrow">Essência</span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.1] text-[color:var(--primary)]">
            Propósito, missão e visão.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PMV.map((c) => (
            <article
              key={c.t}
              className="reveal relative bg-[color:var(--cream)] p-10 md:p-12 border border-[color:var(--border)] hover:border-[color:var(--gold)]/60 transition-colors duration-500"
            >
              <div className="text-[11px] tracking-[0.28em] uppercase text-[color:var(--gold)] font-medium">
                {c.t}
              </div>
              <div className="h-px w-10 bg-[color:var(--gold)] mt-5 mb-6" />
              <p className="font-serif text-[22px] leading-[1.35] text-[color:var(--primary)]">
                {c.d}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 reveal">
          <div className="lg:col-span-4">
            <span className="eyebrow">Valores Corporativos</span>
            <h3 className="mt-5 font-serif text-3xl md:text-4xl text-[color:var(--primary)] leading-[1.1]">
              O que nos guia.
            </h3>
          </div>
          <ul className="lg:col-span-7 lg:col-start-6 space-y-5">
            {[
              "Ética, Transparência e Responsabilidade Técnica",
              "Prevenção como Cultura Organizacional",
              "Melhoria Contínua dos Ambientes e das Relações de Trabalho",
            ].map((v, i) => (
              <li
                key={v}
                className="flex items-baseline gap-6 border-b border-[color:var(--border)] pb-5"
              >
                <span className="font-serif text-2xl text-[color:var(--gold)]">0{i + 1}</span>
                <span className="text-[17px] text-[color:var(--ink)]/85 font-light">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 reveal">
          <div className="relative aspect-[4/5]">
            <div className="absolute inset-0 border border-[color:var(--gold)]/40 -translate-x-4 -translate-y-4" />
            <img
              src={founder}
              alt="Vânia Dassoler — Fundadora e Diretora Técnica da Rheviva"
              loading="lazy"
              width={896}
              height={1152}
              className="relative h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 reveal">
          <span className="eyebrow">Fundadora</span>
          <h2 className="mt-6 font-serif text-5xl md:text-6xl leading-[1.05] text-[color:var(--primary)]">
            Vânia Dassoler
          </h2>
          <div className="mt-4 text-[12px] tracking-[0.22em] uppercase text-[color:var(--gold)]">
            Gestora de Riscos Psicossociais · Fundadora e Diretora Técnica
          </div>
          <div className="h-px w-16 bg-[color:var(--gold)] my-8" />
          <div className="space-y-6 text-[15px] leading-[1.8] text-[color:var(--ink)]/80 font-light">
            <div>
              <div className="text-[11px] tracking-[0.24em] uppercase text-[color:var(--primary)] font-medium mb-3">
                Formação construída na origem
              </div>
              <p>
                Formação em integração ao PGR direta com Auditores Fiscais do Ministério do
                Trabalho envolvidos na reescrita da NR-1. Capacitação com especialistas da ESMPU
                (Escola Superior do Ministério Público da União). Implementadora de Saúde Mental NR-1
                pelo MEC. Pós-graduação em Qualidade de Vida no Trabalho e em Psicologia
                Organizacional e Gestão de Pessoas. Técnica em Segurança do Trabalho (em formação).
              </p>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.24em] uppercase text-[color:var(--primary)] font-medium mb-3">
                Técnica e humanidade integradas
              </div>
              <p>
                Especializada em Gestão de Riscos Psicossociais. Terapeuta, especialista em
                desenvolvimento humano, com mais de 4.000 atendimentos entre sessões individuais,
                palestras, workshops e imersões. Graduada em negócios imobiliários; durante 12
                anos esteve à frente da própria empresa no mercado imobiliário. Visão de negócio
                e cuidado com pessoas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    n: "01",
    t: "Mapeamento de fatores dos riscos psicossociais",
    sub: "Para empresas que precisam iniciar o processo de adequação à NR-1.",
    items: [
      "Ação introdutória de preparação dos trabalhadores",
      "AEP psicossocial, levantamento dos fatores de risco",
      "Mapeamento com instrumento validado internacionalmente: HSE-IT",
      "Inventário de riscos psicossociais por setor e função",
      "Plano de ação estruturado com a realidade da empresa",
      "Cobertura documentada para qualquer tipo de fiscalização",
    ],
  },
  {
    n: "02",
    t: "Implementação completa com gestão contínua",
    sub: "Para empresas que querem conformidade permanente, não um evento pontual.",
    items: [
      "Tudo do Serviço 01",
      "Formalização documental completa",
      "Conformidade legal e segurança jurídica",
      "Calendário Anual de Prevenção personalizado — 12 meses planejados",
      "Monitoramento contínuo de indicadores",
      "Revisões periódicas e revisão anual do PGR",
      "Adequação à Lei 15.377/2026 — saúde preventiva, comunicação, documentação e evidências",
      "Execução e gestão das ações do plano de ação",
    ],
  },
  {
    n: "03",
    t: "Assessoria",
    sub: "Para empresas que querem conduzir o processo internamente com autonomia.",
    t2: "Capacitação",
    sub2: "Para indivíduos que querem aprender o processo da implementação e conduzi-lo com autonomia.",
    items: [
      "Capacitação com método e ferramentas validadas",
      "Para gestores, RH e profissionais de SST ou responsáveis pelo processo",
      "Para pessoas em busca de uma nova profissão.",
      "Formação para conduzir a implementação completa",
      "Gestão contínua dos riscos psicossociais com autonomia",
      "Consistência, conformidade e segurança jurídica sustentáveis",
    ],
  },
  {
    n: "04",
    t: "Desenvolvimento humano e cultura organizacional",
    sub: "Pode ser contratado independentemente, com ou sem mapeamento prévio da Rheviva.",
    items: [
      "Execução e gestão das ações da empresa contratante",
      "Construção de ambiente e cultura organizacional saudável",
      "Programas de desenvolvimento de capacidades humanas",
      "Palestras, workshops e rodas de conversa",
      "Atendimentos individuais e imersões terapêuticas",
      "Ações temáticas pontuais integradas ao calendário anual",
    ],
  },
];

function Services() {
  return (
    <section id="servicos" className="py-28 md:py-36 bg-[color:var(--card)] border-y border-[color:var(--border)]">
      <div className="container-editorial">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 reveal">
          <div className="max-w-2xl">
            <span className="eyebrow">Serviços</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.1] text-[color:var(--primary)]">
              Nossos serviços.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[color:var(--ink)]/65 font-light leading-[1.7]">
            Cada entrega é desenhada para garantir conformidade real com a legislação e
            desenvolvimento humano sustentável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[color:var(--border)] border border-[color:var(--border)]">
          {SERVICES.map((s) => (
            <article
              key={s.n}
              className="reveal relative bg-[color:var(--cream)] p-10 md:p-14 group overflow-hidden transition-colors duration-500"
            >
              <div className="absolute top-6 right-8 font-serif text-[140px] leading-none text-[color:var(--gold)]/10 group-hover:text-[color:var(--gold)]/20 transition-colors duration-700 select-none">
                {s.n}
              </div>
              <div className="relative">
                <div className="text-[11px] tracking-[0.24em] uppercase text-[color:var(--gold)] font-medium">
                  Serviço {s.n}
                </div>
                <h3 className="mt-4 font-serif text-2xl md:text-[28px] text-[color:var(--primary)] leading-[1.2] max-w-md">
                  {s.t}
                </h3>
                <div className="h-px w-12 bg-[color:var(--gold)] my-6" />
                <p className="text-[14px] leading-[1.7] text-[color:var(--ink)]/70 font-light italic max-w-md">
                  {s.sub}
                </p>
                {"t2" in s && s.t2 && (
                  <>
                    <h3 className="mt-8 font-serif text-2xl md:text-[28px] text-[color:var(--primary)] leading-[1.2] max-w-md">
                      {s.t2}
                    </h3>
                    <div className="h-px w-12 bg-[color:var(--gold)] my-6" />
                    <p className="text-[14px] leading-[1.7] text-[color:var(--ink)]/70 font-light italic max-w-md">
                      {s.sub2}
                    </p>
                  </>
                )}
                <ul className="mt-7 space-y-3">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-3 text-[14px] leading-[1.65] text-[color:var(--ink)]/80 font-light"
                    >
                      <span className="mt-[10px] h-[5px] w-[5px] bg-[color:var(--gold)] shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center reveal">
          <CTAButton variant="ghost">Falar com especialista</CTAButton>
        </div>
      </div>
    </section>
  );
}

function ActiveCompliance() {
  const tags = [
    "Documentação",
    "Ações executadas",
    "Conformidade comprovada",
    "Ciclo contínuo de conformidade",
  ];
  return (
    <section className="py-28 md:py-36">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 reveal">
            <span className="eyebrow">Método</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.1] text-[color:var(--primary)]">
              Conformidade Ativa.
            </h2>
            <div className="h-px w-16 bg-[color:var(--gold)] mt-8" />
          </div>
          <div className="lg:col-span-7 reveal">
            <p className="text-[17px] leading-[1.8] text-[color:var(--ink)]/80 font-light">
              Método que transforma a obrigação legal em processo vivo — não um documento na
              gaveta, mas gestão contínua com monitoramento real, revisões periódicas e segurança
              jurídica sustentável.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-5 py-2.5 text-[11px] tracking-[0.22em] uppercase font-medium border border-[color:var(--gold)]/50 text-[color:var(--primary)] hover:bg-[color:var(--gold)]/10 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const VIDA = [
  {
    t: "VIDA",
    sub: "Metodologia proprietária",
    d: "Vivência, Intenção, Decisão e Ação — quatro dimensões integradas ao ciclo PDCA.",
  },
  {
    t: "GRO / PDCA",
    sub: "Processo real do ciclo exigido pela NR-1",
    d: "Ciclo contínuo de conformidade.",
  },
  {
    t: "Conformidade Ativa",
    sub: "Mais que checklist — método de execução",
    d: "Execução estruturada real.",
  },
  {
    t: "NR-1 Nova Reescrita",
    sub: "Documentação · Ações executadas",
    d: "Conformidade comprovada.",
  },
];

function Methodology() {
  return (
    <section
      id="metodologia"
      className="py-28 md:py-36 bg-[color:var(--primary)] text-[color:var(--primary-foreground)] relative overflow-hidden"
    >
      <div className="container-editorial relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-6 reveal">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-[color:var(--gold)]" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--gold)]">
                Proprietária
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Metodologia <em className="not-italic text-[color:var(--gold)]">VIDA</em>
            </h2>
          </div>
          <div className="lg:col-span-6 reveal space-y-5 text-[16px] leading-[1.8] text-[color:var(--primary-foreground)]/85 font-light">
            <p>
              Metodologia proprietária que conduz o processo de implementação estruturado e
              permanente, integrando os riscos psicossociais ao AEP, PGR e GRO, alinhada às
              diretrizes da ISO 45003, OIT e Portaria MTE nº 1.419/2024. Organizada em quatro
              dimensões — Vivência, Intenção, Decisão e Ação — integradas ao ciclo PDCA exigido
              pela NR-1. Cada etapa gera entregável concreto, evidência rastreável e
              documentação técnica com validade jurídica.
            </p>
            <p>
              Método que transforma a obrigação legal em processo vivo — não um documento na
              gaveta, mas gestão contínua com monitoramento real, revisões periódicas e
              segurança jurídica sustentável.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--gold)]/20 border border-[color:var(--gold)]/25 reveal">
          {VIDA.map((v, i) => (
            <div
              key={v.t}
              className="bg-[color:var(--primary)] p-10 md:p-10 relative group"
            >
              <div className="text-[10px] tracking-[0.28em] uppercase text-[color:var(--gold)]/80 font-medium">
                0{i + 1}
              </div>
              <div className="h-px w-10 bg-[color:var(--gold)]/60 mt-5 mb-6" />
              <h3 className="font-serif text-3xl text-[color:var(--gold)] leading-[1.1]">
                {v.t}
              </h3>
              <div className="mt-3 text-[11px] tracking-[0.18em] uppercase text-[color:var(--primary-foreground)]/70">
                {v.sub}
              </div>
              <p className="mt-5 text-[14px] leading-[1.75] text-[color:var(--primary-foreground)]/75 font-light">
                {v.d}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center reveal">
          <CTAButton variant="gold">Solicitar diagnóstico</CTAButton>
        </div>
      </div>
    </section>
  );
}

const DIFF = [
  ["Metodologia própria", "Prevenção é o respeito em ação."],
  ["Formação construída na origem", "Formação com a origem da reescrita da norma."],
  ["Conformidade Ativa real", "Mais que checklist — método de execução."],
  ["Humanidade no processo", ""],
  ["Técnica e humanidade integradas", "Visão de negócio e cuidado com pessoas."],
];

function Differentials() {
  return (
    <section id="diferenciais" className="py-28 md:py-36 bg-[color:var(--card)] border-y border-[color:var(--border)]">
      <div className="container-editorial">
        <div className="max-w-2xl mb-20 reveal">
          <span className="eyebrow">Diferenciais</span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.1] text-[color:var(--primary)]">
            Nossos diferenciais.
          </h2>
        </div>

        <div className="space-y-px bg-[color:var(--border)] border-y border-[color:var(--border)]">
          {DIFF.map(([t, d], i) => (
            <div
              key={t}
              className="reveal grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[color:var(--cream)] py-10 px-2 md:px-8 group"
            >
              <div className="md:col-span-1 font-serif text-2xl text-[color:var(--gold)]">
                0{i + 1}
              </div>
              <h3 className="md:col-span-4 font-serif text-2xl md:text-[26px] text-[color:var(--primary)] leading-[1.2] group-hover:translate-x-1 transition-transform duration-500">
                {t}
              </h3>
              <p className="md:col-span-6 md:col-start-7 text-[15px] leading-[1.75] text-[color:var(--ink)]/75 font-light">
                {d}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-16 max-w-3xl text-[16px] leading-[1.8] text-[color:var(--ink)]/75 font-light reveal">
          Transformamos obrigação legal em cultura organizacional viva. Com melhorias contínuas
          construímos ambientes corporativos saudáveis, simultaneamente, proteção contra riscos
          humanos e prejuízos financeiros — empresa produtiva e sustentável.
        </p>
      </div>
    </section>
  );
}

function Important() {
  return (
    <section className="py-24 md:py-28">
      <div className="container-editorial">
        <div className="max-w-4xl mx-auto reveal border border-[color:var(--border)] bg-[color:var(--cream)] p-10 md:p-14">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-[color:var(--gold)]" />
            <span className="eyebrow">Importante</span>
          </div>
          <div className="space-y-5 text-[15px] leading-[1.8] text-[color:var(--ink)]/75 font-light">
            <p>
              Os serviços da Rheviva têm caráter preventivo, educativo e organizacional. Não
              substituem médicos ou especialistas em saúde ocupacional. Atuamos de forma
              complementar às áreas de Saúde e Segurança do Trabalho da empresa. Estruturamos e
              monitoramos a gestão dos riscos psicossociais conforme a NR-1.
            </p>
            <p>
              A Rheviva atua na esfera organizacional. Atendimentos terapêuticos individuais,
              quando solicitados, são ofertados separadamente, como serviço opcional, por
              profissionais parceiros especializados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-32 md:py-40 bg-[color:var(--primary)] text-[color:var(--primary-foreground)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="container-editorial relative text-center max-w-4xl reveal">
        <span className="text-[11px] tracking-[0.28em] uppercase text-[color:var(--gold)]">
          Rheviva Integração Humana Ltda.
        </span>
        <h2 className="mt-8 font-serif text-5xl md:text-7xl leading-[1.05]">
          Agende uma reunião{" "}
          <em className="not-italic text-[color:var(--gold)]">agora mesmo</em>.
        </h2>
        <div className="mt-14 flex flex-col items-center gap-5">
          <CTAButton variant="gold">Falar com a Rheviva pelo WhatsApp</CTAButton>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--primary-foreground)]/60">
            Resposta rápida · Atendimento especializado
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="py-20 border-t border-[color:var(--border)]">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <img
              src={logo}
              alt="Rheviva"
              className="h-20 w-auto object-contain select-none"
              draggable={false}
            />
            <p className="mt-6 text-[11px] tracking-[0.28em] uppercase text-[color:var(--gold)] font-medium">
              Rheviva · Integração Humana
            </p>
            <p className="mt-5 text-sm text-[color:var(--ink)]/65 font-light leading-[1.7] max-w-xs">
              Saúde mental e gestão de riscos psicossociais. Prevenção é o respeito em ação.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="eyebrow mb-5">Endereço</div>
            <p className="text-sm text-[color:var(--ink)]/75 leading-[1.8] font-light">
              Rua Rui Barbosa, 36E<br />
              Centro — Chapecó / SC
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="eyebrow mb-5">Contato</div>
            <p className="text-sm text-[color:var(--ink)]/75 leading-[1.8] font-light">
              <a href="mailto:contato@rheviva.com.br" className="hover-gold">
                contato@rheviva.com.br
              </a>
              <br />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-gold"
              >
                (49) 9 9123-0040
              </a>
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="eyebrow mb-5">Social</div>
            <a
              href="https://instagram.com/rhevivaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[color:var(--ink)]/75 hover-gold font-light"
            >
              @rhevivaa
            </a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[color:var(--border)] flex flex-col gap-6">
          <p className="text-xs text-[color:var(--ink)]/55 font-light text-center md:text-left max-w-3xl">
            Seus dados são protegidos e tratados com responsabilidade seguindo a LGPD.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] tracking-[0.2em] uppercase text-[color:var(--muted-foreground)]">
            <span>© {new Date().getFullYear()} Rheviva Integração Humana</span>
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <Link to="/privacidade" className="hover-gold">
                Privacidade
              </Link>
              <Link to="/cookies" className="hover-gold">
                Cookies
              </Link>
              <Link to="/termos" className="hover-gold">
                Termos
              </Link>
              <Link to="/privacidade" className="hover-gold">
                Segurança de Dados
              </Link>
            </nav>
            <span>Chapecó / SC · Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <Header />
      <main>
        <Hero />
        <About />
        <Problems />
        <WhyInvest />
        <PurposeMissionVision />
        <Founder />
        <Services />
        <ActiveCompliance />
        <Methodology />
        <Differentials />
        <Important />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}

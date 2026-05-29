import { Link } from "@tanstack/react-router";
import logo from "@/assets/rheviva-logo.png";

export function LegalLayout({
  eyebrow,
  title,
  updatedAt,
  children,
}: {
  eyebrow: string;
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <header className="border-b border-[color:var(--border)] bg-[color:var(--cream)]/85 backdrop-blur-md">
        <div className="container-editorial flex items-center justify-between h-24">
          <Link to="/" aria-label="Rheviva" className="flex items-center">
            <img src={logo} alt="Rheviva" className="h-14 w-auto object-contain select-none" draggable={false} />
          </Link>
          <Link
            to="/"
            className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--ink)]/75 hover-gold"
          >
            ← Voltar ao site
          </Link>
        </div>
      </header>

      <main className="container-editorial py-24 md:py-32 max-w-3xl">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px w-12 bg-[color:var(--gold)]" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-[color:var(--primary)]">
          {title}
        </h1>
        <p className="mt-6 text-[11px] tracking-[0.22em] uppercase text-[color:var(--muted-foreground)]">
          Atualizado em {updatedAt}
        </p>
        <div className="prose-legal mt-14 space-y-8 text-[16px] leading-[1.8] text-[color:var(--ink)]/80 font-light">
          {children}
        </div>
      </main>

      <footer className="border-t border-[color:var(--border)] py-10">
        <div className="container-editorial text-center text-[11px] tracking-[0.2em] uppercase text-[color:var(--muted-foreground)]">
          © {new Date().getFullYear()} Rheviva Integração Humana · LGPD compliant
        </div>
      </footer>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-serif text-2xl md:text-3xl text-[color:var(--primary)] mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

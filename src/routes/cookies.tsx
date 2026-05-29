import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — Rheviva" },
      {
        name: "description",
        content:
          "Como a Rheviva utiliza cookies essenciais e analíticos para melhorar a experiência no site.",
      },
      { property: "og:title", content: "Política de Cookies — Rheviva" },
      { property: "og:description", content: "Uso responsável de cookies." },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <LegalLayout eyebrow="Cookies" title="Política de Cookies" updatedAt="Maio de 2026">
      <p>
        Este site utiliza cookies de forma responsável para garantir funcionamento adequado e
        compreender a experiência de navegação dos visitantes.
      </p>

      <LegalSection title="1. O que são cookies">
        <p>
          Cookies são pequenos arquivos armazenados no seu dispositivo que permitem reconhecer
          preferências e melhorar a usabilidade do site.
        </p>
      </LegalSection>

      <LegalSection title="2. Tipos utilizados">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Essenciais:</strong> necessários para o funcionamento básico das páginas.
          </li>
          <li>
            <strong>Analíticos:</strong> ajudam a entender de forma agregada e anônima como as
            páginas são utilizadas, para aprimorar a experiência.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. O que não utilizamos">
        <p>
          Não utilizamos cookies para publicidade comportamental, venda de dados ou rastreamento
          entre sites de terceiros.
        </p>
      </LegalSection>

      <LegalSection title="4. Como gerenciar">
        <p>
          Você pode bloquear ou apagar cookies a qualquer momento nas configurações do seu
          navegador. Algumas funcionalidades podem ser limitadas ao desativar cookies essenciais.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Rheviva" },
      {
        name: "description",
        content:
          "Como a Rheviva coleta, utiliza e protege seus dados pessoais em conformidade com a LGPD.",
      },
      { property: "og:title", content: "Política de Privacidade — Rheviva" },
      { property: "og:description", content: "Tratamento de dados em conformidade com a LGPD." },
      { property: "og:url", content: "/privacidade" },
    ],
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
  component: PrivacidadePage,
});

function PrivacidadePage() {
  return (
    <LegalLayout eyebrow="Privacidade · LGPD" title="Política de Privacidade" updatedAt="Maio de 2026">
      <p>
        A Rheviva Integração Humana respeita a sua privacidade e está comprometida com a proteção
        dos dados pessoais que nos são confiados, em conformidade com a Lei Geral de Proteção de
        Dados (Lei nº 13.709/2018 — LGPD).
      </p>

      <LegalSection title="1. Dados que coletamos">
        <p>
          Coletamos apenas os dados necessários para estabelecer contato profissional e prestar
          nossos serviços: nome, e-mail, telefone, empresa e a mensagem enviada por meio de
          formulário ou WhatsApp.
        </p>
      </LegalSection>

      <LegalSection title="2. Como utilizamos seus dados">
        <p>Seus dados são utilizados exclusivamente para:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Responder solicitações e iniciar contato comercial.</li>
          <li>Enviar propostas, diagnósticos e materiais técnicos solicitados.</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. O que NÃO fazemos">
        <p>
          <strong>Não vendemos, alugamos ou compartilhamos seus dados</strong> com terceiros para
          fins comerciais. Não realizamos perfilamento publicitário externo.
        </p>
      </LegalSection>

      <LegalSection title="4. Segurança">
        <p>
          Aplicamos medidas técnicas e organizacionais para proteger seus dados contra acesso não
          autorizado, perda ou divulgação indevida. Canais como WhatsApp e e-mail são tratados com
          confidencialidade profissional.
        </p>
      </LegalSection>

      <LegalSection title="5. Seus direitos (LGPD)">
        <p>
          Você pode, a qualquer momento, solicitar acesso, correção, atualização, portabilidade ou
          eliminação dos seus dados, bem como revogar consentimentos, entrando em contato pelo
          e-mail <a href="mailto:contato@rheviva.com.br" className="hover-gold">contato@rheviva.com.br</a>.
        </p>
      </LegalSection>

      <LegalSection title="6. Retenção">
        <p>
          Os dados são mantidos apenas pelo período necessário ao atendimento e ao cumprimento de
          obrigações legais, sendo eliminados de forma segura após esse prazo.
        </p>
      </LegalSection>

      <LegalSection title="7. Contato do encarregado">
        <p>
          Para dúvidas relacionadas à proteção de dados, escreva para{" "}
          <a href="mailto:contato@rheviva.com.br" className="hover-gold">contato@rheviva.com.br</a>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

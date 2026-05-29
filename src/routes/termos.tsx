import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Rheviva" },
      {
        name: "description",
        content:
          "Condições gerais de uso do site institucional da Rheviva — Saúde Mental e Gestão de Riscos Psicossociais.",
      },
      { property: "og:title", content: "Termos de Uso — Rheviva" },
      { property: "og:description", content: "Condições de uso do site Rheviva." },
      { property: "og:url", content: "/termos" },
    ],
    links: [{ rel: "canonical", href: "/termos" }],
  }),
  component: TermosPage,
});

function TermosPage() {
  return (
    <LegalLayout eyebrow="Termos" title="Termos de Uso" updatedAt="Maio de 2026">
      <p>
        Ao acessar este site, você concorda com os termos descritos a seguir. Caso não concorde,
        recomendamos encerrar a navegação.
      </p>

      <LegalSection title="1. Finalidade do conteúdo">
        <p>
          As informações apresentadas têm caráter institucional e educativo, não substituindo
          orientação jurídica, médica ou consultoria especializada formal.
        </p>
      </LegalSection>

      <LegalSection title="2. Propriedade intelectual">
        <p>
          Textos, identidade visual, marca, metodologia VIDA e demais materiais são de
          propriedade da Rheviva Integração Humana. É vedada a reprodução sem autorização.
        </p>
      </LegalSection>

      <LegalSection title="3. Uso adequado">
        <p>
          O usuário compromete-se a utilizar o site de forma lícita, sem tentativas de invasão,
          extração indevida de dados, engenharia reversa ou qualquer prática que comprometa sua
          integridade.
        </p>
      </LegalSection>

      <LegalSection title="4. Limitação de responsabilidade">
        <p>
          A Rheviva empenha-se em manter as informações atualizadas, mas não se responsabiliza
          por decisões tomadas exclusivamente com base no conteúdo do site sem consultoria
          formal prévia.
        </p>
      </LegalSection>

      <LegalSection title="5. Alterações">
        <p>
          Estes termos podem ser atualizados periodicamente. Recomendamos verificar esta página
          regularmente.
        </p>
      </LegalSection>

      <LegalSection title="6. Foro">
        <p>Fica eleito o foro da comarca de Chapecó/SC para dirimir eventuais controvérsias.</p>
      </LegalSection>
    </LegalLayout>
  );
}

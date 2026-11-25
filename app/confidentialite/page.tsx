import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/components/site";

export const metadata: Metadata = { title: "Politique de confidentialité — CAP Advisory Partners" };

// TODO : faire valider ce texte par un conseil juridique et compléter les mentions entre crochets.
export default function Confidentialite() {
  return (
    <main className="section legal">
      <div className="container container--narrow">
        <h1>Politique de confidentialité</h1>

        <h2>Responsable du traitement</h2>
        <p>
          CAP Advisory Partners, [adresse]. Contact :{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>Données collectées</h2>
        <p>
          Via le formulaire de contact : nom, adresse e-mail et contenu de votre
          message. Le diagnostic d&apos;éligibilité est calculé dans votre
          navigateur ; vos réponses ne sont ni transmises ni conservées.
        </p>

        <h2>Finalités et base légale</h2>
        <p>
          Ces données servent uniquement à répondre à votre demande et à
          organiser un éventuel rendez-vous, sur la base de votre
          consentement ou de mesures précontractuelles.
        </p>

        <h2>Durée de conservation</h2>
        <p>[Durée, par exemple 3 ans à compter du dernier contact].</p>

        <h2>Vos droits</h2>
        <p>
          Vous pouvez demander l&apos;accès, la rectification ou la suppression
          de vos données en écrivant à{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>Cookies</h2>
        <p>Ce site n&apos;utilise pas de cookies de suivi.</p>
      </div>
    </main>
  );
}

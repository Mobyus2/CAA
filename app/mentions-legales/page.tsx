import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/components/site";

export const metadata: Metadata = { title: "Mentions légales — CAP Advisory Partners" };

// TODO : compléter toutes les mentions entre crochets avant mise en ligne.
export default function MentionsLegales() {
  return (
    <main className="section legal">
      <div className="container container--narrow">
        <h1>Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <p>
          CAP Advisory Partners — [forme juridique], au capital de [montant],
          immatriculée sous le numéro [numéro d&apos;immatriculation].
          <br />
          Siège social : [adresse].
          <br />
          Directeur de la publication : [nom].
          <br />
          Contact : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>

        <h2>Hébergement</h2>
        <p>[Nom de l&apos;hébergeur, adresse, site web].</p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus de ce site (textes, logo, images) est la
          propriété de CAP Advisory Partners. Toute reproduction sans
          autorisation écrite préalable est interdite.
        </p>

        <h2>Responsabilité</h2>
        <p>
          Les informations présentées sont fournies à titre indicatif et ne
          constituent ni une offre de valeurs mobilières ni un conseil
          juridique, fiscal ou d&apos;investissement personnalisé.
        </p>
      </div>
    </main>
  );
}

import Image from "next/image";
import SectionHeading from "./SectionHeading";

const highlights = [
  "Etats financiers et gouvernance prepares pour les investisseurs.",
  "Valorisation, data room, teaser et memorandum d'information.",
  "Acces a des fonds PE, VC, family offices et partenaires strategiques.",
];

export default function About() {
  return (
    <section className="about section-shell" id="about">
      <div className="about__visual">
        <Image
          src="/reunion.jpg"
          alt="Reunion de conseil en entreprise"
          fill
          sizes="(max-width: 900px) 100vw, 44vw"
          className="image-cover"
        />
      </div>
      <div className="about__content">
        <SectionHeading
          eyebrow="A propos"
          title="Une approche conseil construite pour les PME ambitieuses."
          description="La dette bancaire n'est pas le seul chemin. Nous aidons les dirigeants a devenir lisibles, credibles et attractifs pour des investisseurs en capital."
        />
        <div className="about__list">
          {highlights.map((item) => (
            <div key={item} className="check-row">
              <span aria-hidden="true">✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

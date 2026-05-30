import SectionHeading from "./SectionHeading";

const features = [
  {
    title: "Capital sans pression de remboursement",
    description:
      "L'equity finance la croissance sans mensualite bancaire et preserve la tresorerie operationnelle.",
  },
  {
    title: "Investisseurs alignes",
    description:
      "Les partenaires entrent au capital pour partager la creation de valeur, pas seulement le risque.",
  },
  {
    title: "Entreprise mieux structuree",
    description:
      "Les standards de reporting, gouvernance et pilotage augmentent la robustesse de l'entreprise.",
  },
  {
    title: "Sorties anticipees",
    description:
      "Trade sale, IPO ou MBO sont prepares des le depart pour securiser l'horizon des investisseurs.",
  },
  {
    title: "Expertise finance et droit",
    description:
      "Une combinaison de due diligence, valorisation, transaction services et documentation juridique.",
  },
  {
    title: "Reseau UEMOA specialise",
    description:
      "Ciblage qualifie de fonds, family offices et partenaires capables d'accompagner les PME africaines.",
  },
];

export default function Features() {
  return (
    <section className="features section-shell" id="features">
      <SectionHeading
        eyebrow="Avantages"
        title="Un financement qui renforce l'entreprise au lieu de l'alourdir."
        description="La preparation equity cree une discipline de gestion utile avant, pendant et apres la levee."
      />
      <div className="card-grid card-grid--three">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <span aria-hidden="true" />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

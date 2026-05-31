const services = [
  {
    icon: "01",
    title: "Diagnostic equity",
    text: "Evaluation de la financabilite, des risques et des chantiers prioritaires avant ouverture du capital.",
  },
  {
    icon: "02",
    title: "Structuration financiere",
    text: "Business plan, valorisation, projections, indicateurs de pilotage et trajectoire de creation de valeur.",
  },
  {
    icon: "03",
    title: "Documentation investisseur",
    text: "Teaser, memorandum, pitch deck, data room et narration transactionnelle claire.",
  },
  {
    icon: "04",
    title: "Roadshow qualifie",
    text: "Ciblage de fonds, family offices et partenaires strategiques adaptes au profil de l'entreprise.",
  },
  {
    icon: "05",
    title: "Negociation & closing",
    text: "Appui sur la term sheet, coordination des conseils et preparation des decisions de gouvernance.",
  },
  {
    icon: "06",
    title: "Post-investissement",
    text: "Reporting, relation investisseurs et preparation des scenarios de sortie.",
  },
];

export default function Services() {
  return (
    <section className="services section-padding" id="services">
      <div className="section-heading section-heading--center">
        <span className="eyebrow">Services</span>
        <h2>Une chaine complete, du diagnostic au closing.</h2>
        <p>
          Chaque service reduit l&apos;incertitude et renforce la qualite du
          dossier presente aux investisseurs.
        </p>
      </div>
      <div className="services__grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="service-card__icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

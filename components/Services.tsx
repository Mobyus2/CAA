const services = [
  {
    title: "Diagnostic equity",
    text: "Évaluation de la financabilité, des risques et des chantiers prioritaires avant l'ouverture du capital.",
  },
  {
    title: "Structuration financière",
    text: "Business plan, valorisation, projections, indicateurs de pilotage et trajectoire de création de valeur.",
  },
  {
    title: "Documentation investisseur",
    text: "Teaser, mémorandum, pitch deck, data room et narration transactionnelle claire.",
  },
  {
    title: "Roadshow qualifié",
    text: "Ciblage de fonds, family offices et partenaires stratégiques adaptés au profil de l'entreprise.",
  },
  {
    title: "Négociation et closing",
    text: "Appui sur la term sheet, coordination des conseils et préparation des décisions de gouvernance.",
  },
  {
    title: "Post-investissement",
    text: "Reporting, relation investisseurs et préparation des scénarios de sortie.",
  },
];

export default function Services() {
  return (
    <section className="section section--tint" id="services">
      <div className="container">
        <div className="heading">
          <p className="kicker">Nos expertises</p>
          <h2>Six modules, du diagnostic au post-investissement.</h2>
          <p className="lead">
            Chaque module réduit l&apos;incertitude et renforce la qualité du
            dossier présenté aux investisseurs.
          </p>
        </div>
        <ol className="services">
          {services.map((service, i) => (
            <li className="service" key={service.title}>
              <span className="service__num">0{i + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import SectionHeading from "./SectionHeading";

type Service = {
  number: string;
  title: string;
  duration: string;
  description: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Diagnostic & structuration",
    duration: "3-6 mois",
    description:
      "Audit financier, gouvernance juridique, analyse de financabilite et plan de preparation investisseur.",
  },
  {
    number: "02",
    title: "Preparation & formation",
    duration: "2-3 mois",
    description:
      "Valorisation DCF, projections, teaser, memorandum d'information, pitch deck et data room.",
  },
  {
    number: "03",
    title: "Roadshow & closing",
    duration: "3-6 mois",
    description:
      "Ciblage des investisseurs, organisation du roadshow, term sheet, negociation et closing.",
  },
  {
    number: "04",
    title: "Post-closing & sortie",
    duration: "12-36 mois",
    description:
      "Reporting, relation investisseurs et strategie de sortie : IPO, trade sale ou management buy-out.",
  },
];

export default function Services() {
  return (
    <section className="services section-shell" id="services">
      <SectionHeading
        eyebrow="Services"
        title="Quatre modules pour passer de l'intention a la transaction."
        description="Un accompagnement complet, calibre pour reduire les frictions entre dirigeants, investisseurs et conseils."
        align="center"
      />
      <div className="card-grid card-grid--four">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <span className="service-card__number">{service.number}</span>
            <p className="service-card__duration">{service.duration}</p>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

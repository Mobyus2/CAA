import Image from "next/image";

const stats = [
  { value: "6", label: "modules d'accompagnement" },
  { value: "3", label: "PME pilotes en cours" },
  { value: "0 %", label: "de dette ajoutée" },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div className="about__media">
          <Image
            src="/reunion.jpg"
            alt="Équipe de direction en réunion de travail"
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
            className="image-cover"
          />
        </div>
        <div>
          <p className="kicker">Le cabinet</p>
          <h2>Rendre les PME lisibles et crédibles aux yeux des investisseurs.</h2>
          <p className="lead">
            Nous transformons une ambition de croissance en dossier investisseur
            solide : gouvernance, chiffres, valorisation, documentation, roadshow
            et closing.
          </p>
          <dl className="stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const stats = [
  { value: "4", label: "modules de preparation" },
  { value: "0%", label: "dette bancaire ajoutee" },
  { value: "10", label: "PME pilotes ciblees" },
];

export default function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="about__media">
        <Image
          src="/reunion.jpg"
          alt="Equipe de direction en reunion de travail"
          fill
          sizes="(max-width: 900px) 100vw, 45vw"
          className="image-cover"
        />
      </div>
      <div className="about__content">
        <span className="eyebrow">Presentation</span>
        <h2>Un cabinet concu pour rendre les PME lisibles aux investisseurs.</h2>
        <p>
          Nous transformons une ambition de croissance en dossier investisseur
          credible : gouvernance, chiffres, valorisation, documentation,
          roadshow et closing.
        </p>
        <div className="about__stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

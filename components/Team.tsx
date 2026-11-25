// TODO : compléter titres, parcours, expertises et années d'expérience de chaque associé.
const team = [
  {
    name: "Betina NDZENGUE",
    role: "Fonction à préciser",
    years: "— ans d'expérience",
    bio: "Parcours à compléter : formations, institutions, opérations de financement menées.",
    expertise: ["Expertise 1", "Expertise 2", "Expertise 3"],
  },
  {
    name: "Larissa KABITCHADA",
    role: "Fonction à préciser",
    years: "— ans d'expérience",
    bio: "Parcours à compléter : formations, institutions, opérations de financement menées.",
    expertise: ["Expertise 1", "Expertise 2", "Expertise 3"],
  },
  {
    name: "Paul BONGUI",
    role: "Fonction à préciser",
    years: "— ans d'expérience",
    bio: "Parcours à compléter : formations, institutions, opérations de financement menées.",
    expertise: ["Expertise 1", "Expertise 2", "Expertise 3"],
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
}

export default function Team() {
  return (
    <section className="section section--tint" id="team">
      <div className="container">
        <div className="heading">
          <p className="kicker">Notre équipe</p>
          <h2>Des professionnels de la finance et de l&apos;investissement à vos côtés.</h2>
        </div>
        <div className="grid grid--3">
          {team.map((m) => (
            <article className="member" key={m.name}>
              <div className="member__avatar" aria-hidden="true">
                {initials(m.name)}
              </div>
              <h3>{m.name}</h3>
              <p className="member__role">{m.role}</p>
              <p className="member__years">{m.years}</p>
              <p>{m.bio}</p>
              <ul className="tags">
                {m.expertise.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

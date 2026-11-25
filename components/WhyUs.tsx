const reasons = [
  {
    title: "Une spécialisation PME africaines",
    text: "Nous connaissons les réalités de gestion, de gouvernance et de financement des PME du continent.",
  },
  {
    title: "Un accompagnement de bout en bout",
    text: "Un seul interlocuteur du diagnostic au closing, puis après l'entrée de l'investisseur.",
  },
  {
    title: "Un réseau d'investisseurs qualifiés",
    text: "Fonds, family offices et partenaires stratégiques ciblés selon votre profil, pas un envoi de masse.",
  },
  {
    title: "Une rigueur d'investisseur",
    text: "Nous préparons votre dossier comme un investisseur l'analysera : chiffres, risques, gouvernance.",
  },
  {
    title: "Un alignement sur le résultat",
    text: "Notre objectif est que la levée aboutisse dans de bonnes conditions pour le dirigeant.",
  },
  {
    title: "Une relation de confiance",
    text: "Confidentialité stricte, transparence sur les étapes et sur ce qui est réaliste ou non.",
  },
];

export default function WhyUs() {
  return (
    <section className="section" id="why">
      <div className="container">
        <div className="heading">
          <p className="kicker">Pourquoi CAP Advisory Partners</p>
          <h2>Pourquoi nous plutôt qu&apos;un autre cabinet ?</h2>
        </div>
        <div className="grid grid--3">
          {reasons.map((r) => (
            <article className="card" key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

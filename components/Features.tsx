const features = [
  "Capital sans remboursement mensuel",
  "Investisseurs alignés sur la création de valeur",
  "Gouvernance et reporting renforcés",
  "Préparation aux due diligences",
  "Stratégie de sortie anticipée",
  "Accès à un réseau spécialisé PME africaines",
];

export default function Features() {
  return (
    <section className="band">
      <div className="container band__inner">
        <div>
          <p className="kicker kicker--gold">Les avantages de l&apos;equity</p>
          <h2>Financer la croissance sans fragiliser la trésorerie.</h2>
        </div>
        <ul className="checklist">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

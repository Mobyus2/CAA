const features = [
  "Capital sans remboursement mensuel",
  "Investisseurs alignes sur la creation de valeur",
  "Gouvernance et reporting renforces",
  "Preparation aux due diligences",
  "Strategie de sortie anticipee",
  "Reseau specialise PME africaines",
];

export default function Features() {
  return (
    <section className="features section-padding" id="features">
      <div className="section-heading">
        <span className="eyebrow">Avantages</span>
        <h2>Une approche premium pour financer sans fragiliser.</h2>
        <p>
          L&apos;equity apporte plus qu&apos;un financement : il installe une
          discipline de pilotage et une trajectoire institutionnelle.
        </p>
      </div>
      <div className="features__grid">
        {features.map((feature, index) => (
          <article className="feature-card" key={feature}>
            <span className="badge badge--gold">0{index + 1}</span>
            <h3>{feature}</h3>
            <div className="gold-line" />
          </article>
        ))}
      </div>
    </section>
  );
}

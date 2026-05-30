const benefits = [
  "Diagnostic gratuit",
  "Places limitees aux PME pilotes",
  "Success fee aligne au closing",
];

export default function CTA() {
  return (
    <section className="cta section-shell" id="contact">
      <div className="cta__inner">
        <span className="eyebrow">Contact</span>
        <h2>Pret a tester votre maturite investisseur ?</h2>
        <p>
          Demandez un premier diagnostic pour identifier les ecarts entre votre
          situation actuelle et les attentes d&apos;un investisseur en capital.
        </p>
        <div className="cta__benefits">
          {benefits.map((benefit) => (
            <span key={benefit}>{benefit}</span>
          ))}
        </div>
        <a
          className="button button--primary"
          href="mailto:betina.ndzengue.babong@capaccess-advisory.com"
        >
          Prendre rendez-vous
        </a>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__image" aria-hidden="true">
        <Image src="/building.jpg" alt="" fill priority sizes="100vw" className="image-cover" />
      </div>
      <div className="container hero__content">
        <p className="kicker kicker--light">Conseil en levée de fonds propres</p>
        <h1>Structurer la croissance des PME africaines par le capital.</h1>
        <p className="hero__lead">
          CAP Advisory Partners accompagne les dirigeants dans la préparation, la
          levée de fonds en equity et la relation avec les investisseurs.
        </p>
        <div className="hero__actions">
          <a className="button button--gold" href="#diagnostic">
            Tester mon éligibilité
          </a>
          <a className="button button--outline-light" href="#contact">
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
}

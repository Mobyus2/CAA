import Image from "next/image";

const navItems = [
  { label: "A propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Avantages", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__image" aria-hidden="true">
        <Image
          src="/building.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="image-cover"
        />
      </div>

      <header className="navbar">
        <a className="brand" href="#top" aria-label="CapAccess Advisory">
          <span>CAA</span>
          <strong>CapAccess Advisory</strong>
        </a>
        <nav className="navbar__links" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button button--light" href="#contact">
          Diagnostic
        </a>
      </header>

      <div className="hero__content">
        <span className="badge badge--gold">Equity advisory pour PME UEMOA</span>
        <h1>Structurer la croissance avec un capital patient et ambitieux.</h1>
        <p>
          CapAccess Advisory accompagne les dirigeants de PME africaines dans la
          preparation, la levee de fonds et la relation investisseur.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#contact">
            Demander un diagnostic
          </a>
          <a className="button button--secondary" href="#services">
            Explorer l&apos;offre
          </a>
        </div>
      </div>
    </section>
  );
}

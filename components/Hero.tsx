import Image from "next/image";
import NavBar from "./NavBar";

const stats = [
  { value: "x4", label: "patrimoine potentiel" },
  { value: "0%", label: "interets bancaires" },
  { value: "10", label: "PME pilotes" },
];

export default function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <NavBar />
      <div className="hero__grid">
        <div className="hero__content animate-in">
          <span className="eyebrow">Cabinet advisory - zone UEMOA</span>
          <h1>L&apos;equity comme levier premium de croissance PME.</h1>
          <p>
            CapAccess Advisory structure et accompagne les levees de fonds des
            PME africaines, du diagnostic financier au closing investisseur.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              Demander un diagnostic
            </a>
            <a className="button button--ghost" href="#services">
              Voir l&apos;offre
            </a>
          </div>
          <div className="hero__stats" aria-label="Indicateurs cles">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual animate-in animate-in--delay">
          <Image
            src="/building.jpg"
            alt="Immeuble de bureaux moderne"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 46vw"
            className="image-cover"
          />
          <div className="hero__panel">
            <span>Equity readiness</span>
            <strong>Diagnostic, structuration, roadshow, closing.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

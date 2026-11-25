import Link from "next/link";
import { CONTACT_EMAIL, navItems } from "./site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__brand">CAP Advisory Partners</p>
          <p>Structurer. Financer. Accompagner.</p>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
        <nav aria-label="Navigation de pied de page">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Informations légales">
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Politique de confidentialité</Link>
        </nav>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} CAP Advisory Partners. Tous droits réservés.</p>
    </footer>
  );
}

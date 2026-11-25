import Image from "next/image";
import Link from "next/link";
import { navItems } from "./site";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/#top" className="site-header__logo" aria-label="CAP Advisory Partners — accueil">
          <Image src="/Logo.jpeg" alt="CAPAA — CAP Advisory Partners" width={1093} height={487} priority />
        </Link>
        <nav className="site-header__nav" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="button button--primary site-header__cta" href="/#diagnostic">
          Tester mon éligibilité
        </Link>
        <details className="site-header__menu">
          <summary aria-label="Menu">Menu</summary>
          <div>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/#diagnostic">Diagnostic d&apos;éligibilité</Link>
          </div>
        </details>
      </div>
    </header>
  );
}

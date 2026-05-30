import Logo from "./Logo";

const navItems = [
  { label: "A propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Avantages", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  return (
    <header className="site-header">
      <a className="site-header__logo" href="#top">
        <Logo />
      </a>
      <nav className="site-nav" aria-label="Navigation principale">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="button button--small button--dark" href="#contact">
        Diagnostic
      </a>
    </header>
  );
}

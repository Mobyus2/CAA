const footerLinks = [
  { label: "A propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Avantages", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="brand brand--footer" href="#top">
          <span>CAA</span>
          <strong>CapAccess Advisory</strong>
        </a>
        <p>Structurer. Financer. Accompagner.</p>
      </div>
      <nav className="footer__nav" aria-label="Navigation de pied de page">
        {footerLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a
        className="footer__contact"
        href="mailto:betina.ndzengue.babong@capaccess-advisory.com"
      >
        betina.ndzengue.babong@capaccess-advisory.com
      </a>
    </footer>
  );
}

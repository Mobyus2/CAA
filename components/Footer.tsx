import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <div className="footer__links">
        <a href="mailto:betina.ndzengue.babong@capaccess-advisory.com">
          betina.ndzengue.babong@capaccess-advisory.com
        </a>
        <a href="tel:+33662792633">+33 6 62 79 26 33</a>
      </div>
    </footer>
  );
}

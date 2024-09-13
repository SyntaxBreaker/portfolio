import "../styles/navbar.scss";

interface NavbarProps {
  currentPath: string;
}

function Navbar({ currentPath }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar__menu">
        <a href="/" className="navbar__link navbar__link--title">
          Portfolio
        </a>
        <input type="checkbox" id="menu-toggle" className="navbar__input" />
        <label className="navbar__button" htmlFor="menu-toggle">
          <img src="../menuIcon.svg" alt="Menu Icon" loading="eager" />
        </label>
      </div>
      <ul className="navbar__list">
        <li className="navbar__item">
          <a
            href="/"
            className={`navbar__link ${
              currentPath === "" ? "navbar__link--active" : ""
            }`}
          >
            Home
          </a>
        </li>
        <li className="navbar__item">
          <a
            href="/projects"
            className={`navbar__link ${
              currentPath === "projects/" ? "navbar__link--active" : ""
            }`}
          >
            Projects
          </a>
        </li>
        <li className="navbar__item">
          <a
            href="/contact"
            className={`navbar__link ${
              currentPath === "contact/" ? "navbar__link--active" : ""
            }`}
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="navbar__profile">
        <img
          src="../avatar.webp"
          alt="avatar"
          className="navbar__avatar"
          loading="eager"
          height={64}
          width={64}
        />
        <div className="navbar__info">
          <p className="navbar__nickname">SyntaxBreaker</p>
          <p className="navbar__profession">Front-End Developer</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

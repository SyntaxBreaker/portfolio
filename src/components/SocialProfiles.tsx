import "../styles/social-profiles.scss";

function SocialProfiles() {
  return (
    <section className="social-profiles">
      <h1 className="social-profiles__title">SOCIALS</h1>
      <div className="social-profiles__links">
        <a
          href="https://github.com/SyntaxBreaker"
          className="social-profiles__link"
        >
          <img src="../github.svg" className="social-profiles__image" alt="" />{" "}
          Github
        </a>
        <a
          href="https://codepen.io/SyntaxBreaker"
          className="social-profiles__link"
        >
          <img src="../codepen.svg" className="social-profiles__image" alt="" />{" "}
          Codepen
        </a>
        <a
          href="https://dev.to/SyntaxBreaker"
          className="social-profiles__link"
        >
          <img src="../dev.svg" className="social-profiles__image" alt="" />{" "}
          Dev.to
        </a>
      </div>
    </section>
  );
}

export default SocialProfiles;

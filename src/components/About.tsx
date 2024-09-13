import "../styles/about.scss";

function About() {
  return (
    <section className="about">
      <h2 className="about__heading">About</h2>
      <div className="about__cards">
        <div className="about__card">
          <div className="about__header">
            <img src="about.svg" alt="" height={32} width={32} />
          </div>
          <div className="about__body">
            <p className="about__text">
              Who am I? I'm a self-taught front-end developer who enjoys
              creating web applications.
            </p>
          </div>
        </div>
        <div className="about__card">
          <div className="about__header">
            <img src="interests.svg" alt="" height={32} width={32} />
          </div>
          <div className="about__body">
            <p className="about__text">
              My interests are programming, creating digital products and
              solutions, cybersecurity, personal development, and automotive.
            </p>
          </div>
        </div>
        <div className="about__card">
          <div className="about__header">
            <img src="goal.svg" alt="" height={32} width={32} />
          </div>
          <div className="about__body">
            <p className="about__text">
              Current goal: Get my first job as a front-end developer.
            </p>
          </div>
        </div>
        <div className="about__card">
          <div className="about__header">
            <img src="quote.svg" alt="" height={32} width={32} />
          </div>
          <div className="about__body">
            <p className="about__text">
              Quote: "Failure is simply the opportunity to begin again, this
              time more intelligently." ~Henry Ford
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

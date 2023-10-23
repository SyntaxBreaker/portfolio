import "../styles/about.scss";

function About() {
  return (
    <section className="about">
      <h2 className="about__heading">ABOUT</h2>
      <div className="about__cards">
        <div className="about__card">
          <div className="about__header">
            <img src="about.svg" alt="" />
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
            <img src="interests.svg" alt="" />
          </div>
          <div className="about__body">
            <p className="about__text">
              My interests are Programming, Creating digital products and
              solutions, Personal Development, and Automotive.
            </p>
          </div>
        </div>
        <div className="about__card">
          <div className="about__header">
            <img src="goal.svg" alt="" />
          </div>
          <div className="about__body">
            <p className="about__text">
              Current goal: Get the first job as a front-end developer.
            </p>
          </div>
        </div>
        <div className="about__card">
          <div className="about__header">
            <img src="quote.svg" alt="" />
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

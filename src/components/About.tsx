import { ABOUT_SECTIONS } from "../constants";
import AboutCard from "./AboutCard";

function About() {
  return (
    <section className="about">
      <h2 className="about__heading">About</h2>
      <div className="about__cards">
        {ABOUT_SECTIONS.map(({ id, imgSrc, text }) => (
          <AboutCard key={id} imgSrc={imgSrc} text={text} />
        ))}
      </div>
    </section>
  );
}

export default About;

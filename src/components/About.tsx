import AboutCard from "./AboutCard";

const cardData = [
  {
    id: 0,
    imgSrc: "about.svg",
    text: "Who am I? I'm a self-taught front-end developer who enjoys creating web applications.",
  },
  {
    id: 1,
    imgSrc: "location.svg",
    text: "I am currently located in Poland, a country known for its rich history, vibrant culture, and beautiful landscapes.",
  },
  {
    id: 2,
    imgSrc: "interests.svg",
    text: "My interests are programming, creating digital products and solutions, cybersecurity, personal development, and automotive.",
  },
  {
    id: 3,
    imgSrc: "goal.svg",
    text: "Current goal: Get my first job as a front-end developer, preferably remote.",
  },
];

function About() {
  return (
    <section className="about">
      <h2 className="about__heading">About</h2>
      <div className="about__cards">
        {cardData.map((card) => (
          <AboutCard key={card.id} imgSrc={card.imgSrc} text={card.text} />
        ))}
      </div>
    </section>
  );
}

export default About;

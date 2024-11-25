import StackCard from "./StackCard";

const techStack = [
  "HTML",
  "CSS",
  "SCSS",
  "Javascript",
  "Typescript",
  "React",
  "Next.js",
  "Git",
];

function Stack() {
  return (
    <section className="stack">
      <h2 className="stack__heading">Stack</h2>
      <div className="stack__cards">
        {techStack.map((stack) => (
          <StackCard key={stack} text={stack} />
        ))}
      </div>
    </section>
  );
}

export default Stack;

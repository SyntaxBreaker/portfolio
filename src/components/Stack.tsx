import "../styles/stack.scss";

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
          <div key={stack} className="stack__card">
            <p className="stack__name">{stack}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stack;

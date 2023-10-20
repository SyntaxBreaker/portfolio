import "../styles/stack.scss";

function Stack() {
  return (
    <div className="stack">
      <h2 className="stack__heading">Stack</h2>
      <div className="stack__cards">
        <div className="stack__card">
          <p className="stack__name">HTML</p>
        </div>
        <div className="stack__card">
          <p className="stack__name">CSS</p>
        </div>
        <div className="stack__card">
          <p className="stack__name">SCSS</p>
        </div>
        <div className="stack__card">
          <p className="stack__name">Javascript</p>
        </div>
        <div className="stack__card">
          <p className="stack__name">Typescript</p>
        </div>
        <div className="stack__card">
          <p className="stack__name">React</p>
        </div>
        <div className="stack__card">
          <p className="stack__name">Next.js</p>
        </div>
        <div className="stack__card">
          <p className="stack__name">Git</p>
        </div>
      </div>
    </div>
  );
}

export default Stack;

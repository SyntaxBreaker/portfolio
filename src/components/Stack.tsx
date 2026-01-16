import { TECH_STACK } from "../constants";
import StackCard from "./StackCard";

function Stack() {
  return (
    <section className="stack">
      <h2 className="stack__heading">Stack</h2>
      <div className="stack__cards">
        {TECH_STACK.map((stack) => (
          <StackCard key={stack} text={stack} />
        ))}
      </div>
    </section>
  );
}

export default Stack;

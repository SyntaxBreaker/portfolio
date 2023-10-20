import "../styles/card.scss";

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="card">
      <h1 className="card__title">{title}</h1>
      <p className="card__description">{description}</p>
    </div>
  );
}

export default Card;

import "../styles/card.scss";

interface CardProps {
  title: string;
  description: string;
}

function Card({ title, description }: CardProps) {
  const [baseTitle, specialTitle] = title.includes("👋")
    ? title.split(". ")
    : [title, null];

  return (
    <div className="card">
      <h1 className="card__title">
        {specialTitle ? (
          <>
            {baseTitle}.{" "}
            <span className="card__waving-hand">{specialTitle}</span>
          </>
        ) : (
          baseTitle
        )}
      </h1>
      <p className="card__description">{description}</p>
    </div>
  );
}

export default Card;

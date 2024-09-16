interface AboutCardProps {
  imgSrc: string;
  text: string;
}

function AboutCard({ imgSrc, text }: AboutCardProps) {
  return (
    <div className="about__card">
      <div className="about__header">
        <img src={imgSrc} alt="" height={32} width={32} />
      </div>
      <div className="about__body">
        <p className="about__text">{text}</p>
      </div>
    </div>
  );
}

export default AboutCard;

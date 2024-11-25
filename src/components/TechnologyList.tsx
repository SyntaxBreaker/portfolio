interface TechnologyListProps {
  technologies: string[];
}

function TechnologyList({ technologies }: TechnologyListProps) {
  return (
    <ul className="technology-list">
      {technologies.map((technology) => (
        <li key={technology} className="technology-list__item">
          {technology.toLocaleUpperCase()}
        </li>
      ))}
    </ul>
  );
}

export default TechnologyList;

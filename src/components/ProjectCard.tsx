import type IProject from "../types/project";
import "../styles/project-card.scss";

function ProjectCard({ project }: { project: IProject }) {
  return (
    <div className="project-card">
      <div className="project-card__header">
        <a href={`${project.html_url}`}>
          <img
            src="../github.svg"
            alt=""
            aria-label="Github Repository"
            className="project-card__icon"
          />
        </a>
        {project.homepage && project.name !== "Portfolio" && (
          <a href={`${project.homepage}`}>
            <img
              src="../link.svg"
              alt=""
              aria-label="Project Homepage"
              className="project-card__icon"
            />
          </a>
        )}
      </div>
      <div className="project-card__body">
        <h2 className="project-card__name">{project.name}</h2>
        <p className="project-card__description">{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;

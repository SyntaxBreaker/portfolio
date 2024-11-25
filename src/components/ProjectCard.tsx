import type IProject from "../types/project";
import TechnologyList from "./TechnologyList";

function ProjectCard({ project }: { project: IProject }) {
  return (
    <div className="project-card">
      <div className="project-card__header">
        <a
          href={`${project.html_url}`}
          target="_blank"
          aria-label="Link to GitHub repository"
        >
          <img
            src="../github.svg"
            alt=""
            className="project-card__icon"
            height={32}
            width={32}
          />
        </a>
        {project.homepage && project.name !== "Portfolio" && (
          <a
            href={`${project.homepage}`}
            target="_blank"
            aria-label={`Link to ${project.name} website`}
          >
            <img
              src="../link.svg"
              alt=""
              className="project-card__icon"
              height={32}
              width={32}
            />
          </a>
        )}
      </div>
      <div className="project-card__body">
        <h2 className="project-card__name">{project.name}</h2>
        <p className="project-card__description">{project.description}</p>
        <TechnologyList technologies={project.topics} />
      </div>
    </div>
  );
}

export default ProjectCard;

import type Project from "../types/project";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <section className="project-list">
      {projects.length > 0 &&
        projects.map((project: Project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      <a
        href="https://github.com/SyntaxBreaker?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="project-list__link"
      >
        See All My Projects
      </a>
    </section>
  );
}

export default ProjectList;

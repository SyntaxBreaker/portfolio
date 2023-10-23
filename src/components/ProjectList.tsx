import type IProject from "../types/project";
import ProjectCard from "./ProjectCard";
import "../styles/project-list.scss";

function ProjectList({ projects }: { projects: IProject[] }) {
  return (
    <section className="project-list">
      {projects.length > 0 &&
        projects.map(
          (project: IProject) =>
            project.fork === false &&
            project.name !== "SyntaxBreaker" && (
              <ProjectCard project={project} key={project.id} />
            ),
        )}
    </section>
  );
}

export default ProjectList;

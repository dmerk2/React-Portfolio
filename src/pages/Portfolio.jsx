import Project from "../components/Project";
import projects from '../utils/projects'

export default function Portfolio() {
  return (
    <div className="container my-5">
      <h1 className="text-center">Recent Projects</h1>
      <div className="card-container">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            repo={project.repo}
          />
        ))}
      </div>
    </div>
  );
}

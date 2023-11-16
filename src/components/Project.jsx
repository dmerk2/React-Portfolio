import "../styles/Project.css";

const Project = ({ title, description, image, link, repo }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={`${title} project`} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text lead">{description}</p>
        <div className="button-container">
          <a
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            Project
          </a>
          <a
            href={repo}
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;

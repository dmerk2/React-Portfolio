import '../styles/Project.css'

const Project = ({ title, description, image, link }) => {
  return (
    <div className="card">
    <img src={image} className="card-img-top" alt={`${title} project`} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <a href={link} className="btn btn-primary">View Project</a>
    </div>
  </div>
  );
};

export default Project;

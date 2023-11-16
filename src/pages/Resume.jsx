import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faReact,
  faCss3Alt,
  faBootstrap,
  faNodeJs,
  faJs,
  faGithub,
  faGit,
  faSearchengin,
} from "@fortawesome/free-brands-svg-icons";
import resumePdfLink from "../assets/resume.pdf";

const Resume = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">Resume</h1>
      <div className="mt-4">
        <p className="lead">
          Download:{" "}
          <a href={resumePdfLink} download="Resume.pdf">
            Resume.pdf
          </a>
        </p>
      </div>
      <div className="row">
        <h2 className="my-4">Proficiencies</h2>
        <div className="col-md-4 card p-3">
          <h3>Front-end Tech</h3>
          <ul className="list-unstyled lead">
            <li className="mb-2">
              <FontAwesomeIcon icon={faHtml5} /> HTML5
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faCss3Alt} /> Responsive Design
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faCss3Alt} /> CSS3
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faNodeJs} /> Node.js
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faJs} /> JavaScript
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faReact} /> React
            </li>
          </ul>
        </div>
        <div className="col-md-4 card p-3">
          <h3>Back-end Tech</h3>
          <ul className="list-unstyled lead">
            <li className="mb-2">
              <FontAwesomeIcon icon={faNodeJs} /> Node.js
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faJs} /> Express.js
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faSearchengin} /> MySQL
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faSearchengin} /> NoSQL
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faSearchengin} /> Object Relational Mappers
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faSearchengin} /> Object Document Mappers
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faSearchengin} /> Sequelize
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faSearchengin} /> MongoDB
            </li>
          </ul>
        </div>
        <div className="col-md-4 card p-3">
          <h3>Performance Tech</h3>
          <ul className="list-unstyled lead">
            <li className="mb-2">
              <FontAwesomeIcon icon={faSearchengin} /> Progressive Web
              Applications
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faGit} /> Git
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faSearchengin} /> Search Algorithms
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faGithub} /> MVC Architecture
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faReact} /> AGILE Development
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;

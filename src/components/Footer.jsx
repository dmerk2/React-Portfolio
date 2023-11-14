import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="p-3 text-center fixed-bottom">
      <div className="container">
        <p className="mb-0">
          <a
            href="https://www.linkedin.com/in/dmerk2/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link mx-2"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          |
          <a
            href="https://github.com/dmerk2"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link mx-2"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </p>
        <p className="mb-0">© 2023 Daniel Merkin</p>
      </div>
    </footer>
  );
}

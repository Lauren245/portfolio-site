import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../css/Footer.css';

function Footer(){
    return (
        <footer className="py-3">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <p className="mb-0 me-3 fs-6">
              &copy; {new Date().getFullYear()} Lauren Moore
            </p>
            <div className="d-flex gap-3">
              <a
                href="https://github.com/Lauren245"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white footer-icon"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/lauren-j-m-m/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white footer-icon"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      );
}

export default Footer;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../css/Footer.css';

function Footer(){
    return(
        <footer className="bg-dark text-white py-3">
            <div className="container text-center">
                <p className="mb-1">&copy; {new Date().getFullYear()} Lauren Moore.</p>
                <div className="mt-2">
                    <a 
                        href="https://github.com/Lauren245"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white mx-2"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/lauren-j-m-m/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white mx-2"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

function Project({projects}){
// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository

    /*project card requirements:
        1. a titled image
        2. text of languages used
        3.  GitHub link 
        4. deployed link*/

    return(
        <div className='row'>
            {projects.map((project, index) => (
                <div key={index} className='col-md-4 mb-4'>
                     <div className="card text-bg-dark">
                        <img src="..." className="card-img" alt={project.title} />
                        <div className="card-img-overlay">
                            <span>
                                <h5 className="card-title">{project.title}</h5>
                                <a 
                                    href={project.gitHubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white mx-2"
                                >
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                </a>
                            </span>
                                <a 
                                    href={project.deployedLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white mx-2"
                                >
                                    Deployed Site
                                </a>
                            <p className="card-text">Languages Here</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

    Project.propTypes = {
        projects: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                gitHubLink: PropTypes.string.isRequired,
                deployedLink: PropTypes.string.isRequired,
            })
        ).isRequired,
    };

export default Project;
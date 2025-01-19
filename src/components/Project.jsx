import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Project({props}){
// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository

    /*project card requirements:
        1. a titled image
        2. text of languages used
        3.  GitHub link 
        4. deployed link*/

    return(
        <div className='row'>
            {props.map((props, index) => (
                <div key={index} className='col-md-4 mb-4'>
                     <div className="card text-bg-dark">
                        <img src="..." className="card-img" alt={props.title} />
                        <div className="card-img-overlay">
                            <span>
                                <h5 className="card-title">{props.title}</h5>
                                <a 
                                    href={props.gitHubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white mx-2"
                                >
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                </a>
                            </span>
                                <a 
                                    href={props.deployedLink}
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
}

/*        <div className="card text-bg-dark">
            <img src="..." className="card-img" alt="this will be an image" />
        <div className="card-img-overlay">
            <span>
                <h5 className="card-title">Card title</h5>
                <a 
                        href="https://github.com/Lauren245"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white mx-2"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </span>
            <p className="card-text">Languages Here</p>
        </div>
        </div> */
export default Project;
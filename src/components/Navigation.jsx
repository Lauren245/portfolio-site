import { Link, useLocation } from 'react-router-dom';
import '../css/Navigation.css';

function Navigation(){
    const currentPage = useLocation().pathname;

    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className='container-fluid px-4'>
                <a className='navbar-brand' href='/'>Lauren Moore</a>
                <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>       
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <li className='nav-item mb-2'>
                            <Link
                                to='/'
                                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                            > 
                                About
                            </Link>  
                        </li>
                        <li className = 'nav-item mb-2'>
                            <Link
                                to='/Portfolio'
                                className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className = 'nav-item mb-2'>
                            <Link
                                to='/Contact'
                                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className = 'nav-item mb-2'>
                            <Link
                                to='/Resume'
                                className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                            >
                                Resume
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
           
           
            

        </nav>
    );
}

export default Navigation;
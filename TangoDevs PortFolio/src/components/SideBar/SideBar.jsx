import './SideBar.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faComment , faCode } from '@fortawesome/free-solid-svg-icons';
 
const SideBar = ({language, changeLanguageEN, changeLanguageES}) => {

    return (
        <div className='navBar'>
            <Link to='/' className='logo'>
                <img src="" alt="TangoDevsLogo"/>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about" to="/about">
                    <FontAwesomeIcon icon={faUser} color="4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact" to="/contact">
                    <FontAwesomeIcon icon={faComment} color="4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="project" to="/projects">
                    <FontAwesomeIcon icon={faCode} color="4d4d4e"/>
                </NavLink>

                <button onClick={language === 'es' ? ()=>changeLanguageEN() : ()=>changeLanguageES()}>{language=== 'es' ? 'EN' : 'ES'}</button>
            </nav>
        </div>
    )
}

export default SideBar;
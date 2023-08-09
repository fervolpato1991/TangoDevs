import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo-s.png'
 
const SideBar = () => {
    return (
        <div className='navBar'>
            <Link to='/' className='logo'>
                <img src={logo} alt="TangoDevsLogo"/>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about" to="/about">
                    <FontAwesomeIcon icon={faUser} color="4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="project" to="/projects">
                    <FontAwesomeIcon icon={faCode} color="4d4d4e"/>
                </NavLink>
            </nav>
        </div>
    )
}

export default SideBar;
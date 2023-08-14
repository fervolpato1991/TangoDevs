import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/images/logo-s.png'
import { useState, useEffect } from 'react'; 
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
  } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const localLanguage= navigator.language.toLowerCase()
    const [language, setLanguage] = useState(localLanguage.startsWith('es')? 'es': 'en')
  
    const changeLanguageEN=()=>{
      setLanguage('en')
    }
    const changeLanguageES=()=>{
      setLanguage('es')
    }
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  
    return (
        <div className={`${
            scrolled ? "scrolled" : "navBar"
          }`} >
            <Link to='/' className='logo'>
                <img src={logo} alt="TangoDevsLogo"/>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="4d4d4e"/>
                </NavLink>
                <NavLink  activeclassname="active" className="portfolio-link" to="/projects"
                    onClick={() => setShowNav(false)} >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="about-link" to="/about"
                onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>

                <NavLink  activeclassname="active" className="contact-link" to="/contact"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <button onClick={language === 'es' ? ()=>changeLanguageEN() : ()=>changeLanguageES()}>{language=== 'es' ? 'EN' : 'ES'}</button>

            </nav>
        </div>
    )
}

export default SideBar;
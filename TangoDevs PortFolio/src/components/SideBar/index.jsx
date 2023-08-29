import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/images/Logo/logo-s.png';
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const SideBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const localLanguage = navigator.language.toLowerCase();
  const [language, setLanguage] = useState(localLanguage.startsWith('es') ? 'es' : 'en');

  const changeLanguageEN = () => {
    setLanguage('en');
  };

  const changeLanguageES = () => {
    setLanguage('es');
  };

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
        <img src={logo} alt="TangoDevsLogo" />
      </Link>
      <nav>
        <div className="icons">
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="4d4d4e" className="icon" />
          </NavLink>
          <NavLink activeclassname="active" className="portfolio-link" to="/projects"
            onClick={() => setShowNav(false)} >
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" className="icon" />
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/about"
            onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" className="icon" />
          </NavLink>
          <NavLink activeclassname="active" className="contact-link" to="/contact"
            onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" className="icon" />
          </NavLink>
          <button onClick={language === 'es' ? changeLanguageEN : changeLanguageES} className="icon">{language === 'es' ? 'EN' : 'ES'}</button>
        </div>
      </nav>
    </div>
  )
}

export default SideBar;
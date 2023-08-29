import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Animations from '../Animations';
import { faLinkedin, faGit } from '../../assets/images/index.js';
import './index.scss';
import { aboutEn, aboutEs, teamMembers } from "../../Extra/index.js";

const About = ({ language }) => {
  const [letterClass, setLetterClass] = useState('text-animate');

  About.propTypes = {
    language: PropTypes.string.isRequired,
  };

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const aboutTexts = language === 'es' ? aboutEs : aboutEn;

  return (
    <div className="container-about-page">
      <div className='text-zone'>
        <h1>
          <Animations
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'U', 's']}
            idx={15}
          />
        </h1>
        {aboutTexts.map((section, index) => (
          <h2 key={index}>{section.maintext}</h2>
        ))}
        <h2>{language === 'es' ? aboutEs.subtext : aboutEn.subtext}</h2>
        <h2>{aboutTexts[1].subtext}</h2>
        <div className="container-persons">
          {teamMembers.map((member) => (
            <section className="members" key={member.id}>
              <h1>{member.name}</h1>
              <img src={member.profileImage} alt={`foto de ${member.name}`} />
              <p>{language === 'es' ? `Esta persona se especializa en: ${member.specialization}` : `The speciality of this member is: ${member.specialization}`}</p>
              <p>{language === 'es' ? ` ${member.descriptionEs}` : ` ${member.descriptionEn}`}</p>
              <div className="social-srcs">
                <a className='linkedin' href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <img style={{width: '50px'}} src={faLinkedin} />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <img style={{width: '50px'}} src={faGit}  />
                </a>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
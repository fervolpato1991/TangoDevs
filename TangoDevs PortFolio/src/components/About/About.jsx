import { AboutEn, AboutEn2, AboutEs, AboutEs2, descriptionNahueEs } from "../../Extra/Constants"
import './About.scss'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { teamMembers } from "../../Extra/Constants";


const About = ({ language }) => {
    return (
      <div className='about-page'>
        <div className='text-zone'>
          <h1>
            {language === 'es' ? 'Sobre nosotros' : 'About Us'}
          </h1>
          <p>{language === 'es' ? AboutEs : AboutEn}</p>
          <h2>{language === 'es' ? AboutEs2 : AboutEn2}</h2>
          <div className="container-persons">
            {teamMembers.map((member) => (
              <section className="persons" key={member.id}>
                <h1>{member.name}</h1>
                <img src={member.profileImage} alt={`foto de ${member.name}`} />
                <p>{language === 'es' ? `Esta persona se especializa en: ${member.specialization}` : `The speciality of this member is: ${member.specialization}`}</p>
                <div className="social-icons">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
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
import{  aboutEn, aboutEs, teamMembers }  from "../../Extra/index.js";
import './index.scss'
import Loader from 'react-loaders'
import Animations from '../Animations'
import { useEffect, useState } from 'react'
import  { faFigma ,faReact ,faGit ,faMongodb ,faNodejs ,
faTailwind, faLinkedin } from '../../assets/images/index.js'


const About = ({ language }) => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

    return (
      <div className="container about-page">
        <div className='text-zone'>
        <h1>
            <Animations
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'U', 's']}
              idx={15}
            />
          </h1>
          <p>{language === 'es' ? aboutEs.maintext : aboutEn.maintext}</p>
          <h2>{language === 'es' ? aboutEs.subtext : aboutEn.subtext}</h2>
          <div className="container-persons">
            {teamMembers.map((member) => (
              <section className="members" key={member.id}>
                <h1>{member.name}</h1>
                <img src={member.profileImage} alt={`foto de ${member.name}`} />
                <p>{language === 'es' ? `Esta persona se especializa en: ${member.specialization}` : `The speciality of this member is: ${member.specialization}`}</p>
                <p>{language === 'es' ? `Descripcion: ${member.descriptionEs}` : `Description: ${member.descriptionEn}`}</p>
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
          <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={faFigma} color="#DD0031" />
            </div>

            <div className="face2">
              <img src={faNodejs} color="#F06529" />
            </div>
            <div className="face3">
              <img src={faTailwind} color="#28A4D9" />
            </div>
            <div className="face4">
              <img src={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <img src={faGit} color="#EFD81D" />
            </div>
            <div className="face6">
              <img src={faFigma} color="#EC4D28" />
            </div>
            <div className="face6">
              <img src={faMongodb} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default About;
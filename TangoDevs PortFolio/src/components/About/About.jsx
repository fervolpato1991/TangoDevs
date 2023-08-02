import { AboutEn, AboutEn2, AboutEs, AboutEs2, descriptionNahueEs } from "../../Extra/texts"
import './About.scss'

const About = ({language})=>{

    return(
        <div className='about-page'>
        <div className='text-zone'>
        <h1>
            {language=== 'es' ? 'Sobre nosotros' : 'About Us'}
        </h1>
        <p>{language === 'es'? AboutEs : AboutEn}</p>
        <h2>{language === 'es'? AboutEs2 : AboutEn2}</h2>
        <div className="container-persons">
            <section className="persons">
                <h1>Fernando</h1>
                <img src="" alt="foto de la persona" />
                <p>Gisella</p>
                <p>{language === 'es' ? 'Esta persona se especializa en: ' : 'The speciality of this member is:'}</p>
            </section>
            <section className="persons">
                <h1>Gisella</h1>
                <img src="" alt="foto de la persona" />
                <p></p>
                <p>{language === 'es' ? 'Esta persona se especializa en: ' : 'The speciality of this member is:'}</p>
            </section>
            <section className="persons">
                <h1>Nahuel</h1>
                <img src="" alt="foto de la persona" />
                <p>{language === 'es' ? descriptionNahueEs : descriptionNahueEs }</p>
                <p>{language === 'es' ? 'Esta persona se especializa en: ' : 'The speciality of this member is:'} Front-End</p>
            </section>
            <section className="persons">
                <h1>Rodrigo</h1>
                <img src="" alt="foto de la persona" />
                <p></p>
                <p>{language === 'es' ? 'Esta persona se especializa en: ' : 'The speciality of this member is:'}</p>
            </section>
            <section className="persons">
                <h1>Santiago</h1>
                <img src="" alt="foto de la persona" />
                <p></p>
                <p>{language === 'es' ? 'Esta persona se especializa en: ' : 'The speciality of this member is:'}</p>
            </section>
        </div>

        </div>

    </div>

    )
}

export default About
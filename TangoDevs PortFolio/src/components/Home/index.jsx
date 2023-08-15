import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import Animations from '../Animations'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['T', 'a', 'n', 'g', 'o', 'D', 'e', 'v', 's']
  const jobArray = [ 'D','e','s','a','r','r','o','l','l','a','d','o','r','e','s',' ', 'A','r','g','e','n','t','i','n','o','s',' ','U','n','i','d','o','s'   ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>Hola</span>
            <span className={`${letterClass} _12`}> !, </span>
            <br />
            <span className={`${letterClass} _13`}> Nosotros </span> 
            
            <span className={`${letterClass} _14`}> somos </span>
            
            <Animations
              letterClass={letterClass}
              strArray={nameArray}
              idx={0}
            />
            <br />
            <Animations
              letterClass={letterClass}
              strArray={jobArray}
              idx={0}
            />
          </h1>
          <h2> Fullstack Developers // Creaive Web Design & Development</h2>
          <Link to="/contact" className="flat-button">
            CONTACT US
          </Link>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import Animations from '../Animations'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['T', 'a', 'n', 'g', 'o', 'D', 'e', 'v', 's']
  const jobArray = [ 'A','r','g','e','n','t','i','n','i','a','n',' ','D','e','v','e','l','o','p','e','r','s',' ','U','n','i','t','e','d'   ]

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
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}> i, </span>
            <br />
            <span className={`${letterClass} _13`}> We </span>
            <span className={`${letterClass} _14`}> Are </span>
            
            <Animations
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <Animations
              letterClass={letterClass}
              strArray={jobArray}
              idx={25}
            />
          </h1>
          <h2>Fullstack Developers // Creaive Web Design & Development</h2>
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
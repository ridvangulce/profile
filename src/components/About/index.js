import { useEffect, useState } from 'react'
import {
  faUnity,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">

          <h1 className='flex space-x-3'>
            <div className='h-10'>

              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't']}
                idx={15}
              />
            </div>
            <div className='ml-9'>

              <AnimatedLetters
                letterClass={letterClass}
                strArray={['M', 'e']}
                idx={15}
              />
            </div>

          </h1>

          <p>
            I've been developing software since November 2020 and have
            experience with React.js, Node.js, Flask API, MongoDB, Firebase primarily using it to develop websites.
            Since June 2021, I have been developing mobile games using the Unity
            Engine.
          </p>
          <br />
          <p>
            Additionally, I have developed 2 games that were published on the
            market.
          </p>
          <br />
          <p>
            I am skilled in using OOP, design patterns and ScriptableObjects to
            write reusable and readable code. I am also procient in using tools
            such as Git, SourceTree, VS Code and Rider.
          </p>
          <br />
          <p align="LEFT">
            I am particularly interested in web development.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faUnity} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>

          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

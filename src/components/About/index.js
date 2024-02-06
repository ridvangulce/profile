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
            As a driven software developer, I possess a diverse skill set encompassing both front-end and back-end web development, complemented by a strong background in crafting captivating mobile and PC games since 2021. With an insatiable thirst for knowledge and personal growth, I thrive on tackling new challenges within the ever-evolving landscape of technology. My true passion lies in coding inventive solutions that enhance user interactions and experiences.

            My journey in software development commenced in November 2020, and since then, I've honed my expertise with technologies like React.js, Node.js, PHP, Flask API, MySQL, MongoDB, and Firebase, primarily focusing on website development.
          </p>
          <br />
          <p>
            Transitioning into the realm of mobile game development using the Unity Engine in June 2021 has further enriched my skill set.

            Notably, I've proudly developed and published two games in the market, showcasing my dedication and proficiency in game development.

          </p>
          <br />
          <p>
            Proficient in Object-Oriented Programming (OOP), design patterns, and leveraging ScriptableObjects, I specialize in crafting code that is both reusable and easy to understand. Additionally, I am adept at utilizing essential tools such as Git, SourceTree, VS Code, and Rider to streamline development processes.

            My passion for web development is unwavering, and I am deeply committed to pushing the boundaries of what's possible in this exciting field.
          </p>
          <br />

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

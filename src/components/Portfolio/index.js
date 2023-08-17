import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import VideoList from '../VideoList/VideoList'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const data = [];
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>

        <div>
          <VideoList />
        </div>
        <div></div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio

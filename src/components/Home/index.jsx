import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import portfolio from "../data/portfolio.json"

const Home = () => {
  const [imageUrls, setImageUrls] = useState({});

  useEffect(() => {
    const promises = portfolio.avatar.map((item) => {
      if (item.avatar) {
        const videoStorageRef = ref(storage, `images/${item.avatar}`);

        return getDownloadURL(videoStorageRef)
          .then((url) => {
            setImageUrls(prevState => ({ ...prevState, [item.id]: url }));
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });

  }, [imageUrls]);


  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['', '', 'R', 'i', 'd', 'v', 'a', 'n']
  const jobArray = [
    'g',
    'a',
    'm',
    'e',
    '&',
    ' ',
    'w',
    'e',
    'b',
    '',
    '',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r'
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 6000)
  }, [])

  const renderPortfolioItem = (item) => (
    <div key={item.id} >
      <div className="bg-gradient-to-b from-white to-red-500 rounded-full ">
        <img src={imageUrls[item.id]} alt={item.name} className="object-cover object-bottom rounded-full" />
      </div>
    </div>

  );
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} text-4xl  md:text-5xl`}>H</span>
            <span className={`${letterClass} _12 text-3xl md:text-4xl `}>i</span>
            <br />
            <span className={`${letterClass} _13 text-4xl md:text-5xl`}>I</span>
            <span className={`${letterClass} _13 text-4xl md:text-4xl`}>'</span>
            <span className={`${letterClass} _14 text-3xl md:text-4xl`}>m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={12}
            />

          </h1>

          <h2 className=' text-yellow-500'>Full-Stack Developer / Game Developer</h2>
        </div>

        <div className="bg-gradient-to-b from-white to-red-500 rounded-full  md:w-96 md:h-96  bg-black md:float-right">

          {portfolio.avatar.map(renderPortfolioItem)}

        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home

import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import portfolioData from '../data/portfolio.json';
import { AiFillCloseCircle } from "react-icons/ai"
import { useMediaQuery } from 'react-responsive';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function VideoPlayer() {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // 767px ve altındaysa mobil olarak kabul et
  const [videoUrls, setVideoUrls] = useState({});
  const [coverUrls, setCoverUrls] = useState({});
  const [isVideoOpen, setIsVideoOpen] = useState({});
  const slidesToShow = isMobile ? 1 : 3;

  useEffect(() => {
    Promise.all(portfolioData.portfolio.map((item) => {
      if (item.video) {
        const videoStorageRef = ref(storage, `videos/${item.video}`);
        return getDownloadURL(videoStorageRef)
          .then((url) => {
            setVideoUrls(prevState => ({ ...prevState, [item.id]: url }));
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }))
      .then(() => {
        setIsVideoOpen(Object.fromEntries(portfolioData.portfolio.map((item) => [item.id, false])));
      })
  }, []);

  useEffect(() => {
    Promise.all(portfolioData.portfolio.map((item) => {
      if (item.cover) {
        const coverStorageRef = ref(storage, `images/${item.cover}`);
        return getDownloadURL(coverStorageRef)
          .then((url) => {
            setCoverUrls(prevState => ({ ...prevState, [item.id]: url }));
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }))
  }, []);

  const handleVideoToggle = (id) => {
    setIsVideoOpen(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  }

  const handleCloseVideo = (id) => {
    setIsVideoOpen(prevState => ({
      ...prevState,
      [id]: false
    }));
  }

  const renderPortfolioItem = (item) => (
    <div key={item.id} className="relative bg-transparent items-center justify-items-center">
      <div className="bg-black rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer items-center" style={{ width: '400px', height: '500px' }} onClick={() => handleVideoToggle(item.id)}>
        {coverUrls[item.id] ? (
          <div>
            <img src={coverUrls[item.id]} alt={item.name} className="object-cover object-bottom" style={{ width: '400px', height: '400px' }} />
          </div>

        ) : (
          <div className="h-40 bg-gray-400 animate-pulse"></div>
        )}
        <div className="px-4 py-2 bg-black">
          <h3 className=" text-yellow-500 font-bold text-lg mb-2">{item.name}</h3>
          <p className="text-white opacity-50 text-sm mt-auto">{item.description}</p>
        </div>


      </div>
      <div >
        {item.link ? (
          <div className='bg-transparent flex justify-center'>
            <Link
              className="bg-white p-3 rounded-lg justify-center text-black hover:text-blue-700 hover:underline hover:text-lg hover:bg-gray-200 duration-200"
              target="_blank"
              to={item.link}
            >
              {item.link}
            </Link>
          </div>


        ) : null}
      </div>
      <div>

      </div>
      {
        item.video && isVideoOpen[item.id] && (
          <div className="absolute top-0 left-0 z-10 h-full w-full flex items-center justify-center">
            <div className="bg-black opacity-75 absolute h-full w-full"></div>
            <button className="absolute top-4 right-4 rounded-full" onClick={() => handleCloseVideo(item.id)}>
              <AiFillCloseCircle className='text-white h-full w-full m-1' />
            </button>
            <video src={videoUrls[item.id]} controls autoPlay className="z-20" />
          </div>

        )
      }
    </div >
  );

  return (
    <div className="md:mx-8 px-4 md:px-20 py-4 md:py-10  h-full w-full">
      <Slider dots={true} infinite={true} speed={500} slidesToShow={slidesToShow} slidesToScroll={1}>
        {portfolioData.portfolio.map(renderPortfolioItem)}
      </Slider>
    </div>

  );
}

export default VideoPlayer;

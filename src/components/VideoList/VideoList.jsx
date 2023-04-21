import { useEffect, useState } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import portfolioData from '../data/portfolio.json';

function VideoPlayer() {
  const [videoUrls, setVideoUrls] = useState({});

  useEffect(() => {
    const urls = {};
    portfolioData.portfolio.forEach((item) => {
      if (item.video) {
        const storageRef = ref(storage, item.video);
        getDownloadURL(storageRef)
          .then((url) => {
            urls[item.id] = url;
            setVideoUrls(urls);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    })
  }, []);

  return (
    <div>
      <ul>
        {portfolioData.portfolio.map((item) => (
          <li key={item.id}>
            <img src={item.cover} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            {item.video && (
              <div>
                <video src={videoUrls[item.id]} controls width="400" height="400"></video>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoPlayer;
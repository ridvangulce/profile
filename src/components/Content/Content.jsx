import React, { useEffect,useState } from 'react'
import portfolioData from '../data/portfolio.json';
import video from "../video/videos/video.mp4";
import ReactPlayer from 'react-player'
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
const Content = () => {
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        const storageRef = ref(storage, );
        getDownloadURL(storageRef)
            .then((url) => {
                setVideoUrl(url);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h2>Portfolio</h2>
            <ul>
                {portfolioData.portfolio.map((item) => (
                    <li key={item.id}>
                        <img src={item.cover} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        {item.video && (
                            <div>
                                <iframe width="560" height="315" src={videoUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Content
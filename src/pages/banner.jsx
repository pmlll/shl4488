import React from 'react';
import video from '../content/video.mp4';
import '../styles/Banner.css';


const Banner = () => {
    return (
        <div className="banner">
            <video className="banner-video" src={video} playsInline autoPlay loop muted />
            <div className="banner-overlay"></div>
            <div className="banner-content">
                <h1></h1>
                <p></p>
                <button className="banner-button">LOVE LASTS FOREVER</button>
            </div>
        </div>
    );
};


export default Banner;
// Импорт видеофайла
import React from 'react';
import video from '../content/video.mp4'; // Относительный путь к видеофайлу
import '../styles/Banner.css';


const Banner = () => {
    return (
        <div className="banner">
            <video className="banner-video" src={video} autoPlay loop muted />
            <div className="banner-overlay"></div>
            <div className="banner-content">
                <h1>Добро пожаловать в Магазин Вещей</h1>
                <p>Самые стильные и качественные вещи для вас</p>
                <button className="banner-button">Посмотреть коллекцию</button>
            </div>
        </div>
    );
};


export default Banner;
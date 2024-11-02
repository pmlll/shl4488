// Импорт необходимых модулей и файлов
import React from 'react';
import video from '../content/about.mp4'; // Относительный путь к видеофайлу
import '../styles/about.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <video className="about-us-video" src={video} autoPlay loop muted />
            <div className="about-us-overlay"></div>
            <div className="about-us-content">
                <h1>Про нас</h1>
                <p>
                    Ми - команда професіоналів, яка працює, щоб надати вам найкращі послуги.
                    З багаторічним досвідом та інноваційним підходом ми прагнемо перевершити очікування наших клієнтів.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;

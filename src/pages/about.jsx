import React from 'react';
import '../styles/about.css';

const About = () => {
    return (
        <div className="about-us">
            <h1>Про нас</h1>
            <p>
                Добро пожаловать в наш магазин! Мы стремимся предложить вам лучшие товары, которые
                сочетают качество, стиль и доступность. Наша миссия — помочь вам находить вещи, которые
                дополнят ваш стиль и поднимут настроение.
            </p>
            <h2>Наша история</h2>
            <p>
                Мы начали свою деятельность в [год основания], когда несколько энтузиастов решили создать
                уникальный магазин, который удовлетворит потребности самых взыскательных клиентов.
            </p>
            <h2>Почему выбирают нас</h2>
            <ul>
                <li>Высокое качество товаров</li>
                <li>Широкий ассортимент</li>
                <li>Дружелюбное обслуживание</li>
                <li>Доступные цены</li>
            </ul>
            <div style={{
                backgroundColor: 'rgba(255, 0, 0, 0.7)', // Red with 70% transparency
                padding: '0px',
                opacity: 0 // Apply overall transparency
            }}>
                <h2>This box combines both opacity and transparent background</h2>
                <p>This text has a red background with 70% transparency and the entire box is 80% opaque.</p>
            </div>
        </div>
    );
};

export default About;

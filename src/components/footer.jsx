import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2023 MyShop. Все права защищены.</p>
            <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
        </footer>
    );
};

export default Footer;

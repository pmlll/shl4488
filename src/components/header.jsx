import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Switch,
    NavLink,
} from "react-router-dom";

import '../styles/Header.css';

import About from '../pages/about';
import Banner from '../pages/banner';
import CatalogPage from '../pages/Cataloge';

const Header = () => {
    return (
            <header className="header">
                <h1 className="logo">shl 4488</h1>
                <nav className="nav">
                    <NavLink to="/" className="nav-button">Головна</NavLink>
                    <NavLink to="/CatalogPage" className="nav-button">Каталог</NavLink>
                    <NavLink to="/cart" className="nav-button">Корзина</NavLink>
                    <NavLink to="/About" className="nav-button">Про нас</NavLink>
                </nav>
            </header>
    );
};

export default Header;

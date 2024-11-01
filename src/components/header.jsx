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


const Header = () => {
    return (
            <header className="header">
                <h1 className="logo">shl 4488</h1>
                <nav className="nav">
                    <NavLink to="/" className="nav-button">Головна</NavLink>
                    <NavLink to="/CatalogPage" className="nav-button">Каталог</NavLink>
                    <NavLink to="/cart" className="nav-button">Корзина</NavLink>
                    <NavLink to="/About" className="nav-button">Про нас</NavLink>
                    <NavLink to="/login" className="nav-button">Login</NavLink>
                    <NavLink to="/singup" className="nav-button">Signup</NavLink>
                </nav>
            </header>
    );
};

export default Header;

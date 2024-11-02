import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Switch,
    NavLink,
    useNavigate,
} from "react-router-dom";

import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

import '../styles/Header.css';



const Header = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    const handleToLog = async () =>{
        navigate('/login');
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setIsAuthenticated(!!user);
        });

        // Очистка слушателя при размонтировании компонента
        return () => unsubscribe();
    }, []);

    return (
            <header className="header">
                <h1 className="logo">shl 4488</h1>
                <nav className="nav">
                    <NavLink to="/" className="nav-button">Головна</NavLink>
                    <NavLink to="/CatalogPage" className="nav-button">Каталог</NavLink>
                    <NavLink to="/cart" className="nav-button">Корзина</NavLink>
                    <NavLink to="/About" className="nav-button">Про нас</NavLink>
                    {isAuthenticated ? (
                        <button onClick={handleLogout} className="nav-button1">Вихід</button>
                    ) : (
                        <button onClick={handleToLog} className="nav-button1">Вхід</button>
                    )}
                </nav>
            </header>
    );
};

export default Header;

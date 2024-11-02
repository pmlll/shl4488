import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CatalogPage from "./pages/Cataloge";
import CartPage from "./pages/CartPage";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./pages/banner";
import About from "./pages/about";
import Signup from "./pages/singup";
import Login from "./pages/login"
import AuthCheck from "./AuthCheck";

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (index) => {
        setCartItems(cartItems.filter((_, i) => i !== index));
    };

    return (
        <Router>
            <div>

                <Header />
                    <Routes>
                        <Route path="/" element={<Banner/>}/>
                        <Route path="/catalogpage" element={<CatalogPage addToCart={addToCart}/>}/>
                        <Route path="/cart"
                               element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart}/>   }/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/singup" element={<Signup/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>

                    <Footer/>
                </div>
        </Router>
);
}

export default App;

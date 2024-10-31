import React, { useState, useEffect } from 'react';
import {BrowserRouter, BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";


import CatalogPage from "./pages/Cataloge";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./pages/banner";
import About from "./pages/about";
import NotFound from "./pages/notfound";
import WhiteTee from "./pages/products/white-tee";
import Lastrelease from "./pages/Lastrelease";



function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Banner />} />
                    <Route path="/catalogpage" element={<CatalogPage />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}


export default App;
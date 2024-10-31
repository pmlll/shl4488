import React from 'react';
import '../styles/catalog.css';
import WhiteTee from "./products/white-tee";
import BlackLong from "./products/black-long";
import BlackTee from "./products/black-tee";
import Bandana from "./products/bandana";
import Whitejersey from "./products/whitejersey";
import Blackjersey from "./products/blackjersey";
import Frenchtee from "./products/frenchtee";
import Lastrelease from "./Lastrelease";



function CatalogPage({ addToCart }) {
    return (
        <div className="catalog-page">
            <h1>Ccataloge</h1>
            <div className="product-grid">
                <WhiteTee addToCart={addToCart} />
                <BlackLong addToCart={addToCart} />
                <BlackTee addToCart={addToCart} />
                <Bandana addToCart={addToCart} />
                <Blackjersey addToCart={addToCart} />
                <Whitejersey addToCart={addToCart} />
                <Frenchtee addToCart={addToCart} />
            </div>
        </div>
    );
}

export default CatalogPage;

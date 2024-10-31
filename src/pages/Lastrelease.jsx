import React from 'react';
import '../styles/catalog.css';
import WhiteTee from "./products/white-tee";
import BlackLong from "./products/black-long";
import BlackTee from "./products/black-tee";
import Bandana from "./products/bandana";



function CatalogPage() {
    return (
        <div className="catalog-page">
            <h1>Last Release</h1>
            <div className="product-grid">
                <WhiteTee/>
                <BlackLong/>
                <BlackTee/>
                <Bandana/>
            </div>
        </div>
    );
}

export default CatalogPage;

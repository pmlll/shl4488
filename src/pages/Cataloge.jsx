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



function CatalogPage() {
    return (
        <div className="catalog-page">
            <h1>Cataloge</h1>
            <div className="product-grid">
                <WhiteTee/>
                <BlackLong/>
                <BlackTee/>
                <Bandana/>
                <Blackjersey/>
                <Whitejersey/>
                <Frenchtee/>
            </div>
            <Lastrelease/>
        </div>
    );
}

export default CatalogPage;

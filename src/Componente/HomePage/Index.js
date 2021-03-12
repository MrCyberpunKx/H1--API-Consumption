import React from 'react';
import Card from '../Card/Index';
import Card2 from '../Card2/Index';
import Card3 from '../Card3/Index';
import './style.css';

function HomePage() {
    return(
        <div className="home-page">
            <Card />
            <Card2 />
            <Card3 />
        </div>
    );
}

export default HomePage;
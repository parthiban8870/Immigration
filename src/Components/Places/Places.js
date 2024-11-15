import React from 'react';
import './Places.css'; // Assuming you'll create a separate CSS file for styles


import usa from '../../Assets/Us1.webp'
import canada from '../../Assets/canada.jpg'
import  uk from '../../Assets/uk1.jpg'
import australia from '../../Assets/Australia1.jpg'
import newzealand from '../../Assets/New Zealand1.jpg'
import europe from '../../Assets/europe1.jpg'


const countries = [
    { name: 'United States', image: usa },
    { name: 'Canada', image: canada },
    { name: 'Australia', image: australia },
    { name: 'New Zealand', image: newzealand },
    { name: 'Europe', image: europe},
    { name: 'United Kingdom', image: uk },
];

const Places = () => {
    return (
        <div className="places-container">
            <header className="header">
                <h1>Immigration & Visa Services
                       Following Countries</h1>
            </header>
            <div className="gallery">
                {countries.map((country) => (
                    <div className="card" key={country.name}>
                        <img src={country.image} alt={country.name} />
                        <h2>{country.name}</h2>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Places;

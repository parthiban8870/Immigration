// MainComponent.js  
import React from 'react'; 
import './Contactus.css'
import Reviewform from './Reviewform'; // Your existing contact form component  
import RatingCard from './Ratingcard';  

const MainComponent = () => {  
    return (  
        <div style={{ display: 'flex' }}>  
            <Reviewform />  
            <RatingCard />  
        </div>  
    );  
};  

export default MainComponent;
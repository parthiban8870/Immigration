import React, { useState, useEffect } from 'react';  
import PropTypes from 'prop-types';  
import './Review.css'; // Ensure this file includes the necessary CSS for right-to-left layout  

const reviews = [  
  {  
    name: "Sivashanmugam, Muniappan (Siva)",  
    location: "Singapore",  
    rating: 4,  
    text: "Thiru was totally professional in his approach right from day one. He understood the clients' priorities and displayed a great sense of dedication and timing to file the visa application, communicate with the client, submit documents and answered questions in a highly professional and up-to-the-point manner. Very meticulous and detailed in his work. No fuss whatsoever. Top class service. I would certainly recommend Thiru for any prospective migrant. Thiru, please accept our sincere thanks."  
  },  
  {  
    name: "Mr & Mrs Lakshmikandan",  
    location: "Happy Student",  
    rating: 4,  
    text: "First of all we would like to thank you very much for getting positive visa result. We have achieved this visa grant only because of your keen follow ups. The first achievement was the Successful TRA Result. This was because of your guidance. Next was Main application launching. In this stage, the effort you put was very amazing. Because of your sincere effort all have got succeeded. We will be enjoying our life in Australia and celebrate our friendship throughout our life. Once again we all from my family thank you very much."  
  },  
  {  
    name: "Mary Jones Maxime",  
    location: "Happy Student",  
    rating: 4,  
    text: "Wish you a happy and prosperous new year!!!! I would like to thank you for the help that you have done for Maxime and myself in getting the visa process done so fast. I am sure that without your suggestions and timely support we would not have made it possible. Wish you a harmonious and successful year!!!! May this year add even more happiness to you and your family!!!!"  
  },  
  {  
    name: "Seetharaman, Sivagami, Sandhiya",  
    location: "Project Manager @ Infosys Technologies Limited, Chennai, India",  
    rating: 4,  
    text: "You were really patient in answering our queries and your thorough guidance helped us reach success at ease. You gave us the visibility and made us be sure of what was happening with our application and be sure of what to expect next. There have been times when we nearly gave up, but you motivated us to keep going. Thank you for all the efforts and dedication you have to put on our application to make this move possible. We would love to recommend you to our friends just like the way we got introduced to you."  
  }  
];  

const Review = ({ review }) => {  
  return (  
    <div className="review-card">  
      <h3>{review.name} / {review.location}</h3>  
      <div className="rating">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>  
      <p>{review.text}</p>  
    </div>  
  );  
};  

Review.propTypes = {  
  review: PropTypes.shape({  
    name: PropTypes.string.isRequired,  
    location: PropTypes.string.isRequired,  
    rating: PropTypes.number.isRequired,  
    text: PropTypes.string.isRequired,  
  }).isRequired,  
};  

const Reviews = () => {  
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);  
  const reviewsToShow = 2; // Number of reviews to show at one time  

  useEffect(() => {  
    const interval = setInterval(() => {  
      setCurrentReviewIndex((prevIndex) => (prevIndex + reviewsToShow) % reviews.length);  
    }, 5000); // Change review every 5 seconds  

    return () => clearInterval(interval); // Cleanup on unmount  
  }, []);  

  const currentReviews = reviews.slice(currentReviewIndex, currentReviewIndex + reviewsToShow);  

  return (  
    <div className="reviews-container">  
      <h2>What Customers
      Say About Nicimmigration</h2>  
      <div className="reviews">  
        {currentReviews.map((review, index) => (  
          <Review key={index} review={review} />  
        ))}  
      </div>  
    </div>  
  );  
};  

export default Reviews;
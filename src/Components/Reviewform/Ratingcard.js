import React, { useState } from 'react';
import './Ratingcard.css'; // Import the CSS file

const FeedbackCard = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0); // Add a state for the rating
  const [hover, setHover] = useState(null); // Handle hover effect for stars

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback submitted!\nName: ${name}\nFeedback: ${feedback}\nRating: ${rating} stars`);
  };

  return (
    <div className="feedback-container">
      <h2>Rating and Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input-field"
        />
        <label htmlFor="feedback">Your Feedback</label>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
          className="textarea-field"
        />
        <div className="rating-stars">
          <p>Your Rating:</p>
          {[...Array(5)].map((star, index) => {
            const starValue = index + 1;
            return (
              <span key={index}>
                <i
                  className={`star-icon ${starValue <= (hover || rating) ? 'filled' : 'empty'}`}
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(null)}
                >
                  &#9733;
                </i>
              </span>
            );
          })}
        </div>
        <button type="submit" className="submit-button">Send Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackCard;

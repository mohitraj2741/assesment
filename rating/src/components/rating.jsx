import React, { useState } from 'react';
import './rating.css'

function Rating() {
  const [rating, setRating] = useState(0);

  function handleClick(index) {
    setRating(index + 1);
  }

  return (
    <div id="rating">
      {[...Array(5)].map((star, index) => (
        <span
          key={index}
          className={index < rating ? 'active' : 'notactive'}
          onClick={() => handleClick(index)}
        >
          *
        </span>
      ))}
    </div>
  );
}

export default Rating;
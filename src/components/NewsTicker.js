import React from 'react';
import './NewsTicker.css';

const NewsTicker = ({ news }) => {
    
  return (
    <div className="news-ticker-container ">
      <ul className="news-list">
        {news.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewsTicker;

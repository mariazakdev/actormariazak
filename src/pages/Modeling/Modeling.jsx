import React from 'react';
import '../../Styles/Galleries.scss';

const Modeling = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image URLs
  ];

  return (
    <div className="gallery">
      <h2>Modeling Photos</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Acting ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modeling;

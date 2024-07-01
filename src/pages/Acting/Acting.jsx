import React, { useRef } from 'react';
import img1 from '../../assets/images/galleries/theatre/1.jpg';
import img2 from '../../assets/images/galleries/theatre/11.jpg';
import img3 from '../../assets/images/galleries/theatre/13.jpg';
import img4 from '../../assets/images/galleries/theatre/15.jpg';
import img5 from '../../assets/images/galleries/theatre/2.jpg';
import img6 from '../../assets/images/galleries/theatre/3.jpg';
import img7 from '../../assets/images/galleries/theatre/6.jpg';
import img8 from '../../assets/images/galleries/theatre/8.jpg';


import '../../Styles/Galleries.scss';

const Acting = () => {
  const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="gallery">
      <h2>Acting Photos</h2>
      <div className="scroll-buttons">
        <button onClick={scrollLeft} className="scroll-button left">{'<'}</button>
        <button onClick={scrollRight} className="scroll-button right">{'>'}</button>
      </div>
      <div className="gallery-container" ref={scrollRef}>
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Acting ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Acting;

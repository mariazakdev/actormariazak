import React, { useRef } from 'react';
import img1 from '../../assets/images/galleries/dance/1.jpg';
import img2 from '../../assets/images/galleries/dance/11.jpg';
import img3 from '../../assets/images/galleries/dance/2.jpg';
import img4 from '../../assets/images/galleries/dance/3.jpg';
import img5 from '../../assets/images/galleries/dance/4.jpg';
import img6 from '../../assets/images/galleries/dance/5.jpg';
import img7 from '../../assets/images/galleries/dance/6.jpg';
import img8 from '../../assets/images/galleries/dance/7.jpg';
import img9 from '../../assets/images/galleries/dance/8.jpg';
import img10 from '../../assets/images/galleries/dance/9.jpg';


import '../../Styles/Galleries.scss';

const Dance = () => {
  const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10
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
      <h2>Dance Photos</h2>
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

export default Dance;

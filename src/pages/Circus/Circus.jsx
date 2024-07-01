import React, { useRef } from 'react';
import img1 from '../../assets/images/galleries/circus/1.jpg';
import img2 from '../../assets/images/galleries/circus/10.jpg';
import img3 from '../../assets/images/galleries/circus/11.jpg';
import img4 from '../../assets/images/galleries/circus/111.jpg';
import img5 from '../../assets/images/galleries/circus/2.jpg';
import img6 from '../../assets/images/galleries/circus/3.jpg';
import img7 from '../../assets/images/galleries/circus/4.jpg';
import img8 from '../../assets/images/galleries/circus/6.jpg';
import img10 from '../../assets/images/galleries/circus/7.jpg';
import img11 from '../../assets/images/galleries/circus/8.jpg';
import img12 from '../../assets/images/galleries/circus/9.jpg';

import '../../Styles/Galleries.scss';

const Circus = () => {
  const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8,  img10, img11, img12
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
      <h2>Circus Photos</h2>
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

export default Circus;

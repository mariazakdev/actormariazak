import React, { useRef } from 'react';
import img1 from '../../assets/images/galleries//modeling/1.jpg';
import img2 from '../../assets/images/galleries/modeling/10.jpg';
import img3 from '../../assets/images/galleries//modeling/12.jpg';
import img4 from '../../assets/images/galleries/modeling/13.jpg';
import img5 from '../../assets/images/galleries//modeling/14.jpg';
import img6 from '../../assets/images/galleries/modeling/15.jpg';
import img7 from '../../assets/images/galleries/modeling/16.jpg';
import img8 from '../../assets/images/galleries/modeling/17.jpg';
import img9 from '../../assets/images/galleries/modeling/2.jpg';
import img10 from '../../assets/images/galleries/modeling/3.jpg';
import img11 from '../../assets/images/galleries/modeling/4.jpg';
import img12 from '../../assets/images/galleries/modeling/5.jpg';
import img14 from '../../assets/images/galleries/modeling/7.jpg';
import img15 from '../../assets/images/galleries/modeling/8.jpg';
import img16 from '../../assets/images/galleries/modeling/9.jpg';
import img17 from '../../assets/images/galleries/modeling/17.jpg';
import img18 from '../../assets/images/galleries/modeling/18.jpg';
import img19 from '../../assets/images/galleries/modeling/19.jpg';




import '../../Styles/Galleries.scss';

const Circus = () => {
  const images = [
    img1,img17,img10, img2, img3, img18, img4, img5, img6,
    img7, img8, img9, img19, img11, img12, img14, img15, img16
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
      <h2>Commercial Photos</h2>
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

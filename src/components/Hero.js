import React, { useState, useEffect } from 'react';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
  const interval = setInterval(() => {
    nextSlide();
  }, 2000);
  return () => clearInterval(interval);
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='pet image' className='image' />
            )}
          </div>
        );
      })}

      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
    </section>
  );
};

export default Hero;

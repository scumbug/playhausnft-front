import React from 'react';

const CustomSwiperSlide = ({ children, image, title }) => {
  return (
    <div className='expanding-collection-container'>
      <div className='expanding-collection-content'>
        <div className='expanding-collection-content-inner'>{children}</div>
      </div>
      <div className='expanding-collection-cover'>
        <div className='slide-title'>{title}</div>
        <img src={image} />
      </div>
    </div>
  );
};

export default CustomSwiperSlide;

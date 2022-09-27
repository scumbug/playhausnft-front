import React, { useRef } from 'react';
import { Tooltip } from 'primereact/tooltip';

const hideToolTip = () => {
  document.querySelectorAll('.p-tooltip-active').forEach((el) => (el.style.display = 'none'));
};

const CustomSwiperSlide = ({ children, image, title }) => {
  return (
    <div className='expanding-collection-container'>
      <div className='expanding-collection-content'>
        <div className='expanding-collection-content-inner'>{children}</div>
      </div>

      <div className='expanding-collection-cover'>
        <div className='slide-title'>{title}</div>
        <img
          src={image}
          onClick={() => hideToolTip()}
        />
      </div>
    </div>
  );
};

export default CustomSwiperSlide;

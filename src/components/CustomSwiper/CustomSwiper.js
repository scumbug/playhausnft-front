import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import styled from 'styled-components';

import './CustomSwiper.scss';
import { useInView } from 'react-intersection-observer';

const ExpandingSwiper = styled.div`
  .swiper {
    overflow: visible;
  }

  .swiper-slide {
    width: 50vh;
    max-width: calc(100% - 32px - 32px);
  }

  img {
    height: 30vh;
    object-fit: cover;
  }

  .slide-title {
    padding: 8px 16px;
    font-size: ${(props) => props.theme.fontxl};
    letter-spacing: 2px;
    color: #fff;
    position: absolute;
    width: 100%;
    text-align: center;
    z-index: 10;
    font-weight: 600;
    text-shadow: 2px 2px 20px #000;
  }
`;

const calcOffsets = (slideEl) => {
  const coverEl = slideEl.querySelector('.expanding-collection-cover');
  const contentEl = slideEl.querySelector('.expanding-collection-content');
  if (!contentEl || !coverEl) return;
  const { offsetWidth: coverWidth, offsetHeight: coverHeight } = coverEl;
  slideEl.style.setProperty('--expanding-collection-cover-height', `${coverHeight}px`);
  const { offsetHeight: contentHeight, offsetWidth: contentWidth } = contentEl;
  const props = {
    '--expanding-collection-scale-x': (coverWidth / contentWidth) * 0.95,
    '--expanding-collection-scale-y': (coverHeight / contentHeight) * 0.95,
  };
  Object.keys(props).forEach((prop) => {
    slideEl.style.setProperty(prop, props[prop]);
  });
};

const initEvents = (swiper) => {
  swiper.slides.forEach((slideEl) => {
    const containerEl = slideEl.querySelector('.expanding-collection-container');
    const coverEl = slideEl.querySelector('.expanding-collection-cover');
    const contentEl = slideEl.querySelector('.expanding-collection-content');

    coverEl.expandingCollectionClickHandler = () => {
      if (!contentEl || !slideEl.classList.contains('swiper-slide-active')) return;
      containerEl.classList.toggle('expanding-collection-opened');
    };
    coverEl.addEventListener('click', coverEl.expandingCollectionClickHandler);

    if (slideEl.classList.contains('swiper-slide-active'))
      containerEl.classList.toggle('expanding-collection-opened');
  });
};
const removeEvents = (swiper) => {
  swiper.slides.forEach((slideEl) => {
    const coverEl = slideEl.querySelector('.expanding-collection-cover');
    if (coverEl && coverEl.expandingCollectionClickHandler) {
      coverEl.removeEventListener('click', coverEl.expandingCollectionClickHandler);
    }
  });
};

const CustomSwiper = ({ children }) => {
  const [isVisible, inView] = useInView({
    triggerOnce: true,
  });
  const swiper = useRef(null);
  const expandingCollection = useRef(null);

  if (inView) swiper.current.swiper.autoplay.start();

  return (
    <ExpandingSwiper ref={expandingCollection}>
      <div ref={isVisible}></div>
      <Swiper
        ref={swiper}
        speed={600}
        resistanceRatio={0}
        slidesPerView={'auto'}
        centeredSlides={true}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false }}
        modules={[Autoplay]}
        loop={true}
        onSwiper={(s) => {
          s.slides.forEach((slideEl) => {
            calcOffsets(slideEl);
          });
          requestAnimationFrame(() => {
            expandingCollection.current.classList.add('expanding-collection-initialized');
          });
          initEvents(s);
          s.autoplay.stop();
        }}
        onSlideChange={(s) => {
          const openedContainerEl = s.wrapperEl.querySelector('.expanding-collection-opened');
          if (openedContainerEl) {
            openedContainerEl.classList.remove('expanding-collection-opened');
          }
        }}
        onImagesReady={(s) => {
          expandingCollection.current.classList.remove('expanding-collection-initialized');
          s.slides.forEach((slideEl) => {
            calcOffsets(slideEl);
          });
          expandingCollection.current.classList.add('expanding-collection-initialized');
        }}
        onResize={(s) => {
          expandingCollection.current.classList.remove('expanding-collection-initialized');
          s.slides.forEach((slideEl) => {
            calcOffsets(slideEl);
          });
          expandingCollection.current.classList.add('expanding-collection-initialized');
        }}
        onBeforeDestroy={(s) => removeEvents(s)}
      >
        {children.map((child, index) => (
          <SwiperSlide
            data-pr-tooltip='Click on the cute photos to find out more!'
            key={index}
          >
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </ExpandingSwiper>
  );
};

export default CustomSwiper;

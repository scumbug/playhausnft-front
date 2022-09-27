import React from 'react';
import styled from 'styled-components';
import ContentContainer from '../components/ContentContainer';

import img1 from '../assets/images/showcase/cat.jpeg';
import img2 from '../assets/images/showcase/dog1.jpg';
import img3 from '../assets/images/showcase/luna.jpg';
import img4 from '../assets/images/showcase/cat3.jpg';
import img5 from '../assets/images/showcase/Cat4.jpg';
import img6 from '../assets/images/showcase/Cat5.jpg';
import img7 from '../assets/images/showcase/Dog2.jpg';
import img8 from '../assets/images/showcase/Dog3.jpg';
import img9 from '../assets/images/showcase/cat3.jpg';

import CustomSwiper from '../components/CustomSwiper/CustomSwiper';
import CustomSwiperSlide from '../components/CustomSwiper/CustomSwiperSlide';
import { Tooltip } from 'primereact/tooltip';

const ShowcaseContainer = styled(ContentContainer)`
  background: ${(props) => props.theme.darkerblue};
  .content,
  .content > div {
    flex-direction: column;
  }
`;

const ShowcaseTitle = styled.div`
  text-align: center;

  h1 {
    color: ${(props) => props.theme.bronze};
  }

  p {
    font-style: italic;
    width: 70%;
    margin: auto;
    line-height: 2;
    color: ${(props) => props.theme.bronze};
    margin-top: 16px;
  }
`;

const ShowcaseList = styled.div`
  width: 100vw;
`;

const hideToolTip = () => {
  document.querySelectorAll('.p-tooltip-active').forEach((el) => (el.style.display = 'none'));
};

const Showcase = () => {
  return (
    <ShowcaseContainer id='story'>
      <ShowcaseTitle>
        <h1>The Story of Our Pets' Lives</h1>
        <p>
          Every dog, every cat has a story. Join us as we explore our relationships with our furry
          companions and immortalise them in the Playhaus.
        </p>
      </ShowcaseTitle>
      <ShowcaseList>
        {/* <Tooltip
          target='.swiper-slide-active'
          position='top'
        /> */}
        <CustomSwiper>
          <CustomSwiperSlide
            image={img1}
            title='Rabak'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </CustomSwiperSlide>
          <CustomSwiperSlide
            image={img2}
            title='Rabak'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </CustomSwiperSlide>
          <CustomSwiperSlide
            image={img3}
            title='Rabak'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </CustomSwiperSlide>
          <CustomSwiperSlide
            image={img4}
            title='Rabak'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </CustomSwiperSlide>
          <CustomSwiperSlide
            image={img5}
            title='Rabak'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </CustomSwiperSlide>
          <CustomSwiperSlide
            image={img6}
            title='Rabak'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </CustomSwiperSlide>
          <CustomSwiperSlide
            image={img7}
            title='Rabak'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </CustomSwiperSlide>
          <CustomSwiperSlide
            image={img8}
            title='Rabak'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </CustomSwiperSlide>
          <CustomSwiperSlide
            image={img9}
            title='Rabak'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </CustomSwiperSlide>
        </CustomSwiper>
      </ShowcaseList>
    </ShowcaseContainer>
  );
};

export default Showcase;

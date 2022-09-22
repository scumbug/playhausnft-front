import React from 'react';
import styled from 'styled-components';

import img1 from '../assets/images/banner/1.png';
import img2 from '../assets/images/banner/2.png';
import img3 from '../assets/images/banner/3.png';
import img4 from '../assets/images/banner/4.png';
import img5 from '../assets/images/banner/5.png';

const Section = styled.section`
  width: 100vw;
  height: 22rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  //background: ${(props) => props.theme.darkerblue};
  background: #202020;
  position: relative;
`;

const ImgContainer = styled.div`
  position: absolute;
  white-space: nowrap;
  bottom: -0.3rem;
  opacity: 0.3;
  img {
    width: 20rem;
  }
`;

const JoinText = styled.h1`
  color: ${(props) => props.theme.body};
  z-index: 10;
`;

const DiscordButton = styled.button`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.darkblue};
  outline: none;
  border: none;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontlg};
  padding: 1.5rem 3rem;
  border-radius: 50px;
  z-index: 10;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(0.9);
  }
  &::after {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;

const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <img
          src={img1}
          alt='banner'
        />
        <img
          src={img2}
          alt='banner'
        />
        <img
          src={img3}
          alt='banner'
        />
        <img
          src={img4}
          alt='banner'
        />
        <img
          src={img5}
          alt='banner'
        />
      </ImgContainer>
      <JoinText>
        Join the <br />
        Playhaus
      </JoinText>
      <DiscordButton>Discord Coming Soon</DiscordButton>
    </Section>
  );
};

export default Banner;

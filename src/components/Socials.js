import React from 'react';
import twitter from '../assets/icons/twitter.png';
import discord from '../assets/icons/discord.png';
import styled from 'styled-components';

const Image = styled.img`
  height: 30%;
`;

const SocialBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  & > * {
    padding: 0.9rem 0.5rem;
    transition: all 0.2s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Socials = () => {
  return (
    <SocialBox>
      <Image src={twitter} />
      <Image src={discord} />
    </SocialBox>
  );
};

export default Socials;

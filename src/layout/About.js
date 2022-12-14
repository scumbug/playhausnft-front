import React from 'react';
import styled from 'styled-components';
import ContentContainer from '../components/ContentContainer';
import about from '../assets/images/about.png';

const AboutContainer = styled(ContentContainer)`
  background: ${(props) => props.theme.light};
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SubText = styled.p`
  color: ${(props) => props.theme.darkblue};
  margin-top: 1em;
  line-height: 2;
`;

const About = () => {
  return (
    <AboutContainer id='about'>
      <Box>
        <img
          src={about}
          style={{ width: '100%' }}
          alt='about'
        />
      </Box>
      <Box>
        <h1>What is Playhaus?</h1>
        <SubText>
          Our story all started with a cat and a dog, and their pawrents who wanted to build a
          community that centers around good vibes and happiness, for their pets and pet owners
          alike.
        </SubText>
        <SubText>
          Playhaus, your web3 brand for pets, pet owners and pet lovers. Our vision is to create a
          wholesome and light-hearted community for you to share your experiences, stories and the
          love for your pets.
        </SubText>
      </Box>
    </AboutContainer>
  );
};

export default About;

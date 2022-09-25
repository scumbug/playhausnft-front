import React from 'react';
import styled from 'styled-components';
import landing from '../assets/images/landing.png';
import ContentContainer from '../components/ContentContainer';

const HomeContainer = styled(ContentContainer)`
  flex-wrap: wrap;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SubText = styled.span`
  color: ${(props) => props.theme.darkblue};
  font-style: italic;
  margin-top: 1em;
`;

const Home = () => {
  return (
    <HomeContainer id='home'>
      <Box>
        <h1>Welcome to the Playhaus</h1>
        <SubText>For pets, pet owners and pet lovers</SubText>
      </Box>
      <Box>
        <img
          src={landing}
          style={{ width: '100%' }}
          alt='landing'
        />
      </Box>
    </HomeContainer>
  );
};

export default Home;

import React from 'react';
import styled from 'styled-components';
import landing from '../assets/images/landing.png';
import ContentContainer from '../components/ContentContainer';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const SubText = styled.span`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.darkblue};
  font-style: italic;
  margin-top: 16px;
`;

const Home = () => {
  return (
    <ContentContainer>
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
    </ContentContainer>
  );
};

export default Home;

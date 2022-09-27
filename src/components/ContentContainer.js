import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vh 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 15vw;
  gap: 100px;
`;

const ContentContainer = ({ className, children, id, title }) => {
  return (
    <Section
      className={`${className} content-container`}
      id={id}
    >
      <Container className='content'>{children}</Container>
    </Section>
  );
};

export default ContentContainer;

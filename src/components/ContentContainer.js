import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 15vw;
  gap: 100px;
`;

const ContentContainer = ({ className, children }) => {
  return (
    <Section className={className}>
      <Container>{children}</Container>
    </Section>
  );
};

export default ContentContainer;

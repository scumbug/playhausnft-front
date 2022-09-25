import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import ContentContainer from '../components/ContentContainer';
import ShowcaseCard from '../components/ShowcaseCard';

import img1 from '../assets/images/showcase/cat.jpeg';
import img2 from '../assets/images/showcase/dog1.jpg';
import img3 from '../assets/images/showcase/luna.jpg';
import img4 from '../assets/images/showcase/cat3.jpg';

const ShowcaseContainer = styled(ContentContainer)`
  background: ${(props) => props.theme.darkerblue};
  div:first-child {
    flex-direction: column;
  }
`;

const move = keyframes`
  0% { transform: translateX(100%)}
  100% { transform: translateX(-100%)}
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
  display: flex;
  width: 100vw;
  gap: 2em;

  animation: ${move} 30s linear infinite;
`;

const Showcase = () => {
  const listRef = useRef(null);

  return (
    <ShowcaseContainer id='story'>
      <ShowcaseTitle>
        <h1>The Story Of Our Pets' Lives</h1>
        <p>
          Every dog, every cat has a story. Join us as we explore the relationships with our furry
          companions and immortalise their special place in our hearts with Playhaus
        </p>
      </ShowcaseTitle>
      <ShowcaseList ref={listRef}>
        <ShowcaseCard
          name='name'
          breed='test'
          img={img1}
          passRef={listRef}
        />
        <ShowcaseCard
          name='name'
          breed='test'
          img={img2}
          passRef={listRef}
        />

        <ShowcaseCard
          name='name'
          breed='test'
          img={img3}
          passRef={listRef}
        />

        <ShowcaseCard
          name='name'
          breed='test'
          img={img4}
          passRef={listRef}
        />
        <ShowcaseCard
          name='name'
          breed='test'
          img={img1}
          passRef={listRef}
        />
        <ShowcaseCard
          name='name'
          breed='test'
          img={img1}
          passRef={listRef}
        />
      </ShowcaseList>
    </ShowcaseContainer>
  );
};

export default Showcase;

import React from 'react';
import styled from 'styled-components';
import { Card } from 'primereact/card';

const Image = styled.img`
  color: ${(props) => props.theme.light};
  //border: 10px solid #fff;
  //border-radius: 20px 20px 0 0;
`;

const ShowcaseCard = (props) => {
  let play = (e) => {
    props.passRef.current.style.animationPlayState = 'running';
  };

  let pause = (e) => {
    props.passRef.current.style.animationPlayState = 'paused';
  };
  return (
    <Card
      title='Title'
      subTitle='subtitle'
      header={
        <Image
          alt='test'
          src={props.img}
        />
      }
      onMouseOver={(e) => pause(e)}
      onMouseOut={(e) => play(e)}
    />
  );
};

export default ShowcaseCard;

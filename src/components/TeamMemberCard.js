import React from 'react';
import styled from 'styled-components';

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TeamImage = styled.img`
  width: 200px;
  color: ${(props) => props.theme.light};
  //border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;
`;

const Name = styled.h2`
  text-align: center;
  margin-top: 20px;
`;

const Position = styled.span`
  text-align: center;
`;

const TeamMemberCard = (props) => {
  return (
    <TeamContainer>
      <TeamImage
        src={props.img}
        alt={props.name}
      />
      <Name>{props.name}</Name>
      <Position>{props.position}</Position>
    </TeamContainer>
  );
};

export default TeamMemberCard;

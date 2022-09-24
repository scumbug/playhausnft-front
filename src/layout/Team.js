import React from 'react';
import styled from 'styled-components';
import ContentContainer from '../components/ContentContainer';
import TeamMemberCard from '../components/TeamMemberCard';

import xaos from '../assets/images/teams/xaos.png';
import pudding from '../assets/images/teams/pudding.png';
import juzvibes from '../assets/images/teams/juzvibes.png';
import tkyomilk from '../assets/images/teams/tkyomilk.png';

const TeamContainer = styled(ContentContainer)`
  div:first-child {
    flex-wrap: wrap;
    flex-direction: column;

    h1 {
      text-align: center;
      flex-basis: 100vw;
    }
  }
`;

const TeamTitle = styled.div`
  text-align: center;

  h1 {
    margin: 3rem auto;
  }
`;

const TeamMemberList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
`;

const Team = () => {
  return (
    <TeamContainer id='team'>
      <TeamTitle>
        <h1>Team</h1>
      </TeamTitle>
      <TeamMemberList>
        <TeamMemberCard
          name='Xaos'
          position='Co-Founder'
          img={xaos}
        />
        <TeamMemberCard
          name='Pudding'
          position='Co-Founder'
          img={pudding}
        />
        <TeamMemberCard
          name='Tkyomilk'
          position='Legal Counsel'
          img={tkyomilk}
        />
        <TeamMemberCard
          name='John'
          position='Community Moderator'
          img={juzvibes}
        />
      </TeamMemberList>
    </TeamContainer>
  );
};

export default Team;

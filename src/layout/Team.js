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
    h1 {
      text-align: center;
      flex-basis: 100vw;
    }
  }
`;

const Team = () => {
  return (
    <TeamContainer>
      <h1>Team</h1>
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
    </TeamContainer>
  );
};

export default Team;

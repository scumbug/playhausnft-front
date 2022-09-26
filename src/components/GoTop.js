import React from 'react';
import styled from 'styled-components';
import { ScrollTop } from 'primereact/scrolltop';

const Top = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;

  .custom-scrolltop {
    background-color: ${(props) => props.theme.darkerblue};
    box-shadow: none;
  }

  .custom-scrolltop:hover {
    box-shadow: none;
    background-color: ${(props) => props.theme.darkblue};
  }

  .custom-scrolltop .p-scrolltop-icon {
    color: ${(props) => props.theme.bronze};
  }
`;

const GoTop = () => {
  return (
    <Top>
      <ScrollTop className='custom-scrolltop' />
    </Top>
  );
};

export default GoTop;

import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Divider } from 'primereact/divider';

const FooterContainer = styled.section`
  width: 65vw;
  display: flex;
  flex-direction: column;
  margin: auto;
  min-height: 20vh;

  .openPanel {
    max-height: 100vh;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const Top = styled.div`
  height: ${(props) => props.theme.navHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2vh;
`;

const Bottom = styled.div``;

const MenuItems = styled.li`
  margin: 0 10px;
  cursor: pointer;
  color: black;

  &::after {
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: black;
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

const PrivacyPolicy = styled.div`
  visibility: ${(props) => (props.ppPanel ? 'visible' : 'hidden')};
  max-height: 0;
  transition: max-height 1s ease-in-out;
`;
const Footer = () => {
  const [ppPanel, showPP] = useState(false);

  return (
    <FooterContainer>
      <Top>
        <Menu>
          <MenuItems onClick={() => showPP((prev) => !prev)}>Privacy Policy</MenuItems>
          <MenuItems>Terms &amp; Conditions</MenuItems>
        </Menu>
      </Top>
      <PrivacyPolicy
        ppPanel={ppPanel}
        className={ppPanel ? 'openPanel' : ''}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </PrivacyPolicy>
      <Divider align='center' />

      <Bottom>&copy; {new Date().getFullYear()} Playhaus. All rights reserved.</Bottom>
    </FooterContainer>
  );
};

export default Footer;

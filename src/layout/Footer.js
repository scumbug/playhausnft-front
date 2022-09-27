import React from 'react';
import styled from 'styled-components';
import { Divider } from 'primereact/divider';

const FooterContainer = styled.section`
  width: 65vw;
  display: flex;
  flex-direction: column;
  margin: auto;
  min-height: 20vh;
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

const Footer = () => {
  return (
    <FooterContainer>
      <Top>
        <Menu>
          <MenuItems>Privacy Policy</MenuItems>
          <MenuItems>Terms &amp; Conditions</MenuItems>
        </Menu>
      </Top>
      <Divider align='center' />

      <Bottom>&copy; {new Date().getFullYear()} Playhaus. All rights reserved.</Bottom>
    </FooterContainer>
  );
};

export default Footer;

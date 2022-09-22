import React from 'react';
import styled from 'styled-components';
import logo from '../assets/icons/logo.png';
import ContentContainer from '../components/ContentContainer';
import Socials from '../components/Socials';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => props.theme.navHeight};
  width: 85%;
  margin: 0 auto;
`;

const Image = styled.img`
  height: 75%;

  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

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

const scrollTo = (id) => {
  const element = document.getElementById(id);

  element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
};

const Navbar = () => {
  return (
    <section className={'navbar-section'}>
      <Nav>
        <Image src={logo} />
        <Menu>
          <MenuItems onClick={() => scrollTo('home')}>Home</MenuItems>
          <MenuItems onClick={() => scrollTo('about')}>About</MenuItems>
          <MenuItems onClick={() => scrollTo('story')}>Story</MenuItems>
          <MenuItems onClick={() => scrollTo('team')}>Team</MenuItems>
          <MenuItems onClick={() => scrollTo('faq')}>FAQ</MenuItems>
        </Menu>
        <Socials />
      </Nav>
    </section>
  );
};

export default Navbar;

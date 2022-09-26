import React from 'react';
import styled from 'styled-components';
import logo from '../assets/icons/logo.png';
import Socials from '../components/Socials';
import { Menubar } from 'primereact/menubar';

const scrollTo = (id) => {
  const element = document.getElementById(id);

  element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
};

const MenuItems = [
  {
    label: 'Home',
    command: () => {
      scrollTo('home');
    },
  },
  {
    label: 'About',
    command: () => {
      scrollTo('about');
    },
  },
  {
    label: 'Story',
    command: () => {
      scrollTo('story');
    },
  },
  {
    label: 'Team',
    command: () => {
      scrollTo('team');
    },
  },
  {
    label: 'FAQ',
    command: () => {
      scrollTo('faq');
    },
  },
];

const Image = styled.img`
  height: 3rem;

  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease;
  }
`;

const Navbar = () => {
  return (
    <section className={'navbar-section'}>
      <Menubar
        model={MenuItems}
        start={<Image src={logo} />}
        end={<Socials />}
      />
    </section>
  );
};

export default Navbar;

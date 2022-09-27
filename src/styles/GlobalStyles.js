import '@fontsource/league-spartan';
import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }

  #root {
    overflow-x: hidden;
  }

  body {
    font-family: 'League Spartan', sans-serif;
    background-color: ${(props) => props.theme.body};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    letter-spacing: 2px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    font-size: ${(props) => props.theme.fontxxl};
    color: ${(props) => props.theme.darkblue};
    line-height: 1.1em;
  }

  h2 {
    color: ${(props) => props.theme.darkblue};
    line-height: 1.1em;
  }

  .navbar-section {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: auto;
    background: #ffffff;
    position: fixed;
    top: 0;
    z-index: 999;
    box-shadow: 0 0 20px #35303126;

    .p-menubar {
      width: 90vw;
      border: none;

      .p-menuitem-link {
        justify-content: center;
      }
    }

    .p-menubar-button,
    .p-menubar-root-list {
      margin: auto;
    }

    .p-menubar-end {
      margin: 0;
    }

    .p-menubar-mobile-active .p-menubar-root-list {
      left: 0;
      right: 0;
      width: 50%;
    }
  }

  [class*='p-'] {
    color: ${(props) => props.theme.darkblue};
    font-family: 'League Spartan', 'primeicons', sans-serif;
  }

  @media (max-width: 960px) {
    #menu {
      display: none;
    }
    .content-container > div {
      flex-direction: column;
    }

    #banner {
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
    }

    #home > div > div,
    #about > div > div {
      text-align: center;
    }

    h1 {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;

export default GlobalStyles;

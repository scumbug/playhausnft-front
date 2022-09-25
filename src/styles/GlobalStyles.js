import '@fontsource/league-spartan';
import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: unset;
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
  }

  [class*='p-'] {
    color: ${(props) => props.theme.darkblue};
    font-family: 'League Spartan', 'primeicons', sans-serif;
  }

  @media (max-width: 960px) {
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

    button {
      font-size: ${(props) => props.theme.fontlg} !important;
    }
  }
`;

export default GlobalStyles;

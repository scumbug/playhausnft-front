import './App.css';
import GlobalStyles from './styles/GlobalStyles';
import { light } from './styles/Themes';
import { ThemeProvider } from 'styled-components';

import Home from './layout/Home';
import Navbar from './layout/Navbar';
import About from './layout/About';
import Showcase from './layout/Showcase';
import Team from './layout/Team';
import Faq from './layout/Faq';
import Footer from './layout/Footer';
import Banner from './layout/Banner';

import 'primereact/resources/themes/md-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <section className='navbar-section'>
        <Navbar />
      </section>
      <Home />
      <About />
      <Showcase />
      <Team />
      <Faq />
      <Banner />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

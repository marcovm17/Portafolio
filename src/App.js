import './App.css';
import * as React from 'react';
import ResponsiveAppBar from './components/DrawerAppBar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      50: '#ebeaea',
      100: '#cecbcb',
      200: '#ada8a8',
      300: '#8c8585',
      400: '#736a6a',
      500: '#5a5050',
      600: '#524949',
      700: '#484040',
      800: '#3f3737',
      900: '#2e2727',
      a100: '#f98282',
      a200: '#f75252',
      a400: '#ff1616',
      a700: '#fc0000',
    },
    secondary: {
      50: '#e3e0e0',
      100: '#b9b3b3',
      200: '#8b8080',
      300: '#5d4d4d',
      400: '#3a2626',
      500: '#170000',
      600: '#140000',
      700: '#110000',
      800: '#0d0000',
      900: '#070000',
      A100: '#ff4e4e',
      A200: '#ff1b1b',
      A400: '#e70000',
      A700: '#ce0000',
      'contrastDefaultColor': 'light',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>

      <header className='header__container' >
        <ResponsiveAppBar />
      </header>

      <div className='app__container'>

        <section id='aboutme' className='aboutMe__container'>
          <AboutMe />
        </section>

        <section id='projects' className='projects__container'>
          <Projects />
        </section>

      </div>

      <footer>
        <section id='contactme'>
          <Footer />
        </section>
      </footer>


    </ ThemeProvider>

  );
}

export default App;

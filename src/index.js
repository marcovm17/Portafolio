import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      50: '#ebeaea',
      100: '#cecbcb',
      200: '#ada8a8',
      300: '#8c8585',
      400: '#736a6a',
      500: '#303841',
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

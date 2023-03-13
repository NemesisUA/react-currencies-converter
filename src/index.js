import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './hoc/ThemeProvider';
import { RatesProvider } from './hoc/RatesProvider';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RatesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RatesProvider>
    </ThemeProvider>
  </React.StrictMode>
);

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppRouter } from './router/AppRouter';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
  return (<ThemeContextProvider>
    <AppRouter/>
  </ThemeContextProvider>);
}

export default App;

import React from 'react';
import './App.css';

import Header from './Componente/Header/Index';
import Footer from './Componente/Footer/Index';
import HomePage from './Componente/HomePage/Index';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;

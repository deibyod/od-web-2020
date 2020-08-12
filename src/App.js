import React from 'react';

import Header from './components/Header/Header';
import SectionTitle from './components/SectionTitle/SectionTitle';
import Spaces from './components/Spaces/Spaces';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Spaces />
        <SectionTitle />
        <Map />
        <Footer />
      </div>
    </div>
  );
}

export default App;

import React from 'react';

import Header from './components/Header/Header';
import SectionTitle from './components/SectionTitle/SectionTitle';
import Boxes from './components/Boxes/Boxes';
import Opening from './components/Opening/Opening';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Opening />
        <Boxes />
        <SectionTitle />
        <Map />
        <Footer />
      </div>
    </div>
  );
}

export default App;

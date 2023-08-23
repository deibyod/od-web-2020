import React from 'react';

import Header from './components/Header/Header';
import Opening from './components/Opening/Opening';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Opening />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;

import React from 'react';

import Header from './components/Header/Header';
import Opening from './components/Opening/Opening';
import SectionTitle from './components/SectionTitle/SectionTitle';
import Subscription from './components/Subscription/Subscription';
import Boxes from './components/Boxes/Boxes';
import ReferralOptions from './components/ReferralOptions/ReferralOptions';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';

import './App.css';

import ResourcesSpacesContent from './data/ResourcesBoxesContent.json';
import PersonalSpacesContent from './data/PersonalBoxesContent.json';
import ProfessionalSpacesContent from './data/ProfessionalBoxesContent.json';
import ReferralsContent from './data/ReferralsContent.json';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Opening />
        <SectionTitle title={"¿Qué contenidos gratuitos tengo?"}/>
        <Boxes boxContent={ResourcesSpacesContent} />
        <Subscription />
        <SectionTitle title={"¿Dónde estoy en internet?"}/>
        <h1>PROFESIONAL</h1>
        <Boxes boxContent={ProfessionalSpacesContent} />
        <h1>PERSONAL</h1>
        <Boxes boxContent={PersonalSpacesContent} />
        <h1>REFERIDOS</h1>
        <ReferralOptions optionContent={ReferralsContent} />
        <SectionTitle title={"¿Dónde estoy presencialmente?"}/>
        <Map />
        <Footer />
      </div>
    </div>
  );
}

export default App;

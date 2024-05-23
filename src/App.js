// src/App.js
import React from 'react';
import Header from './components/Header';
import BecomeACCA from './components/BecomeACCA';
import WhyChooseUs from './components/WhyChooseUs';
import Eligibility from './components/Eligibility';
import WhatWillYouLearn from './components/WhatWillYouLearn';
import PlacementAssistance from './components/PlacementAssistance';
import KickoffJourney from './components/KickoffJourney';

const App = () => {
  return (
    <div>
      <Header />
      <BecomeACCA />
      <WhyChooseUs />
      <Eligibility />
      <WhatWillYouLearn />
      <PlacementAssistance />
      <KickoffJourney />
    </div>
  );
};

export default App;

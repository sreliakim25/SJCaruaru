import React from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Numbers from './components/Numbers';
import Attractions from './components/Attractions';
import Poles from './components/Poles';
import Activities from './components/Activities';
import FamilyInfo from './components/Family';
import HowToArrive from './components/HowToArrive';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-textoClaro bg-fundo min-h-screen selection:bg-destaque selection:text-textoClaro">
      <Hero />
      <Countdown />
      <Numbers />
      <Attractions />
      <Poles />
      <Activities />
      <FamilyInfo />
      <HowToArrive />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

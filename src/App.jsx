import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Clientele from './components/Clientele';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ATLService from './components/services/ATLService';
import BTLService from './components/services/BTLService';
import DigitalService from './components/services/DigitalService';
import WebDevService from './components/services/WebDevService';
import DesigningService from './components/services/DesigningService';
import PrintingService from './components/services/PrintingService';

function App() {
  const [currentView, setCurrentView] = useState('main');

  const renderContent = () => {
    // If we're on a service page, render only that service component WITHOUT Header
    if (currentView !== 'main') {
      switch (currentView) {
        case 'atl':
          return <ATLService onBack={() => setCurrentView('main')} />;
        case 'btl':
          return <BTLService onBack={() => setCurrentView('main')} />;
        case 'digital':
          return <DigitalService onBack={() => setCurrentView('main')} />;
        case 'webdev':
          return <WebDevService onBack={() => setCurrentView('main')} />;
        case 'designing':
          return <DesigningService onBack={() => setCurrentView('main')} />;
        case 'printing':
          return <PrintingService onBack={() => setCurrentView('main')} />;
        default:
          return null;
      }
    }

    // If we're on the main page, render Header and all main components
    return (
      <>
        <Header currentView={currentView} setCurrentView={setCurrentView} />
        <Hero />
        <About />
        <Services setCurrentView={setCurrentView} />
        <Portfolio />
        <Clients />
        <Clientele />
        <Contact />
        <Footer />
      </>
    );
  };

  return (
    <div style={{ fontFamily: 'Archivo, sans-serif', minHeight: '100vh' }}>
      {renderContent()}
    </div>
  );
}

export default App;
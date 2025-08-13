import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Clients from './components/Clients';
import CoverageSection from './components/CoverageSection';
import Plans from './components/Plans';
import PaymentMethods from './components/PaymentMethods';
import Contact from './components/Contact';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <>
            <Hero />
            <Benefits />
            <CoverageSection />
            <Plans />
            <PaymentMethods />
            <Clients />
            <Contact />
            <CTASection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardSection from './components/DashboardSection';
import OurServices from './components/OurServices';
import OurWork from './components/OurWork';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <DashboardSection />
      <OurServices />
      <OurWork />
      <Footer />
    </div>
  );
}

export default App;

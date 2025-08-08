import React, { useRef, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardSection from './components/DashboardSection';
import OurServices from './components/OurServices';
import OurWork from './components/OurWork';
import GraphicsDesigning from './components/GraphicsDesigning';
import Footer from './components/Footer';

function App() {
  const heroRef = useRef(null);
  const dashboardSectionRef = useRef(null);
  const ourServicesRef = useRef(null);
  const ourWorkRef = useRef(null);
  const graphicsDesigningRef = useRef(null);

  const scrollToHome = useCallback(() => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToServices = useCallback(() => {
    ourServicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToWork = useCallback(() => {
    ourWorkRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToDashboardSection = useCallback(() => {
    dashboardSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToGraphicsDesigning = useCallback(() => {
    graphicsDesigningRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar
        scrollToHome={scrollToHome}
        scrollToServices={scrollToServices}
        scrollToWork={scrollToWork}
        scrollToDashboardSection={scrollToDashboardSection}
        scrollToGraphicsDesigning={scrollToGraphicsDesigning}
      />
      <Hero scrollToServices={scrollToServices} scrollToWork={scrollToWork} ref={heroRef} />
      <DashboardSection ref={dashboardSectionRef} />
      <OurServices ref={ourServicesRef} />
      <OurWork ref={ourWorkRef} />
      <GraphicsDesigning ref={graphicsDesigningRef} />
      <Footer />
    </div>
  );
}

export default App;

// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Playful from './components/Playful';
import Footer from './components/Footer';
import GetInTouch from './components/GetInTouch';
import LocomotiveScroll from 'locomotive-scroll';
import HowWeWork from './components/HowWeWork';
import OurServices from './components/OurServices';
import WhyScacys from './components/WhyScasys';
import AgenticAILanding from './components/AgenticAILanding';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import SecurityPolicy from './components/SecurityPolicy';


import 'locomotive-scroll/dist/locomotive-scroll.css';

const MainLanding = () => {
  const [loadingDone, setLoadingDone] = useState(false);
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);

  useEffect(() => {
    if (loadingDone && scrollRef.current) {
      scrollInstance.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.08,
      });

      setTimeout(() => {
        scrollInstance.current?.update();
      }, 100);

      return () => {
        scrollInstance.current?.destroy();
        scrollInstance.current = null;
      };
    }
  }, [loadingDone]);

  if (!loadingDone) {
    return <Loader onFinish={() => setLoadingDone(true)} />;
  }

  return (
    <div data-scroll-container ref={scrollRef} className="w-full bg-[#FEFFFF]">
      <Navbar loading={!loadingDone} />
      <LandingPage />
      <Marquee />
      <HowWeWork />
      <Eyes />
      <OurServices />
      <Cards />
      <Featured />
      <Playful />
      <WhyScacys />
      <AgenticAILanding />
      <GetInTouch />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService/>} />
        <Route path="/cookie-policy" element={<CookiePolicy/>} />
        <Route path="/security-policy" element={<SecurityPolicy/>} />


      </Routes>
    </Router>
  );
};

export default App;

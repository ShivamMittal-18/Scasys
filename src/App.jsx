import React, { useState, useEffect, useRef } from 'react';
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

import 'locomotive-scroll/dist/locomotive-scroll.css';

const App = () => {
  const [loadingDone, setLoadingDone] = useState(false);
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);

  useEffect(() => {
    if (loadingDone && scrollRef.current) {
      scrollInstance.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.08, // smoother scroll
      });

      // optional: update on resize or route change
      setTimeout(() => {
        scrollInstance.current?.update();
      }, 100);

      return () => {
        scrollInstance.current?.destroy();
        scrollInstance.current = null;
      };
    }
  }, [loadingDone]);

  return (
    <>
      {!loadingDone && <Loader onFinish={() => setLoadingDone(true)} />}

      {loadingDone && (
        <div
          data-scroll-container
          ref={scrollRef}
          className="w-full bg-[#F1F1F1]"
        >
          <Navbar />
          <LandingPage />
          <Marquee />
          <HowWeWork />
          <Eyes />
          <OurServices />
          <Cards />
          <Featured />
          <Playful />
          <WhyScacys />
          <GetInTouch />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;

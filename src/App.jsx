import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Playful from './components/Playful'
import Footer from './components/Footer'
// import OurServices from './components/Ourservices'

import GetInTouch from './components/GetInTouch'
import LocomotiveScroll from 'locomotive-scroll';
import HowWeWork from './components/HowWeWork'
import OurServices from './components/Ourservices'
import WhyScacys from './components/WhyScasys'


const App = () => {
const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen bg-[#F1F1F1]'> 
    <Navbar/>
    <LandingPage/>
    <Marquee/>
    {/* <About/> */}
    <HowWeWork/>
    <Eyes/>
    <OurServices/>
    {/* <OurServices/> */}
    <Cards/>

    <Featured/>
    <Playful/>
    <WhyScacys/>
    <GetInTouch/>
    <Footer/>
    </div>
  )
}

export default App
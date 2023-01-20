import React, { useState } from 'react'

import About from './about';
import Banner from './Banner';
import Cta from './cta';
import Faq from './faq';
import Footer from './footer';
import Header from './Header';
import Showcase from './showcase';
import Sidebar from './sidebar';
import Slider from './slider';
import Testimonial from './testimonial';
import Timeline from './timeline';
import TimelineHeader from './timelineHeader';

const Layout = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='whole-body'>
      <Sidebar 
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <Header 
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <Banner />
      <About />
      <Slider />
      <TimelineHeader />
      <Timeline />
      <Showcase />
      <Testimonial />
      <Faq />
      <Cta 
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <Footer />
    </div>
  )
}

export default Layout

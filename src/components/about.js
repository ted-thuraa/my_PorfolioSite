import React from 'react'
import ted from '../assets/images/ted2.jpg';

const About = () => {
  return (
    <div className='about'>
        <div className='about-inner'>
          <div className='about-img'>
            <div className='photo-img'>
            <img
              src={ted}
              alt='ted'
              height='100%'
              width='100%'
            />
            </div>
          </div>
          <div className='about-content'>
              <p>
                  <span>About<span>.</span></span>
                  Hi, I'm TED.I partner with tech startups to make 
                  them independent of their IT and empower them with a 
                  future-proof and scalable website.
              </p>
          </div>
        </div>
    </div>
  )
}

export default About

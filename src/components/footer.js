import React from 'react'
import github from '../assets/images/github1.png'
import linkedin from '../assets/images/linkedin.png'
import twitter from '../assets/images/twitter-sign.png'
import whatsapp from '../assets/images/whatsapp.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-wrapper'>
          <div className='footer-logo-wrapper'>
            <a href='/'>Tedflux</a>
            <div className='footer-socials'>
              <a href='#'>
                <img
                  src={github}
                  alt=''
                />
              </a>
              <a href='#'>
                <img
                  src={linkedin}
                  alt=''
                />
              </a>
              <a href='#'>
                <img
                  src={twitter}
                  alt=''
                />
              </a>
              <a href='#'>
                <img
                  src={whatsapp}
                  alt=''
                />
              </a>
            </div>
          </div>
        </div>
        <div className='footer-credits'>
          <p><span>&copy;</span> 2023, Tedflux. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import getintouchLaptop from '../assets/images/ctaimg.png'

const Cta = ({setToggleMenu, toggleMenu}) => {
  return (
    <div className='cta-section'>
      <div className='cta-container'>
        <div className='cta-wrapper'>
          <h2>It’s now time to meet you</h2>
          <p>Let's build a beautiful website that can evolve with your business</p>
          <div className='buttons-wrapper'>
            <a href='#' className='wt-bg'>see my work</a>
            <a onClick={() => setToggleMenu(!toggleMenu)} className='blck-bg'>say hello</a>
          </div>
        </div>
        <div className='cta-image'>
          <img
            src={getintouchLaptop}
            alt=''
          />
        </div>
      </div> 
    </div>
  )
}

export default Cta

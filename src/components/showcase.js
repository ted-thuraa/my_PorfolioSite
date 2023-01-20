import React from 'react'
import mockup from '../assets/images/mockup2.jpg'

const Showcase = () => {
  return (
    <div className='showcase'>
      <div className='showcase-bg'>
        <div className='showcase-inner'>
          <img
              height='100%'
              width='100%'
              src={mockup}
              alt='mockupphoto'
          />
        </div>
      </div>
    </div>
  )
}

export default Showcase

// import { Icon } from '@mui/material'
import React from 'react'
import webgif from '../assets/images/websitesgif.png'


const Banner = () => {

     

  return (
    <div className='banner'>
        <div className='banner-right'>
            <div className='banner-h1s'>
                <h1>
                    <div className='headline'>Helping tech</div>
                    <div className='headline'>Companies build</div>
                    <div className='headline'>Better products</div>
                </h1>
                
            </div>
            <div className='rotating-link'>
                <a href="/" class="link">
                     
                </a>
            </div>
            
        </div>
        <div className='banner-left'>
            <div className='image-gif'>
                <img
                    height='100%'
                    width='100%'
                    src={webgif}
                    alt='bannerphoto'
                />
            </div>
        </div>
    </div>
  )
}

export default Banner
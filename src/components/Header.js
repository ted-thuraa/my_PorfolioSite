import React from 'react'

const Header = ({toggleMenu, setToggleMenu}) => {
  return (
    <div className="headerNav">
      <div className="container">
        <div className='container-Flex'>
          <div className="logo">
            <a href='/'>edFlux</a>
          </div>
          <nav className="nav-links">
            <ul>
              <li>
                <a href="/cases">Portfolio</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/why">Why work with us?</a>
              </li>
            </ul>
          </nav>
          <div className="contact">
            <a onClick={() => setToggleMenu(!toggleMenu)}>
              <button>
                <span>Get In Touch</span>
              </button>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Header

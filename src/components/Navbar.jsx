import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
      <nav className='navbar__container'>
          <h3>ColorsGenerator</h3>
        <ul className='navbar__links'>
            <li>Inicio</li>
            <li>Favoritos</li>
        </ul>
    </nav>
  )
}

export default Navbar
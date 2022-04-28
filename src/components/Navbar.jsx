import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
      <nav className='navbar__container'>
          <h3>
            <Link className='navbar__link' to="/"> <i class="fa-solid fa-palette"></i> ColorsGenerator</Link>
          </h3>
        <ul className='navbar__links'>
            <li>
              <Link className='navbar__link' to="/"> <i class="fa-solid fa-house"></i> Inicio</Link>
            </li>
            <li>
              <Link className='navbar__link' to="/favoritos"> <i class="fa-solid fa-star"></i> Favoritos</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
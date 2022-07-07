import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
      <nav className='navbar__container'>
          <h3>
            <Link className='navbar__link' to="/"> <i className="fa-solid fa-palette"></i> <span className='navbar__logo'> Colors</span></Link>
          </h3>
        <ul className='navbar__links'>
            <li>
              <Link className='navbar__link' to="/"> <i className="fa-solid fa-house"></i>  Inicio</Link>
            </li>
            <li>
              <Link className='navbar__link' to="/favorites"> <i className="fa-solid fa-star"></i> Favoritos</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
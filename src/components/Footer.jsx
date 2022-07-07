import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className='footer__container'>
        <p>Sitio web realizado por Nicolás Correa</p>
        <ul className='footer__links'>
            <li><a href="https://github.com/nicostray" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-github-square"></i> Portafolio</a></li>
            <li><a href="https://www.linkedin.com/in/nicol%C3%A1s-correa-28a150188/" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-linkedin"></i> Linkedin</a></li>
        </ul>
    </div>
  )
}

export default Footer
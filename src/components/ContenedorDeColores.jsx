import React from 'react'
import '../styles/ContenedorDeColores.css'
import CajaDeColor from './CajaDeColor'


const ContenedorDeColores = ({colores}) => {
  return (
    <div className='contenedor-container'>
        {colores.map(element => <CajaDeColor color={element}/>)}
    </div>
  )
}

export default ContenedorDeColores
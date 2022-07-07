import React, {useEffect, useState } from 'react'
import separarString from '../helpers/separarString';
import toastNotify from '../helpers/toastNotify';
import '../styles/CajaFavorita.css'
import ColorDeCajaFavorita from './ColorDeCajaFavorita';
const CajaFavorita = ({color, borrarColorLocalStorage}) => {
  
  const [colores,setColores] = useState([]);

  useEffect(() => {
   setColores(separarString(color))
  },[])




  const eliminarClick = (cadena) => {
    borrarColorLocalStorage(cadena)
    toastNotify("Eliminado 🗑️", "eliminado")
  }


  return (
    <div className='cajaFavorita__container'>
      <div className='cajaFavorita__container-colores'>
        {colores.map((element, index) => <ColorDeCajaFavorita color={element} index={index} key={element}/>)}
      </div>
      {/* <button className='home__button' onClick={eliminarClick}> <i className="fa-solid fa-trash-can"></i> Borrar</button> */}
      <button className='cajaFavorita__button' onClick={() => eliminarClick(color)}><i className="fa-solid fa-xmark"></i></button>
    </div>
  )
}

export default CajaFavorita
import React, {useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import CajaFavorita from '../components/CajaFavorita';
import toastNotify from '../helpers/toastNotify';
import '../styles/Favorites.css'
import { AnimatePresence, motion } from 'framer-motion';

const Favorites = () => {

      const verificarLocalStorage = () =>{
        if(window.localStorage.getItem('favoritos') === null){
          window.localStorage.setItem('favoritos','')
        }
        return window.localStorage.getItem('favoritos')
      }

    const [favoritos,setFavoritos] = useState (verificarLocalStorage().split(",")); //acá guardo el state con los favoritos


  useEffect(() => {
    window.localStorage.setItem('favoritos',favoritos)
  },[favoritos])


  const eliminarFavoritos = () => {
    Swal.fire({
      icon: 'error',
      html:
        '¿Está seguro/a de que desea <b>eliminar</b> todos los colores?',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        'Confirmar',
      confirmButtonColor: 'hsl(340deg 82% 52%)',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        'Cancelar',
      cancelButtonAriaLabel: 'Thumbs down'
    }).then((result) => {
      if (result.isConfirmed) {
        window.localStorage.setItem('favoritos','')
        setFavoritos([''])
        toastNotify("Eliminados 🗑️", "eliminado")
      }
    })
  }


  const borrarColorLocalStorage = (cadena) => {
    setFavoritos(favoritos.filter(element => element !== cadena))
  }

  return (
    <AnimatePresence>
      <motion.div className='favorites' initial={{ opacity: 0}} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <h2>Tus favoritos</h2>
        <p>A continuación se muestran todas las paletas de colores que has guardado</p>
        <button className='home__button' onClick={eliminarFavoritos} > <i className="fa-solid fa-trash-can"></i> Eliminar todos</button>
        <hr ></hr>
        <div className='favorites__container'>
          {favoritos.map(element => element !== '' ? <CajaFavorita color={element} key={element} borrarColorLocalStorage={borrarColorLocalStorage} setFavoritos={setFavoritos}/> : null)}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Favorites
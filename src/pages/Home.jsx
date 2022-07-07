import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import ContenedorDeColores from '../components/ContenedorDeColores'
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Home.css'
import toastNotify from '../helpers/toastNotify';
import filtrarFavoritos from '../helpers/filtrarFavoritos';
import gifCargando from '../images/loading.gif'
import { AnimatePresence, motion } from 'framer-motion';

const Home = () => {
    const [colores,setColores] = useState([]);
    const [colorGuardado, setColorGuardado] = useState(false)
    const [cargando, setCargando] = useState(true)
    const llamarApi = () => {
      setCargando(true)
      axios.get('https://random-palette-generator.p.rapidapi.com/palette/Monochromatic/1/4',{
          headers: {
              'X-RapidAPI-Host' : 'random-palette-generator.p.rapidapi.com',
              'X-RapidAPI-Key' : process.env.REACT_APP_API_KEY
          }
      })
      .then(res =>{
          const datos = res.data;
          setColores(datos.data[0].palette)
          setColorGuardado(false)
          setCargando(false)
      })   
    }

    useEffect(() => {
      llamarApi()
      if(window.localStorage.getItem('favoritos') === null){
        window.localStorage.setItem('favoritos','')
        }
    }, [])

    const agregarAFavoritos = (colores) => {
      const favoritosActuales = [window.localStorage.getItem('favoritos')]
      favoritosActuales.push(filtrarFavoritos(colores))
      window.localStorage.setItem('favoritos', favoritosActuales)
      setColorGuardado(true)
      toastNotify('Guardado en favoritos ⭐', "favorito")
    }

    return (
      <AnimatePresence>
        <motion.div className='home__container' initial={{ opacity: 0}} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className='home__center-container'>
            <h1>Generador de paletas de colores monocromaticos</h1>
            <h3>Presione en actualizar para generar otros colores</h3>
            <p className='home__center-parrafo'>Si desea copiar un color, haga click en él</p>
            {cargando ? <img className='home__gif-cargando' src={gifCargando}/> : <ContenedorDeColores colores={colores} />}
            <div className='home__button-container'>
                <button className='home__button' onClick={llamarApi}> <i className="fa-solid fa-arrows-rotate"></i> Actualizar</button>
                <button disabled={colorGuardado} className={`${colorGuardado ? 'home__button--disabled' : 'home__button'}`} onClick={() => agregarAFavoritos(colores)}> {colorGuardado ?  <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>} {colorGuardado ? 'Guardado' : 'Guardar'}</button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
}

export default Home
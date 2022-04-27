import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ContenedorDeColores from '../components/ContenedorDeColores'
import '../styles/Home.css'

const Home = () => {
  

    const [colores,setColores] = useState([]);

    const llamarApi = () => {
      axios.get('https://random-palette-generator.p.rapidapi.com/palette/Monochromatic/1/4',{
          headers: {
              'X-RapidAPI-Host' : 'random-palette-generator.p.rapidapi.com',
              'X-RapidAPI-Key' : process.env.REACT_APP_API_KEY
          }
      })
      .then(res =>{
          const datos = res.data;
      setColores(datos.data[0].palette)
      })   
    }
  
    useEffect(() => {
      llamarApi()
    }, [])
    
    return (
      <div className='home__container'>
        <h1>Generador de paletas de colores aleatorios</h1>
        <h2>Presione en actualizar para generar otros colores</h2>
        <ContenedorDeColores colores={colores}/>
        <div className='home__button-container'>
            <button className='main__button' onClick={llamarApi}>Actualizar</button>
            <button className='main__button'>Guardar</button>
        </div>
      </div>
    );
}

export default Home
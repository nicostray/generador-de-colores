
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ContenedorDeColores from './components/ContenedorDeColores';
import Navbar from './components/Navbar';


function App() {

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
    <div>
      <Navbar />
      <h1>Generador de paletas de colores aleatorios</h1>
      <h2>Presione en actualizar para generar otros colores</h2>
      <ContenedorDeColores colores={colores}/>
      <button onClick={llamarApi}>Actualizar</button>
      <button>Guardar</button>
    </div>
  );
}

export default App;

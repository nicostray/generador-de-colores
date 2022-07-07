import React from 'react'
import toastNotify from '../helpers/toastNotify'
import '../styles/ColorDeCajaFavorita.css'

const ColorDeCajaFavorita = ({color,index}) => {

  const size = () =>{
    switch (index){
      case 0:
        return '40%'
        break;
      case 1:
        return '25%'
        break;
      case 2:
        return '20%'
        break;
      case 3:
        return '15%'
        break;
    }
  }  

    const styles = {
        backgroundColor: `#${color}`,
        height: size()
    }

    const colorClick = () => {
      navigator.clipboard.writeText(`#${color}`)
      toastNotify(`Copiado al portapapeles 📋`, "copiado")
    }

  return (
    <div className='ColorDeCajaFavorita' style={styles} onClick={colorClick}>
        <p className='CajaDeColor__color-hex'>#{color}</p>
    </div>
  )
}

export default ColorDeCajaFavorita
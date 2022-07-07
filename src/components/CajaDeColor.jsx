import React from 'react'
import '../styles/CajaDeColor.css'
import toastNotify from '../helpers/toastNotify'

const CajaDeColor = ({color}) => {
    const styles = {
        backgroundColor: `${color}`
    }

  const colorClick = () => {
    navigator.clipboard.writeText(color)
    toastNotify(`Copiado al portapapeles 📋`, "copiado")
  }

  return (
    <div className='CajaDeColor__container' style={styles} onClick={colorClick}>
            <p className='CajaDeColor__color-hex'>{color}</p>
    </div>
  )
}

export default CajaDeColor
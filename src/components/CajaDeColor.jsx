import React from 'react'
import '../styles/CajaDeColor.css'

const CajaDeColor = ({color}) => {
    const styles = {
        backgroundColor: `${color}`
    }
  return (
    <div className='CajaDeColor__container' style={styles} onClick={ () => navigator.clipboard.writeText(color)}>
            <p>{color}</p>
    </div>
  )
}

export default CajaDeColor
import React from 'react'
import '../styles/CajaDeColor.css'

const CajaDeColor = ({color}) => {
    const styles = {
        backgroundColor: `${color}`
    }
  return (
    <div className='CajaDeColor__container' style={styles}>
            <p>{color}</p>
    </div>
  )
}

export default CajaDeColor
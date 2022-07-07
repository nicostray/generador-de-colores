import React from 'react'
import '../styles/ContenedorDeColores.css'
import CajaDeColor from './CajaDeColor'
import { motion, AnimatePresence } from 'framer-motion'

const ContenedorDeColores = ({colores}) => {
  return (
    <AnimatePresence>
      <motion.div className='contenedor-container' initial={{ opacity: 0}} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {colores.map(element => <CajaDeColor key={element} color={element}/>)}
      </motion.div>
    </AnimatePresence>
  )
}

export default ContenedorDeColores
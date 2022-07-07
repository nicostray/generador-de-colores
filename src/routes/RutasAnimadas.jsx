import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Favorites from '../pages/Favorites'
import Home from '../pages/Home'
import { AnimatePresence } from 'framer-motion'
const RutasAnimadas = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}/>
            <Route path="favorites" element= {<Favorites />}/>
        </Routes>
    </AnimatePresence>
  )
}

export default RutasAnimadas
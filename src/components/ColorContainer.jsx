import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SingleColor from './SingleColor'

const ColorContainer = ({colores}) => {
  
    console.log('ColorContainer: ', colores)
    const [paleta,setPaleta] = useState(colores)

    useEffect(() => {
      setPaleta(colores)
    }, [colores])
    
  return (
    <Grid container sx={{display:'flex', justifyContent:'center'}} mt={2} mb={3} >
      {paleta.map(element=> <SingleColor color={element}/>)}
    </Grid>
  )
}

export default ColorContainer
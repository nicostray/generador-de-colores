import { Box } from '@mui/material'
import React from 'react'
import SingleColor from './SingleColor'

const ColorContainer = ({paleta}) => {
    console.log(paleta)
  return (
    <Box
          sx={{
            marginTop: 3,
            marginBottom:4,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "60%",
            gap: 0.5,
          }}
        >
          {paleta.map(element => <SingleColor />)}
        </Box>
  )
}

export default ColorContainer
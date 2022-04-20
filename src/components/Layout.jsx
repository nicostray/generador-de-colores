import { Autorenew } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ColorContainer from "./ColorContainer";


const Layout = () => {

  const initialColors = ['#000000', '#000000','#000000', '#000000']
    const [paleta,setPaleta] = useState(initialColors)
    const [button,setButton] = useState(0)

    const getColors = () => {
      setButton(button+1)
    }
    // const getColors =  () => {
    //   console.log('entré a llamarApi')
    //     // setPaleta(getApi())
    //     const holamundo = getApi();
    //     console.log('!!!: ', holamundo)
    //     console.log('pasó el setpaleta')
    // }

    useEffect(() => {
      axios.get('https://random-palette-generator.p.rapidapi.com/palette/Monochromatic/1/4',{
        headers: {
            'X-RapidAPI-Host' : 'random-palette-generator.p.rapidapi.com',
            'X-RapidAPI-Key' : process.env.REACT_APP_API_KEY
          }
        })
        .then(res=>{
          const datos = res.data.data[0].palette
          setPaleta(datos)
        }
    )
    }, [button])
    
  return (
    <Container component="main">

      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography component="h1" variant="h3">
          Generador de paletas de colores
        </Typography>
        <Typography component="p" variant="h6">
          Presiona en actualizar para obtener nuevos colores
        </Typography>
        
        <ColorContainer colores={paleta}/>

        <Button
          sx={{ backgroundColor: "primary.dark" }}
          variant="contained"
          endIcon={<Autorenew />}
          size="medium"
          onClick={getColors}
        >
          Actualizar
        </Button>
      </Box>
    </Container>
  );
};

export default Layout;

import { Autorenew } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import getApi from "../api/getApi";
import ColorContainer from "./ColorContainer";


const Layout = () => {
    const [paleta,setPaleta] = useState(['','','','',])

    const llamarApi = () => {
        setPaleta(getApi())
    }
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
        
        <ColorContainer paleta={paleta}/>

        <Button
          sx={{ backgroundColor: "primary.dark" }}
          variant="contained"
          endIcon={<Autorenew />}
          size="medium"
          onClick={llamarApi}
        >
          Actualizar
        </Button>
      </Box>
    </Container>
  );
};

export default Layout;

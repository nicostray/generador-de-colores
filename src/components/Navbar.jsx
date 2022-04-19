import React from 'react'
import {AppBar,styled, Toolbar, Typography} from '@mui/material'
import { ColorLens, Source } from '@mui/icons-material'

const Navbar = () => {

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: 'space-between'

    })
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
             {/* sx={{display:{xs:"block", sm:"none"}}} */}
            <Typography variant='h6' ><ColorLens /> ColorGenerator</Typography>
            
            <Source />
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
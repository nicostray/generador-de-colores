import { Box, Typography } from '@mui/material'
import React from 'react'

const SingleColor = ({color}) => {
  return (
    <Box
            sx={{
              backgroundColor: "black",
              width: "25%",
              height: "200px",
              borderRadius: "10px",
              position: "relative",
              cursor:'pointer'
            }}
          >
            <Typography
              variant="body1"
              color="white"
              sx={{ position: "absolute", right: "5px", bottom: "2px" }}
            >
              #1235
            </Typography>
          </Box>
  )
}

export default SingleColor
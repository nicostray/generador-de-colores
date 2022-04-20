import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const SingleColor = ({color}) => {
  console.log('En singleColor viene:', color)
  return (
    <Grid item={true} xs={7}>
      <Card sx={{backgroundColor:`${color}`}}  >
        <CardContent sx={{display:'flex', justifyContent:'flex-end', }} >
            <Typography variant="body1" color="white" sx={{marginTop:'40px', marginBottom:'-20px', backgroundColor:'#303030', borderRadius:'5px', padding:'0 4px'}}>{color}</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default SingleColor
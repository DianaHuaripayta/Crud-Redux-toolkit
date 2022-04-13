import React from 'react'
import Typography from '@mui/material/Typography';
import  userEmpty  from '../../assets/userEmpty.svg'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
export const EmptyUser = () => {
  return (
    <>
     <Stack 
     direction="column" 
     spacing={2}  
     justifyContent="center"
     alignItems="center">
        <Typography 
        variant="p" 
        align='center'
        gutterBottom component="div"
        sx={{  fontWeight: '400',  fontSize: {
          lg: 30,
          md: 40,
          sm: 25,
          xs: 30
        }}}>
            Create new users
        </Typography>
      
            <img src={userEmpty} alt="img initial" style={{width:'420px'}}/>
        
      </Stack>
    
    </>
  )
}

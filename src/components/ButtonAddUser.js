import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const ButtonAddUser = ({onClick, children}) => {
  return (
    <Box sx={{
      // display:'flex',
      // flexDirection: 'center',
      marginLeft: '30px',
      // backgroundColor: 'primary.dark',
      }}> 

    <Button variant="contained" onClick={onClick}>
      {children}
    </Button>
    </Box>
  )
}

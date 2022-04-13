import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function TextFieldComponent({label, inputProps, onChange, value}) {
  return (
    <Box sx={{  
    display: 'flex', 
    flexDirection:'column',
    width:'100%',
    alignItems: 'center',
    margin: '42px 0px 0px'
     }}>

    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField 
      fullWidth 
      label={label} 
      id="fullWidth" 
      {...inputProps}
      onChange={onChange}
      value={value}
      />
      
    </Box>
  </Box>
  )
}

export default TextFieldComponent
import React, {useState} from 'react'
import TextFieldComponent from '../../components/TextField'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from './userSlice';
import { v4 as uuidv4 } from 'uuid';
export const AddUser = () => {
  const dispatch = useDispatch()
  const navegate = useNavigate()
  const [values , setValues] = useState({
    name:'',
    email:''
  })

  const handleAddUser = () => {
    setValues({name:'',email:'' })
    dispatch(addUser({
      id: uuidv4(),
      name: values.name,
      email: values.email
    }))
    navegate('/')
  }
  return (
    <>
    <TextFieldComponent 
    label='Name' 
    value={values.name}
    onChange={(e) =>setValues({...values, name:e.target.value})}
    inputProps={{type: 'text', placeholder: ' Sonia Gonzales' }} />

    <TextFieldComponent 
    label='Email' 
    value={values.email}
    onChange={(e) =>setValues({...values, email:e.target.value})}
    inputProps={{ type: 'email', placeholder: 'sonia71@gmail.com' }} />

    <Box sx={{  
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:'30px'
     }}>
        <Button variant="contained" onClick={handleAddUser}>Submit</Button>
    </Box>
  
    </>
  )
}

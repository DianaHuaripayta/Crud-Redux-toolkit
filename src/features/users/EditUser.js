import React, {useState} from 'react'
import TextFieldComponent from '../../components/TextField'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate , useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { editUser } from './userSlice'
const EditUser = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const users = useSelector(store => store.users)
  const navegate = useNavigate()
  const exintingUsers = users.filter(user => user.id === params.id)
  const {name , email} = exintingUsers[0]
  const [values , setValues] = useState({
    name,
    email
  })

  const handleEditUser = () => {
    setValues({name:'',email:'' })
    dispatch(editUser({
      id: params.id,
      name: values.name,
      email: values.email
    }));
    navegate('/');
  }
  return (
    <>
    <TextFieldComponent
    label='Name'
    value={values.name}
    onChange={(e) => setValues({ ...values, name: e.target.value })}
    inputProps={{ type: 'text', placeholder: ' Sonia Gonzales' }} 
    />

    <TextFieldComponent
        label='Email'
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email', placeholder: 'sonia71@gmail.com' }}
    />
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '30px'
    }}>
        <Button variant="contained" onClick={handleEditUser}>Submit</Button>
    </Box>
    </>
  )
}

export default EditUser
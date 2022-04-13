import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import { ButtonAddUser } from '../../components/ButtonAddUser';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../features/users/userSlice'
import { EmptyUser } from './EmptyUser';
import Stack from '@mui/material/Stack';
const UsersList = () => {
  const dispatch = useDispatch()
  const users = useSelector(store => store.users)
  const handlRemoveUser = (id) =>{
    dispatch(deleteUser({
      id:id
    })
    )
  }

  const renderCard = () => users.map( user => (
        <Card sx={{ minWidth: 275 , margin:'10px', padding: '36px 10px',
        height: '25vh'}} key={user.id}>
          <Box sx={{
          display:'flex',
          flexDirection: 'column',
          justifyContent:'center',
          // backgroundColor: 'primary.dark',
          minWidth: 275,
          flexWrap: 'wrap'
          }}> 
          <CardContent>
            <Typography sx={{ fontSize: 25 , fontWeight: '600'}}  color="text.secondary" gutterBottom>
            {user.name}
            </Typography>
            <Typography sx={{ mb: 1.5, fontSize: 20}} color="text.secondary">
            {user.email}
            </Typography>
          </CardContent>

          <Box sx={{
          display:'flex',
          flexDirection: 'row',
          justifyContent:'space-evenly',
          // backgroundColor: 'primary.dark',
       
          }}>
            <Link to={`/edit-user/${user.id}`}>
              <EditIcon color="primary" sx={{  cursor: 'pointer'}} />
            </Link> 
            
            <DeleteIcon color="primary" 
            sx={{ color: pink[500] , cursor: 'pointer'}} 
            onClick={() =>handlRemoveUser(user.id)}/>
          </Box>
          </Box> 
        </Card>
      
  ))
  return (
    <>  
        <Box sx={{
          display:'flex',
          flexDirection: 'row',
          justifyContent:'center',
          height: 100,
          }}>
            <Link to={"/add-user"}>
            <ButtonAddUser>Add User</ButtonAddUser>
            </Link>
            
        </Box> 
        
        {users.length ? 
        <Box sx={{
          display:'flex',
          flexDirection: 'row',
          justifyContent:'space-evenly',
          height: 300,
          minWidth: 275,
          flexWrap: 'wrap'
          }}> {renderCard()}</Box> : 
          <EmptyUser/>
          }
    </>
  )
}
export default UsersList
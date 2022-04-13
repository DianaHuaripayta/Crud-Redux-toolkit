import UsersList from './features/users/UsersList'
import Typography from '@mui/material/Typography';
import { Routes, Route } from "react-router-dom";
import { AddUser } from './features/users/AddUser';
import EditUser from './features/users/EditUser';
import { blue } from '@mui/material/colors';
function App() {
  return (
    <>
    <Typography variant="h3" 
    gutterBottom component="div" 
    align='center' 
    marginTop={10}
    marginBottom={5}
    color= {blue[600]} 
    sx={{  fontWeight: '600',  fontSize: {
      lg: 40,
      md: 40,
      sm: 25,
      xs: 30
    }}}
    >
        Crud with Redux Toolkit
    </Typography>
   
    <Routes>
        <Route path="/" element={ <UsersList/>} />
        <Route path="/add-user" element={ <AddUser/>} />
        <Route path="/edit-user/:id" element={ <EditUser/>} />
      </Routes>
    </>
  );
}

export default App;

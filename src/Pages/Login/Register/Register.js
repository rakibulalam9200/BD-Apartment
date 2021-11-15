import AccountCircle from "@mui/icons-material/AccountCircle";
import {
    Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink,useHistory } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ApartmentButton from "../../../StyledComponent/ApartmentButton";
import registerImg from "../../../images/Register.jpg";
import EmailIcon from '@mui/icons-material/Email';
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
    const [registerInfo, setRegisterInfo] = useState({});
    const history = useHistory();
    const {user,registerUser,isLoading,authError} = useAuth();
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterInfo = {...registerInfo};
        newRegisterInfo[field] = value;
        setRegisterInfo(newRegisterInfo);
        console.log(field,value);
    }
  const handleRegister = (e) => {
      if(registerInfo.password !== registerInfo.password2){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Your Password Don't Matched!"
          })
          return;
      }

    registerUser(registerInfo.email,registerInfo.password,registerInfo.name,history);
    e.preventDefault();
  };

  
  return (
    <Container sx={{ mt: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ boxShadow: 2, mt: 3 }}>
          <Typography
            variant="h4"
            sx={{ my: 4, color: "#494E62", fontWeight: "bold" }}
          >
            REGISTRATION
          </Typography>
          {!isLoading && <form onSubmit={handleRegister} sx={{ boxShadow: 2 }}>
           <TextField
              sx={{ width: "80%", m: 2 }}
              id="input-with-icon-textfield"
              placeholder="Enter your Name"
              type="text"
              name="name"
              onChange={handleOnChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              required
            />
            <TextField
              sx={{ width: "80%", m: 2 }}
              id="input-with-icon-textfield"
              placeholder="Enter your Email"
              type="email"
              name="email"
              onChange={handleOnChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              required
            />
            <TextField
              sx={{ width: "80%", m: 2 }}
              id="input-with-icon-textfield"
              placeholder="Enter your Password"
              type="password"
              name="password"
              onChange={handleOnChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VisibilityIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              required
            />
            <TextField
              sx={{ width: "80%", m: 2 }}
              id="input-with-icon-textfield"
              placeholder="Re-Type your Password"
              type="password"
              name="password2"
              onChange={handleOnChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VisibilityIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              required
            />

            <ApartmentButton
              sx={{ width: "80%", my: 2 }}
              variant="contained"
              type="submit"
            >
              REGISTER
            </ApartmentButton>

            <NavLink style={{ textDecoration: "none" }} to="/login">
              <Button variant="text">Are Already Registerd? Please, login...</Button>
            </NavLink>
          </form>}
          {
              isLoading && <CircularProgress />
          }
          {
              user?.email && 
                <Alert severity="success">
                Your Account is Created Successfully...
                </Alert>  
              
           }
          {
              authError && 
                <Alert severity="error">
                {authError}
                </Alert>  
              
           }
              
              
          
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%",height:'86vh' }} src={registerImg} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;

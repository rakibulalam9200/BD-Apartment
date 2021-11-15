import { Alert, Button, CircularProgress, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import loginImg from "../../../images/login.jpg";
import ApartmentButton from "../../../StyledComponent/ApartmentButton";
import EmailIcon from '@mui/icons-material/Email';
import { NavLink,useLocation,useHistory } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from "../../../hooks/useAuth";

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({});
    const {user,loginUser,isLoading,authError,signInWithGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginInfo = {...loginInfo};
        newLoginInfo[field] = value;
        setLoginInfo(newLoginInfo);
    }
  const handleLogin = (e) => {
    loginUser(loginInfo.email, loginInfo.password,location,history);
    e.preventDefault();
  };

  const handleGoogleSignIn = ()=>{
    signInWithGoogle(location,history);
  }

  return (
    <Container sx={{ mt: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{boxShadow:2,mt:3}}>
          <Typography
            variant="h4"
            sx={{ my: 4, color: "#494E62", fontWeight: "bold" }}
          >
            LOGIN
          </Typography>
          {!isLoading && <form onSubmit={handleLogin} sx={{boxShadow: 2}}>
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
            
            <ApartmentButton sx={{ width: "80%", my: 2 }} variant="contained" type="submit">LOGIN</ApartmentButton>

            <NavLink style={{textDecoration:'none'}} to="/register">
                <Button variant="text">Are You New? Please, Register...</Button>
            </NavLink>
          </form>}
          {
              isLoading && <CircularProgress />
          }
          {
              user.email && 
                <Alert severity="success">
                User Logged in Successfully...
                </Alert>  
              
           }
          {
              authError && 
                <Alert severity="error">
                {authError}
                </Alert>  
              
           }

           <Button variant="contained" sx={{my:2,width:'80%'}} onClick={handleGoogleSignIn}><GoogleIcon sx={{mr:1}}/> Sign In</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%",height:'86vh'  }} src={loginImg} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;

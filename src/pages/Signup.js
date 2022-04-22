import * as React from 'react';
import {useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'; 
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import {Link as RLink} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import axios from "axios";
import {useNavigate} from "react-router-dom";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();

export default function SignUp() {

const Navigate = useNavigate(); 

  const [values,setValues] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"", 
  })


  const handleChange = (e) =>{
    const {name,value} = e.target
    setValues({
      ...values,
      [name]:value
    })
 }

 

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });


  };

  const postregister = async (e) => {
    e.preventDefault();
    // const API_URL = 'http://localhost:8000/';
    const { firstName,lastName,email,password } = values;
      const res = await  fetch("/signup",{
        method:"POST",
        headers:{
          "Content-type" : "application/json",
        },
        body: JSON.stringify({
          firstName,lastName,email,password,  
        })
        
      })
      const data = await res.json();
      console.log("DATA",data);
      if(res.status === 400 || !data){
        window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");

      Navigate.push("/signin")
 }
}


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
          
            <Box component="form" onSubmit={handleSubmit} noValidate  sx={{ mt: 3 }}>
            
              <Grid container spacing={2}>
                 <Grid item xs={12} sm={6}>
                    <TextField
                    autoComplete="given-name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    required 
                    fullWidth
                    id="firstName"
                    placeholder="First Name"
                    autoFocus
                    />
                 </Grid>
                 <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    fullWidth
                    id="lastName"
                    placeholder="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    autoComplete="family-name"
                    />
                 </Grid>
                 <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="email"
                    placeholder="Email Address"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    autoComplete="email"
                    />
                 </Grid>
                 <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    name="password"
                    placeholder="Password"
                    type="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                    />
                 </Grid>
                 <Grid item xs={12}>
                    <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
               </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={postregister}
                sx={{ mt: 3, mb: 2 }}
               
                >
                Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                <Grid item>
                    <RLink to="/signin" variant="body2">
                    Already have an account? Sign in
                    </RLink>
                </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
             </Box>
           
            </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
 } 

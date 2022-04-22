import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import {Link as RLink} from "react-router-dom";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ReactSession } from "react-client-session";


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
 
export default function SignInSide() {

const [values,setValues] = useState({
email:"",
password:""
})

ReactSession.setStoreType("sessionStorage")

let Navigate = useNavigate();

const handleChange = (e) =>{
  const {name,value} = e.target
    setValues({
      ...values,
      [name]:value
    })
}
   
const postlogin = async (e) => {
   e.preventDefault();
   const {email,password} = values;
   console.log("VALUES",values);
   console.log("email",email)
   

   // In this Method the data is send in the application/x-www-form-urlencoded form

  //  var myHeaders = new Headers();
  //  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
   
  //  var urlencoded = new URLSearchParams();
  //  urlencoded.append("email", "rakesh@gmail.com");
  //  urlencoded.append("password", "rakesh");
   
  //  var requestOptions = {
  //    method: 'POST',
  //    headers: myHeaders,
  //    body: JSON.stringify({email:'rakesh@gmail.com'},{password:'rakesh'}),
  //    redirect: 'follow'
  //  };
   
  //  fetch("http://localhost:3000/signin", requestOptions)
  //    .then(response => response.text())
  //    .then(result => console.log(result))
  //    .catch(error => console.log('error', error));
  // var urlencoded = new URLSearchParams();
  //  urlencoded.append("email", email);
  //  urlencoded.append("password", password);



// In this method the data is send in the application/json form

   const res = await fetch("/signin",{
     method:"POST",
// Here I Done A Mistake I can write header instead of headers
      headers:{
       "Content-Type":"application/json",
     },
     body: JSON.stringify({email,password})
   }).then((response) => {
    return response.json();
  }).then(data => {
    console.log("final data", data)
    return data;
  })

  // This Is also a Method to declare data 
  //  const data = await res.json();
  //     console.log("DATA",data);
  // console.log("DATA LOGIN ",res.message); 

   ReactSession.set("MyuserData",res.data)
   
   setValues({
    sessionUsername:"User data Is :"+ReactSession.get("data")
   })

  if( !res.data || res.status=== 400 ){
    window.alert("Invalid data");
   console.log("Login Failed");
   console.log("Response Data",res.data);
  } else{
    window.alert("Login Successfully");
    console.log("Login Success");
    Navigate("/")
  }

}
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

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
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                onChange={handleChange}
                placeholder="Email Address"
                name="email"
                value={values.email}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={postlogin}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <RLink to="/signup" variant="body2" key="signup">
                    {"Don't have an account? Sign Up"}
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
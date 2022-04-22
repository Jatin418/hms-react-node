import React,{useState} from 'react';
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'; 
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
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
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText'
// import axios from "axios";
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




export default class SimpleFormExample extends React.Component {
    state = {
        formData: {
          firstName:'',
          lastName:'',
            email: '',
            password: '',
            cfpassword:'',
            checkbox:'',
        },
        submitted: false,
    }
    
    componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.formData.password) {
                return false;
            }
            return true;
        });
    }

    componentWillUnmount() {
        // remove rule when it is not needed
        ValidatorForm.removeValidationRule('isPasswordMatch');
    }
        
    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
      
    }
  
           
    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }
        
     postregister = async (e) => {
       var Navigate = useNavigate();
      e.preventDefault();
      // const API_URL = 'http://localhost:8000/';
      const { firstName,lastName,email,password } = this.state;
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
  
        Navigate("/signin")
   }
  }
  
  

   
    render() {
        const { formData, submitted } = this.state;
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

            <Box   sx={{ mt: 3 }}> 
              
               <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextValidator
                    label="First Name"
                    autoComplete="given-name"
                    onChange={this.handleChange}
                    name="firstName"
                    fullWidth
                    id="firstName"
                    autoFocus
                    value={formData.firstName}
                    validators={['required', 'minStringLength:2', 'maxStringLength:20', 'matchRegexp:^[a-zA-Z]+$']}
                    errorMessages={['this field is required','Minimum length is 2','Maximum length is 20', 'Use Alphabets Only']}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextValidator
                    label="Last Name"
                    fullWidth
                    id="lastName"
                    onChange={this.handleChange}
                    name="lastName"
                    value={formData.lastName}
                    validators={['required', 'minStringLength:2', 'maxStringLength:20', 'matchRegexp:^[a-zA-Z]+$']}
                    errorMessages={['this field is required','Minimum length is 2','Maximum length is 20', 'Use Alphabets Only']}
                />
                  </Grid>
                  <Grid item xs={12}> 
                <TextValidator
                    label="Email"
                    fullWidth
                    id="email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
          </Grid>
                <Grid item xs={12}>
                <TextValidator
                    label="Password"
                    fullWidth 
                    onChange={this.handleChange}
                    name="password"
                    type="password"
                    id="password"
                    value={formData.password}
                    validators={['required','minStringLength:6','matchRegexp:^(?=.*)(?=.*[a-z])(?=.*[A-Z]).{6,15}','maxStringLength:16']}
                    errorMessages={['this field is required','Enter minimum 6 character','use atleast one capital and numeric letter',' maximum 15 character allowed']}
                />
                </Grid>
                <Grid item xs={12}>
                <TextValidator
                    label="Confirm Password"
                    fullWidth
                    onChange={this.handleChange}
                    name="cfpassword"
                    type="password"
                    id="cfpassword"
                    value={formData.cfpassword}
                    validators={['required','isPasswordMatch','minStringLength:6','matchRegexp:^(?=.*)(?=.*[a-z])(?=.*[A-Z]).{6,15}','maxStringLength:16']}
                    errorMessages={['this field is required','Password Is MisMatch','Enter minimum 6 character','use atleast one capital and numeric letter',' maximum 15 character allowed']}
                />
                </Grid>
                   
                <Grid item xs={12}>
                    
                    <FormControlLabel
                       error = {formData.checkbox === ""}
                       value = {formData.checkbox}

                    control={<Checkbox value="allowExtraEmails"  color="primary"/>}
                    label="Terms and Condition apply.." 
                    
                    helperText = {formData.checkbox === "" ?'Empty?' :''}
                    />
                   
                      
                </Grid>
                </Grid>
                <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    type="submit"
                    onClick={this.postregister}
                    sx={{ mt: 3, mb: 2 }}
                    disabled={submitted}
                >
                    {
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'SignUp')
                    }
                </Button>
                <Grid container justifyContent="flex-end">
                <Grid item>
                    <RLink to="/login" variant="body2">
                    Already have an account? Sign in
                    </RLink>
                </Grid>
                </Grid>
              </ValidatorForm>
            
                <Copyright sx={{ mt: 5 }} />
             </Box>
           
            </Box>
            </Grid>
           </Grid>
        </ThemeProvider>
        );
    }
}
























// Signup combines with test

// import React from 'react';
// import Button from '@mui/material/Button';
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'; 
// import Avatar from '@mui/material/Avatar';
// import CssBaseline from '@mui/material/CssBaseline';
// // import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import {Link as RLink} from "react-router-dom";
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// // import FormControl from '@mui/material/FormControl';
// import FormHelperText from '@mui/material/FormHelperText'
// // import axios from "axios";
// import {useNavigate} from "react-router-dom";




// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }


// const theme = createTheme();




// export default class SimpleFormExample extends React.Component {
//     state = {
//         formData: {
//           firstName:'',
//           lastName:'',
//             email: '',
//             password: '',
//             cfpassword:'',
//             checkbox:'',
//         },
//         submitted: false,
//     }
    
//     componentDidMount() {
//         // custom rule will have name 'isPasswordMatch'
//         ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
//             if (value !== this.state.formData.password) {
//                 return false;
//             }
//             return true;
//         });
//     }

//     componentWillUnmount() {
//         // remove rule when it is not needed
//         ValidatorForm.removeValidationRule('isPasswordMatch');
//     }
        
//     handleChange = (event) => {
//         const { formData } = this.state;
//         formData[event.target.name] = event.target.value;
//         this.setState({ formData });
      
//     }
  
           
//     handleSubmit = () => {
//         this.setState({ submitted: true }, () => {
//             setTimeout(() => this.setState({ submitted: false }), 5000);
//         });
//     }
        
//      postregister = async (e) => {
//        const Navigate = useNavigate();
//       e.preventDefault();
//       // const API_URL = 'http://localhost:8000/';
//       const { firstName,lastName,email,password,cfpassword,checkbox } = this.formData;
//         const res = await  fetch("/signup",{
//           method:"POST",
//           headers:{
//             "Content-type" : "application/json",
//           },
//           body: JSON.stringify({
//             firstName,lastName,email,password,cfpassword,checkbox
//           })
          
//         })
//         const data = await res.json();
//         console.log("DATA",data);
//         if(res.status === 400 || !data){
//           window.alert("Invalid Registration");
//         console.log("Invalid Registration");
//       } else {
//         window.alert("Registration Successful");
//         console.log("Registration Successful");
  
//         Navigate("/signin")
//    }
//   }
  
  

   
//     render() {
//         const { formData, submitted } = this.state;
//         return (
//         <ThemeProvider theme={theme}>
//           <Grid container component="main" sx={{ height: '100vh' }}>
//             <CssBaseline />
//             <Grid
//               item
//               xs={false}
//               sm={4}
//               md={7}
//               sx={{
//                 backgroundImage: 'url(https://source.unsplash.com/random)',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundColor: (t) =>
//                   t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//               }}
//             />
//             <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//                 <Box
//                 sx={{
//                   my: 8,
//                   mx: 4,
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                 }}
//                 >
//                 <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                     <LockOutlinedIcon />
//                 </Avatar>
//                 <Typography component="h1" variant="h5">
//                 Sign up
//             </Typography>

//             <Box   sx={{ mt: 3 }}> 
              
//                <ValidatorForm
//                 ref="form"
//                 onSubmit={this.handleSubmit}
//             >
//               <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextValidator
//                     label="First Name"
//                     autoComplete="given-name"
//                     onChange={this.handleChange}
//                     name="firstName"
//                     fullWidth
//                     id="firstName"
//                     autoFocus
//                     value={formData.firstName}
//                     validators={['required', 'minStringLength:2', 'maxStringLength:20', 'matchRegexp:^[a-zA-Z]+$']}
//                     errorMessages={['this field is required','Minimum length is 2','Maximum length is 20', 'Use Alphabets Only']}
//                 />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                 <TextValidator
//                     label="Last Name"
//                     fullWidth
//                     id="lastName"
//                     onChange={this.handleChange}
//                     name="lastName"
//                     value={formData.lastName}
//                     validators={['required', 'minStringLength:2', 'maxStringLength:20', 'matchRegexp:^[a-zA-Z]+$']}
//                     errorMessages={['this field is required','Minimum length is 2','Maximum length is 20', 'Use Alphabets Only']}
//                 />
//                   </Grid>
//                   <Grid item xs={12}> 
//                 <TextValidator
//                     label="Email"
//                     fullWidth
//                     id="email"
//                     onChange={this.handleChange}
//                     name="email"
//                     value={formData.email}
//                     validators={['required', 'isEmail']}
//                     errorMessages={['this field is required', 'email is not valid']}
//                 />
//           </Grid>
//                 <Grid item xs={12}>
//                 <TextValidator
//                     label="Password"
//                     fullWidth 
//                     onChange={this.handleChange}
//                     name="password"
//                     type="password"
//                     id="password"
//                     value={formData.password}
//                     validators={['required','minStringLength:6','matchRegexp:^(?=.*)(?=.*[a-z])(?=.*[A-Z]).{6,15}','maxStringLength:16']}
//                     errorMessages={['this field is required','Enter minimum 6 character','use atleast one capital and numeric letter',' maximum 15 character allowed']}
//                 />
//                 </Grid>
//                 <Grid item xs={12}>
//                 <TextValidator
//                     label="Confirm Password"
//                     fullWidth
//                     onChange={this.handleChange}
//                     name="cfpassword"
//                     type="password"
//                     id="cfpassword"
//                     value={formData.cfpassword}
//                     validators={['required','isPasswordMatch','minStringLength:6','matchRegexp:^(?=.*)(?=.*[a-z])(?=.*[A-Z]).{6,15}','maxStringLength:16']}
//                     errorMessages={['this field is required','Password Is MisMatch','Enter minimum 6 character','use atleast one capital and numeric letter',' maximum 15 character allowed']}
//                 />
//                 </Grid>
                   
//                 <Grid item xs={12}>
                    
//                     <FormControlLabel
//                        error = {formData.checkbox === ""}
//                        value = {formData.checkbox}

//                     control={<Checkbox value="allowExtraEmails"  color="primary"/>}
//                     label="Terms and Condition apply.." 
                    
//                     FormHelperText = {formData.checkbox === "" ?'Empty?' :''}
//                     />
                   
                      
//                 </Grid>
//                 </Grid>
//                 <Button
//                     fullWidth
//                     color="primary"
//                     variant="contained"
//                     type="submit"
//                     sx={{ mt: 3, mb: 2 }}
//                     disabled={submitted}
//                 >
//                     {
//                         (submitted && 'Your form is submitted!')
//                         || (!submitted && 'SignUp')
//                     }
//                 </Button>
//                 <Grid container justifyContent="flex-end">
//                 <Grid item>
//                     <RLink to="/login" variant="body2">
//                     Already have an account? Sign in
//                     </RLink>
//                 </Grid>
//                 </Grid>
//               </ValidatorForm>
            
//                 <Copyright sx={{ mt: 5 }} />
//              </Box>
           
//             </Box>
//             </Grid>
//            </Grid>
//         </ThemeProvider>
//         );
//     }
// }

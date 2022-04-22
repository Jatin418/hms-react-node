import * as React from "react";
import {Box, Typography} from "@mui/material";
// import {Link} from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <a color="inherit" href="http://test.com">
        Your Website
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer(){
    return(
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
            Footer
            </Typography>
            <Typography
            variant="subtitle1"
            align="center"
            color=""
            component="p"
            >
            Something here to give the footer a purpose!
            </Typography>
            <Copyright />
        </Box>
    );
}
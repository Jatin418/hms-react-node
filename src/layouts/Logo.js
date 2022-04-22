import * as React from "react";
import Logo from "../assets/img/hexa-wbg.png";
import Typography from '@mui/material/Typography';


export default function MyLogo(props){
    console.log("props", props);
    console.log("props 1", props.logostyle);
    return(
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={props.logostyle}
          >
            <img src={Logo} alt="Logo" />
          </Typography>
    )
}
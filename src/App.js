import React, {Component} from "react";
// import {BrowserRouter as Router, Link } from 'react-router-dom';
// import MyRoutes from "./Routes";
// import {Container} from "@mui/material";
import Routes from "./RoutesNew";
// import SignIn from './pages/Login';

class App extends Component{
  render(){
    // return(
    //   <Router>
    //     {/* <div>
    //       <h2>Welcome to Admin Panel</h2>
    //       <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //       <ul className="navbar-nav mr-auto">
    //         <li><Link to={'/'} className="nav-link"> Card 1</Link></li>
    //         <li><Link to={'/card2'} className="nav-link">Card 2</Link></li>
    //         <li><Link to={'/dashboard'} className="nav-link">Dashboard</Link></li>
    //       </ul>
    //       </nav>
    //       <hr /> */}
    //       {/* <Container maxWidth="lg"> */}
    //         <MyRoutes />
    //       {/* </Container> */}
    //     {/* </div> */}
    //   </Router>
    // );
    return(
      <Routes />
      
    )
  }
}

export default App;
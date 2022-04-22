import * as React from "react";
import { styled, useTheme } from '@mui/material/styles';
import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import "./styles.css";
import Logo from "./Logo";

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
// import AssignmentIcon from '@mui/icons-material/Assignment';

const pages = [{title :'Home',redirect:'/'}, 
                {title :'About',redirect:'/about'}, 
                {title :'Contact',redirect:'/contact-us'}];
// const pages = ['Home','About','Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const drawerWidth = 240;

export default function Header(){
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    // return(
    //     <div>
    //         <h1>Header Here!</h1>
    //         <ul>
    //             <li><Link to="/">Home</Link></li>
    //             <li><Link to="/about">About</Link></li>
    //         </ul>
    //     </div>
    // );
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        console.log("clicked");
        setOpen(!open);
        console.log("open", open)
    };
    return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
        <Logo logostyle={{ mr: 2, display: { xs: 'none', md: 'flex'}, height: '48px' }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', lg:'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer}
              color="inherit"
              sx={{ mr: 2, ...(open) }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
            <Logo height="35" logostyle={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, height: '38px' }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <Link className="headerLink" to={page.redirect} key={page.title} sx={{textDecoration : 'none !important'}}>
                  <Button
                    key={page.title}
                    // onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    color="secondary"
                  >
                    {page.title}
                  </Button>
                </Link>
            ))}
          </Box>
          <Drawer sx={{
            // display: {xs: 'block', md: 'none' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }} open={open} anchor="left"  onClose={toggleDrawer}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <React.Fragment>
              {pages.map((page) => (
                <ListItemButton>
                  <Link to={page.redirect} key={page.title}>
                    <ListItemText primary={page.title} />
                  </Link>
                </ListItemButton>
              ))}     
            </React.Fragment>
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box sx={{ flexGrow: 0, paddingRight:'15px' }}>
            <Link className="headerLink" to="/login" key="login" sx={{textDecoration : 'none !important'}}>
              <Button
                key="login"
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                color="secondary"
                variant="contained"
              >
                Login
              </Button>
            </Link>
        </Box>
        {/* <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}



// const ResponsiveAppBar = () => {
  

  
// };
// export default ResponsiveAppBar;

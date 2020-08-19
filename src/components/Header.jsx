import React from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { Brightness7, Brightness4, AccountCircle } from '@material-ui/icons';

const Header = ({ darkMode, setDarkMode }) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Elems for register/login
  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    history.push('/login');
  };

  const loginRegLink = (
    <div>
      <MenuItem component={Link} to={'/login'} onClick={handleClose}>
        Login
      </MenuItem>
      <MenuItem component={Link} to={'/register'} onClick={handleClose}>
        Register
      </MenuItem>
    </div>
  );

  const userLink = (
    <div>
      <MenuItem component={Link} to={'/register'} onClick={(handleClose, logOut)}>
        Logout
      </MenuItem>
    </div>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid justify="space-between" container>
          <Grid item style={{ alignSelf: 'center' }}>
            <Typography variant="h6">
              <Box fontWeight="fontWeightBold">Logo</Box>
            </Typography>
          </Grid>
          <Grid item>
            <IconButton
              color="inherit"
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              {!darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>

            <IconButton
              color="inherit"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {localStorage.usertoken ? userLink : loginRegLink}
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default withRouter(Header);

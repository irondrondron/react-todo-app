import React, { useEffect } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { profile } from './UserFunctions';
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from '@material-ui/core';
import { Brightness7, Brightness4, AccountCircle } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';

const Header = ({ darkMode, setDarkMode }) => {
  // const token = localStorage.usertoken;
  // profile(token).then((response) => {
  //   console.log(response.data);
  // });

  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userName = useSelector((state) => state.userName);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.usertoken;
    profile(token).then((response) => {
      let username = response.data;
      dispatch({ type: 'USERNAME', payload: username });
      console.log(username);
    });
  }, []);

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
      <MenuItem component={Link} to={'/counter'} onClick={handleClose}>
        Counter
      </MenuItem>
    </div>
  );
  // const token = localStorage.usertoken;
  // profile(token).then((response) => {
  //   dispatch({ type: 'USERNAME', payload: response.data });
  //   console.log(response.data);
  // });
  // console.log(response.data);
  const userNamea = (
    <Typography >
      <Box fontWeight="fontWeightBold">{userName.userName}</Box>
    </Typography>
  );

  const userLink = (
    <div>
      <MenuItem component={Link} to={'/counter'} onClick={handleClose}>
        Counter
      </MenuItem>
      <MenuItem
        component={Link}
        to={'/register'}
        onClick={(handleClose, logOut)}
      >
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
          {localStorage.usertoken ? userNamea : 'asdasd'}
            <IconButton
              color="inherit"
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              {!darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>

            {/* <Typography variant="h6">
              <Box fontWeight="fontWeightBold">{userName.userName}</Box>
            </Typography> */}
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

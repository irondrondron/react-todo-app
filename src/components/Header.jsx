import React from 'react';
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  Box,
  IconButton,
} from '@material-ui/core';
import { Brightness7, Brightness4 } from '@material-ui/icons';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid justify="space-between" container>
          <Grid item style={{ alignSelf: 'center' }}>
            <Typography variant="h6">
              <Box fontWeight="fontWeightBold">Logo</Box>
            </Typography>
          </Grid>
          <Grid item></Grid>
          <Grid item>
            <IconButton
              color="inherit"
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              {!darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Header;

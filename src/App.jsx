import React, { useState } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import { ThemeProvider, createMuiTheme, Paper } from '@material-ui/core/';


import Header from './components/Header';
import TodoList from './components/TodoList';
import { blue, red } from '@material-ui/core/colors';

import Register from './components/Register';
import Login from './components/Login';

import ProtectedRoute from './components/ProtectedRoute';

export default function App() {

  const [darkMode, setDarkMode] = useState(true);
  const changeTheme = () => {
    setDarkMode(!darkMode);
  };
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: { main: blue[600] },
      secondary: { main: red[400] },
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Paper
          square
          style={{ width: '100%', minHeight: '100vh', height: 'auto' }}
        >
          <Header setDarkMode={changeTheme} darkMode={darkMode} />

          <Route exact path="/" component={Register} />


          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute path="/all" component={TodoList} />

         
        </Paper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

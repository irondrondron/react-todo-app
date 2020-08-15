import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { blue, red } from '@material-ui/core/colors';

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
    <ThemeProvider theme={theme}>
      <Paper
        square
        style={{ width: '100%', minHeight: '100vh', height: 'auto' }}
      >
        <Header setDarkMode={changeTheme} darkMode={darkMode} />
        <TodoList />
      </Paper>
    </ThemeProvider>
  );
}

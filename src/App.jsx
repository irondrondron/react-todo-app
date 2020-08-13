import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/';
import Header from './components/Header';
// import TodoForm from './components/TodoForm';
// import TodoTabs from './components/TodoTabs';
import TodoList from './components/TodoList';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const changeTheme = () => {
    setDarkMode(!darkMode);
  };
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper square style={{ height: '100vh' }}>
        <Header setDarkMode={changeTheme} darkMode={darkMode} />
        <TodoList />
        {/* <TodoTabs /> */}
      </Paper>
    </ThemeProvider>
  );
}

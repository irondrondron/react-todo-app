import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/";
import Header from "./components/Header";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const changeTheme = () => {
    setDarkMode(!darkMode);
  };
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper square style={{ height: "100vh" }}>
        <Header setDarkMode={changeTheme} darkMode={darkMode} />
      </Paper>
    </ThemeProvider>
  );
}

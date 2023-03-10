import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import MDrawer from "./pages/Template/MDrawer.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
    <div className="App">
        <ThemeProvider theme={theme}>
        {console.log('Theme type:', theme.palette.type)}
          <CssBaseline />
          <Routes>
            <Route
              path="/"
              element={<Login onDarkModeChange={handleDarkModeChange} />}
            ></Route>
            <Route
              path="/Login"
              element={<Login onDarkModeChange={handleDarkModeChange} />}
            ></Route>
            <Route
              path="/Menu"
              element={<MDrawer onDarkModeChange={handleDarkModeChange} />}
            ></Route>
          </Routes>
        </ThemeProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;

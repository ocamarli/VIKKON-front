import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import MDrawer from "./pages/MDrawer.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { isExpired, decodeToken } from "react-jwt";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const PageTypes = {
    MDrawer: 0,
    Test: 1
  }

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  const ProtectedRoute = ({ type }) => {
    const tkn = JSON.parse(sessionStorage.getItem("ACCSSTKN"))?.access_token;
    if (tkn !== undefined) {
      if (!validateToken(tkn)) {
        return <Navigate to="/" replace />;
      }
      const decodedTkn = decodeToken(tkn);
      console.log(decodedTkn);

      return <FilterRoutes type={type} auth={JSON.parse(decodedTkn.sub)} />;
    } else return <Navigate to="/" replace />;
  };

  const FilterRoutes = ({ type, auth }) => {
    switch (type) {
      case 0:
        return <MDrawer onDarkModeChange={handleDarkModeChange} auth={auth} />;
      default:
        return <></>;
    }
  };

  const validateToken = (tkn) => {
    if (isExpired(tkn)) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route
              path="/"
              element={<Login onDarkModeChange={handleDarkModeChange} />}
            ></Route>
            <Route path="/Menu" element={<ProtectedRoute type={PageTypes.MDrawer} />}></Route>
          </Routes>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

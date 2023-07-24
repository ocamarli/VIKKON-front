import { styled, useTheme } from "@mui/material/styles";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import MuiAppBar from "@mui/material/AppBar";
import {
  Typography,
  Divider,
  Toolbar,
  List,
  Box,
  Drawer,
  CssBaseline,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  FormControl,
} from "@mui/material/";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Template from "./Template/Template";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Parameters from "./Parameters/Parameters";
import Home from "./Home/Home";
import "./MenuCss.css";
import RegisterPage from "./Register/RegisterPage";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Recipes from "./Recipes/Recipe";

const drawerWidth = 250;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,

    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft(props) {
  const navigate = useNavigate();
  const theme = useTheme();
  const { onDarkModeChange, auth } = props;
  const [open, setOpen] = React.useState(false);
  const [selectedComponent, setSelectedComponent] = useState(<Home />);

  const [openAlert, setOpenAlert] = React.useState(false);
  const [response, setResponse] = React.useState();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const selectRegister = () => {
    setSelectedComponent(<RegisterPage />);
  };
  const selectHome = () => {
    setSelectedComponent(<Home />);
  };
  const selectParameters = () => {
    setSelectedComponent(
      <Parameters
        onResponse={(json) => {
          setResponse(json);
          setOpenAlert(true);
        }}
      />
    );
  };
  const selectTemplate = () => {
    setSelectedComponent(
      <Template
        onResponse={(json) => {
          setResponse(json);
          setOpenAlert(true);
        }}
      />
    );
  };
  const selectRecipe = () => {
    setSelectedComponent(
      <Recipes
        onResponse={(json) => {
          setResponse(json);
          setOpenAlert(true);
        }}
      />
    );
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    onDarkModeChange();
  };
  const logOut = () => {
    sessionStorage.removeItem("ACCSSTKN");
    navigate("/");
  };
  const iconsStyle = {
    color: "#b8babf",
  };
  const classes = {
    root: {
      width: "100%",
      maxWidth: 360,
      padding: "15px",
      borderRadius: "3px",
    },
    nested: {
      paddingLeft: 40,
    },
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ height: "60px" }}>
        <Toolbar style={{ backgroundColor: "#212121", color: "white" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            VIKKON
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
          <IconButton color="inherit" sx={{ ml: 2 }}>
            <Avatar sx={{ mr: 1 }} />
            <Typography variant="subtitle1">
              {auth !== null ? auth?.username : "Username"}
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <FormControl style={classes.root}>
          <List>
            <ListItemButton onClick={selectHome}>
              <ListItemIcon>
                <HomeIcon sx={iconsStyle} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>

            <ListItemButton onClick={selectTemplate}>
              <ListItemIcon>
                <DescriptionIcon sx={iconsStyle} />
              </ListItemIcon>
              <ListItemText primary="Template" />
            </ListItemButton>

            <ListItemButton onClick={selectRecipe}>
              <ListItemIcon>
                <FormatListNumberedIcon sx={iconsStyle} />
              </ListItemIcon>
              <ListItemText primary="Recipes" />
            </ListItemButton>

            <ListItemButton onClick={selectParameters}>
              <ListItemIcon>
                <DescriptionIcon sx={iconsStyle} />
              </ListItemIcon>
              <ListItemText primary="Parameters" />
            </ListItemButton>
            <Divider />

            <ListItemButton onClick={selectRegister}>
              <ListItemIcon>
                <PersonAddIcon sx={iconsStyle} />
              </ListItemIcon>
              <ListItemText>New User</ListItemText>
            </ListItemButton>
          </List>
        </FormControl>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            flexGrow: 1,
            mb: 2,
          }}
        >
          <List>
            <ListItemButton color="inherit" onClick={toggleDarkMode}>
              <ListItemIcon>
                {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
              </ListItemIcon>
              <ListItemText
                primary={darkMode ? "Ligh mode" : "Dark mode"}
                className="listItemText"
              />
            </ListItemButton>

            <ListItemButton onClick={logOut}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="LogOut" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      <Main open={open} sx={{backgroundColor:theme.palette.mode==="light"?"#efefef":null, height:"100vh"}}>
        <DrawerHeader />

        <SwitchTransition>
          <CSSTransition
            key={selectedComponent.type}
            timeout={400}
            classNames="item"
            unmountOnExit
          >
            {selectedComponent}
          </CSSTransition>
        </SwitchTransition>
        <Snackbar
          open={openAlert}
          autoHideDuration={6000}
          onClose={handleAlertClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <Alert
            onClose={handleAlertClose}
            severity={response?.status ? "success" : "error"}
            sx={{ width: "100%" }}
          >
            {response?.msg}
          </Alert>
        </Snackbar>
      </Main>
    </Box>
  );
}

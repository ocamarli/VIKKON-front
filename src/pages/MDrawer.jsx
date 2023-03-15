import { styled, useTheme } from "@mui/material/styles";

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

import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";

import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Template from "./Template/Template";
import { useNavigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";

import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import DescriptionIcon from "@mui/icons-material/Description";

import Parameters from "./Parameters/Parameters";
import Home from "./Home/Home";
import "./MenuCss.css"

const drawerWidth = 180;
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
  const [openBuy, setOpenBuy] = React.useState(false);
  const [selectedComponent, setSelectedComponent] = useState(<Home/>);

  const selectHome = () => {
    setSelectedComponent(<Home />);
  };
  const selectParameters = () => {
    setSelectedComponent(<Parameters/>);
  };
  const selectTemplate = () => {
    setSelectedComponent(<Template/>);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickBuy = () => {
    setOpenBuy(!openBuy);
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
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ height: "60px" }}>
        <Toolbar style={{ backgroundColor: '#5ECA58' }}>
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
            Persistent drawer
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
          <IconButton color="inherit" sx={{ ml: 2 }}>
            <Avatar sx={{ mr: 1 }} />
            <Typography variant="subtitle1">{auth !== null ? auth?.username : "Username"}</Typography>
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
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <FormControl className="listC">
        <List  >
          <ListItemButton onClick={selectHome}>
            <ListItemIcon className="icons">
              <HomeIcon />
            </ListItemIcon>
            <ListItemText >Home</ListItemText>
          </ListItemButton>

          <ListItemButton onClick={selectTemplate}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Template" className="listItemText" />
 
          </ListItemButton>

          <ListItemButton onClick={handleClickBuy}>
            <ListItemIcon>
              <FormatListNumberedIcon />
            </ListItemIcon>
            <ListItemText className="listItemText" primary="Receipes" />
            {openBuy ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openBuy} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <PlaylistAddIcon />
                </ListItemIcon>
                <ListItemText primary="New" className="listItemText" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Search" className="listItemText" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={selectParameters}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Parameters" className="listItemText" />
            
          </ListItemButton>
    
        </List>
        </FormControl>
        <Divider />
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
              <ListItemText primary="LogOut" className="listItemText" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {selectedComponent}
      </Main>
    </Box>
  );
}

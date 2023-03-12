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
  const { onDarkModeChange } = props;
  const [open, setOpen] = React.useState(false);
  const [openSell, setOpenSell] = React.useState(false);
  const [openBuy, setOpenBuy] = React.useState(false);
  const [selectedComponent, setSelectedComponent] = useState(<Home/>);
  const [openParameters, setOpenParameters] = React.useState(false);
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
  const handleClickSell = () => {
    setOpenSell(!openSell);
  };
  const handleClickParameters = () => {
    setOpenParameters(!openParameters);
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
    navigate("/");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ height: "60px" }}>
        <Toolbar style={{ backgroundColor: '#3AAA35' }}>
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
            <Typography variant="subtitle1">Username</Typography>
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
        <List>
          <ListItemButton onClick={selectHome}>
            <ListItemIcon classes="icons">
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" Nameclass="listItemText" />
          </ListItemButton>

          <ListItemButton onClick={selectTemplate}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Template" Nameclass="listItemText" />
 
          </ListItemButton>

          <ListItemButton onClick={handleClickBuy}>
            <ListItemIcon>
              <FormatListNumberedIcon />
            </ListItemIcon>
            <ListItemText Nameclass="listItemText" primary="Receipes" />
            {openBuy ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openBuy} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <PlaylistAddIcon />
                </ListItemIcon>
                <ListItemText primary="New" Nameclass="listItemText" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Search" Nameclass="listItemText" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={selectParameters}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Parameters" Nameclass="listItemText" />
            
          </ListItemButton>
    
        </List>
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
                Nameclass="listItemText"
              />
            </ListItemButton>

            <ListItemButton onClick={logOut}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="LogOut" Nameclass="listItemText" />
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

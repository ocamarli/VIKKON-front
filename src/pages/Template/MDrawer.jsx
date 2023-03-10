import { styled, useTheme } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
import SellIcon from "@mui/icons-material/Sell";
import PontOfSaleIcon from "@mui/icons-material/PointOfSale";
import MoneyIcon from "@mui/icons-material/Money";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import AddShopingIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingIcon from "@mui/icons-material/ShoppingCart";
import NoteIcon from "@mui/icons-material/NoteAdd";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Template from "./Template";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptIcon from "@mui/icons-material/Receipt";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import DescriptionIcon from "@mui/icons-material/Description";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
const useStyles = makeStyles((theme) => ({
  listItemText: {
    fontSize: 13,
    margin: -5,
 
  },
  icons: {
    minWidth: '40px', 
  },
}));

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
  const classes = useStyles();
  const { onDarkModeChange } = props;
  const [open, setOpen] = React.useState(false);
  const [openSell, setOpenSell] = React.useState(false);
  const [openBuy, setOpenBuy] = React.useState(false);
  const [selectedComponent, setSelectedComponent] = useState(<Template />);

  const selectComponent = () => {
    setSelectedComponent(<Template />);
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
        <Toolbar>
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
          <ListItemButton>
            <ListItemIcon classes={classes.icons}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" classes={{primary:classes.listItemText}} />
          </ListItemButton>

          <ListItemButton onClick={handleClickSell}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Template" classes={{primary:classes.listItemText}} />
            {openSell ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSell} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <NoteAddIcon />
                </ListItemIcon>
                <ListItemText primary="New" classes={{primary:classes.listItemText}} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Search" classes={{primary:classes.listItemText}} />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleClickBuy}>
            <ListItemIcon>
              <FormatListNumberedIcon />
            </ListItemIcon>
            <ListItemText classes={{primary:classes.listItemText}} primary="Receipes" />
            {openBuy ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openBuy} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <PlaylistAddIcon />
                </ListItemIcon>
                <ListItemText primary="New" classes={{primary:classes.listItemText}} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Search" classes={{primary:classes.listItemText}} />
              </ListItemButton>
            </List>
          </Collapse>
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
                classes={{primary:classes.listItemText}}
              />
            </ListItemButton>

            <ListItemButton onClick={logOut}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="LogOut" classes={{primary:classes.listItemText}} />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Template />
      </Main>
    </Box>
  );
}

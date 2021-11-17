import React from "react";
import Currorder from "../components/Admin/CurrentOrders/Admincurrorders";
import Allorder from "../components/Admin/AllOrders/AdminAllOrders";
import AdminMenu from "../components/Admin/MenuManager/Adminmenu";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CropFreeIcon from "@material-ui/icons/CropFree";
import HistoryIcon from '@material-ui/icons/History';
import AlarmIcon from '@material-ui/icons/Alarm';
import { Route, Switch } from "react-router-dom";

import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import { withRouter } from "react-router-dom";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ReceiptIcon from '@material-ui/icons/Receipt';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Footer from "../components/Menu/menufooter";
import Dashboard from "../components/Admin/AdminDashboard/AdminDashboard";
import Qr from "../components/HelperComponents/qr";
const drawerWidth = 220;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#3FDE82",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    color: "#FFFBFC",
    backgroundColor: "#0D1B2A",
    width: drawerWidth,
  },
  drawerHeader: {
    backgroundColor: "#3FDE82",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    marginTop: "50px",
    width: "100px",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
export default function App(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { history } = props;
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const itemsList = [
    {
      text: "Dashboard",
      icon: <DashboardIcon style={{ color: "#FFFBFC" }} />,
      onClick: () => history.push("/admin/dashboard"),
    },
    {
      text: "Active Orders",
      icon: <AlarmIcon style={{ color: "#FFFBFC" }} />,
      onClick: () => history.push("/admin/activeorders"),
    },
    {
      text: "All Orders",
      icon: <HistoryIcon style={{ color: "#FFFBFC" }} />,
      onClick: () => history.push("/admin/allorders"),
    },
    {
      text: "Menu Manager",
      icon: <ReceiptIcon style={{ color: "#FFFBFC" }} />,
      onClick: () => history.push("/admin/menu"),
    },
    {
      text: "Your QR",
      icon: <CropFreeIcon style={{ color: "#FFFBFC" }} />,
      onClick: () => history.push("/admin/qr"),
    },
  ];
  return (
    <div className={classes.container}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <MUIDrawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
          
          <Divider />
          <ListItem button key={"Log Out"} onClick={""}>
                <ListItemIcon><ExitToAppIcon style={{ color: "#FFFBFC" }} /></ListItemIcon>
                <ListItemText primary={"Log Out"} />
              </ListItem>
        </List>
      </MUIDrawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Switch>
          <Route path="/admin" exact>
            <Dashboard />
          </Route>
          <Route path="/admin/dashboard">
            <Dashboard />
          </Route>
          <Route path="/admin/activeorders">
            <Currorder />
          </Route>
          <Route path="/admin/allorders">
            <Allorder />
          </Route>
          <Route path="/admin/menu">
            <AdminMenu />
          </Route>
          <Route path="/admin/qr">
            <Qr />
          </Route>
        </Switch>
        <Footer />
      </main>
    </div>
  );
}

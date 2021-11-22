import React from "react";
import Currorder from "../components/Admin/CurrentOrders/Admincurrorders";
import Allorder from "../components/Admin/AllOrders/AdminAllOrders";
import AdminMenu from "../components/Admin/MenuManager/Adminmenu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Snackbar from "@material-ui/core/Snackbar";

import CropFreeIcon from "@material-ui/icons/CropFree";
import HistoryIcon from "@material-ui/icons/History";
import AlarmIcon from "@material-ui/icons/Alarm";
import { Route, Switch } from "react-router-dom";
import Error from "./404";
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
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import MuiAlert from "@material-ui/lab/Alert";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Footer from "../components/Menu/menufooter";
import Dashboard from "../components/Admin/AdminDashboard/AdminDashboard";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Qr from "../components/HelperComponents/qr";
import io from "socket.io-client";

const drawerWidth = 220;
const axios = require("axios");

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
  snack: {
    maxWidth: 400,
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}));

const action = (
  <Button
    href="activeorders"
    style={{
      backgroundColor: "#3FDE82",
    }}
    size="small"
  >
    Go to Orders
  </Button>
);

function showNotification() {
  var title = "You Have a New Order !";
  var icon = "https://i.ibb.co/wg14TyM/YT-Fav-Icon.png";
  var body = "👀👀";
  var notification = new Notification(title, { body, icon });
  notification.onclick = () => {
    notification.close();
    window.parent.focus();
  };
}

export default function App(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [view, updateView] = React.useState(false);
  const [socket, setSocket] = React.useState(null);
  const [storeid, updateStoreid] = React.useState("");
  const [openSnack, setopenSnack] = React.useState(false);

  if (Notification.permission != "granted") {
    Notification.requestPermission().then(function (permission) {
      console.log(permission);
    });
  }

  const { history } = props;
  React.useEffect(() => {
    async function op() {
      if(!localStorage.getItem("SESS") || localStorage.getItem("SESS").length!=32){
          updateView(false);
          window.open("http://localhost:3000/signin", "_self");
          return;
      }
      var x = await axios.post("http://localhost:5000/LoginCheck", {
        session: localStorage.getItem("SESS"),
      });
      if (x.data.bool === false) {
        updateView(false);
        window.open("http://localhost:3000/signin", "_self");
        return ;
      } else {
        updateView(true);
        updateStoreid(x.data.key);
        setSocket(io("http://localhost:5001"));
      }
    }
    op();
  }, []);

  React.useEffect(() => {
    if (socket) {
      socket.emit("Join", storeid);

      socket.on("Notify", () => {
        setopenSnack(true);
        showNotification();
      });
    }
  }, [socket]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleClose() {
    setopenSnack(false);
  }

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
    <>
      {!view && (
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress
            color="inherit"
            display="block"
            style={{ marginRight: "20px" }}
          />
          <Typography variant="h6" display="block">
            Validating Credentials
          </Typography>
        </Backdrop>
      )}
      {view && (
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
              <ListItem
                button
                key={"Log Out"}
                onClick={() => {
                  localStorage.setItem("SESS", "");
                  window.open("http://localhost:3000/", "_self");
                }}
              >
                <ListItemIcon>
                  <ExitToAppIcon style={{ color: "#FFFBFC" }} />
                </ListItemIcon>
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
              <Route path="*">
                <Dashboard />
              </Route>
            </Switch>
            <div className={classes.snack}>
              <Snackbar
                open={openSnack}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              >
                <SnackbarContent
                  message="New Order Received!"
                  action={action}
                />
              </Snackbar>
            </div>
            <Footer />
          </main>
        </div>
      )}
    </>
  );
}

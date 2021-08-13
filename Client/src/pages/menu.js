import PlaceOrder from "../components/placeorder";
import Footer from "../components/menufooter";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DeleteIcon from "@material-ui/icons/Delete";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import MuiPhoneNumber from "material-ui-phone-number";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useState } from "react";
import Divider from "@material-ui/core/Divider";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Container, Grid, Card, CardContent, Box } from "@material-ui/core";
import data from "./data.js";

const axios = require("axios");
const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
  menuButton: {
    flexGrow: 1,
    color: "#0D1B2A",
  },

  menu: {
    marginTop: "20px",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginRight: "10px",
  },

  details: {
    display: "flex",
    flexDirection: "row",
  },
  content: {
    flex: "1 0 auto",

    alignItems: "center",
    paddingLeft: theme.spacing(2),
  },
  drawerHeader: {
    backgroundColor: "#3FDE82",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  dishname: {
    fontSize: "15px",
    flexGrow: 1,
    marginRight: "100px",
  },
  dishcount: {
    fontSize: "15px",
  },
  fname: {
    marginRight: "155px",
  },

  playIcon: {
    height: 38,
    width: 38,
  },
  warning: {
    color: "#b83e3e",
  },
  centre: {
    marginTop: "15px",
    textAlign: "center",
    alignContent: "center",
  },
  button: {
    marginTop: "10px",
    marginLeft: "55px",
    marginBottom: "-10px",
  },
  header: {
    backgroundColor: "#3FDE82",
  },
}));

function App() {
  const classes = useStyles();
  const [itemcount, setCount] = useState(0);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [session, updatesession] = useState([]);
  const [total, totalupdate] = useState(0);
  function cartbtn(inputt, name, price) {
    if (inputt === "true") {
      return (
        <IconButton
          aria-label="play/pause"
          onClick={() => {
            add(name, price);
          }}
        >
          <AddShoppingCartIcon className={classes.playIcon} />
        </IconButton>
      );
    }
  }

  function add(name, price) {
    var itemlist = sessionStorage.getItem("food");
    if (name === "" && price === 0) {
      if (itemlist == null) {
        return;
      }
      var cc = itemlist.split(",");
      setCount((cc.length - 1) / 3);
    } else {
      if (itemlist === null) {
        itemlist = "";
      }
      var temp = itemlist.split(",");
      var ind = temp.indexOf(name);
      if (ind === -1) {
        itemlist = itemlist + name + "," + price + ",1,";
        sessionStorage.setItem("food", itemlist);
      } else {
        temp[ind + 2] = parseInt(temp[ind + 2]) + 1;
        let text = temp.toString();
        sessionStorage.setItem("food", text);
      }
    }
    temp = sessionStorage.getItem("food").split(",");
    var tempobj = [];
    var tempcount = 0;
    var temptotal = 0;
    for (let i = 1; i < temp.length; i = i + 3) {
      var tt = {
        name: temp[i - 1],
        price: temp[i],
        total: temp[i + 1],
      };
      tempobj.push(tt);
      tempcount += 1;
      temptotal = temptotal + parseInt(temp[i] * temp[i + 1]);
    }
    setCount(tempcount);
    totalupdate(temptotal);
    updatesession(tempobj);
  }

  function deleteitem(name) {
    var temp = sessionStorage.getItem("food").split(",");
    var ind = temp.indexOf(name);

    if (temp[ind + 2] === "1") {
      console.log("Asdfasdf");
      temp.splice(ind, 1);
      temp.splice(ind, 1);
      temp.splice(ind, 1);
    } else {
      temp[ind + 2] = temp[ind + 2] - 1;
    }
    let text = temp.toString();
    sessionStorage.setItem("food", text);
    var tempobj = [];
    var tempcount = 0;
    var temptotal = 0;
    for (let i = 1; i < temp.length; i = i + 3) {
      var tt = {
        name: temp[i - 1],
        price: temp[i],
        total: temp[i + 1],
      };
      tempobj.push(tt);
      tempcount += 1;
      temptotal = temptotal + parseInt(temp[i] * temp[i + 1]);
    }
    setCount(tempcount);
    totalupdate(temptotal);
    updatesession(tempobj);
  }

  function availability(inputt) {
    if (inputt === "false") {
      return "Currently Unavailable";
    }
  }

  const handleDrawerOpen = () => {
    add("", 0);
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  window.addEventListener("load", () => add("", 0));
  return (
    <div className={classes.allbg}>
      <CssBaseline />
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.menuButton}>
            {data.name}
          </Typography>
          <Button edge="end" color="#0D1B2A">
            Login
          </Button>
          <IconButton color="#0D1B2A">
            <Badge
              badgeContent={itemcount}
              color="secondary"
              onClick={handleDrawerOpen}
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography flexGrow="1">Cart</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        {itemcount > 0 &&
          session.map((dish) => (
            <List>
              <Container maxWidth="xl" className={classes.menu}>
                <Grid item xl={1}>
                  <Card className={classes.root}>
                    <div className={classes.details}>
                      <CardContent className={classes.content}>
                        <Typography
                          component="h6"
                          variant="h6"
                          className={classes.dishname}
                          display="inline"
                        >
                          {dish.name}
                        </Typography>
                        <Typography
                          component="h6"
                          variant="h6"
                          display="inline"
                          className={classes.dishcount}
                        >
                          X {dish.total}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {dish.price} ₹{"     "}
                        </Typography>

                        <Button
                          variant="contained"
                          color="secondary"
                          className={classes.button}
                          startIcon={<DeleteIcon />}
                          onClick={() => {
                            deleteitem(dish.name);
                          }}
                        >
                          Delete
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </Grid>
              </Container>
            </List>
          ))}
        <Divider />
        <Grid item xl={1}>
          <Card className={classes.root}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography
                  component="h6"
                  variant="h6"
                  display="inline"
                  className={classes.fname}
                >
                  Total
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  display="inline"
                >
                  {total} ₹
                </Typography>
              </CardContent>
            </div>
          </Card>
        </Grid>

        <Divider />

        {itemcount && <PlaceOrder name={session} />}
      </Drawer>

      {data.items.map((dish) => (
        <Container maxWidth="xl" className={classes.menu}>
          <Grid item xl={1}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {dish.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {dish.price} ₹
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    className={classes.warning}
                  >
                    {availability(dish.available)}
                  </Typography>
                </CardContent>
                <div className={classes.controls}>
                  {cartbtn(dish.available, dish.name, dish.price)}
                </div>
              </div>
            </Card>
          </Grid>
        </Container>
      ))}
      <Footer />
    </div>
  );
}

export default App;

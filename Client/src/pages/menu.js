import PlaceOrder from "../components/Menu/placeorder";
import Footer from "../components/Menu/menufooter";
import Cart from "../components/Menu/Cart";
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
import React, { useState, useEffect } from "react";
import Divider from "@material-ui/core/Divider";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Container, Grid, Card, CardContent, Box } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

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
  let location = useLocation();
  var storeid = location.pathname.split("/")[2];
  const classes = useStyles();
  const [itemcount, setCount] = useState(0);
  const [data, updatedata] = useState(null);

  useEffect(() => {
    async function op() {
      var x = await axios.post("http://localhost:5000/GetItemsForUser", {
        key: storeid,
      });
      if (x.data.bool === true) {
        updatedata(x.data);
        
        
      } else {
        window.open("http://localhost:3000/404", "_self");
      }
    }
    op();

    
  }, []);



  function cartbtn(inputt, name, price, itemkey) {
    if (inputt === true) {
      return (
        <IconButton
          aria-label="play/pause"
          onClick={() => {
            add(name, price, itemkey);
          }}
        >
          <AddShoppingCartIcon className={classes.playIcon} />
        </IconButton>
      );
    }
  }

  function add(name, price, itemkey) {
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
        itemlist = itemlist + name + "," + price + "/" + itemkey + ",1,";
        sessionStorage.setItem("food", itemlist);
      } else {
        temp[ind + 2] = parseInt(temp[ind + 2]) + 1;
        let text = temp.toString();
        sessionStorage.setItem("food", text);
      }
    }
    cc = sessionStorage.getItem("food").split(",");
    setCount((cc.length - 1) / 3);
  }
  window.addEventListener("load", () => add("", 0));
  if (document.getElementById("cartClose")) {
    document.getElementById("cartClose").addEventListener("click", () => {
      add("", 0);
    });
  }
  return (
    <div>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.menuButton}>
            {data && data.name}
          </Typography>
          <Button edge="end" color="#0D1B2A">
            Login
          </Button>
          <IconButton color="#0D1B2A" id="cartButton">
            <Badge badgeContent={itemcount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      {data && (
        <Cart
          restname={data.name}
          restaddress={data.address}
          restcity={data.city}
          restlogo={data.logo}
        />
      )}

      {data &&
        data.items.map((dish) => (
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
                      {dish.available ? "" : "Currently Unavailable"}
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}>
                    {cartbtn(
                      dish.available,
                      dish.name,
                      dish.price,
                      dish.Itemkey
                    )}
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

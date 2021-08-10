import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import Divider from "@material-ui/core/Divider";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Container, Grid, Card, CardContent,Box } from "@material-ui/core";
import data from "./data.js"
import { func } from 'prop-types';

const drawerWidth = 300;
const useStyles = makeStyles((theme)=> ({
  // This group of buttons will be aligned to the right

  menuButton: {
    flexGrow: 1
  },
  menu: {
    marginTop: "20px"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginRight: "10px"
  },
  
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    flex: '1 0 auto',

    alignItems: 'center',
    paddingLeft: theme.spacing(2),
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  cname: {
    
    fontSize: "15px",
    flexGrow: 1
  },
  fname: {
    marginRight: "155px"
  },
  
  playIcon: {
    
    height: 38,
    width: 38,
    
  },
  warning: {
    color: "#b83e3e"
  }
}))

function App() {
  const classes = useStyles()
  const [itemcount, setCount] = useState(0);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  function cartbtn(inputt,name,price){
    if(inputt==="true"){
      return (<IconButton aria-label="play/pause" onClick={ () => { add(name,price)  } }>
      <AddShoppingCartIcon className={classes.playIcon} />
    </IconButton>);
    }}

  function add(name,price){
    setCount(itemcount+1);
    var itemname = sessionStorage.getItem("food");
    if(itemname=== null){
    itemname = ""}
    itemname = itemname + name +";"+ price + ";"
    sessionStorage.setItem("food", itemname);
  }

  function availability(inputt){
    if(inputt === "false"){
      return "Currently Unavailable"
    }}
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
  
  return (
    <div>
 
 

<CssBaseline />
<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
    </IconButton>
    <Typography variant="h6" className={classes.menuButton} >
      EatUP
    </Typography>
    <Button edge="end" color="inherit">Login</Button>
    <IconButton  color="inherit">
      <Badge badgeContent={itemcount} color="secondary" onClick={handleDrawerOpen} >
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
          paper: classes.drawerPaper
        }} >
        <div className={classes.drawerHeader}>
        <Typography  
        flexGrow= "1" >
        Cart</Typography> 
          <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        
        { itemcount>0 && data.items.map((dish)=>(
        <List>
          <Container maxWidth="xl" className={classes.menu}>
            <Grid item xl={1}>
              <Card className={classes.root}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography
                      component="h6"
                      variant="h6"
                      className={classes.cname} >
                      {dish.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary" >
                      {dish.price} ₹
                    </Typography>
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
                      className={classes.fname}>
                      Total
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      display="inline" >
                       1000 ₹
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
      </Drawer>



{data.items.map((dish)=>(
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
          <Typography variant="subtitle2" color="textSecondary" className={classes.warning}>
            { availability(dish.available) }
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          { cartbtn(dish.available, dish.name, dish.price) }
        </div>
      </div>
    </Card>
</Grid>
</Container>
))}




</div>
  );
}

export default App;

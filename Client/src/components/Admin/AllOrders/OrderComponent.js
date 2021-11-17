import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { Container, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
const axios = require("axios");

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  itemlist: {
    marginBottom: "-30px",
    marginLeft: "-10px",
  },
}));
function parseTime(s) {
  var c = s.split(":");
  return parseInt(c[0]) * 60 + parseInt(c[1]);
}
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

export default function RecipeReviewCard(orderdetails) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
        
          avatar={
            orderdetails.completed === true ? (
            <Avatar  >
                ✅
            </Avatar> ) : (
            <Avatar  >
                ❌
            </Avatar> )
          }
          
          title={"Order No: " + orderdetails.orderno}
          subheader={orderdetails.time}
        />

        <CardContent>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            component="p"
            display="inline"
            style={{ marginRight: 6 }}
          >
            Date :
          </Typography>

          <Typography
            variant="subtitle2"
            component="p"
            display="inline"
          >
            {orderdetails.date}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            Dine In
          </Typography>
          <List className={classes.itemlist}>
            {orderdetails.items &&
              orderdetails.items.map((order) => (
                <ListItem>
                  <ListItemText primary={order.name} />
                  <ListItemSecondaryAction>
                    <h4>X {order.quantity}</h4>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
          </List>
        </CardContent>
        <CardActions disableSpacing>
          
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography h6>Table No: {orderdetails.tableno}</Typography>
            <Typography h6>Name : {orderdetails.name}</Typography>
            <Typography paragraph>Other Details : N/A</Typography>
            <Typography h6>Ph : {orderdetails.ph}</Typography>
            <Typography h6>Email : {orderdetails.email}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}

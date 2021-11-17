import { React, useEffect, useState } from "react";
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
import Orders from "./OrderComponent";
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
function todaysdate() {
  var d = new Date();
  var n = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
  return n;
}
export default function RecipeReviewCard() {
  const classes = useStyles();
  const [data, updatedata] = useState(false);

  useEffect(() => {
    async function op() {
      var x = await axios.post("http://localhost:5000/GetActiveOrders", {
        session: sessionStorage.getItem("SESS"),
        type: "All",
      });
      updatedata(x.data.items);
    }
    op();
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        {data &&
          data.map((order) =>
            order.date !== todaysdate() || order.active=== false ? (
              <Grid item xl={6}>
                <Orders
                  name={order.name}
                  email={order.email}
                  ph={order.ph}
                  items={order.items}
                  active={order.active}
                  completed={order.completed}
                  time={order.time}
                  orderno={order.orderno}
                  date = {order.date}
                />
              </Grid>
            ) : (
              <></>
            )
          )}
      </Grid>
    </>
  );
}

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

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expandT, setexpandT] = React.useState([false, false]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" backgroundColor="blue">
              {props.title}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Order No: 23452"
          subheader="10:25 PM, Today"
        />

        <CardContent>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            Dine In
          </Typography>
          <List className={classes.itemlist}>
            <ListItem>
              <ListItemText primary="Chole Bhature" />
              <ListItemSecondaryAction>
                <h4>X2</h4>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText primary="Chana Masala" />
              <ListItemSecondaryAction>
                <h4>X5</h4>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <DoneIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ClearIcon />
          </IconButton>
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
            <Typography h6>Table No: 22</Typography>
            <Typography h6>Name : Umessi</Typography>
            <Typography paragraph>Other Details :</Typography>
            <Typography h6>Ph : 9999999999</Typography>
            <Typography h6>Email : Opbolte@gmail.com</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}

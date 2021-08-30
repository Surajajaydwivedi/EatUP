import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Orders from "./AdminDashboardOrders";
import Chart from "./AdminDashboardChart";
import Week from "./AdminDashboardCards"
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    marginBottom: 50,
    marginTop: 20,
  },
  bullet: {
    color: "green",
    
    display: "inline-block",
    
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function App() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container spacing={1}>
      <Grid container item lg={3} xs={12} spacing={1}>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              This Week's Revenue
            </Typography>
            <Typography variant="h5" component="h2">
              250 K
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>{" "}
            <TrendingDownIcon color="error" />
          </CardActions>
        </Card>
      </Grid>
      <Grid container item lg={3} xs={12} spacing={1}>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Today's Orders
            </Typography>
            <Typography variant="h5" component="h2">
              56
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>{" "}
            <TrendingUpIcon color="primary" />
          </CardActions>
        </Card>
      </Grid>
      <Grid container item lg={3} xs={12} spacing={1}>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Currently Active Orders 
            </Typography> 
            <Typography variant="h5" component="h2">
              17
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Track Orders</Button> <FiberManualRecordIcon  style={{ color: "green" }} />
          </CardActions>
        </Card>
      </Grid>
      <Grid container item lg={3} xs={12} spacing={1}>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Total Menu Items
            </Typography>
            <Typography variant="h5" component="h2">
              44
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Manage Menu</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid container item lg={9} xs={12} spacing={1}>
        <Orders />
      </Grid>
      <Grid container item lg={3} xs={12} spacing={1}>
        <Chart />
      </Grid>
    
    </Grid>
  );
}

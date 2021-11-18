import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Orders from "./AdminDashboardOrders";
import Chart from "./AdminDashboardChart";
const axios = require("axios");
const useStyles = makeStyles({
  root: {
    minWidth: 300,
    marginBottom: 50,
    marginTop: 20,
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
  const [data, updateData] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    async function op() {
      handleOpen();
      var x = await axios.post("http://localhost:5000/GetDasboardData", {
        session: localStorage.getItem("SESS"),
      });

      updateData(x.data.ret);
      handleClose();
    }
    op();
  }, []);

  return (
    <>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid container spacing={1}>
        <Grid container item lg={3} xs={12} spacing={1}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Total Revenue
              </Typography>
              <Typography variant="h5" component="h2">
                {data && data[0]} ₹
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  window.location = "allorders";
                }}
              >
                Learn More 📊
              </Button>
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
                {data && data[1]}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  window.location = "allorders";
                }}
              >
                Learn More{" "}
              </Button>{" "}
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
                {data && data[2]}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  window.location = "activeorders";
                }}
              >
                Track Orders 🟢
              </Button>{" "}
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
                {data && data[3]}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  window.location = "menu";
                }}
              >
                Manage Menu 📜
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid container item lg={9} xs={12} spacing={1}>
          <Orders data={data && data[4]} />
        </Grid>
        {data && data[5] && (
          <Grid container item lg={3} xs={12} spacing={1}>
            <Chart data={data[5]} />
          </Grid>
        )}
      </Grid>{" "}
    </>
  );
}

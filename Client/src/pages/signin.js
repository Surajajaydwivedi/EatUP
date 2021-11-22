import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Mainheader from "../components/InfoSection/Mainheader";
import Mainfooter from "../components/InfoSection/Mainfooter";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
const crypto = require("crypto");

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.info.dark,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  fullscr: {
    marginTop: "150px",
    marginBottom: "100px",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [open, setOpen] = React.useState(false);
  const [msg, updatemsg] = useState("");
  const [pn, updatepn] = useState("");
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const [enteredEmail, UpdateEnteredEmail] = useState("");
  const [enteredPass, UpdateEnteredPass] = useState("");

  function handlepasschange() {
    var x = document.getElementById("password").value;
    UpdateEnteredPass(x);
  }
  function handleemailchange() {
    var x = document.getElementById("email").value;
    UpdateEnteredEmail(x);
  }

  React.useEffect(() => {
    async function op() {
      if(!localStorage.getItem("SESS") || localStorage.getItem("SESS").length!=32){
          return;
      }
      var x = await axios.post("http://localhost:5000/LoginCheck", {
        session: localStorage.getItem("SESS"),
      });
      if (x.data.bool === false) {
        return ;
      } else {
        window.open("http://localhost:3000/admin", "_self");
      }
    }
    op();
  }, []);


  async function validate() {
    var data = {
      email: enteredEmail,
      password: crypto.createHash("sha1").update(enteredPass).digest("hex"),
    };
    const resp = await axios.post("http://localhost:5000/adminsignin", data);
    if (resp.data.bool === false) {
      updatepn("error");
      updatemsg("Wrong Credentials.");
      handleClick();
    } else {
      updatepn("success");
      updatemsg("Success! Redirecting.");
      handleClick();
      localStorage.setItem("SESS", resp.data.session);
      await delay(2000);
      window.open("/admin/dashboard", "_self");
    }
  }

  return (
    <>
      <Mainheader />
      <Container component="main" maxWidth="xs" className={classes.fullscr}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleemailchange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              onChange={handlepasschange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={validate}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>

      {"  "}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={pn}>
          {msg}
        </Alert>
      </Snackbar>

      <Mainfooter />
    </>
  );
}

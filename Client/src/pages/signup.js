import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import StoreIcon from "@material-ui/icons/Store";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Container from "@material-ui/core/Container";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import MuiPhoneNumber from "material-ui-phone-number";
import { red } from "@material-ui/core/colors";
import Mainfooter from "../components/InfoSection/Mainfooter";
import Mainheader from "../components/InfoSection/Mainheader";

const axios = require("axios");
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
  root: {
    width: "100%",
    marginTop: "100px",
    marginBottom: "100px",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  passwordmatch: {
    marginLeft: "4px",
    color: "red",
    fontSize: "12px",
    visibility: "hidden",
  },
}));

var key = "";
const random = (length = 9) => {
  let chars = "abcdefghijklmnopqrstuvwxyz";
  let tempstr = "";
  for (let i = 0; i < length; i++) {
    tempstr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  var str = "";
  for (let i = 0; i < tempstr.length; i++) {
    str += tempstr[i];
    if ((i + 1) % 3 === 0 && i != tempstr.length - 1) {
      str += "-";
    }
  }
  key = str;
};

function getSteps() {
  return ["Personal Info", "Store Info", "Get Your QR"];
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [ph, updateph] = useState(0);
  const [password, updatepassword] = useState("");
  const [samepass, updatesamepass] = useState(false);
  const [emailid, updateemailid] = useState("");

  function handlephchange(value) {
    if (value) {
      updateph(value);
    }
  }
  async function emailexist() {
    const resp = await axios.post("http://localhost:5000/check", {
      email: emailid,
    });
    return resp.data.ans;
  }

  function handlepasschange() {
    var x = document.getElementById("password").value;
    updatepassword(x);
  }

  function handleconfirmchange() {
    var x = document.getElementById("c-password").value;
    if (x.length > 0) {
      if (x !== password) {
        document.getElementById("passwordmatch").style = "visibility:visible";
        updatesamepass(false);
      } else {
        document.getElementById("passwordmatch").style = "visibility:hidden";
        updatesamepass(true);
      }
    } else {
      document.getElementById("passwordmatch").style = "visibility:hidden";
      updatesamepass(false);
    }
  }

  function handleemailchange() {
    document.getElementById("wrongemail").style = "visibility:hidden";

    var x = document.getElementById("email").value;
    if (!x.includes(".com") || !x.includes("@")) {
      document.getElementById("wrongemail").style = "visibility:visible";
    } else {
      document.getElementById("wrongemail").style = "visibility:hidden";
    }
    if (x.length === 0) {
      document.getElementById("wrongemail").style = "visibility:hidden";
    }
    updateemailid(x);
  }

  function insertdata(data) {
    axios.post("http://localhost:5000/insert", data);
  }

  const steps = getSteps();
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      onChange={handleemailchange}
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MuiPhoneNumber
                      name="phone"
                      label="Phone Number"
                      data-cy="user-phone"
                      defaultCountry={"in"}
                      onChange={handlephchange}
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      onChange={handlepasschange}
                      autoComplete="current-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="confirm password"
                      label="Confirm Password"
                      type="password"
                      id="c-password"
                      onChange={handleconfirmchange}
                      autoComplete="current-password"
                    />
                    <div className={classes.passwordmatch} id="wrongemail">
                      Invalid Email.
                    </div>
                    <div className={classes.passwordmatch} id="passwordmatch">
                      Passwords do not match.
                    </div>
                  </Grid>
                </Grid>

                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Already Registered? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={5}></Box>
          </Container>
        );
      case 1:
        return (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <StoreIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Store Details
              </Typography>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Store Name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Address"
                      variant="outlined"
                      placeholder="Street Name/ Plot No."
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="outlined-basic"
                      label="City"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="outlined-basic"
                      label="State"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="outlined-basic"
                      label="Pincode"
                      variant="outlined"
                      type="number"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" component="label" fullWidth>
                      Upload Logo*
                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        required
                        id="uploadBox"
                      />
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" component="label" fullWidth>
                      Upload Store image (Optional)
                      <input type="file" accept="image/*" hidden required />
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        );
      case 2:
        return <>Here is Your QR</>;
      default:
        return "Get Your QR";
    }
  }

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const buttonreturn = (val) => {
    console.log(val);
    if (val === 0) {
      return "Check and Procced";
    } else if (val === 1) {
      return "Submit";
    } else if (val === 2) {
      return "Finish";
    }
  };

  async function handleNext(value) {
    if (value === 0) {
      var emailexists = 1; /*await emailexist(); */
      console.log(emailexists);
      if (samepass !== true || emailexists === false) {
        alert("Email You Entered Already Exists.");
      }
    } else if (value === 1) {
      if (document.getElementById("uploadBox").value === "") {
        alert("Please upload store's logo");
        return;
      }
    } else if (value === 2) {
      random();
    }

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Mainheader />
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    handleNext(activeStep);
                  }}
                  className={classes.button}
                >
                  {buttonreturn(activeStep)}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Mainfooter />
    </>
  );
}

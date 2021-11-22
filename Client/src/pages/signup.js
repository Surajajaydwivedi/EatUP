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
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Container from "@material-ui/core/Container";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Snackbar from "@material-ui/core/Snackbar";
import BackupIcon from "@material-ui/icons/Backup";
import MuiAlert from "@material-ui/lab/Alert";
import MuiPhoneNumber from "material-ui-phone-number";
import { red } from "@material-ui/core/colors";
import Mainfooter from "../components/InfoSection/Mainfooter";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Mainheader from "../components/InfoSection/Mainheader";
import QR from "../components/HelperComponents/qr";
import ReactS3 from "react-s3";
import { uploadFile } from "react-s3";
const crypto = require("crypto");

const axios = require("axios");
require("dotenv").config();

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
    marginTop: "80px",
    marginBottom: "100px",
  },
  button: {
    marginRight: theme.spacing(1),
    marginTop: "30px",
  },
  instructions: {
    marginTop: "30px",
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

let chars = "abcdefghijklmnopqrstuvwxyz";
let tempstr = "";
for (let i = 0; i < 9; i++) {
  tempstr += chars.charAt(Math.floor(Math.random() * chars.length));
}
var str = "";
for (let i = 0; i < tempstr.length; i++) {
  str += tempstr[i];
  if ((i + 1) % 3 === 0 && i !== tempstr.length - 1) {
    str += "-";
  }
}
key = str;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function getSteps() {
  return ["Personal Info", "Verify", "Store Info", "Get Your QR"];
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [open, setOpen] = React.useState(false);
  const [openerr, setOpenerr] = React.useState(false);
  const [verificationCode, updateVerificationCode] = useState("");
  const [ph, updateph] = useState(" ");
  const [password, updatepassword] = useState("");
  const [samepass, updatesamepass] = useState(false);
  const [validemail, updatevalidemail] = useState(false);
  const [emailid, updateemailid] = useState("");
  const [name, updatename] = useState("");
  const [address, updateaddress] = useState("");
  const [state, updatestate] = useState("");
  const [code, codeUpdate] = useState("");
  const [pincode, updatepincode] = useState("");
  const [city, updatecity] = useState("");
  const [errormsg, updateerrmsg] = useState("Something went wrong");
  const [successmsg, updatesuccessmsg] = useState("Details Saved !");

  function handlechangename() {
    var x = document.getElementById("name").value;
    updatename(x);
  }
  function handlechangecity() {
    var x = document.getElementById("city").value;
    updatecity(x);
  }
  function handlechangeaddress() {
    var x = document.getElementById("address").value;
    updateaddress(x);
  }
  function handlechangestate() {
    var x = document.getElementById("state").value;
    updatestate(x);
  }
  function handlechangepincode() {
    var x = document.getElementById("pincode").value;
    updatepincode(x);
  }
  function handlephchange(value) {
    if (value) {
      updateph(value);
    }
  }
  function handlepasschange() {
    var x = document.getElementById("password").value;
    updatepassword(x);
  }
  function handleVerificationCodeChange() {
    var x = document.getElementById("verificationCode").value;
    updateVerificationCode(x);
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
      updatevalidemail(true);
    }
    if (x.length === 0) {
      document.getElementById("wrongemail").style = "visibility:hidden";
      updatevalidemail(true);
    }
    updateemailid(x);
  }

  const handleClick = () => {
    setOpen(true);
  };
  const handleClickerr = () => {
    setOpenerr(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleCloseerr = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenerr(false);
  };
  function crympto() {
    var str = "";
    str = crypto.randomBytes(20).toString("hex");
    str += ".png";
    return str;
  }

  async function sendimgtoaws() {
    var x = document.getElementById("imglogo");
    var y = document.getElementById("imgstore");
    var ret = ["", ""];

    if (typeof x.files[0] !== "undefined") {
      var file = x.files[0];
      var blob = file.slice(0, file.size, "image/png");
      var newFile = new File([blob], crympto(), { type: "image/png" });
      const config = {
        bucketName: "restraimagestore",
        dirName: "logo",
        region: "us-east-2",
        accessKeyId: process.env.REACT_APP_AWS_ACCESSKEY,
        secretAccessKey: process.env.REACT_APP_AWS_SECRETKEY,
      };
      await ReactS3.uploadFile(newFile, config)
        .then((data) => {
          ret[0] = data.location;
        })
        .catch((err) => console.error(err));
    }
    if (typeof y.files[0] !== "undefined") {
      var file = y.files[0];
      var blob = file.slice(0, file.size, "image/png");
      var newFile = new File([blob], crympto(), { type: "image/png" });
      const config = {
        bucketName: "restraimagestore",
        dirName: "storeimage",
        region: "us-east-2",
        accessKeyId: process.env.REACT_APP_AWS_ACCESSKEY,
        secretAccessKey: process.env.REACT_APP_AWS_SECRETKEY,
      };
      await ReactS3.uploadFile(file, config)
        .then((data) => {
          ret[1] = data.location;
        })
        .catch((err) => console.error(err));
    }

    return ret;
  }

  async function emailexist() {
    const resp = await axios.post("http://localhost:5000/check", {
      email: emailid,
    });
    return resp.data.ans;
  }

  async function sendVerificationCode() {
    await axios.post("http://localhost:5000/sendActivationMail", {
      email: emailid,
    });
    
  }
  async function VerifyCode() {
    console.log("adsasdfadsf")
    var xx = await axios.post("http://localhost:5000/verifyActivationCode", {
      email: emailid,
      code: verificationCode,
    });
    console.log(xx.data)
    return xx.data
  }

  async function insertdata() {
    var retval = await sendimgtoaws();

    var tempdata = {
      key: key,
      email: emailid,
      password: crypto.createHash("sha1").update(password).digest("hex"),
      name: name,
      phno: ph,
      address: address,
      city: city,
      state: state,
      pincode: pincode,
      logo: retval[0],
      image: retval[1],
      items: [],
    };
    axios.post("http://localhost:5000/adminsignup", tempdata);
  }

  async function allgood() {
    if (password === "") {
      updateerrmsg("Password can't be empty !");
      handleClickerr();
      return false;
    } else if (!samepass) {
      updateerrmsg("Password and confirm passwords do not match.");
      handleClickerr();
      return false;
    } else if (password.length < 6) {
      updateerrmsg("Password too short.");
      handleClickerr();
      return false;
    } else if (validemail === false) {
      updateerrmsg("Invalid Email.");
      handleClickerr();
      return false;
    } else if (!ph || ph.split(" ")[1].length < 11) {
      updateerrmsg("Phone Number can't be empty !");
      handleClickerr();
      return false;
    } else if (!(await emailexist())) {
      updateerrmsg("Email you entered already exists.");
      handleClickerr();
      return false;
    }

    handleClick();
    return true;
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
                    <Link href="/signin" variant="body2">
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
          <>
            <Container component="main" maxWidth="sm">
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <VpnKeyIcon />
                </Avatar>
                <Typography component="h2" variant="h6">
                  Enter the Verification Code Sent to you Email.
                </Typography>
                <form className={classes.form} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="verificationCode"
                        label="Verification Code"
                        value={verificationCode}
                        onChange={handleVerificationCodeChange}
                        name="verify-code"
                      />
                    </Grid>
                  </Grid>

                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="/signin" variant="body2">
                        Didn't Got any Email ? Resend Email.
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Container>
          </>
        );
      case 2:
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

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="name"
                    label="Store Name"
                    variant="outlined"
                    placeholder="Cosmos Cafe"
                    autoComplete="off"
                    onChange={() => {
                      handlechangename();
                    }}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="address"
                    label="Address"
                    variant="outlined"
                    placeholder="Street Name/ Plot No."
                    autoComplete="off"
                    onChange={() => {
                      handlechangeaddress();
                    }}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="city"
                    label="City"
                    placeholder="Noida"
                    variant="outlined"
                    autoComplete="off"
                    onChange={() => {
                      handlechangecity();
                    }}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="state"
                    label="State"
                    variant="outlined"
                    placeholder="UP"
                    autoComplete="off"
                    onChange={() => {
                      handlechangestate();
                    }}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="pincode"
                    label="Pincode"
                    variant="outlined"
                    type="number"
                    onChange={() => {
                      handlechangepincode();
                    }}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" component="label" fullWidth>
                    Choose Logo*
                    <input
                      type="file"
                      name="filetoupload"
                      accept="image/*"
                      hidden
                      required
                      id="imglogo"
                    />
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" component="label" fullWidth>
                    Upload Store image (Optional)
                    <input
                      type="file"
                      accept="image/*"
                      id="imgstore"
                      hidden
                      required
                    />
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        );
      case 3:
        return (
          <>
            <div id="placeHolder"></div>
            <QR keyy={key} name={name} admin={true} />{" "}
          </>
        );
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
      return "Verify";
    } else if (val === 2) {
      return "Register";
    } else if (val === 3) {
      return "Signin";
    }
  };

  async function handleNext(value) {
    if (value === 0) {
      var ret = await allgood();
      if (ret === false) {
        return;
      }
      sendVerificationCode();
    } else if (value === 1) {
      console.log("sdafdasasdf")
      var ret = await VerifyCode();
      console.log(ret)
      if(ret.bool===false && ret.expire===false){
        updateerrmsg("Wrong Code Entered.");
        handleClickerr();
        return;
      }
      else if (ret.bool===false && ret.expire===true){
        updateerrmsg("Your Verification Code has Expired, Don't Worry we have Sent You Another One !");
        handleClickerr();
        return
      }
      updatesuccessmsg("Verified !");
      handleClick();
    } else if (value === 2) {
      if (document.getElementById("imglogo").value === "") {
        alert("Please upload store's logo");
        return;
      }
      updatesuccessmsg("Registered Successfully !");
      insertdata();
      handleClick();
    } else if (value === 3) {
      window.open("/signin", "_self");
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
                Registration completed Successfully.
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div align="center">
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0 || activeStep === 2}
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {successmsg}
        </Alert>
      </Snackbar>
      <Snackbar open={openerr} autoHideDuration={6000} onClose={handleCloseerr}>
        <Alert onClose={handleCloseerr} severity="error">
          {errormsg}
        </Alert>
      </Snackbar>
    </>
  );
}

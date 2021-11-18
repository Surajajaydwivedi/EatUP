import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import StepConnector from "@material-ui/core/StepConnector";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import MuiPhoneNumber from "material-ui-phone-number";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useState, useEffect } from "react";
import Divider from "@material-ui/core/Divider";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Container, Grid, Card, CardContent, Box } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { func } from "prop-types";
const axios = require("axios");

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  mainbutton: {
    marginBottom: "50px",
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: "45px",
  },
  mainbutton: {
    marginTop: "15px",
    marginLeft: "85px",
  },
  table: {
    minWidth: 300,
  },
}));

function getSteps() {
  return ["Select campaign settings", "Create an ad group"];
}

function App(props) {
  const classes = useStyles();
  const [ph, updateph] = useState();
  const [popup, setPopup] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [session, updatesession] = React.useState(0);
  const [validemail, updatevalidemail] = useState(false);
  const [data, updatedata] = React.useState(false);
  const [name, updateName] = React.useState("");
  const [email, updateEmail] = React.useState("");
  const [table, updateTable] = React.useState("");
  var totalprice = 0;
  const storeid = props.storeid;
  var orderitmes = [];
  var rows = [];

  useEffect(() => {
    async function op() {
      var x = await axios.post("http://localhost:5000/GetItemsForUser", {
        key: storeid,
      });
      updatedata(x.data);
    }
    op();
  }, []);

  orderitmes = [];
  var temp = sessionStorage.getItem("food").split(",");
  for (let i = 1; i < temp.length; i = i + 3) {
    var tt = {
      name: temp[i - 1],
      Itemkey: temp[i].split("/")[1],
      quantity: temp[i + 1],
      price: 0,
    };
    orderitmes.push(tt);
  }

  var itemfromserver = [];
  if (data) {
    itemfromserver = data.items;
  }
  var i = 0;
  while (i < orderitmes.length) {
    var tempitemkey = orderitmes[i].Itemkey;
    console.log(tempitemkey);
    var exists = 0;
    for (let j = 0; j < itemfromserver.length; j++) {
      if (itemfromserver[j].Itemkey === tempitemkey) {
        exists = 1;
        orderitmes[i].price = itemfromserver[j].price;
        totalprice +=
          parseInt(itemfromserver[j].price) * parseInt(orderitmes[i].quantity);
      }
    }
    if (exists === 0) {
      orderitmes.splice(i, 1);
    } else {
      i = i + 1;
    }
  }
  orderitmes.push({ name: "Total", quantity: "=", price: totalprice });

  function handleNameChange(event) {
    updateName(event.target.value);
  }
  function handleEmailChange(event) {
    var x = event.target.value;
    if (!x.includes(".com") || !x.includes("@")) {
      updatevalidemail(false);
    } else {
      updatevalidemail(true);
    }
    updateEmail(x);
  }
  function handleTableChange(event) {
    updateTable(event.target.value);
  }
  function handlePh(event) {
    updateph(document.getElementById("phonenumber").value);
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Full Name"
              type="text"
              fullWidth
              required
              onChange={handleNameChange}
            />
            <MuiPhoneNumber
              id="phonenumber"
              name="phone"
              label="Phone Number"
              data-cy="user-phone"
              defaultCountry={"in"}
              required
              onChange={handlePh}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              required
              onChange={handleEmailChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Table No."
              type="number"
              fullWidth
              placeholder="Leave this emplty if you are not at restaurant right now."
              onChange={handleTableChange}
            />
          </DialogContent>
        );
      case 1:
        return (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Dish</StyledTableCell>
                  <StyledTableCell align="right">Quantity</StyledTableCell>
                  <StyledTableCell align="right">
                    Price&nbsp;(₹)
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderitmes.map((row) => (
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.quantity}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.price}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );

      default:
        return "Unknown step";
    }
  }

  const steps = getSteps();

  function allgood() {
    if (name === "" || email.length <= 5 || !validemail || ph.length < 11)
      return false;
  }
  async function sendorder() {
    orderitmes.pop();
    sessionStorage.setItem("food", "");
    await axios.post("http://localhost:5000/neworder", {
      key: storeid,
      name: name,
      email: email,
      ph: ph,
      items: orderitmes,
      cost: totalprice,
      tableno: table,
    });
  }

  const handleNext = () => {
    if (activeStep === 0) {
      if (allgood() === false) {
        return;
      }
    } else if (activeStep === 1) {
      sendorder();
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 1) {
      window.location.reload();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleClickOpen = () => {
    setPopup(true);
  };

  const handleClose = () => {
    setPopup(false);
  };

  return (
    <div className={classes.centre}>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        className={classes.mainbutton}
      >
        Place Order
      </Button>
      <Dialog open={popup} onClose={handleClose}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<QontoConnector />}
        >
          <Step key="1">
            <StepLabel StepIconComponent={QontoStepIcon}>
              {" "}
              Contact Details{" "}
            </StepLabel>
          </Step>
          <Step key="2">
            <StepLabel StepIconComponent={QontoStepIcon}>
              {" "}
              Review Your Order{" "}
            </StepLabel>
          </Step>
        </Stepper>

        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                Your Order is placed !
              </Typography>
              <Button onClick={handleClose}>Close</Button>
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
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Place Order" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
}

export default App;

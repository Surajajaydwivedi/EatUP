import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import InputAdornment from "@material-ui/core/InputAdornment";
import Select from "@material-ui/core/Select";
const axios = require("axios");
const useStyles = makeStyles((theme) => ({
  playIcon: {
    height: 38,
    width: 38,
    fontSize: "small",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  formControlname: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
}));
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default function ResponsiveDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [emrror, updateemrror] = React.useState("");
  const [alertopen, setalertOpen] = React.useState(false);
  const [name, updatename] = React.useState("");
  const [price, updateprice] = React.useState("");
  const [select, updateselect] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  function handleClose() {
    setOpen(false);
  }

  const handlealertClose = () => {
    setalertOpen(false);
  };
  function selecthandle(event) {
    if (event.target.value === 1) {
      updateselect(true);
    } else {
      updateselect(false);
    }
  }
  function namehandle(event) {
    updatename(event.target.value);
  }
  function pricehandle(event) {
    updateprice(event.target.value);
  }
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  function allgood() {
    if (name === "") {
      updateemrror("Name Cannot be Empty");
      setalertOpen(true);
      return false;
    }
    if (price === -1) {
      updateemrror("Price Cannot be Empty");
      setalertOpen(true);
      return false;
    }
    if (select === 0) {
      updateemrror("Please select availability");
      setalertOpen(true);
      return false;
    }
    setalertOpen(false);
    return true;
  }

  async function proceed() {
    if (allgood() === true) {
      setOpen(false);
      await axios.post("http://localhost:5000/adminItemEdit", {
        session: localStorage.getItem("SESS"),
        type: "addition",
        name: name,
        price: price,
        available: select,
      });
      
      window.location.reload();
    }
  }
  return (
    <div>
      <IconButton>
        <PlaylistAddIcon
          onClick={handleClickOpen}
          className={classes.playIcon}
        />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Add a Dish"}</DialogTitle>
        <DialogContent>
          <FormControl className={classes.formControlname}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Dish Name"
              onChange={namehandle}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel
              htmlFor="standard-adornment-amount"
              className={classes.price}
            >
              Price
            </InputLabel>

            <Input
              type="number"
              fullWidth
              onChange={pricehandle}
              id="standard-adornment-amount"
              endAdornment={<InputAdornment position="end">₹</InputAdornment>}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Availability</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="simple-select"
              onChange={selecthandle}
            >
              <MenuItem value={1} selected="selected">
                Available
              </MenuItem>
              <MenuItem value={2}>Not Available</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Discard
          </Button>
          <Button onClick={proceed} color="primary" autoFocus>
            Add
          </Button>
        </DialogActions>
        <Snackbar
          open={alertopen}
          autoHideDuration={6000}
          onClose={handlealertClose}
        >
          <Alert onClose={handlealertClose} severity="error">
            {emrror}
          </Alert>
        </Snackbar>
      </Dialog>
    </div>
  );
}

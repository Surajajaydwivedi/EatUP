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
import Mainheader from "../InfoSection/Mainheader";
import Mainfooter from "../InfoSection/Mainfooter";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import GetAppIcon from "@material-ui/icons/GetApp";
import { useQRCode } from "react-qrcodes";
import { typography } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  button: {
    flexGrow: 1,
    display: "block",
    marginBottom: "15px",
  },
}));

function App(props) {
  const classes = useStyles();
  const [inputRef] = useQRCode({
    text: "www.gmail.com",
    options: {
      type: "image/jpeg",
      quality: 0.5,
      level: "M",
      margin: 3,
      scale: 4,
      width: 400,
      color: {
        dark: "#3FDE82",
        light: "#0D1B2A",
      },
    },
  });

  function prepHref() {
    var url = inputRef.current.currentSrc;
    var a = document.createElement("a"); //Create <a>
    a.href = url; //Image Base64 Goes here
    a.download = "Qr.png"; //File name Here
    a.click();
  }

  return (
    <>
      <Typography>Registration Was Successful</Typography>
      <Typography>You can also download your QR later</Typography>
      <img
        ref={inputRef}
        download="myimage"
        id="qr-img"
        className={classes.button}
      />

      <Button
        variant="contained"
        color="secondary"
        display="block"
        onClick={() => {
          prepHref();
        }}
        startIcon={<GetAppIcon />}
      >
        Download
      </Button>
    </>
  );
}

export default App;

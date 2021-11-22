import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import ErrorPage from "../../pages/404";
import { Link, useLocation } from "react-router-dom";
import Invoice from "../Menu/invoice";

const axios = require("axios");

export default function GetInvoice() {
  let location = useLocation().pathname.split("/")[2];
  var storeid = location.split(":")[1];
  var invoiceid = location.split(":")[0];
  const [data, updatedata] = useState("");
  const [show, updateSHow] = useState(false);
  React.useEffect(() => {
    async function op() {
      var x = await axios.post("http://localhost:5000/invoice", {
        key: storeid,
        id: invoiceid,
      });
      if(x.data.bool==true){
      await Invoice([ x.data.restname, x.data.restaddress, x.data.restcity,
        x.data.restlogo, x.data.order ]);
      updateSHow(false);
      setInterval(function(){ window.close(); }, 2000);
      updateSHow(false);
      }
      else{
        updateSHow(true);
      }
    }
    op();
  }, []);

  return (
    <>{ show ? <ErrorPage text={"Sorry, we could not find the requested invoice."} /> : 
    <Backdrop open={true}>
          <CircularProgress
            color="inherit"
            display="block"
            style={{ marginRight: "20px" }}
          />
          <Typography variant="h6" display="block">
            Downloading Your Invoice.
          </Typography>
        </Backdrop> } 
      
    </>
  );
}

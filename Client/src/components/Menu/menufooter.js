import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  copyright: {
    color: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0D1B2A",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "90px",
    width: "100%",
    textAlign: "center",
    fontfamily: "Lato",
    fontSize: "15px",
  },
  footer: {
    marginTop: "100px",
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container>
          <Typography variant="body1" className={classes.copyright}>
            A YumTrip Product. <br />
            {"© YumTrip "}
            {new Date().getFullYear()}
          </Typography>
        </Container>
      </footer>
    </div>
  );
}

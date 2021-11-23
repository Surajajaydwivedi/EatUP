import React from "react";
import {
  Container,
  Typography
} from '@material-ui/core';
import { withStyles} from '@material-ui/core/styles';
import Footer from "../components/InfoSection/Mainfooter";
import Header from "../components/InfoSection/Mainheader";
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap" rel="stylesheet"/>

const styles = theme => ({
  
    container: {    
      marginTop: '200px',   
      color: "#0D1B2A",
      marginBottom: '100px',
    },
    heading: {
      fontSize: 150,
      fontFamily: 'Lato, sans-serif',
    }
});

function NotFound(props) {
  const { classes } = props;
  return ( 
    <div>
    <Header />
    
    <Container maxWidth="md" className={classes.container}>
        <Typography
          align="center"
          color="textPrimary"
          variant="h6"
          className={classes.heading}
        >
          404
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="h5"
        >
        {props.text ? props.text : "The page you are looking for isn’t here try using the navigation."}
          
        </Typography>
    </Container>
    <Footer className={classes.footer}/> 
    </div>
);
}

export default withStyles(styles)(NotFound);
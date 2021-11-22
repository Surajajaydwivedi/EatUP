import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ErrorPage from "../../pages/404";

export default function Invoice() {
    return (
        <>
            {/* <Typography component="div" style={{ fontSize: "26px", marginTop: "100px"}}>
                Sorry, we could not find the requested invoice.
            </Typography> */}
        <ErrorPage />
        </>
    )
}

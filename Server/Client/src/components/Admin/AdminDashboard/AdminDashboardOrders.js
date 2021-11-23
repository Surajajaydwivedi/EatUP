import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Typography } from "@material-ui/core";

// Generate Order Data
function createData(id, date, name, shipTo, amount) {
  return { id, date, name, amount };
}



const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  
}));

export default function Orders(input) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6"> Recent Orders</Typography>
      <Table size="small" >
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>

            <TableCell>Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {input.data && input.data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.cost}  ₹</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="allorders" >
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}

import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Typography } from "@material-ui/core";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Typography variant= "h6">Order Stats</Typography>
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              className="chartssss"
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;

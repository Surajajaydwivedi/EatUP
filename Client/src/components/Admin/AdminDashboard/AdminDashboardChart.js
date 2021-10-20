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
          categories: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
        },
        fill: {
          colors: ['#0D1B2A', '#B32824']
        }
      },
      series: [
        {
          name: "Orders",
          data: [8, 10, 8, 11, 12, 15, 18],
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Typography variant= "h6">This Week</Typography>
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

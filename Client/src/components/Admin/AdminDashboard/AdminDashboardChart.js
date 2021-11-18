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
          categories: props.data[1],
        },
        fill: {
          colors: ['#0D1B2A', '#B32824']
        }
      },
      series: [
        {
          name: "Orders",
          data:  props.data[0],
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

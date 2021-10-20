import React, { Component } from "react";
import ReactDOM from "react-dom"
import ReactApexChart from "react-apexcharts"
import { Typography } from "@material-ui/core";

const statt =  {
    
      series: [25, 15, 44, 55, 41, 17],
      options: {
        chart: {
          width: '100px',
          type: 'pie',
        },
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        theme: {
          monochrome: {
            enabled: true
          }
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -5
            }
          }
        },
        
        dataLabels: {
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex]
            return [name, val.toFixed(1) + '%']
          }
        },
        legend: {
          show: false
        }
      },
    
    
    };

function App (){
  return (
    <div id="chart">
    <Typography variant="h6"> Recent Orders</Typography>
  <ReactApexChart options={statt.options} series={statt.series} type="pie" width="200px" />
</div>
  )
}

export default App;
import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class AreaChart extends Component {
  render() {
    const options = {
      theme: "dark2",
      animationEnabled: true,
      exportEnabled: false,
      title: {
        text: "Shujaaz Members"
      },
      axisY: {
        title: "Member Numbers ( in Million )",
        includeZero: false
      },
      data: [
        {
          type: "area",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,##0.## Million",
          dataPoints: [
            { x: new Date(2019, 0), y: 7.6 },
            { x: new Date(2020, 0), y: 7.3 },
            { x: new Date(2021, 0), y: 6.4 },
            { x: new Date(2022, 0), y: 5.3 },
            { x: new Date(2023, 0), y: 4.5 },
            { x: new Date(2024, 0), y: 3.8 },
            { x: new Date(2025, 0), y: 3.2 }
          ]
        }
      ]
    };

    return (
      <div>
        <h5>
          <b>User Registration *236#</b>
        </h5>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default AreaChart;

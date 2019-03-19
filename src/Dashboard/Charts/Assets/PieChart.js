import React, { Component } from "react";
import CanvasJSReact from "../Assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChartWithCustomization extends Component {
  render() {
    const options = {
      theme: "dark2",
      animationEnabled: true,
      exportFileName: "New Year Resolutions",
      exportEnabled: false,
      title: {
        text: "Top Categories of New Year's Resolution"
      },
      data: [
        {
          type: "pie",
          showInLegend: true,
          legendText: "{label}",
          toolTipContent: "{label}: <strong>{y}%</strong>",
          indexLabel: "{y}%",
          indexLabelPlacement: "inside",
          dataPoints: [
            { y: 32, label: "Radio Show" },
            { y: 22, label: "Konnect" },
            { y: 15, label: "PAP Events" },
            { y: 19, label: "Competitions" },
            { y: 5, label: "Jengwa " },
            { y: 7, label: "Real Estate" }
          ]
        }
      ]
    };

    return (
      <div>
        <h5>
          <b>Best Performing Categories</b>
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

export default PieChartWithCustomization;

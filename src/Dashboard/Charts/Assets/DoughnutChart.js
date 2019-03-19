import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DoughnutChart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      theme: "dark2",
      title: {
        text: "Member Feedback"
      },
      subtitles: [
        {
          text: "Happy with *236#",
          verticalAlign: "center",
          fontSize: 24,
          dockInsidePlotArea: true
        }
      ],
      data: [
        {
          type: "doughnut",
          showInLegend: true,
          indexLabel: "{name}: {y}",
          yValueFormatString: "#,###'%'",
          dataPoints: [
            { name: "Unsatisfied", y: 5 },
            { name: "Very Unsatisfied", y: 31 },
            { name: "Very Satisfied", y: 40 },
            { name: "Satisfied", y: 17 },
            { name: "Neutral", y: 7 }
          ]
        }
      ]
    };

    return (
      <div>
        <h5>
          <b>Satifaction/FeedBack </b>
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

export default DoughnutChart;

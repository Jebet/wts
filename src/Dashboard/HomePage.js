import React from "react";
import { Container, Segment } from "semantic-ui-react";
import AreaChart from "./Charts/Assets/AreaChart";
import DoughnutChart from "./Charts/Assets/DoughnutChart";
import OhlcChart from "./Charts/Assets/OhlcChart";
import PieChart from "./Charts/Assets/PieChart";
import "../Dashboard/HomePage.css";

class Home extends React.Component {
  render() {
    return (
      <div className="bootstrap-wrapper ">
        <div>
          <h1 className="main-title">WTS Products Information</h1>
          <div id="interactive-dashbaord" />
          <div className="chart-row">
            <div id="country-revenue">
              <OhlcChart />

              <div id="country-revenue">
                <PieChart />
              </div>
            </div>
          </div>
          <div className="chart-row">
            <div id="monthly-revenue" className="inline-chart">
              <AreaChart />
            </div>

            <div
              id="product-revenue"
              className="inline-chart"
              style={{ left: "10px" }}
            >
              <DoughnutChart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

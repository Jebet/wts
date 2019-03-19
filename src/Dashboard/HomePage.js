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
      <div className="ui grid cont">
        <div className="title">Dashboard Information:</div>

        <div class="ui centered grid">
          <div class="six wide tablet eight wide computer column">
            <AreaChart />
          </div>
          <div class="six wide tablet eight wide computer column">
            <DoughnutChart />
          </div>
          <div class="six wide tablet eight wide computer column">
            <OhlcChart />
          </div>
          <div class="six wide tablet eight wide computer column">
            <PieChart />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

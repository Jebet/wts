import React from "react";
// import { Container, Segment } from "semantic-ui-react";
import AreaChart from "./Charts/Assets/AreaChart";
import DoughnutChart from "./Charts/Assets/DoughnutChart";
import OhlcChart from "./Charts/Assets/OhlcChart";
import PieChart from "./Charts/Assets/PieChart";
import { Link, Redirect } from "react-router-dom";
import "../Dashboard/HomePage.css";
import { connect } from "react-redux";
import { userActions } from "../Action/UserActions";

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  handleDeleteUser(id) {
    return e => this.props.dispatch(userActions.delete(id));
  }

  render() {
    const { user, users } = this.props;
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

// function mapStateToProps(state) {
//   const { users, authentication } = state;
//   const { user } = authentication;
//   return {
//       user,
//       users
//   };
// }

const mapStateToProps = state => {
  return { user: state.authentication }, { users: state.authentication };
};

const connectedHomePage = connect(mapStateToProps)(Home);
export { connectedHomePage as Home };

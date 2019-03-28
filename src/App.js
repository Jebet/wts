import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Layout from "./Component/Layout/Layout";
// import Table from "./Containers/Table/Table";
import HomePage from "./Dashboard/HomePage";
import Airtime from "./Containers/Table/Table";
import Menu from "./Component/Navigation/MenuFolder/Menu";
import Daily from "./Containers/Daily/Daily";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./Containers/Store/Store";
import { Provider } from "react-redux";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <Provider store={store}>
        <div>
          <Layout>
            <Container>
              <Router>
                {/* <MenuContainer /> */}
                <div>
                  <Switch>
                    <Route path="/home" exact component={HomePage} />
                    <Route path="/airtime" exact component={Airtime} />
                    <Route path="/daily" exact component={Daily} />
                    <Route path="/Menu" exact component={Menu} />
                    {/* <Route
                      path="/menucontainer"
                      exact
                      component={MenuContainer}
                    /> */}

                    <Daily />
                  </Switch>
                </div>
              </Router>
            </Container>
          </Layout>
        </div>
      </Provider>
    );
  }
}

export default App;

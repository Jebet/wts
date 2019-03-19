import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Layout from "./Component/Layout/Layout";
import Table from "./Containers/Table/Table";
import HomePage from "./Dashboard/HomePage";
import Airtime from "./Containers/Table/Table";
import Daily from "./Containers/Daily/Daily";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./Containers/Store/Store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Layout>
            <Container>
              <Router>
                <div>
                  <Switch>
                    <Route path="/home" exact component={HomePage} />
                    <Route path="/airtime" exact component={Airtime} />
                    <Route path="/daily" exact component={Daily} />
                    <Route path="/" component={Table} />
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

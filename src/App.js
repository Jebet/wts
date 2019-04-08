import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Layout from "./Component/Layout/Layout";
import connectedLoginPage, { LoginPage } from "./LogIn/LogIn";
import connectedHomePage, { Home } from "./Dashboard/HomePage";
import Airtime from "./Containers/Table/Table";
import Menu from "./Component/Navigation/MenuFolder/Menu";
import Daily from "./Containers/Daily/Daily";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./Containers/Store/Store";
import { LinkContainer, NavItem } from "react-router-bootstrap";
import NotFound from "./LogIn/NotFound";
import { Provider } from "react-redux";
import axios from "axios";
import { connect } from "react-redux";
import { history } from "./Redux.Helpers/history";
import { alertActions } from "./Action/AlertActions";
import { PrivateRoute } from "./Routes/PrivateRoutes";

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }
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
    const { alert } = this.props;
    return (
      <Provider store={store}>
        <div className="app-container">
          <Layout>
            <Container>
              {/* {alert.message && (
                <div className={`alert ${alert.type}`}>{alert.message}</div>
              )} */}
              <Router history={history}>
                <div>
                  <Switch>
                    <Route path="/login" exact component={LoginPage} />
                    <Route path="/home" exact component={Home} />
                    <PrivateRoute exact path="/" component={Home} />
                    <Route path="/airtime" exact component={Airtime} />
                    <Route path="/daily" exact component={Daily} />
                    <Route path="/Menu" exact component={Menu} />
                    <Route component={NotFound} />
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

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);

export { connectedApp as App };

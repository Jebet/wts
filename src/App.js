import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Layout from "./Component/Layout/Layout";
import Login from "./LogIn/LogIn";
import HomePage from "./Dashboard/HomePage";
import Airtime from "./Containers/Table/Table";
import Menu from "./Component/Navigation/MenuFolder/Menu";
import Daily from "./Containers/Daily/Daily";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./Containers/Store/Store";
import AppliedRoute from "./Component/Routes/AppliedRoute";
import { LinkContainer, NavItem } from "react-router-bootstrap";
import NotFound from "./LogIn/NotFound";
import { Provider } from "react-redux";
import { Auth } from "aws-amplify";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    this.setState({ isAuthenticating: false });
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

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
  handleLogout = async event => {
    await Auth.signOut();
  
    this.userHasAuthenticated(false);
  }
  
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      <Provider store={store}>
        <div className="app-container">
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
                    <Route path="/login" exact component={Login} />
                    <AppliedRoute
                      path="/"
                      exact
                      component={HomePage}
                      props={childProps}
                    />
                    <AppliedRoute
                      path="/login"
                      exact
                      component={Login}
                      props={childProps}
                    />
                    {/* Finally, catch all unmatched routes */}
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

export default App;

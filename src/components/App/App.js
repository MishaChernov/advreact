import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import jwtDecode from "jwt-decode";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Header from "../Header";
import Home from "../Home";
import AuthRoute from "../../utils/AuthRoute";
import theme from "../../utils/theme";
import { getUserData } from "../../redux/reducers/auth";

//MUI stuff
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { MuiThemeProvider } from "@material-ui/core/styles";

import "./global.scss";

const initTheme = createMuiTheme(theme);

let authenticated;
const token = localStorage.FBIdToken;
// if (token) {
//   debugger;
//   const decodedToken = jwtDecode(token);

//   if (decodedToken.exp * 1000 < Date.now()) {
//     window.location.href = "/login";
//     authenticated = false;
//   } else {
//     authenticated = true;
//     getUserData();
//   }
// }

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={initTheme}>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <AuthRoute
              exact
              path="/login"
              component={SignIn}
              authenticated={authenticated}
            />
            <AuthRoute
              exact
              path="/registration"
              component={SignUp}
              authenticated={authenticated}
            />
          </Switch>
        </main>
      </MuiThemeProvider>
    );
  }
}

export default connect()(App);

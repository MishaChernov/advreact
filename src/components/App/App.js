import React, { Component } from "react";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Header from "../Header";
import Home from "../Home";
import { Route, Switch } from "react-router-dom";

//MUI stuff
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid/Grid";

import "./global.scss";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffab40",
      darker: "#b27700",
      lighter: "#ffbb33",
      contrastText: "#000000",
    },
    secondary: {
      main: "#fdd835",
      darker: "#b19725",
      lighter: "#fddf5d",
      contrastText: "#000000",
    },
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={SignIn} />
            <Route path="/registration" component={SignUp} />
          </Switch>
        </main>
      </MuiThemeProvider>
    );
  }
}

export default App;

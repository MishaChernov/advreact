import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

//MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";

const styles = (theme) => ({
  header: {
    marginBottom: "40px",
    backgroundColor: theme.palette.primary.light,
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  },
  button: {
    height: "100%",
    border: "none",
    outline: "none",
  },
  link: {
    display: "inline-block",
    padding: "20px 15px",
    textTransform: "uppercase",
    color: theme.palette.primary.contrastText,
    textDecoration: "none",
  },
  linkActive: {
    backgroundColor: theme.palette.primary.lighter,
  },
});

const Header = (props) => {
  const { signOut, classes } = props;

  return (
    <header className="header" className={classes.header}>
      <Grid container justify="center">
        <Grid item xs={4} align="left">
          <NavLink
            to="/"
            exact
            activeClassName={classes.linkActive}
            className={classes.link}
          >
            Home
          </NavLink>
        </Grid>

        <Grid item xs={8} align="right">
          <NavLink
            to="/login"
            activeClassName={classes.linkActive}
            className={classes.link}
          >
            Login
          </NavLink>
          <NavLink
            to="/registration"
            activeClassName={classes.linkActive}
            className={classes.link}
          >
            Sign Up
          </NavLink>
          <Button variat="text" onClick={signOut} className={classes.button}>
            Sign Out
          </Button>
        </Grid>
      </Grid>
    </header>
  );
};

export default compose(withStyles(styles))(Header);

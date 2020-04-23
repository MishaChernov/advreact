import React from "react";
import axios from "axios";
import { compose } from "redux";

// MUI stuff
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";

const styles = (theme) => ({
  button: {
    width: "100%;",
    marginTop: "20px",
  },
  input: {
    width: "100%",
  },
});

class SignUpForm extends React.Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    handle: "",
    loading: false,
    errors: [],
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });

    let data = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle,
    };

    axios
      .post("/signup", data)
      .then((response) => {
        this.setState({
          loading: false,
        });
        this.props.history.push("/");
        return response;
      })
      .catch((error) => {
        this.setState({
          error,
        });
        return error;
      });
  };

  render() {
    const {
      email,
      password,
      confirmPassword,
      handle,
      loading,
      errors,
    } = this.state;
    const { classes } = this.props;

    return (
      <section>
        <Typography variant="h3" align="center" gutterBottom={true}>
          Sign Up
        </Typography>

        <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            required={true}
            value={email}
            onChange={this.onChange}
            margin="dense"
          />
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password"
            required={true}
            value={password}
            onChange={this.onChange}
            margin="dense"
          />
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            name="confirmPassword"
            required={true}
            value={confirmPassword}
            onChange={this.onChange}
            margin="dense"
          />
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Handle"
            variant="outlined"
            name="handle"
            required={true}
            value={handle}
            onChange={this.onChange}
            margin="dense"
          />
          <Button
            className={classes.button}
            variant="contained"
            disabled={loading}
            size="large"
            color="primary"
          >
            Sign Up
          </Button>
        </form>
      </section>
    );
  }
}

export default compose(withStyles(styles)(SignUpForm));

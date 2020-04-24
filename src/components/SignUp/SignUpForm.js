import React from "react";
import axios from "axios";
import { compose } from "redux";
import { Link } from "react-router-dom";

// MUI stuff
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

const styles = (theme) => ({
  form: {
    padding: "20px",
    maxWidth: "500px",
    margin: "0 auto",
  },
  button: {
    width: "100%;",
    marginTop: "20px",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
  },
  progress: {
    position: "absolute",
  },
  smallText: {
    display: "block",
    textAlign: "center",
    fontSize: "14px",
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

    let userData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle,
    };

    axios
      .post("/signup", userData)
      .then((response) => {
        const FBIdToken = "Bearer " + response.data.token;
        localStorage.setItem("FBIdToken", FBIdToken);
        axios.defaults.headers.common["Authorization"] = FBIdToken;
        this.setState({
          loading: false,
        });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({
          loading: false,
          errors: { ...error.response.data },
        });
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
      <Grid
        container
        justify="center"
        alignContent="center"
        alignContent="center"
      >
        <Grid item xs={12} md={6}>
          <section>
            <Typography variant="h3" align="center" gutterBottom={true}>
              Sign Up
            </Typography>

            <form className={classes.form} onSubmit={this.handleSubmit}>
              <TextField
                className={classes.input}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                required={true}
                value={email}
                onChange={this.onChange}
                margin="dense"
                required={true}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                className={classes.input}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                required={true}
                value={password}
                onChange={this.onChange}
                margin="dense"
                required={true}
                error={!!errors.password}
                helperText={errors.password}
              />
              <TextField
                className={classes.input}
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
                type="password"
                name="confirmPassword"
                required={true}
                value={confirmPassword}
                onChange={this.onChange}
                margin="dense"
                required={true}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
              />
              <TextField
                className={classes.input}
                id="outlined-basic"
                label="Handle"
                variant="outlined"
                type="text"
                name="handle"
                required={true}
                value={handle}
                onChange={this.onChange}
                margin="dense"
                required={true}
                error={!!errors.handle}
                helperText={errors.handle}
              />
              <Button
                className={classes.button}
                type="submit"
                variant="contained"
                disabled={loading}
                size="large"
                color="primary"
              >
                Sign Up
                {loading && (
                  <CircularProgress
                    color="secondary"
                    className={classes.progress}
                  />
                )}
              </Button>
              <small className={classes.smallText}>
                Already have an account? Please login{" "}
                <Link to="/login">here</Link>
              </small>
              {errors.general && (
                <Typography color="error" variant="text" align="center">
                  {errors.general}
                </Typography>
              )}
            </form>
          </section>
        </Grid>
      </Grid>
    );
  }
}

export default compose(withStyles(styles)(SignUpForm));

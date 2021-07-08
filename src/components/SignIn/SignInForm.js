import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { loginUser } from "../../redux/reducers/auth";

//MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
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
});

class SignInForm extends React.Component {
  state = {
    email: "",
    password: "",
    localErrors: {}
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({
        localErrors: nextProps.errors
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes, errors, loading } = this.props;
    const { email, password, localErrors } = this.state;

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
              Sign In
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
                error={localErrors.email ? true : false}
                helperText={localErrors.email}
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
                error={localErrors.password ? true : false}
                helperText={localErrors.password}
              />
              <Button
                className={classes.button}
                type="submit"
                variant="contained"
                disabled={loading}
                size="large"
                color="primary"
              >
                Sign In
                {loading && (
                  <CircularProgress
                    color="secondary"
                    className={classes.progress}
                  />
                )}
              </Button>
              {localErrors.general && (
                <Typography color="error" variant="text" align="center">
                  {localErrors.general}
                </Typography>
              )}
            </form>
          </section>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.auth.errors,
  loading: state.auth.loading,
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { loginUser })
)(SignInForm);

import React from "react";
import { compose } from "redux";

//MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
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

class SignInForm extends React.Component {
  state = {
    email: "",
    password: "",
    loading: false,
    errors: [],
  };

  handleSubmit = () => {};

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { email, password, errors, loading } = this.state;

    return (
      <section>
        <Typography variant="h3" align="center" gutterBottom={true}>
          Sign In
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
          <Button
            className={classes.button}
            variant="contained"
            disabled={loading}
            size="large"
            color="primary"
          >
            Sign In
          </Button>
        </form>
      </section>
    );
  }
}

export default compose(withStyles(styles))(SignInForm);

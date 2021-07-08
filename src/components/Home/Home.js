import React from "react";

//MUI stuff
import withStyles from "@material-ui/styles/withStyles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from '@material-ui/core/Grid/Grid';

const image = require("../../assets/images/home.jpg");

const styles = (theme) => ({
  homePage: {
    padding: "20px",
  },
  img: {
    width: "100%",
  },
});

const Home = (props) => {
  const { classes } = props;

  return (
    <Grid container>
      <section className={classes.homePage}>
        <Typography variant="h3" gutterBottom={true}>
          Home page
        </Typography>
        <img className={classes.img} src={image} alt="Home image" />
      </section>
    </Grid>
  );
};

export default withStyles(styles)(Home);

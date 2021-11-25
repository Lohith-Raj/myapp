import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default Home;

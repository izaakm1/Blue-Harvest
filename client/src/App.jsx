import React from "react";
import Routes from "./Routes";
import { withStyles } from "@material-ui/core/styles";
import "typeface-fjalla-one";
import API from "./utils/API";

const styles = {
  sectionHeader: {
    fontFamily: "Fjalla One",
  },
  grid: {
    overflowX: "auto",
  },
};

const App = () => {
  // async function componentWillMount() {
  //   const status = await API.checkLoggedInStatus();
  //   Promise.resolve(status).then(() => {
  //     if (status.status === 200 && window.location.pathname !== "/home") {
  //       window.location.replace("/home");
  //     }
  //     if (status.status === 200 && window.location.pathname === "/home") {
  //       window.location.replace("/login");
  //     }
  //   });
  // }
  // componentWillMount();

  return <Routes />;
};

// @ts-ignore
export default withStyles(styles)(App);

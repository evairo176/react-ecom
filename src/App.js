import React, { Component, Fragment } from "react";
// import { Button } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./route/AppRoutes";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;

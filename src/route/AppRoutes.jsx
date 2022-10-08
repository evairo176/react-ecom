import React, { Component, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

export class AppRoutes extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Fragment>
    );
  }
}

export default AppRoutes;

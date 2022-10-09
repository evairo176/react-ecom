import React, { Component, Fragment } from "react";
import BigSlider from "./BigSlider";
import MegaMenu from "./MegaMenu";

export class HomeTop extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid  overflow-hidden">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 p-0 m-0 ">
              <MegaMenu />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12">
              <BigSlider />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HomeTop;

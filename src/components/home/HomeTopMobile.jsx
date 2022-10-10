import React, { Component, Fragment } from "react";
import BigSlider from "./BigSlider";

export class HomeTopMobile extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid overflow-hidden">
          <div className="row overflow-hidden">
            <div className="col-lg-12 col-md-12 col-sm-12 p-0 m-0 ">
              <BigSlider />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HomeTopMobile;

import React, { Component, Fragment } from "react";
import Login from "../../assets/images/login.png";

export class UserLogin extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row p-2">
            <div className="shadow-sm bg-white mt-2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="d-flex justify-content-center col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <form className="onboardForm">
                    <h4 className="section-title-login"> USER SIGN IN </h4>
                    <h6 className="section-sub-title">
                      Please Enter Your Mobile Number
                    </h6>
                    <input
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter Mobile Number"
                    />
                    <button className="btn btn-block m-2 site-btn-login">
                      Next
                    </button>
                  </form>
                </div>
                <div className="p-0 Desktop col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <img className="onboardBanner" alt="l" src={Login} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default UserLogin;

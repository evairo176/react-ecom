import React, { Component, Fragment } from "react";
import NavMenuMobile from "../components/cummon/NavMenuMobile";
import NavMenuDesktop from "../components/cummon/NavMenuDesktop";
import FooterDesktop from "../components/cummon/FooterDesktop";
import FooterMobile from "../components/cummon/FooterMobile";
import UserLogin from "../components/cummon/UserLogin";

export class UserLoginPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <UserLogin />
        <div className="Desktop">
          <FooterDesktop />
        </div>
        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
    );
  }
}

export default UserLoginPage;

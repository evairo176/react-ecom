import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/cummon/FooterDesktop";
import FooterMobile from "../components/cummon/FooterMobile";
import NavMenuDesktop from "../components/cummon/NavMenuDesktop";
import NavMenuMobile from "../components/cummon/NavMenuMobile";
import Purchase from "../components/other/Purchase";

export class PurchasePage extends Component {
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

        <Purchase />

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

export default PurchasePage;

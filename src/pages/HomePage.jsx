import React, { Component, Fragment } from "react";
import NavMenuMobile from "../components/cummon/NavMenuMobile";
import NavMenuDesktop from "../components/cummon/NavMenuDesktop";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import FeatureProducts from "../components/home/FeatureProducts";
import HomeTop from "../components/home/HomeTop";
import NewArrival from "../components/home/NewArrival";
import HomeTopMobile from "../components/home/HomeTopMobile";
import FooterDesktop from "../components/cummon/FooterDesktop";
import FooterMobile from "../components/cummon/FooterMobile";

export class HomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
          <HomeTop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
          <HomeTopMobile />
        </div>
        <FeatureProducts />
        <NewArrival />
        <Collection />
        <Categories />
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

export default HomePage;

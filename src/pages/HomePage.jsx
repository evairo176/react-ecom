import React, { Component, Fragment } from "react";
import NavMenuMobile from "../components/cummon/NavMenuMobile";
import NavMenuDesktop from "../components/cummon/NavMenuDesktop";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import FeatureProducts from "../components/home/FeatureProducts";
import HomeTop from "../components/home/HomeTop";
import NewArrival from "../components/home/NewArrival";
import HomeTopMobile from "../components/home/HomeTopMobile";

export class HomePage extends Component {
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
      </Fragment>
    );
  }
}

export default HomePage;

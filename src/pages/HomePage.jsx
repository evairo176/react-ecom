import React, { Component, Fragment } from "react";
import NavMenuDesktop from "../components/cummon/NavMenuDesktop";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import FeatureProducts from "../components/home/FeatureProducts";
import HomeTop from "../components/home/HomeTop";
import NewArrival from "../components/home/NewArrival";

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <HomeTop />
        <FeatureProducts />
        <NewArrival />
        <Collection />
        <Categories />
      </Fragment>
    );
  }
}

export default HomePage;

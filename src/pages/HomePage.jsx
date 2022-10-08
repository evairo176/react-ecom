import React, { Component, Fragment } from "react";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import FeatureProducts from "../components/home/FeatureProducts";
import NewArrival from "../components/home/NewArrival";

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <FeatureProducts />
        <NewArrival />
        <Collection />
        <Categories />
      </Fragment>
    );
  }
}

export default HomePage;

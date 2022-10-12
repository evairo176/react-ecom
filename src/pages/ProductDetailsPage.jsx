import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/cummon/FooterDesktop";
import FooterMobile from "../components/cummon/FooterMobile";
import NavMenuDesktop from "../components/cummon/NavMenuDesktop";
import NavMenuMobile from "../components/cummon/NavMenuMobile";
import ProductDetails from "../components/productDetails/ProductDetails";
import SuggestedProduct from "../components/productDetails/SuggestedProduct";

class ProductDetailsPage extends Component {
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

        <ProductDetails />
        <SuggestedProduct />

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

export default ProductDetailsPage;

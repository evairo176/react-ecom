import React, { Component, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import PrivacyPage from "../pages/PrivacyPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import PurchasePage from "../pages/PurchasePage";
import RefundPage from "../pages/RefundPage";
import UserLoginPage from "../pages/UserLoginPage";

export class AppRoutes extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<UserLoginPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/purchase" element={<PurchasePage />} />
          <Route exact path="/privacy" element={<PrivacyPage />} />
          <Route exact path="/refund" element={<RefundPage />} />
          <Route
            exact
            path="/productdetails"
            element={<ProductDetailsPage />}
          />
        </Routes>
      </Fragment>
    );
  }
}

export default AppRoutes;

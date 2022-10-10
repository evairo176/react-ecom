import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import ProgressBar from "react-progressbar-on-scroll";
import { Link } from "react-router-dom";
import logo from "../../assets/images/easyshop.png";
import MegaMenuMobile from "../home/MegaMenuMobile";
export class NavMenuMobile extends Component {
  constructor() {
    super();
    this.state = {
      sideNavState: "sideNavClose",
      ContentOverState: "ContentOverlayClose",
    };
  }
  menuBarClickHandler = () => {
    this.sideNaveOpenClose();
  };
  ContentOverlayClickHandler = () => {
    this.sideNaveOpenClose();
  };
  sideNaveOpenClose = () => {
    let sideNavState = this.state.sideNavState;

    if (sideNavState === "sideNavOpen") {
      this.setState({
        sideNavState: "sideNavClose",
        ContentOverState: "ContentOverlayClose",
      });
    } else {
      this.setState({
        sideNavState: "sideNavOpen",
        ContentOverState: "ContentOverlayOpen",
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div className="topSectionDown">
          <Container
            fluid={"true"}
            className="fixed-top shadow-sm py-3 mb-0 bg-white"
          >
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <button
                  onClick={this.menuBarClickHandler}
                  className="btn"
                  to="#"
                >
                  <FontAwesomeIcon icon={faBars} size="lg" />
                </button>
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="" />
                </Link>
                <button className="cart-btn" to="#">
                  <FontAwesomeIcon icon={faCartShopping} size="lg" />
                  <sup>
                    <span className="badge text-white bg-success">5 Items</span>
                  </sup>
                </button>
              </div>
            </div>
          </Container>
          <div className={this.state.sideNavState}>
            <hr className="w-80" />
            <MegaMenuMobile />
            {/* <div className="list-group">
              <Link className="list-group-item nav-font nav-item-menu list-group-item-action">
                <FontAwesomeIcon className="mr-2" icon={faHome} /> Home
              </Link>
            </div> */}
          </div>
          <div
            onClick={this.ContentOverlayClickHandler}
            className={this.state.ContentOverState}
          ></div>
        </div>
        <div>
          <ProgressBar
            className="progBar"
            color="#334897"
            height={5}
            direction="right"
            position="bottom"
            gradient={true}
            gradientColor="#eee"
            style={{ top: "55px !important" }}
          />
        </div>
      </Fragment>
    );
  }
}

export default NavMenuMobile;

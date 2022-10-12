import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import ProgressBar from "react-progressbar-on-scroll";
import { Link } from "react-router-dom";
import logo from "../../assets/images/easyshop.png";
import {
  faBars,
  faBell,
  faCartShopping,
  faHeart,
  faMobile,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import MegaMenuMobile from "../home/MegaMenuMobile";

export class NavMenuDesktop extends Component {
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
          <Navbar collapseOnSelect expand="lg" fixed={"top"} bg="light">
            <div className="container-fluid">
              <button onClick={this.menuBarClickHandler} className="btn" to="#">
                <FontAwesomeIcon icon={faBars} size="lg" />
              </button>
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="" />
              </Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Form className="me-auto d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-secondary">Search</Button>
                </Form>
                <Nav>
                  <Link className="nav-link" to="#">
                    <FontAwesomeIcon icon={faHeart} size="lg" />
                    <sup>
                      <span className="badge text-white bg-danger">5</span>
                    </sup>
                  </Link>
                  <Link className="nav-link" to="#">
                    <FontAwesomeIcon icon={faBell} size="lg" />
                    <sup>
                      <span className="badge text-white bg-danger">5</span>
                    </sup>
                  </Link>
                  <Link className="nav-link">
                    <FontAwesomeIcon icon={faMobile} size="lg" />
                  </Link>
                  <Link className="nav-link" to="#">
                    <FontAwesomeIcon icon={faCartShopping} size="lg" />
                    <sup>
                      <span className="badge text-white bg-success">
                        5 Items
                      </span>
                    </sup>
                  </Link>
                  <Link to="/login" className="btn btn-outline-secondary ">
                    Login <FontAwesomeIcon icon={faSignInAlt} />
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
          <div className={this.state.sideNavState}>
            <hr className="w-80" />
            <MegaMenuMobile />
            {/* <div className="list-group">
              <Link className="list-group-item nav-font nav-item-menu list-group-item-action">
                <FontAwesomeIcon className="mr-2" icon={faHome} /> Home
              </Link>
            </div> */}
          </div>
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

export default NavMenuDesktop;

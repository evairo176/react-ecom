import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import ProgressBar from "react-progressbar-on-scroll";
import { Link } from "react-router-dom";
import logo from "../../assets/images/easyshop.png";
import {
  faBell,
  faCartShopping,
  faMobile,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

export class NavMenuDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className="topSectionDown">
          <Navbar collapseOnSelect expand="lg" fixed={"top"} bg="light">
            <Container>
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
                      <span className="badge text-white bg-success">5</span>
                    </sup>
                  </Link>
                  <Button variant="outline-secondary">
                    Login <FontAwesomeIcon icon={faSignInAlt} />
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
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

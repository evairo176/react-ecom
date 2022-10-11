import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

import Apple from "../../assets/images/apple.png";
import Google from "../../assets/images/google.png";

export class FooterDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className="footerback shadow-sm m-0 mt-5 p-3">
          <div className="container-fluid">
            <div className="row px-0 my-5">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 p-2">
                <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis dicta non magni praesentium expedita, eum incidunt
                  ipsam aperiam aut vero.
                  <br />
                  Email : Evairo@support.com
                  <br />
                  <br />
                  <h5 className="footer-menu-title">SOCIAL MEDIA</h5>
                  <Link to="/">
                    <FaFacebookSquare className="m-1 h4" />
                  </Link>
                  <Link to="/">
                    <FaInstagramSquare className="m-1 h4" />
                  </Link>
                  <Link to="/">
                    <FaTwitterSquare className="m-1 h4" />
                  </Link>
                </p>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 p-2">
                <h5 className="footer-menu-title">THE COMPANY</h5>
                <Link className="footer-link">About us</Link>
                <br />
                <Link className="footer-link">Company Profile</Link>
                <br />
                <Link className="footer-link">Contact us</Link>
                <br />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 p-2">
                <h5 className="footer-menu-title">MORE INFO</h5>
                <Link className="footer-link">How To Purchase</Link>
                <br />
                <Link className="footer-link">Privacy Policy</Link>
                <br />
                <Link className="footer-link">Refund Policy</Link>
                <br />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 p-2">
                <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
                <Link className="footer-link">
                  <img className="mb-2 mr-2 img-fluid" src={Google} alt="" />
                </Link>
                <Link className="footer-link">
                  <img className=" img-fluid" src={Apple} alt="" />
                </Link>
              </div>
              <div class="row">
                <div
                  style={{ fontvariantCaps: "petite-cap" }}
                  className="container-fluid text-center pt-3 pb-1 m-0 bg-dark text-white"
                >
                  <div className="container">
                    <div className="container">
                      <div className="row">
                        <h6>
                          @ Copyright 2022 by{" "}
                          <span className=" text-warning ">Evairo</span> All
                          Right Reversed
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default FooterDesktop;

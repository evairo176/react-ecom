import React, { Component, Fragment } from "react";

export class Contact extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row p-2">
            <div className="shadow-sm bg-white mt-2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="d-flex justify-content-center col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <form className="onboardForm">
                    <h4 className="section-title-login"> CONTACT WITH US </h4>
                    <h6 className="section-sub-title">
                      Please Enter Your Mobile Number
                    </h6>
                    <input
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter Mobile Number"
                    />
                    <input
                      className="form-control m-2"
                      type="email"
                      placeholder="Enter Email"
                    />

                    <input
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter Your Message"
                    />
                    <button className="btn btn-block m-2 site-btn-login">
                      Send
                    </button>
                  </form>
                </div>
                <div className="p-2 Desktop col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <br></br>
                  <br></br>
                  <p className="section-title-contact">
                    1635 Franklin Street Montgomery, Near Sherwood Mall. AL
                    36104 Email: Support@easylearningbd.com
                  </p>
                  <iframe
                    title="address me"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.435437274524!2d106.82949721765277!3d-6.216316427999567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f40a7cf06b0f%3A0x72cc9f6d421faddd!2sMenteng%20Atas%2C%20Kecamatan%20Setiabudi%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1665580660042!5m2!1sid!2sid"
                    width="100%"
                    height="450"
                    styles="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Contact;

import React, { Component, Fragment } from "react";

export class Categories extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid text-center">
          <div className="section-title mb-55">
            <h2>CATEGORIES</h2>
            <p>Some of our Exlusive Collection, You may like</p>
          </div>
          <div className="row">
            <div className="col-12 col-xl-6 col-lg-6 col-md-2 col-sm-12 ">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 p-0">
                  <div className="card h-100 w-100 text-center">
                    <img
                      className="center"
                      src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f0b3c58d99158fc3.png?q=100"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="category-name">Top Offers</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 p-0">
                  <div className="card h-100 w-100 text-center">
                    <img
                      className="center"
                      src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5b09c4d0a60ecad7.png?q=100"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="category-name">Grocery</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 p-0">
                  <div className="card h-100 w-100 text-center">
                    <img
                      className="center"
                      src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/9bb3499c8248d2ba.png?q=100"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="category-name">Mobiles & Tablets</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 p-0">
                  <div className="card h-100 w-100 text-center">
                    <img
                      className="center"
                      src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a28598a782b6b4cf.png?q=100"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="category-name">Fashion</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-6 col-lg-6 col-md-2 col-sm-12 ">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 p-0">
                  <div className="card h-100 w-100 text-center">
                    <img
                      className="center"
                      src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f8928124c04bc6e9.png?q=100"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="category-name">Electronics</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 p-0">
                  <div className="card h-100 w-100 text-center">
                    <img
                      className="center"
                      src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/2ef9b304fc5ab7ad.png?q=100"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="category-name">Home & Furniture</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 p-0">
                  <div className="card h-100 w-100 text-center">
                    <img
                      className="center"
                      src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d7278abbff8ba2a.png?q=100"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="category-name">Appliances</h5>
                    </div>
                  </div>
                </div>
                {/* <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 p-0">
                  <div className="card h-100 w-100 text-center">
                    <img
                      className="center"
                      src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/705e339964226df2.png?q=100"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="category-name">Travel</h5>
                    </div>
                  </div>
                </div> */}
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 p-0">
                  <div className="card h-100 w-100 text-center">
                    <img
                      className="center"
                      src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a84e58e11c8b10b6.png?q=100"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="category-name">Beauty</h5>
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

export default Categories;

import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export class NewArrival extends Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
  }
  previous = () => {
    this.slider.current.slickPrev();
  };
  next = () => {
    this.slider.current.slickNext();
  };

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Fragment>
        <div className="container text-center">
          <div className="section-title text-center mb-55">
            <h2>NEW ARRIVAL</h2>
            <p>Some of our Exlusive Collection, You may like</p>
            <button
              onClick={this.previous}
              className="btn btn-sm ml-2 site-btn"
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            &nbsp;
            <button onClick={this.next} className="btn btn-sm ml-2 site-btn">
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
          <div className="row">
            <Slider {...settings} ref={this.slider}>
              <div>
                <div className="card image-box">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/416/416/l4n2oi80/mobile/x/o/a/-original-imagfhu75eupxyft.jpeg?q=70"
                    alt=""
                  />
                  <div className="card-body">
                    <div className="product-name-on-card">
                      SAMSUNG Galaxy F13
                    </div>
                    <div className="product-price-on-card">Price : $100</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card image-box">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/416/416/l4n2oi80/mobile/x/o/a/-original-imagfhu75eupxyft.jpeg?q=70"
                    alt=""
                  />
                  <div className="card-body">
                    <div className="product-name-on-card">
                      SAMSUNG Galaxy F13
                    </div>
                    <div className="product-price-on-card">Price : $100</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card image-box">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/416/416/l4n2oi80/mobile/x/o/a/-original-imagfhu75eupxyft.jpeg?q=70"
                    alt=""
                  />
                  <div className="card-body">
                    <div className="product-name-on-card">
                      SAMSUNG Galaxy F13
                    </div>
                    <div className="product-price-on-card">Price : $100</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card image-box">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/416/416/l4n2oi80/mobile/x/o/a/-original-imagfhu75eupxyft.jpeg?q=70"
                    alt=""
                  />
                  <div className="card-body">
                    <div className="product-name-on-card">
                      SAMSUNG Galaxy F13
                    </div>
                    <div className="product-price-on-card">Price : $100</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card image-box">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/416/416/l4n2oi80/mobile/x/o/a/-original-imagfhu75eupxyft.jpeg?q=70"
                    alt=""
                  />
                  <div className="card-body">
                    <div className="product-name-on-card">
                      SAMSUNG Galaxy F13
                    </div>
                    <div className="product-price-on-card">Price : $100</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card image-box">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/416/416/l4n2oi80/mobile/x/o/a/-original-imagfhu75eupxyft.jpeg?q=70"
                    alt=""
                  />
                  <div className="card-body">
                    <div className="product-name-on-card">
                      SAMSUNG Galaxy F13
                    </div>
                    <div className="product-price-on-card">Price : $100</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card image-box">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/416/416/l4n2oi80/mobile/x/o/a/-original-imagfhu75eupxyft.jpeg?q=70"
                    alt=""
                  />
                  <div className="card-body">
                    <div className="product-name-on-card">
                      SAMSUNG Galaxy F13
                    </div>
                    <div className="product-price-on-card">Price : $100</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card image-box">
                  <img
                    className="center"
                    src="https://rukminim1.flixcart.com/image/416/416/l4n2oi80/mobile/x/o/a/-original-imagfhu75eupxyft.jpeg?q=70"
                    alt=""
                  />
                  <div className="card-body">
                    <div className="product-name-on-card">
                      SAMSUNG Galaxy F13
                    </div>
                    <div className="product-price-on-card">Price : $100</div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NewArrival;

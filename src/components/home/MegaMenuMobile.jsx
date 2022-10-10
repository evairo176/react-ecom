import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export class MegaMenuMobile extends Component {
  constructor() {
    super();
    this.clickMenu = this.clickMenu.bind(this);
  }
  componentDidMount() {
    this.clickMenu();
  }

  clickMenu() {
    var acc = document.getElementsByClassName("accordionMobile");
    var accNum = acc.length;
    var i;
    for (i = 0; i < accNum; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        // console.log(this);
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          console.log(panel.style.maxHeight);
        }
      });
    }
  }
  render() {
    return (
      <Fragment>
        <div className="accordionMobileMenuDiv mb-2">
          <div className="accordionMobileMenuDivInside">
            <button className="accordionMobile">
              <img
                className="accordionMobileMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                alt=""
              />{" "}
              Men's Clothing
            </button>
            <div className="panel">
              <ul>
                <li>
                  <Link to="#" className="accordionMobileItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionMobileItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionMobileItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionMobileItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionMobileItem">
                    Man T-shirt
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MegaMenuMobile;

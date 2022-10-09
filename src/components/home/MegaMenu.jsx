import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class MegaMenu extends Component {
  constructor() {
    super();
    this.clickMenu = this.clickMenu.bind(this);
  }
  componentDidMount() {
    this.clickMenu();
  }

  clickMenu() {
    var acc = document.getElementsByClassName("accordion");
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
        }
      });
    }
  }
  render() {
    return (
      <Fragment>
        <div className="accordionMenuDiv mb-2">
          <div className="accordionMenuDivInside">
            <button className="accordion">
              <img
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                alt=""
              />{" "}
              Men's Clothing
            </button>
            <div className="panel">
              <ul>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
              </ul>
            </div>
            <button className="accordion">
              <img
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                alt=""
              />{" "}
              Men's Clothing
            </button>
            <div className="panel">
              <ul>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
              </ul>
            </div>
            <button className="accordion">
              <img
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                alt=""
              />{" "}
              Men's Clothing
            </button>
            <div className="panel">
              <ul>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
              </ul>
            </div>
            <button className="accordion">
              <img
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                alt=""
              />{" "}
              Men's Clothing
            </button>
            <div className="panel">
              <ul>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
              </ul>
            </div>
            <button className="accordion">
              <img
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                alt=""
              />{" "}
              Men's Clothing
            </button>
            <div className="panel">
              <ul>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
              </ul>
            </div>
            <button className="accordion">
              <img
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                alt=""
              />{" "}
              Men's Clothing
            </button>
            <div className="panel">
              <ul>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
              </ul>
            </div>
            <button className="accordion">
              <img
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                alt=""
              />{" "}
              Men's Clothing
            </button>
            <div className="panel">
              <ul>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
              </ul>
            </div>
            <button className="accordion">
              <img
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                alt=""
              />{" "}
              Men's Clothing
            </button>
            <div className="panel">
              <ul>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
              </ul>
            </div>
            <button className="accordion">
              <img
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                alt=""
              />{" "}
              Men's Clothing
            </button>
            <div className="panel">
              <ul>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
              </ul>
            </div>
            <button className="accordion">
              <img
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                alt=""
              />{" "}
              Men's Clothing
            </button>
            <div className="panel">
              <ul>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
              </ul>
            </div>
            <button className="accordion">
              <img
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                alt=""
              />{" "}
              Men's Clothing
            </button>
            <div className="panel">
              <ul>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
              </ul>
            </div>
            <button className="accordion">
              <img
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                alt=""
              />{" "}
              Men's Clothing
            </button>
            <div className="panel">
              <ul>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
              </ul>
            </div>
            <button className="accordion">
              <img
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                alt=""
              />{" "}
              Men's Clothing
            </button>
            <div className="panel">
              <ul>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
              </ul>
            </div>
            <button className="accordion">
              <img
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                alt=""
              />{" "}
              Men's Clothing
            </button>
            <div className="panel">
              <ul>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
              </ul>
            </div>
            <button className="accordion">
              <img
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                alt=""
              />{" "}
              Men's Clothing
            </button>
            <div className="panel">
              <ul>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
              </ul>
            </div>
            <button className="accordion">
              <img
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                alt=""
              />{" "}
              Men's Clothing
            </button>
            <div className="panel">
              <ul>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
              </ul>
            </div>
            <button className="accordion">
              <img
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                alt=""
              />{" "}
              Men's Clothing
            </button>
            <div className="panel">
              <ul>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
              </ul>
            </div>
            <button className="accordion">
              <img
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                alt=""
              />{" "}
              Men's Clothing
            </button>
            <div className="panel">
              <ul>
                <li>
                  <Link to="#" className="accordionItem">
                    Man T-shirt
                  </Link>
                </li>
                <li>
                  <Link to="#" className="accordionItem">
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

export default MegaMenu;

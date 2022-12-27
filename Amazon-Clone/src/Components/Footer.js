import { Link } from "@material-ui/core";
import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        {/* <a href="#nav-top">
          <div className="footer__button">
            <span>Back to Top</span>
          </div>
        </a>
        <div className="footerSecondary"></div> */}
        <div className="top centered">
          <a href="#nav-top">Back to top</a>
        </div>

        <div className="middle">
          <div className="centered">
            <ul className="copy">
              <li>
                {/* <Link to="/"> */}
                <img
                  className="logo"
                  src="/logo.png"
                  alt=""
                />
                {/* </Link> */}
              </li>
              <li>
                <a href="#" className="select">
                  <i className="fa fa-globe" aria-hidden="true"></i> English
                </a>
              </li>
              <li>
                <a href="#" className="select">
                  <i className="flag-icon-in"></i>India
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div className="center">
            <div className="centered">
              <ul className="copy">
                <li>
                  <a href="#">Conditions of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Notice</a>
                </li>
                <li>
                  <a href="#">Interest-Based Ads</a>
                </li>
                <li>&copy; 2022, Kushagra and Nishaant</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

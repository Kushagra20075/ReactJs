import React from "react";
import "../Styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "../States/StateProvider";
import { auth } from "../States/firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div id="nav-top">
      <div className="header">
        {/* <div className="header__menu1"> */}
        <Link to="/">
          <img
            className="header__logo"
            src="/logo.png"
          />
        </Link>
        {/* <input class="header__menuBtn" type="checkbox" id="menu-btn" />
          <label class="header__menuIcon" for="header__menuBtn">
            <span class="header__navicon"></span>
          </label> */}
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
          {/* logo */}
        </div>
        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header__option">
              {/*  ? User not loaded due t async so add ? */}
              <span className="header_optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              {/* <span className="header_optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span> */}
            </div>
          </Link>
          <Link to="/orders">
            <div className="header__option">
              {/* <span className="header_optionLineOne">Returns</span> */}
              <span className="header_optionLineTwo">Orders</span>
            </div>
          </Link>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingCartIcon />
              <span className="header_optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
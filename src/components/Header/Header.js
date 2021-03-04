import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="company logo" />
      <nav>
        <Link to="/shop" className="link">
          Shop
        </Link>
        <Link to="/review" className="link">
          Order Review
        </Link>
        <Link to="/manage" className="link">
          Manage Inventory
        </Link>
      </nav>
    </div>
  );
};

export default Header;

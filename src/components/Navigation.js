import React from "react";
import logo from "../images/logo.svg";
import cartImg from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import "./navigation.css";

export default function Navigation(props) {
  const { toggleCartModal } = props;

  return (
    <nav className="navbar">
      <div className="navbar__menu-wrapper">
        <img className="logo" src={logo} />
        <ul className="navbar__menu">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navbar__buttons-wrapper">
        <button className="navbar__cart-btn" onClick={toggleCartModal}>
          <img src={cartImg} />
        </button>
        <div>
          <img src={avatar} className="navbar__avatar" />
        </div>
      </div>
    </nav>
  );
}

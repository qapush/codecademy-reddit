import React from "react";
import { useState } from "react";
import "./header.css";
import logo from "../../img/logo.svg";
import { Breakpoint } from "react-socks";

export default function Header() {

  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  let burgerButtonClass = "hamburger hamburger--collapse"
  if(mobileMenuActive) burgerButtonClass += " is-active";
  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive)
  }

  return (
    <header>
      <img src={logo} alt="Logo" className="logo" />
      <Breakpoint customQuery="(max-width: 575px)">
        <button className={burgerButtonClass} type="button" onClick={toggleMobileMenu}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </Breakpoint>
    </header>
  );
}

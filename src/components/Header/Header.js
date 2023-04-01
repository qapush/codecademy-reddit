import React from "react";
import { useState } from "react";
import "./header.css";
import logo from "../../img/logo.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import MediaQuery from 'react-responsive'



export default function Header() {

  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  let burgerButtonClass = "hamburger hamburger--collapse"
  if (mobileMenuActive) burgerButtonClass += " is-active";
  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive)
  }

  return (
    <header>
      <nav>
        <img src={logo} alt="Logo" className="logo" />

        <MediaQuery maxWidth={570}>
          <button className={burgerButtonClass} type="button" onClick={toggleMobileMenu}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </MediaQuery>
        
      </nav>
      <MediaQuery maxWidth={570}>
        <MobileMenu show={mobileMenuActive} />
      </MediaQuery>
    </header>
  );
}

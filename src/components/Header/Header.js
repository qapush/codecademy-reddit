import React from "react";
import { useState } from "react";
import "./header.css";
import logo from "../../img/logo.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import MediaQuery from 'react-responsive'
import Switch from "../Switch/Switch";
import Search from "../Search/Search";



export default function Header() {

  const [mobileMenuActive, setMobileMenuActive] = useState(true);

  let burgerButtonClass = "hamburger hamburger--collapse"
  if (mobileMenuActive) burgerButtonClass += " is-active";
  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive)
  }

  return (
    <header>
      <nav>
        
        <div className="navpanel">
          <img src={logo} alt="Logo" className="logo" />

          <Switch />
          
          <MediaQuery maxWidth={700}>
            <button className={burgerButtonClass} type="button" onClick={toggleMobileMenu}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </MediaQuery>
          <MediaQuery minWidth={700}>
            <Search/>
          </MediaQuery>
        </div>

        <MediaQuery maxWidth={700}>
          <MobileMenu show={mobileMenuActive} />
        </MediaQuery>

  

      </nav>
    </header>
  );
}

import React from "react";
import "./header.css";
import { useSelector, useDispatch } from "react-redux";
import { selectMobileMenuOpened, mobileMenuToggle } from "../../features/mobileMenuSlice";
import logo from "../../img/logo.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import MediaQuery from 'react-responsive'
import Switch from "../Switch/Switch";
import Search from "../Search/Search";



export default function Header() {


  const mobileMenuActive = useSelector(selectMobileMenuOpened);
  const dispatch = useDispatch();

  let burgerButtonClass = "hamburger hamburger--collapse"
  if (mobileMenuActive) burgerButtonClass += " is-active";
  const toggleMobileMenu = () => {
    dispatch(mobileMenuToggle())
  }

  return (
    <header>
      <nav>
        
        <div className="navpanel">
          <img src={logo} alt="Logo" className="logo" />

          <Switch />
          
          <MediaQuery maxWidth={699}>
            <button className={burgerButtonClass} type="button" onClick={toggleMobileMenu}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </MediaQuery>
          <MediaQuery minWidth={701}>
            <Search/>
          </MediaQuery>
        </div>

        <MediaQuery maxWidth={699}>
          <MobileMenu show={mobileMenuActive} />
        </MediaQuery>

  

      </nav>
    </header>
  );
}

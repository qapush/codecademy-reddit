import React from "react";
import "./header.css";
import { useSelector, useDispatch } from "react-redux";
import { selectMobileMenuOpened, mobileMenuToggle } from "../../features/mobileMenuSlice";
import { currentFeedChange } from "../../features/feedSlice";
import logo from "../../img/logo.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import MediaQuery from 'react-responsive'
import Switch from "../Switch/Switch";
import Search from "../Search/Search";
import { Link } from "react-router-dom";



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
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" onClick={() => dispatch(currentFeedChange("Best"))}/>
          </Link>

          <Switch />
          
          <MediaQuery maxWidth={700}>
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

        <MediaQuery maxWidth={700}>
          <MobileMenu show={mobileMenuActive} />
        </MediaQuery>

  

      </nav>
    </header>
  );
}

import React, { useContext } from "react";
import Link from "next/link";
import NavLinks from "./header/nav-links";

import logoLight from "../assets/images/logo-dark.jpeg";
import flag1 from "../assets/images/resources/flag-1-1.jpg";
import { MenuContext } from "../context/menu-context";

const MobileNav = () => {
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  return (
    <div
      className={`mobile-nav__wrapper ${true === menuStatus ? "expanded" : ""}`}
    >
      <div
        className="mobile-nav__overlay side-menu__block-overlay"
        onClick={handleMenuClick}
      ></div>
      <div className="mobile-nav__content">
        <span
          className="mobile-nav__close side-menu__close-btn"
          onClick={handleMenuClick}
        >
          <i className="far fa-times"></i>
        </span>

        <div className="logo-box">
          <Link href="/">
            <a aria-label="logo image">
              <img src={logoLight} width="101" alt="" />
            </a>
          </Link>
        </div>
        <div className="mobile-nav__container">
          <NavLinks />
        </div>

        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="azino-icon-email"></i>
            <a href="mailto:divineerafoundation19@gmail.com">divineerafoundation19@gmail.com</a>
          </li>
          <li>
            <i className="azino-icon-telephone"></i>
            <a href="tel:+2347034992296">+2347034992296</a>
          </li>
        </ul>
        <div className="mobile-nav__top">
          {/* <div className="mobile-nav__language">
            <img src={flag1} alt="" />
            <label className="sr-only" htmlFor="language-select">
              select language
            </label>
            <select className="selectpicker" id="language-select">
              <option value="english">English</option>
              <option value="arabic">Arabic</option>
            </select>
            <i className="fa fa-caret-down select-icon"></i>
          </div> */}
          <div className="mobile-nav__social">
            <a href="#" aria-label="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="facebook">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#" aria-label="pinterest">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="#" aria-label="instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

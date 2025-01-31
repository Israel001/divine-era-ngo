import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import NavLinks from "./nav-links";

import { MenuContext } from "../../context/menu-context";

import flag1 from "../../assets/images/resources/flag-1-1.jpg";
import logoDark from "../../assets/images/logo-dark.jpeg";

const HeaderOne = () => {
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);

  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  return (
    <header className="main-header">
      <Container>
        <div className="inner-container">
          <Row>
            <Col sm={12} md={12} lg={12} xl={2}>
              <div className="logo-box">
                <Link href="/">
                  <a aria-label="logo image">
                    <img src={logoDark} width="230" alt="" />
                  </a>
                </Link>
                <span
                  className="fa fa-bars mobile-nav__toggler"
                  onClick={handleMenuClick}
                ></span>
              </div>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={12}
              xl={10}
              className="d-none d-md-none d-lg-none d-xl-block"
            >
              <div className="main-header__top">
                <p>Welcome to non profit charity platform</p>
                <div className="main-header__social">
                  <a href="#" aria-label="email">
                    <i className="azino-icon-email"></i>
                  </a>
                  <a href="#" aria-label="facebook">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#" aria-label="whatsapp">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
              <nav className="main-menu dynamic-radius">
                <NavLinks />
              </nav>

              <div className="main-header__info">
                <ul className="list-unstyled main-header__info-list">
                  <li>
                    <i className="azino-icon-email"></i>
                    <a href="mailto:divineerafoundation19@gmail.com">
                      divineerafoundation19@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="azino-icon-telephone"></i>
                    <a href="tel:+2347034992296">+2347034992296</a>
                  </li>
                </ul>
                {/* <div className="main-header__language">
                  <div className="main-header__language-image">
                    <img src={flag1} alt="" />
                  </div>
                  <label htmlFor="language-header" className="sr-only">
                    select language
                  </label>
                  <select className="selectpicker" id="language-header">
                    <option value="english">English</option>
                    <option value="arabic">Arabic</option>
                  </select>
                  <i
                    className="fa fa-angle-down
                  "
                  ></i>
                </div> */}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </header>
  );
};

export default HeaderOne;

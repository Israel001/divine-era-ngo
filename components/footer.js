import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import logoLight from "../assets/images/logo-dark.jpeg";
import blogPost1 from "../assets/images/resources/footer-img-1-1.jpg";
import blogPost2 from "../assets/images/resources/footer-img-1-2.jpg";

const Footer = () => {
  return (
    <section className="site-footer">
      <div className="main-footer pt-142 pb-80">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__about">
                <Link href="/">
                  <a aria-label="logo image">
                    <img
                      src={logoLight}
                      className="footer-widget__logo"
                      width="101"
                      alt=""
                    />
                  </a>
                </Link>
                <p>
                  Empowering Communities, Spreading Hope, and Transforming Lives
                  Through Dedicated Care and Support
                </p>
                <ul className="list-unstyled footer-widget__contact">
                  <li className="footer-widget_deets">
                    <a href="#">
                      <i className="azino-icon-telephone"></i>
                      <span>+2347034992296</span>
                    </a>
                  </li>
                  <li className="footer-widget_deets">
                    <a href="#">
                      <i className="azino-icon-email"></i>
                      <span>divineerafoundation19@gmail.com</span>
                    </a>
                  </li>
                  <li className="footer-widget_deets">
                    <a href="#">
                      <i className="azino-icon-pin"></i>
                      <span>
                        1, Olanipekun Ave, By Mobil B/Stop, Oke-ira, Ogba,
                        Lagos.
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">Explore</h3>
                <ul className="list-unstyled footer-widget__link-list">
                  <li>
                    <Link href="/causes">
                      <a>Our Causes</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>About us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/news">
                      <a>New Campaign</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/events">
                      <a>Upcoming Events</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>Site Map</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Help</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/causes">
                      <a>Donate</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Terms</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            {/* <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__blog">
                <h3 className="footer-widget__title">Blog</h3>
                <ul className="list-unstyled footer-widget__blog">
                  <li>
                    <img src={blogPost1} alt="" />
                    <p>22 May, 2020</p>
                    <h3>
                      <Link href="/news-details">
                        <a>You can help the poor in need</a>
                      </Link>
                    </h3>
                  </li>
                  <li>
                    <img src={blogPost2} alt="" />
                    <p>22 May, 2020</p>
                    <h3>
                      <Link href="/news-details">
                        <a>Rise fund for Healthy Food</a>
                      </Link>
                    </h3>
                  </li>
                </ul>
              </div>
            </Col> */}
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__newsletter">
                <h3 className="footer-widget__title">Newletter</h3>
                <p>Signup now to get daily latest news & updates from us</p>
                <form
                  data-url="https://xyz.us18.list-manage.com/subscribe/post?u=20e91746ef818cd941998c598&id=cc0ee8140e"
                  className="footer-widget__newsletter-form mc-form"
                >
                  <label htmlFor="mc-email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    id="mc-email"
                    className=""
                    placeholder="Email address"
                  />
                  <div className="footer-widget__newsletter-btn-wrap d-flex justify-content-end">
                    <button type="submit" className="thm-btn ">
                      Subscribe Now
                    </button>
                  </div>
                </form>
                <div className="mc-form__response"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <ScrollLink
            to="wrapper"
            smooth={true}
            duration={500}
            className="scroll-to-top"
          >
            <i className="far fa-angle-up"></i>
          </ScrollLink>
          <p>© Copyright {new Date().getFullYear()} by Divine Era Foundation</p>
          <div className="footer-social">
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
      </div>
    </section>
  );
};

export default Footer;

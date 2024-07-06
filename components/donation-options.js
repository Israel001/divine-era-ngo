import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heartImage from "../assets/images/shapes/heart-2-1.png";

const DonationOptions = () => {
  return (
    <section className="donate-options pt-120">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="donate-options__content">
              <div className="block-title">
                <p>
                  <img src={heartImage} width="15" alt="" />
                  Donate Now
                </p>
                <h3>
                  Extend a helping hand <br /> to those in need.
                </h3>
              </div>
              <p>
                We at DIVINE ERA FOUNDATION (DEF) seeks to be the most reliable, resourceful and trustworthy in caregiving ministry and also a voice to the voiceless as well as hope for the hopeless.
              </p>
              <div className="donate-options__call">
                <i className="azino-icon-telephone"></i>
                <div className="donate-options__call-content">
                  <p>
                    Have any question about donation? <br />{" "}
                    <span>Call us now:</span>{" "}
                    <a href="tel:+2347034992296">+2347034992296</a>
                  </p>
                </div>
              </div>
              <div className="donate-options__icon-wrap">
                <div className="donate-options__icon">
                  <i className="azino-icon-dove"></i>
                  <h3>
                    <a href="#">Living</a>
                  </h3>
                </div>
                <div className="donate-options__icon">
                  <i className="azino-icon-hamburger"></i>
                  <h3>
                    <a href="#">Food</a>
                  </h3>
                </div>
                <div className="donate-options__icon">
                  <i className="azino-icon-family"></i>
                  <h3>
                    <a href="#">Family</a>
                  </h3>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <form
              action="#"
              className="donate-options__form wow fadeInUp"
              data-wow-duration="1500ms"
            >
              <h3 className="text-center">Start donating now</h3>
              <p className="text-center">
                Start donating now to transform lives, provide essential resources, and bring hope to those 
                in need.
              </p>
              <label htmlFor="donate-name" className="sr-only"></label>
              <input type="text" id="donate-name" placeholder="Your Name" />
              <label htmlFor="donate-amount" className="sr-only"></label>
              <input
                type="text"
                placeholder="Insert Value"
                id="donate-amount"
              />
              <ul id="donate-amount__predefined" className="list-unstyled">
                <li>
                  <a href="#">₦1000</a>
                </li>
                <li>
                  <a href="#">₦2000</a>
                </li>
                <li>
                  <a href="#">₦5000</a>
                </li>
              </ul>
              <button type="submit" className="thm-btn ">
                Donate Now
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DonationOptions;

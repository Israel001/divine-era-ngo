import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Container, Row, Col } from "react-bootstrap";
import heartImage from "../../assets/images/shapes/heart-2-1.png";
import aboutImage from "../../assets/images/resources/about-counter-1-1.jpg";
import aboutHeart from "../../assets/images/shapes/about-count-heart-1-1.png";

const AboutCounter = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="about-counter pt-120">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="block-title">
              <p>
                <img src={heartImage} width="15" alt="" />
                Help People Now
              </p>
              <h3>
                Caring for the people you cherish through dedicated charity.
              </h3>
            </div>
            <p className="about-counter__text">
              Caring for the people you cherish through dedicated charity, we empower communities, promote 
              self-reliance, and provide essential support to the needy.
            </p>
            <ul className="list-unstyled ul-list-one">
              <li>Empower Communities</li>
              <li>Support the Needy</li>
              <li>Promote Self-Reliance</li>
            </ul>
            {/* <div className="about-counter__count">
              <h3 className="odometer">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 8860 : 0} />
                </VisibilitySensor>
              </h3>
              <p>
                Donation campaigns <br /> are running
              </p>
            </div> */}
          </Col>
          <Col lg={6}>
            <div className="about-counter__image clearfix">
              <div className="about-counter__image-content">
                <img src={aboutHeart} alt="" />
                <p>We’re here to support you every step of the way.</p>
              </div>
              <img src={aboutImage} alt="" className="float-left" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutCounter;

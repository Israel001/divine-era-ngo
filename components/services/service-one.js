import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import serviceBg from "../../assets/images/backgrounds/service-hand-bg-1-1.png";
import serviceLine from "../../assets/images/shapes/service-line-1-1.png";
import blockTitleHeart from "../../assets/images/shapes/heart-2-1.png";

const serviceOneData = [
  {
    icon: "azino-icon-hamburger",
    title: "Agriculture",
    extraClassName: "background-primary",
    text: "Promoting sustainable agriculture to empower communities and ensure food security for all",
    link: "#"
  },
  {
    icon: "azino-icon-water-bottle",
    extraClassName: "background-secondary",
    title: "Water",
    text: "Ensuring access to clean and safe water for all communites we serve",
    link: "#"
  },
  {
    icon: "azino-icon-reading-book",
    title: "Education",
    text: "Empowering individuals through quality education for a brighter and more informed future",
    link: "#",
    extraClassName: "background-base"
  },
  {
    icon: "azino-icon-stethoscope",
    title: "Medical",
    extraClassName: "background-special",
    text: "Providing essential medical care to improve health and well-being in our communities",
    link: "#"
  }
];

const ServiceOne = () => {
  return (
    <section
      className="service-one pt-120 pb-90"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      <Container>
        <img src={serviceLine} alt="" className="service-one__shape-1" />
        <div className="block-title">
          <p>
            <img src={blockTitleHeart} width="15" alt="" />
            Welcome to Divine Era Foundation International
          </p>
          <h3>
            We believe that we can save <br /> more lifes with you.
          </h3>
        </div>
        <Row>
          {serviceOneData.map(
            ({ icon, title, text, link, extraClassName }, index) => (
              <Col md={6} lg={3} key={`service-one-key-${index}`}>
                <div className={`service-one__box`}>
                  <div className={`service-one__icon ${extraClassName}`}>
                    <div className="service-one__icon-inner">
                      <i className={icon}></i>
                    </div>
                  </div>
                  <h3>
                    <Link href={link}>
                      <a>{title}</a>
                    </Link>
                  </h3>
                  <p>{text}</p>
                </div>
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceOne;

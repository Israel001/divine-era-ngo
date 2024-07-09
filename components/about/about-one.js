import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import about1 from "../../assets/images/shapes/about-bag-1-1.png";
import about2 from "../../assets/images/gallery/gallery06.jpeg";
import about3 from "../../assets/images/gallery/gallery05.jpeg";
import heart from "../../assets/images/shapes/heart-2-1.png";

const AboutOne = () => {
  return (
    <section className="about-one pt-120 pb-40">
      <Container>
        <Row>
          <div className="about-one__award">
            <img src={about1} alt="" />
          </div>
          <Col lg={6}>
            <img src={about2} alt="" className="img-fluid" />
          </Col>
          <Col lg={6}>
            <img src={about3} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="team-about__top mt-60">
          <Row
            style={{
              borderBottom: "1px solid #e4e4e4",
              paddingTop: "40px",
              paddingBottom: "60px",
            }}
            id="our-mission"
          >
            <Col md={12} lg={4}>
              <div className="block-title">
                <p>
                  <img src={heart} width="15" alt="" />
                  Make a Difference
                </p>
                <h3>Welcome to Divine Era Foundation (DEF)!</h3>
              </div>
            </Col>
            <Col md={12} lg={8}>
              <p className="team-about__top-text">
                At Divine Era Foundation, our mission is to positively impact
                the lives of Nigerians, especially widows, orphans, the
                less-privileged, and those in need. Our commitment to this cause
                is realized through a variety of initiatives including seminars,
                workshops, training sessions, and empowerment programs. We
                ensure that our targeted beneficiaries receive measurable
                benefits from our foundation's efforts.
              </p>
            </Col>
            {/* <Col md={12} lg={8}>
              <p className="team-about__top-text">
                Sapien nunced amet ultrices, dolores sit ipsum velit purus
                aliquet, massa fringilla leo orci. Lorem ipsum dolor sit amet.
                consectetur adipisi cing elit dolo.
              </p>
            </Col> */}
          </Row>

          <Row
            style={{
              borderBottom: "1px solid #e4e4e4",
              paddingTop: "40px",
              paddingBottom: "40px",
            }}
            id="our-objectives"
          >
            <Col md={12} lg={4}>
              <div className="block-title">
                <h3 style={{ color: "#5366c2" }}> Our Mission</h3>
              </div>
            </Col>
            <Col md={12} lg={8}>
              <p>
                Our mission is to continue to partner with communities at the
                local level and spread the benefits of this partnership, so as
                to be able to support individual and community development.
              </p>
            </Col>
          </Row>
          <Row
            style={{
              borderBottom: "1px solid #e4e4e4",
              paddingTop: "40px",
              paddingBottom: "40px",
            }}
          >
            <Col md={12} lg={4}>
              <div className="block-title">
                <h3 style={{ color: "#4ecd99" }}> Our Objectives</h3>
              </div>
            </Col>
            <Col md={12} lg={8}>
              <p>
                <ul className="list-unstyled ul-list-two">
                  <li>
                    Empowerment and Training: <br />{" "}
                    <span className="team-about__top-text">
                      Annually, we offer practical agricultural programs,
                      vocational training, and skills acquisition initiatives.
                      These programs are designed to help our members become
                      self-reliant and improve their quality of life.
                    </span>
                  </li>
                  <li>
                    Community Support: <br />{" "}
                    <span className="team-about__top-text">
                      We actively seek out the neediest individuals within and
                      outside our environment, ensuring they receive the
                      assistance they require. Our efforts are supported by
                      private individuals and corporate organizations who share
                      our vision and contribute to our charitable activities.
                    </span>{" "}
                  </li>
                  <li id="our-goals">
                    Global Presence: <br />{" "}
                    <span className="team-about__top-text">
                      Our foundation operates across all 36 states of Nigeria,
                      including the Federal Capital Territory (FCT). We are also
                      present in several African nations such as South Africa,
                      Sierra Leone, Kenya, Liberia, Jamaica, and Malawi. Our
                      reach continues to grow, and we are committed to expanding
                      our support network.
                    </span>{" "}
                  </li>
                </ul>
              </p>
            </Col>
          </Row>
          <Row style={{ paddingTop: "40px", paddingBottom: "40px" }}>
            <Col md={12} lg={4}>
              <div className="block-title">
                <h3 style={{ color: "#fcad30" }}> Our Goals</h3>
              </div>
            </Col>
            <Col md={12} lg={8}>
              <p>
                <ul className="list-unstyled ul-list-two">
                  <li>
                    Strengthen the Weak: <br />{" "}
                    <span className="team-about__top-text">
                      {" "}
                      Providing support and resources to those in need, helping
                      them build a better future.
                    </span>
                  </li>
                  <li>
                    Voice for the Voiceless: <br />{" "}
                    <span className="team-about__top-text">
                      Offering platforms and opportunities for individuals to
                      achieve their dreams and aspirations.
                    </span>{" "}
                  </li>
                  <li>
                    Business Guidance: <br />{" "}
                    <span className="team-about__top-text">
                      {" "}
                      Suggesting suitable business opportunities and vocational
                      engagements to those unsure of their career paths.
                    </span>{" "}
                  </li>
                  <li>
                    Responsible Living: <br />{" "}
                    <span className="team-about__top-text">
                      {" "}
                      Counseling widows, orphans, and the less-privileged to
                      live responsibly despite economic challenges.
                    </span>{" "}
                  </li>
                  <li>
                    Promoting Non-Violence: <br />{" "}
                    <span className="team-about__top-text">
                      {" "}
                      Encouraging behaviors that prevent domestic, political,
                      and religious violence.
                    </span>{" "}
                  </li>
                  <li>
                    Restoring Hope: <br />{" "}
                    <span className="team-about__top-text">
                      {" "}
                      Bringing hope to individuals who feel hopeless due to
                      life's challenges.
                    </span>{" "}
                  </li>
                  <li>
                    Peaceful Coexistence: <br />{" "}
                    <span className="team-about__top-text">
                      {" "}
                      Promoting the message of peaceful coexistence within
                      communities.
                    </span>{" "}
                  </li>
                </ul>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutOne;

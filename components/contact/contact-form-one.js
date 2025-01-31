import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";

const ContactFormOne = () => {
  return (
    <section className="contact-page pt-120 pb-80">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="contact-page__content mb-40">
              <BlockTitle
                title={`Feel free to write us \n a message.`}
                tagLine="Contact With Us"
              />
              <p className="block-text mb-30 pr-10">
                We'd love to hear from you! Whether you have questions about our
                programs, need assistance, or want to get involved, our team is
                here to help. Reach out to us through any of the following
                methods:
              </p>
              <div className="footer-social black-hover">
                <a href="#" aria-label="twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="facebook">
                  <i className="fab fa-facebook-square"></i>
                </a>

                <a href="#" aria-label="email">
                  <i className="azino-icon-email"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <form className="contact-form-validated contact-page__form form-one mb-40">
              <div className="form-group">
                <div className="form-control">
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email" className="sr-only">
                    email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="phone" className="sr-only">
                    phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="subject" className="sr-only">
                    subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-control form-control-full">
                  <label htmlFor="message" className="sr-only">
                    message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Write a Message"
                    id="message"
                  ></textarea>
                </div>
                <div className="form-control form-control-full">
                  <button type="submit" className="thm-btn ">
                    Submit Message
                  </button>
                </div>
              </div>
            </form>
            <div className="result"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactFormOne;

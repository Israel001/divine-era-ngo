import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCore, { Autoplay, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlockTitle from "../block-title";
import testimonialImage1 from "../../assets/images/resources/testimonial01.png";
import testimonialImage2 from "../../assets/images/resources/testimonial02.png";
import testimonialImage3 from "../../assets/images/resources/testimonial03.png";

SwiperCore.use([Autoplay, Thumbs]);

const TESTIMONIALS_DATA = [
  {
    image: testimonialImage1,
    name: "Ogedengbe Joseph",
    designation: "",
    text: "This is due to their excellent service, competitive pricing and \n customer support. It’s throughly refresing to get such a \n personal touch.",
  },
  {
    image: testimonialImage2,
    name: "Grace Dio",
    designation: "",
    text: "This is due to their excellent service, competitive pricing and \n customer support. It’s throughly refresing to get such a \n personal touch.",
  },
  {
    image: testimonialImage3,
    name: "Bridget Omotoso",
    designation: "",
    text: "This is due to their excellent service, competitive pricing and \n customer support. It’s throughly refresing to get such a \n personal touch.",
  },
];

const TestimonialsTwo = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const testimonialsThumbOptions = {
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 1400,
    autoplay: {
      delay: 5000,
    },
  };
  const testimonialsOptions = {
    speed: 1400,
    mousewheel: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
  };
  return (
    <section className="testimonials-two">
      <Container>
        <div className="team-about__top">
          <Row className="align-items-center">
            <Col md={12} lg={7}>
              <BlockTitle
                title={`What they are talking \n about Divine Era Foundation.`}
                tagLine="Our Testimonials"
              />
            </Col>
            <Col md={12} lg={5}>
              <p className="team-about__top-text">
                What they are talking about Divine Era Foundation: Empowering
                the needy, fostering self-reliance , and spreading hope through
                education, agriculture, and essential care programs.
              </p>
            </Col>
          </Row>
        </div>
        <Swiper
          id="testimonials-two__thumb"
          onSwiper={setThumbsSwiper}
          {...testimonialsThumbOptions}
        >
          {TESTIMONIALS_DATA.map(({ image, name }, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={name} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          id="testimonials-two__carousel"
          thumbs={{ swiper: thumbsSwiper }}
          {...testimonialsOptions}
        >
          {TESTIMONIALS_DATA.map(({ designation, name, text }, index) => (
            <SwiperSlide key={index}>
              <p>{text}</p>
              <div className="testimonials-two__meta">
                <h3>{name}</h3>
                <span>{designation}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default TestimonialsTwo;

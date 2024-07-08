import React from "react";
import { Container } from "react-bootstrap";

import PostPaginations from "../post-paginations";
import BlogCard from "./blog-card";

import blogImage1 from "../../assets/images/blog/image.png";
import blogImage2 from "../../assets/images/blog/blog-1-2.jpg";
import blogImage3 from "../../assets/images/blog/blog-1-3.jpg";
import blogImage4 from "../../assets/images/blog/blog-1-4.jpg";
import blogImage5 from "../../assets/images/blog/blog-1-5.jpg";
import blogImage6 from "../../assets/images/blog/blog-1-6.jpg";

const BLOG_DATA = [
  {
    image: blogImage1,
    title:
      "Cleric seeks Govts, Churches, Firms' Attention to Indigents' Plight",
    date: "7 Mar 2021",
    text: "Apostle Ekwere Angel, African President of Divine Era Foundation, a non governmental....",
    link: "/news-details",
    // commentCount: "2 Comments",
    author: "Chinyere Abiaziem",
  },
];

const BlogPage = () => {
  return (
    <section className="news-page pt-120 pb-120">
      <Container>
        <div className="news-3-col">
          {BLOG_DATA.map(
            (
              { image, title, date, text, link, commentCount, author },
              index
            ) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                date={date}
                text={text}
                link={link}
                commentCount={commentCount}
                author={author}
              />
            )
          )}
        </div>
        {/* <PostPaginations /> */}
      </Container>
    </section>
  );
};

export default BlogPage;

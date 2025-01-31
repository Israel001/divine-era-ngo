import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import MainSlider from "../components/slider/main-slider";
import VideoCardTwo from "../components/videos/video-card-two";
import ServiceOne from "../components/services/service-one";
import AboutCounter from "../components/about/about-counter";
import CausesHome from "../components/causes/causes-home";
import DonationOptions from "../components/donation-options";
import TeamHome from "../components/team/team-home";
import CallToActionTwo from "../components/call-to-action/call-to-action-two";
import GalleryTestimonials from "../components/gallery/gallery-testimonials";
import GalleryHome from "../components/gallery/gallery-home";
import TestimonialsTwo from "../components/testimonials/testimonials-two";
import BlogHome from "../components/blog/blog-home";
import CallToAction from "../components/call-to-action/call-to-action";
import GoogleMap from "../components/google-map";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import MenuContextProvider from "../context/menu-context";
import SearchContextProvider from "../context/search-context";

const HomeOne = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Divine Era Foundation International">
          <HeaderOne />
          <StickyHeader />
          <MainSlider />
          <VideoCardTwo />
          <ServiceOne />
          <AboutCounter />
          {/* <CausesHome /> */}
          <CallToActionTwo />
          <DonationOptions />
          <TeamHome />
          <GalleryTestimonials>
            <GalleryHome />
            <TestimonialsTwo />
          </GalleryTestimonials>
          {/* <BlogHome /> */}
          <CallToAction />
          {/* <GoogleMap extraClass="home" /> */}
          <BrandCarousel extraClass="client-carousel__has-top-shadow" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeOne;

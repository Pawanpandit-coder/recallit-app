import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import FAQs from "../components/FAQs";
import Subscriptions from "../components/Subscriptions";
import LatestBlogs from "../components/latestBlogs";
import NewsLetter from "../components/NewsLetter";

function homePage() {
  return (
    <div>
      <Hero/>
      <CTA/>
      <Testimonials/>
      <FAQs/>
      <LatestBlogs/>
    </div>
  );
}

export default homePage;

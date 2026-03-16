// src/routes/Home.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import Profile from "../components/Profile";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Writing from "../components/Writing";
import Footer from "../components/Footer";
import SpinnerImage from "../components/SpinnerImage";

const Home = () => {
  return (
    <>
      {/* SEO tags */}
      <Helmet>
        <title>Home | Ram Shrestha Portfolio</title>
        <meta
          name="description"
          content="Ram Shrestha Portfolio - Data Scientist & AI Engineer from Nepal. Explore projects, experience, skills, and writings."
        />
        <link rel="canonical" href="https://ramshrestha23.com.np/" />
        <meta property="og:title" content="Ram Shrestha | Data Scientist Portfolio" />
        <meta property="og:description" content="Portfolio of Ram Shrestha, a Data Scientist specializing in ML, AI, and Data Analytics in Kathmandu, Nepal." />
        <meta property="og:url" content="https://ramshrestha23.com.np/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ramshrestha23.com.np/images/portfolio-og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ram Shrestha | Data Scientist Portfolio" />
        <meta name="twitter:description" content="Portfolio of Ram Shrestha, a Data Scientist specializing in ML, AI, and Data Analytics in Kathmandu, Nepal." />
        <meta name="twitter:image" content="https://ramshrestha23.com.np/images/portfolio-og.png" />
      </Helmet>

      {/* Main content */}
      <div className="content_wrapper">
        <Profile />
        <main>
          <About />
          <Experience />
          <Projects />
          <Writing />
          <Footer />
        </main>
      </div>
      <SpinnerImage />
    </>
  );
};

export default Home;
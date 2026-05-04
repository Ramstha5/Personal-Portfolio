// src/routes/Home.jsx
import React, { Suspense, lazy } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

import Profile from "../components/Profile";
const About = lazy(() => import("../components/About"));
const Experience = lazy(() => import("../components/Experience"));
const Projects = lazy(() => import("../components/Projects"));
import Footer from "../components/Footer";
import SpinnerImage from "../components/SpinnerImage";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      {/* SEO META ONLY (NO TITLE HERE) */}
      <Helmet>
        {/* Primary Meta */}
        <meta
          name="description"
          content="Ram Shrestha - Data Scientist & AI Engineer in Nepal. Explore projects, skills, and experience in Machine Learning, AI, and Data Analytics."
        />
        <link rel="canonical" href="https://ramshrestha23.com.np/" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Ram Shrestha - Data Scientist Nepal"
        />
        <meta
          property="og:description"
          content="AI Engineer & Data Scientist in Kathmandu, Nepal specializing in Machine Learning, Python, and Data Analytics."
        />
        <meta property="og:url" content="https://ramshrestha23.com.np/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ramshrestha23.com.np/images/data-science-portfolio-nepal.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ram Shrestha - Data Science Portfolio Nepal"
        />
        <meta
          name="twitter:description"
          content="Portfolio of Ram Shrestha, Data Scientist & AI Engineer in Nepal."
        />
        <meta
          name="twitter:image"
          content="https://ramshrestha23.com.np/images/data-science-portfolio-nepal.webp"
        />
      </Helmet>

      {/* ✅ Main Content */}
      <div className="content_wrapper">
        <Profile />

        <main>
          <Suspense
            fallback={
              <div className="loading-fallback">Loading sections...</div>
            }
          >
            <About />
            <Experience />
            <Projects />
            <Contact />
          </Suspense>
          <Footer />
        </main>
      </div>

      {/* ✅ Loader */}
      <SpinnerImage />
    </>
  );
};

export default Home;

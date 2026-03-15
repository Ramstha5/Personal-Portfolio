import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      {/* SEO tags for 404 page */}
      <Helmet>
        <title>404 Not Found | Ram Shrestha Portfolio</title>
        <meta
          name="description"
          content="Page not found on Ram Shrestha Portfolio. Navigate back to Home."
        />
        <link rel="canonical" href="https://ramshrestha23.com.np/404" />
      </Helmet>

      {/* 404 content */}
      <div style={styles.container}>
        <h1 style={styles.code}>404</h1>
        <h2 style={styles.title}>Page Not Found</h2>

        <p style={styles.text}>
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link to="/" style={styles.button}>
          Go Back Home
        </Link>
      </div>
    </>
  );
};

const styles = {
  container: {
    height: "100vh",
    background: "#0f172a",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },

  code: {
    fontSize: "120px",
    margin: "0",
    color: "#38bdf8"
  },

  title: {
    fontSize: "32px",
    marginBottom: "10px"
  },

  text: {
    maxWidth: "400px",
    marginBottom: "30px",
    color: "#94a3b8"
  },

  button: {
    padding: "12px 25px",
    background: "#38bdf8",
    color: "#000",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold"
  }
};

export default NotFound;
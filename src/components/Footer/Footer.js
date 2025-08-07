import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TodayJobs</h3>
            <p>Find your dream job with our comprehensive job portal.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/jobs">Browse Jobs</a>
              </li>
              <li>
                <a href="/companies">Companies</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
            </ul>
          </div>
          {/* <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="/blog">Career Blog</a>
              </li>
              <li>
                <a href="/resume-tips">Resume Tips</a>
              </li>
              <li>
                <a href="/interview-tips">Interview Tips</a>
              </li>
            </ul>
          </div> */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul>
              <li>Email: todaytalks.office@gmail.com</li>
              <li>Phone: +91 9876543210</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} TodayJobs. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-and-conditions">Terms of Service</a>
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener">How Google uses data</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

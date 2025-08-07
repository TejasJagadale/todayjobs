import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About TodayJobs</h1>
      <p className="subtitle">Your Gateway to Career Opportunities</p>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At TodayJobs, we strive to bridge the gap between talented
            professionals and top companies. Our mission is to simplify the job
            search process and help candidates find their dream jobs while
            assisting companies in discovering the best talent.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Job Search</h3>
              <p>
                Access thousands of job listings from top MNCs and corporate
                companies across various industries.
              </p>
            </div>
            <div className="service-card">
              <h3>Company Profiles</h3>
              <p>
                Comprehensive information about hiring companies, their culture,
                and current openings.
              </p>
            </div>
            <div className="service-card">
              <h3>Career Resources</h3>
              <p>
                Resume building tips, interview preparation guides, and career
                advice from industry experts.
              </p>
            </div>
            <div className="service-card">
              <h3>Application Tracking</h3>
              <p>
                Track your job applications and receive status updates in one
                centralized dashboard.
              </p>
            </div>
            <div className="service-card">
              <h3>Personalized Recommendations</h3>
              <p>
                Get job recommendations tailored to your skills, experience, and
                preferences.
              </p>
            </div>
            <div className="service-card">
              <h3>Mobile Accessibility</h3>
              <p>
                Access job opportunities anytime, anywhere through our mobile
                application.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Why Choose TodayJobs?</h2>
          <ul className="benefits-list">
            <li>Extensive database of verified job listings</li>
            <li>Direct applications to company career pages</li>
            <li>Regular updates on new job postings</li>
            <li>User-friendly interface with advanced search filters</li>
            <li>Completely free for job seekers</li>
            <li>Dedicated customer support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

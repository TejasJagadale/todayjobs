// JobDetails.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./JobDetails.css";

const JobDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const job = state?.job;

  if (!job) {
    return (
      <div className="job-details-container">
        <div className="job-not-found">
          <h2>Job Not Found</h2>
          <p>The job you're looking for doesn't exist or may have been removed.</p>
          <button onClick={() => navigate("/")} className="back-button">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="job-details-container">
      <div className="job-details-header">
        <button onClick={() => navigate(-1)} className="back-button">
          &larr; Back to Jobs
        </button>
        <h1>{job.title}</h1>
        <h2>{job.company}</h2>
        <div className="job-meta">
          <span><i className="fas fa-map-marker-alt"></i> {job.location}</span>
          <span><i className="fas fa-clock"></i> {job.type}</span>
          <span><i className="fas fa-money-bill-wave"></i> {job.salary}</span>
          <span><i className="fas fa-calendar-alt"></i> Posted on {formatDate(job.createdAt)}</span>
        </div>
      </div>

      <div className="job-details-content">
        <div className="job-main-content">
          <section className="job-description">
            <h3>Job Description</h3>
            <p>{job.description}</p>
          </section>

          <section className="job-requirements">
            <h3>Requirements</h3>
            <ul>
              {job.requirements?.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </section>

          <section className="job-responsibilities">
            <h3>Key Responsibilities</h3>
            <p>{job.responsibilities || "Not specified in detail"}</p>
          </section>
        </div>

        <div className="job-sidebar">
          <div className="apply-box">
            <h3>Apply for this position</h3>
            <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="apply-button">
              Apply Now
            </a>
            <div className="application-tips">
              <h4>Application Tips</h4>
              <ul>
                <li>Tailor your resume to this job</li>
                <li>Write a compelling cover letter</li>
                <li>Highlight relevant experience</li>
              </ul>
            </div>
          </div>

          <div className="company-info">
            <h3>About {job.company}</h3>
            <p>{job.companyDescription || "Company information not available"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
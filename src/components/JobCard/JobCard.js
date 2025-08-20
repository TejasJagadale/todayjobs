import React from "react";
import "./JobCard.css";

const JobCard = ({ job, onCardClick }) => {
  const getTypeColor = (type) => {
    switch (type?.toLowerCase()) {
      case "full-time":
        return "#2ecc71";
      case "part-time":
        return "#e67e22";
      case "contract":
        return "#9b59b6";
      case "internship":
        return "#2c3e50";
      case "government":
        return "#e74c3c";
      case "state government":
        return "#c0392b";
      default:
        return "#7f8c8d";
    }
  };

  const formatPostedDate = (dateString) => {
    if (!dateString) return "Recently";

    const postedDate = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - postedDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 1) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  return (
    <div className="job-cardhome" onClick={() => onCardClick(job)}>
      <div className="job-header">
        <div className="company-logojc">
          {job.company?.charAt(0).toUpperCase() || "?"}
        </div>
        <div className="job-title-wrapper">
          <h3 className="job-title">{job.title}</h3>
          <p className="company-name">{job.company}</p>
        </div>
      </div>

      <p className="job-description">
        {job.description?.length > 120
          ? `${job.description.substring(0, 120)}...`
          : job.description}
      </p>

      <div className="job-details">
        <div className="job-meta">
          <span className="job-location">
            <i className="fas fa-map-marker-alt"></i>{" "}
            {job.location || "Location not specified"}
          </span>
          <span className="job-salary">
            <i className="fas fa-money-bill-wave"></i>{" "}
            {job.salary || "Salary not specified"}
          </span>
        </div>

        <div
          className="job-type"
          style={{ backgroundColor: getTypeColor(job.type) }}
        >
          {job.type || "Not specified"}
        </div>
      </div>

      <div className="job-footer">
        <span className="posting-date">
          Posted {formatPostedDate(job.createdAt)}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
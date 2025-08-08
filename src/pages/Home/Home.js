import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import JobCard from "../../components/JobCard/JobCard";
import GovernmentLinksSection from "../../components/GovernmentLinksSection/GovernmentLinksSection";
import AdSense from "../../components/AdSense/AdSense";
import LoadingSpinner from "../../pages/LoadingSpinner.jsx";
import Pagination from "../../pages/Pagination.jsx";
import NoResults from "../../pages/NoResults.jsx";
import ErrorMessage from "../../pages/ErrorMessage.jsx";
import "./Home.css";
import { fetchJobs, fetchGovernmentLinks } from "../../api/job.js";

const Home = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [governmentJobs, setGovernmentJobs] = useState([]);
  const [privateJobs, setPrivateJobs] = useState([]);
  const [governmentLinks, setGovernmentLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentGovPage, setCurrentGovPage] = useState(1);
  const [currentPrivatePage, setCurrentPrivatePage] = useState(1);
  const [jobsPerPage] = useState(8);
  const [error, setError] = useState(null);

  const openJobModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeJobModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [jobsData, linksData] = await Promise.all([
          fetchJobs(),
          fetchGovernmentLinks()
        ]);
        // console.log(jobsData);

        setJobs(jobsData);

        // Separate government and private jobs
        const govJobs = jobsData.filter((job) => job.category === "Govt");
        const privJobs = jobsData.filter((job) => job.category !== "Govt");
        setGovernmentJobs(govJobs);
        setPrivateJobs(privJobs);

        setGovernmentLinks(linksData || []);
      } catch (err) {
        console.error("Failed to load data:", err);
        setError("Failed to load job listings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Get current jobs for pagination
  const indexOfLastGovJob = currentGovPage * jobsPerPage;
  const indexOfFirstGovJob = indexOfLastGovJob - jobsPerPage;
  const currentGovernmentJobs = governmentJobs.slice(
    indexOfFirstGovJob,
    indexOfLastGovJob
  );
  const totalGovernmentPages = Math.ceil(governmentJobs.length / jobsPerPage);

  const indexOfLastPrivateJob = currentPrivatePage * jobsPerPage;
  const indexOfFirstPrivateJob = indexOfLastPrivateJob - jobsPerPage;
  const currentPrivateJobs = privateJobs.slice(
    indexOfFirstPrivateJob,
    indexOfLastPrivateJob
  );
  const totalPrivatePages = Math.ceil(privateJobs.length / jobsPerPage);

  const handleSearch = (searchData) => {
    const filtered = jobs.filter((job) => {
      const keywordMatch =
        job.title.toLowerCase().includes(searchData.keyword.toLowerCase()) ||
        job.company.toLowerCase().includes(searchData.keyword.toLowerCase()) ||
        job.description
          .toLowerCase()
          .includes(searchData.keyword.toLowerCase());
      const locationMatch = job.location
        .toLowerCase()
        .includes(searchData.location.toLowerCase());
      const typeMatch =
        searchData.jobType === "" || job.type === searchData.jobType;
      return (
        keywordMatch &&
        (searchData.location === "" || locationMatch) &&
        typeMatch
      );
    });

    // Update separated jobs based on filtered results
    const govJobs = filtered.filter((job) => job.category === "Govt");
    const privJobs = filtered.filter((job) => job.category !== "Govt");
    setGovernmentJobs(govJobs);
    setPrivateJobs(privJobs);
    setCurrentGovPage(1);
    setCurrentPrivatePage(1);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="containerhome">
          <div className="hero-content">
            <h1 className="hero-title">Find Your Dream Job Today</h1>
            <p className="hero-subtitle">
              Thousands of opportunities from top employers nationwide
            </p>
            <SearchBar onSearch={handleSearch} showJobTypeFilter />
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">{jobs.length}+</span>
                <span className="stat-label">Jobs Available</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{governmentJobs.length}+</span>
                <span className="stat-label">Government Jobs</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{privateJobs.length}+</span>
                <span className="stat-label">Private Sector Jobs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="main-content">
        <div className="containerhome">
          {/* Advertisement Banner */}
          <div className="ad-banner">
            <AdSense
              slot="1234567890"
              format="auto"
              responsive="true"
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-1915488793968759"
              data-ad-slot="1234567890"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          </div>

          {error ? (
            <ErrorMessage
              message={error}
              onRetry={() => window.location.reload()}
            />
          ) : (
            <>
              {governmentLinks.length > 0 && (
                <GovernmentLinksSection links={governmentLinks} />
              )}

              <div className="jobs-container">
                {/* Government Jobs Section */}
                <section className="job-section">
                  <div className="section-header">
                    <h2 className="section-title">
                      <i className="fas fa-landmark section-icon"></i>
                      Government Jobs
                    </h2>
                    <p className="section-subtitle">
                      {governmentJobs.length} positions available
                    </p>
                  </div>

                  {loading ? (
                    <LoadingSpinner message="Loading government job listings..." />
                  ) : (
                    <>
                      {governmentJobs.length > 0 ? (
                        <>
                          <div className="jobs-grid">
                            {currentGovernmentJobs.map((job) => (
                              <JobCard
                                key={job._id}
                                job={job}
                                onCardClick={openJobModal}
                              />
                            ))}
                          </div>
                          <Pagination
                            currentPage={currentGovPage}
                            totalPages={totalGovernmentPages}
                            onPageChange={setCurrentGovPage}
                          />
                        </>
                      ) : (
                        <NoResults
                          message="No government positions match your search criteria"
                          suggestion="Try adjusting your filters or search terms"
                        />
                      )}
                    </>
                  )}
                </section>

                {/* Private Jobs Section */}
                <section className="job-section">
                  <div className="section-header">
                    <h2 className="section-title">
                      <i className="fas fa-briefcase section-icon"></i>
                      Private Sector Jobs
                    </h2>
                    <p className="section-subtitle">
                      {privateJobs.length} positions available
                    </p>
                  </div>

                  {loading ? (
                    <LoadingSpinner message="Loading private job listings..." />
                  ) : (
                    <>
                      {privateJobs.length > 0 ? (
                        <>
                          <div className="jobs-grid">
                            {currentPrivateJobs.map((job) => (
                              <JobCard
                                key={job._id}
                                job={job}
                                onCardClick={openJobModal}
                              />
                            ))}
                          </div>
                          <Pagination
                            currentPage={currentPrivatePage}
                            totalPages={totalPrivatePages}
                            onPageChange={setCurrentPrivatePage}
                          />
                        </>
                      ) : (
                        <NoResults
                          message="No private sector positions match your search criteria"
                          suggestion="Try adjusting your filters or search terms"
                        />
                      )}
                    </>
                  )}
                </section>
              </div>

              {/* Bottom Advertisement Banner */}
              <div className="ad-banner">
                <AdSense
                  slot="3581145953"
                  format="auto"
                  responsive="true"
                  className="adsbygoogle"
                  style={{ display: "block" }}
                  data-ad-client="ca-pub-1915488793968759"
                  data-ad-slot="3581145953"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                />
              </div>
            </>
          )}

          {isModalOpen && selectedJob && (
            <div className="job-modal-overlay" onClick={closeJobModal}>
              <div className="job-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={closeJobModal}>
                  &times;
                </button>

                <div className="modal-header">
                  <div className="company-logo large">
                    {selectedJob.company?.charAt(0).toUpperCase() || "?"}
                  </div>
                  <div>
                    <h2>{selectedJob.title}</h2>
                    <h3>{selectedJob.company}</h3>
                    <p>
                      <i className="fas fa-map-marker-alt"></i>{" "}
                      {selectedJob.location || "Location not specified"}
                    </p>
                  </div>
                </div>

                <div className="modal-details">
                  <div className="detail-row">
                    <span>
                      <strong>Salary:</strong>{" "}
                      {selectedJob.salary || "Not specified"}
                    </span>
                    <span>
                      <strong>Job Type:</strong>{" "}
                      <span style={{ color: getTypeColor(selectedJob.type) }}>
                        {selectedJob.type || "Not specified"}
                      </span>
                    </span>
                    <span>
                      <strong>Category:</strong>{" "}
                      {selectedJob.category || "Not specified"}
                    </span>
                  </div>

                  <div className="detail-section">
                    <h4>Job Description</h4>
                    <p>{selectedJob.description}</p>
                  </div>

                  {selectedJob.requirements && (
                    <div className="detail-section">
                      <h4>Requirements</h4>
                      <ul>
                        {Array.isArray(selectedJob.requirements) ? (
                          selectedJob.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))
                        ) : (
                          <li>{selectedJob.requirements}</li>
                        )}
                      </ul>
                    </div>
                  )}

                  <div className="modal-footer">
                    <span className="posting-date">
                      Posted {formatPostedDate(selectedJob.createdAt)}
                    </span>
                    <a
                      href={selectedJob.applyLink}
                      className="apply-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Newsletter Section */}
      {/*   <section className="newsletter-section">
        <div className="containerhome">
          <div className="newsletter-content">
            <h3>Get Job Alerts Directly to Your Inbox</h3>
            <p>Subscribe to our newsletter for the latest job openings</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>*/}
    </div>
  );
};

// Helper functions (add these outside your component)
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

export default Home;

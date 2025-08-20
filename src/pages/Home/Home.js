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
  const [activeTab, setActiveTab] = useState("all");

  const openJobModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeJobModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  useEffect(() => {
    // Add Font Awesome to document head
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(link);

    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const [jobsData, linksData] = await Promise.all([
          fetchJobs(),
          fetchGovernmentLinks()
        ]);
        setJobs(jobsData);
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

  // Pagination calculations
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

    const govJobs = filtered.filter((job) => job.category === "Govt");
    const privJobs = filtered.filter((job) => job.category !== "Govt");
    setGovernmentJobs(govJobs);
    setPrivateJobs(privJobs);
    setCurrentGovPage(1);
    setCurrentPrivatePage(1);
  };

  return (
    <div className="home-page">
      {/* Add Font Awesome CDN for icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
        </div>

        <div className="containerhome">
          <div className="hero-content">
            <div className="hero-headline">
              <h1 className="hero-title">
                Discover Your Next <span className="highlight">Career</span>{" "}
                Opportunity
              </h1>
              <p className="hero-subtitle">
                Connect with {jobs.length}+ curated positions from leading
                companies and government agencies
              </p>
            </div>

            <div className="hero-search-container">
              <div className="advanced-search-panel">
                <SearchBar onSearch={handleSearch} showJobTypeFilter />
              </div>
            </div>

            <div className="trust-indicators">
              <div className="trust-item">
                <div className="trust-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <span>Verified Listings</span>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <span>Quick Apply</span>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <i className="fas fa-building"></i>
                </div>
                <span>500+ Companies</span>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Explore Opportunities</span>
          <div className="scroll-arrow">
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="containerhome">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">{jobs.length}+</span>
              <span className="stat-label">Live Jobs</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{governmentJobs.length}+</span>
              <span className="stat-label">Government Jobs</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{privateJobs.length}+</span>
              <span className="stat-label">Private Jobs</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Companies</span>
            </div>
          </div>
        </div>
      </section>

      <main className="main-content">
        <div className="containerhome">
          {/* Advertisement Banner */}
          <div className="ad-banner-top">
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

              {/* Jobs Tabs */}
              <div className="jobs-tabs">
                <button
                  className={activeTab === "all" ? "tab-active" : ""}
                  onClick={() => setActiveTab("all")}
                >
                  <i className="fas fa-globe"></i> All Jobs ({jobs.length})
                </button>
                <button
                  className={activeTab === "govt" ? "tab-active" : ""}
                  onClick={() => setActiveTab("govt")}
                >
                  <i className="fas fa-landmark"></i> Government Jobs (
                  {governmentJobs.length})
                </button>
                <button
                  className={activeTab === "private" ? "tab-active" : ""}
                  onClick={() => setActiveTab("private")}
                >
                  <i className="fas fa-briefcase"></i> Private Jobs (
                  {privateJobs.length})
                </button>
              </div>

              <div className="jobs-container">
                {/* Government Jobs Section */}
                {(activeTab === "all" || activeTab === "govt") && (
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
                )}

                {/* Private Jobs Section */}
                {(activeTab === "all" || activeTab === "private") && (
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
                )}
              </div>

              {/* Bottom Advertisement Banner */}
              <div className="ad-banner-bottom">
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

          {/* Job Modal */}
          {isModalOpen && selectedJob && (
            <div className="job-modal-overlay" onClick={closeJobModal}>
              <div className="job-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={closeJobModal}>
                  <i className="fas fa-times"></i>
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
                      <i className="fas fa-money-bill-wave"></i>{" "}
                      <strong>Salary:</strong>{" "}
                      {selectedJob.salary || "Not specified"}
                    </span>
                    <span>
                      <i className="fas fa-clock"></i>{" "}
                      <strong>Job Type:</strong>{" "}
                      <span style={{ color: getTypeColor(selectedJob.type) }}>
                        {selectedJob.type || "Not specified"}
                      </span>
                    </span>
                    <span>
                      <i className="fas fa-tag"></i> <strong>Category:</strong>{" "}
                      {selectedJob.category || "Not specified"}
                    </span>
                  </div>
                  <div className="detail-section">
                    <h4>
                      <i className="fas fa-align-left"></i> Job Description
                    </h4>
                    <p>{selectedJob.description}</p>
                  </div>
                  {selectedJob.requirements && (
                    <div className="detail-section">
                      <h4>
                        <i className="fas fa-list-check"></i> Requirements
                      </h4>
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
                      <i className="fas fa-calendar-alt"></i> Posted{" "}
                      {formatPostedDate(selectedJob.createdAt)}
                    </span>
                    <a
                      href={selectedJob.applyLink}
                      className="apply-btnhome"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-paper-plane"></i> Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

// Helper functions
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

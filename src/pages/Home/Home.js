import React, { useState, useEffect, useMemo, useCallback } from "react";
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

// Helper functions moved to top level
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

// Custom hook for font loading
const useFontLoader = (fontUrl) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = fontUrl;
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, [fontUrl]);
};

const Home = () => {
  // State management
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [governmentLinks, setGovernmentLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentGovPage, setCurrentGovPage] = useState(1);
  const [currentPrivatePage, setCurrentPrivatePage] = useState(1);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  
  // Constants
  const JOBS_PER_PAGE = 8;
  
  // Load fonts
  useFontLoader("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");

  // Memoized job filtering
  const { governmentJobs, privateJobs } = useMemo(() => {
    const govJobs = jobs.filter(job => job.category === "Govt");
    const privJobs = jobs.filter(job => job.category !== "Govt");
    return { governmentJobs: govJobs, privateJobs: privJobs };
  }, [jobs]);

  // Data fetching
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const [jobsData, linksData] = await Promise.all([
          fetchJobs(),
          fetchGovernmentLinks()
        ]);
        setJobs(jobsData);
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

  // Event handlers
  const openJobModal = useCallback((job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  }, []);

  const closeJobModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedJob(null);
  }, []);

  // Search functionality
  const handleSearch = useCallback((searchData) => {
    const filtered = jobs.filter((job) => {
      const keywordMatch = 
        job.title.toLowerCase().includes(searchData.keyword.toLowerCase()) ||
        job.company.toLowerCase().includes(searchData.keyword.toLowerCase()) ||
        (job.description && job.description.toLowerCase().includes(searchData.keyword.toLowerCase()));
      
      const locationMatch = searchData.location === "" || 
        (job.location && job.location.toLowerCase().includes(searchData.location.toLowerCase()));
      
      const typeMatch = searchData.jobType === "" || job.type === searchData.jobType;
      
      return keywordMatch && locationMatch && typeMatch;
    });

    // Update state by filtering the original jobs
    setJobs(filtered);
    setCurrentGovPage(1);
    setCurrentPrivatePage(1);
  }, [jobs]);

  // Pagination calculations
  const paginationData = useMemo(() => {
    const indexOfLastGovJob = currentGovPage * JOBS_PER_PAGE;
    const indexOfFirstGovJob = indexOfLastGovJob - JOBS_PER_PAGE;
    const currentGovernmentJobs = governmentJobs.slice(indexOfFirstGovJob, indexOfLastGovJob);
    const totalGovernmentPages = Math.ceil(governmentJobs.length / JOBS_PER_PAGE);

    const indexOfLastPrivateJob = currentPrivatePage * JOBS_PER_PAGE;
    const indexOfFirstPrivateJob = indexOfLastPrivateJob - JOBS_PER_PAGE;
    const currentPrivateJobs = privateJobs.slice(indexOfFirstPrivateJob, indexOfLastPrivateJob);
    const totalPrivatePages = Math.ceil(privateJobs.length / JOBS_PER_PAGE);

    return {
      currentGovernmentJobs,
      totalGovernmentPages,
      currentPrivateJobs,
      totalPrivatePages
    };
  }, [currentGovPage, currentPrivatePage, governmentJobs, privateJobs, JOBS_PER_PAGE]);

  // Render functions for better organization
  const renderJobSection = (type, jobs, currentPage, totalPages, onPageChange, loadingMessage) => {
    if (loading) {
      return <LoadingSpinner message={loadingMessage} />;
    }

    if (jobs.length === 0) {
      const message = type === "govt" 
        ? "No government positions match your search criteria" 
        : "No private sector positions match your search criteria";
      
      return (
        <NoResults
          message={message}
          suggestion="Try adjusting your filters or search terms"
        />
      );
    }

    const currentJobs = type === "govt" 
      ? paginationData.currentGovernmentJobs 
      : paginationData.currentPrivateJobs;

    return (
      <>
        <div className="jobs-grid">
          {currentJobs.map(job => (
            <JobCard
              key={job._id}
              job={job}
              onCardClick={openJobModal}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </>
    );
  };

  // Hero Section Component (moved inside to avoid file structure issues)
  const HeroSection = ({ jobsCount, onSearch }) => (
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
              Discover Your Next <span className="highlight">Career</span> Opportunity
            </h1>
            <p className="hero-subtitle">
              Connect with {jobsCount}+ curated positions from leading companies and government agencies
            </p>
          </div>

          <div className="hero-search-container">
            <div className="advanced-search-panel">
              <SearchBar onSearch={onSearch} showJobTypeFilter />
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
  );

  // Stats Section Component
  const StatsSection = ({ totalJobs, governmentJobs, privateJobs }) => (
    <section className="stats-section">
      <div className="containerhome">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">{totalJobs}+</span>
            <span className="stat-label">Live Jobs</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{governmentJobs}+</span>
            <span className="stat-label">Government Jobs</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{privateJobs}+</span>
            <span className="stat-label">Private Jobs</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Companies</span>
          </div>
        </div>
      </div>
    </section>
  );

  // Jobs Tabs Component
  const JobsTabs = ({ activeTab, onTabChange, allJobsCount, governmentJobsCount, privateJobsCount }) => (
    <div className="jobs-tabs">
      <button
        className={activeTab === "all" ? "tab-active" : ""}
        onClick={() => onTabChange("all")}
      >
        <i className="fas fa-globe"></i> All Jobs ({allJobsCount})
      </button>
      <button
        className={activeTab === "govt" ? "tab-active" : ""}
        onClick={() => onTabChange("govt")}
      >
        <i className="fas fa-landmark"></i> Government Jobs ({governmentJobsCount})
      </button>
      <button
        className={activeTab === "private" ? "tab-active" : ""}
        onClick={() => onTabChange("private")}
      >
        <i className="fas fa-briefcase"></i> Private Jobs ({privateJobsCount})
      </button>
    </div>
  );

  // Job Modal Component
  const JobModal = ({ job, onClose }) => (
    <div className="job-modal-overlay" onClick={onClose}>
      <div className="job-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="modal-header">
          <div className="company-logo large">
            {job.company?.charAt(0).toUpperCase() || "?"}
          </div>
          <div>
            <h2>{job.title}</h2>
            <h3>{job.company}</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i>{" "}
              {job.location || "Location not specified"}
            </p>
          </div>
        </div>
        <div className="modal-details">
          <div className="detail-row">
            <span>
              <i className="fas fa-money-bill-wave"></i>{" "}
              <strong>Salary:</strong>{" "}
              {job.salary || "Not specified"}
            </span>
            <span>
              <i className="fas fa-clock"></i>{" "}
              <strong>Job Type:</strong>{" "}
              <span style={{ color: getTypeColor(job.type) }}>
                {job.type || "Not specified"}
              </span>
            </span>
            <span>
              <i className="fas fa-tag"></i> <strong>Category:</strong>{" "}
              {job.category || "Not specified"}
            </span>
          </div>
          <div className="detail-section">
            <h4>
              <i className="fas fa-align-left"></i> Job Description
            </h4>
            <p>{job.description}</p>
          </div>
          {job.requirements && (
            <div className="detail-section">
              <h4>
                <i className="fas fa-list-check"></i> Requirements
              </h4>
              <ul>
                {Array.isArray(job.requirements) ? (
                  job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))
                ) : (
                  <li>{job.requirements}</li>
                )}
              </ul>
            </div>
          )}
          <div className="modal-footer">
            <span className="posting-date">
              <i className="fas fa-calendar-alt"></i> Posted{" "}
              {formatPostedDate(job.createdAt)}
            </span>
            <a
              href={job.applyLink}
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
  );

  return (
    <div className="home-page">
      <HeroSection 
        jobsCount={jobs.length} 
        onSearch={handleSearch} 
      />
      
      <StatsSection 
        totalJobs={jobs.length}
        governmentJobs={governmentJobs.length}
        privateJobs={privateJobs.length}
      />

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

              <JobsTabs
                activeTab={activeTab}
                onTabChange={setActiveTab}
                allJobsCount={jobs.length}
                governmentJobsCount={governmentJobs.length}
                privateJobsCount={privateJobs.length}
              />

              <div className="jobs-container">
                {/* Government Jobs Section */}
                {(activeTab === "all" || activeTab === "govt") && (
                  <section className="job-section" aria-labelledby="govt-jobs-heading">
                    <div className="section-header">
                      <h2 id="govt-jobs-heading" className="section-title">
                        <i className="fas fa-landmark section-icon" aria-hidden="true"></i>
                        Government Jobs
                      </h2>
                      <p className="section-subtitle">
                        {governmentJobs.length} position{governmentJobs.length !== 1 ? 's' : ''} available
                      </p>
                    </div>

                    {renderJobSection(
                      "govt",
                      governmentJobs,
                      currentGovPage,
                      paginationData.totalGovernmentPages,
                      setCurrentGovPage,
                      "Loading government job listings..."
                    )}
                  </section>
                )}

                {/* Private Jobs Section */}
                {(activeTab === "all" || activeTab === "private") && (
                  <section className="job-section" aria-labelledby="private-jobs-heading">
                    <div className="section-header">
                      <h2 id="private-jobs-heading" className="section-title">
                        <i className="fas fa-briefcase section-icon" aria-hidden="true"></i>
                        Private Sector Jobs
                      </h2>
                      <p className="section-subtitle">
                        {privateJobs.length} position{privateJobs.length !== 1 ? 's' : ''} available
                      </p>
                    </div>

                    {renderJobSection(
                      "private",
                      privateJobs,
                      currentPrivatePage,
                      paginationData.totalPrivatePages,
                      setCurrentPrivatePage,
                      "Loading private job listings..."
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
            <JobModal 
              job={selectedJob} 
              onClose={closeJobModal} 
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
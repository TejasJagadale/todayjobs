import React, { useState } from "react";
import "./Jobs.css";
import AdSense from "../AdSense/AdSense";
import JobFilter from "../JobFilter/JobFilter";

const Jobs = () => {
  const [filters, setFilters] = useState({
    category: "all",
    location: "",
    type: "",
    salary: ""
  });

  const trendingJobs = [
    {
      category: "Technology",
      jobs: [
        {
          id: 1,
          title: "Software Engineer",
          company: "Google",
          type: "MNC",
          location: "Bangalore",
          salary: "₹15-30 LPA",
          experience: "2-5 years",
          posted: "2 days ago",
          skills: ["JavaScript", "React", "Node.js"],
          applylink: "https://www.google.com/about/careers/applications/jobs/results?utm_source=about&utm_medium=referral&utm_campaign=footer-link"
        },
        {
          id: 2,
          title: "Data Scientist",
          company: "Amazon",
          type: "MNC",
          location: "Hyderabad",
          salary: "₹18-35 LPA",
          experience: "3-6 years",
          posted: "1 day ago",
          skills: ["Python", "Machine Learning", "SQL"],
          applylink: "https://amazon.jobs/en/"
        },
        {
          id: 3,
          title: "Frontend Developer",
          company: "Microsoft",
          type: "MNC",
          location: "Pune",
          salary: "₹12-25 LPA",
          experience: "1-4 years",
          posted: "3 days ago",
          skills: ["React", "CSS", "TypeScript"],
          applylink: "https://careers.microsoft.com/v2/global/en/home.html"
        },
        {
          id: 4,
          title: "DevOps Engineer",
          company: "IBM",
          type: "MNC",
          location: "Chennai",
          salary: "₹14-28 LPA",
          experience: "2-5 years",
          posted: "5 days ago",
          skills: ["AWS", "Docker", "Kubernetes"],
          applylink: "https://www.ibm.com/in-en/careers"
        },
        {
          id: 5,
          title: "Full Stack Developer",
          company: "TCS",
          type: "Corporate",
          location: "Mumbai",
          salary: "₹10-20 LPA",
          experience: "2-4 years",
          posted: "1 week ago",
          skills: ["MERN Stack", "MongoDB", "Express"],
          applylink: "https://www.tcs.com/careers"
        }
      ]
    },
    {
      category: "Finance",
      jobs: [
        {
          id: 6,
          title: "Financial Analyst",
          company: "Goldman Sachs",
          type: "MNC",
          location: "Bangalore",
          salary: "₹16-32 LPA",
          experience: "3-7 years",
          posted: "4 days ago",
          skills: ["Financial Modeling", "Excel", "SQL"],
          applylink: "https://www.goldmansachs.com/worldwide/india/careers"
        },
        {
          id: 7,
          title: "Investment Banker",
          company: "JP Morgan",
          type: "MNC",
          location: "Mumbai",
          salary: "₹20-40 LPA",
          experience: "4-8 years",
          posted: "2 days ago",
          skills: ["Valuation", "M&A", "Financial Analysis"],
          applylink: "https://www.jpmorganchase.com/careers"
        },
        {
          id: 8,
          title: "Accountant",
          company: "Deloitte",
          type: "MNC",
          location: "Delhi",
          salary: "₹8-15 LPA",
          experience: "1-3 years",
          posted: "6 days ago",
          skills: ["Accounting", "Taxation", "Tally"],
          applylink: "https://www.deloitte.com/global/en/careers/job-search.html"
        },
        {
          id: 9,
          title: "Risk Analyst",
          company: "KPMG",
          type: "Corporate",
          location: "Hyderabad",
          salary: "₹10-18 LPA",
          experience: "2-4 years",
          posted: "3 days ago",
          skills: ["Risk Management", "Analytics", "Excel"],
          applylink: "https://kpmg.com/xx/en/careers.html"
        }
      ]
    },
    {
      category: "Healthcare",
      jobs: [
        {
          id: 10,
          title: "Medical Officer",
          company: "Apollo Hospitals",
          type: "Corporate",
          location: "Chennai",
          salary: "₹12-25 LPA",
          experience: "3-6 years",
          posted: "1 week ago",
          skills: ["MBBS", "Patient Care", "Medical Knowledge"],
          applylink: "https://www.apollohospitals.com/corporate/careers/"
        },
        {
          id: 11,
          title: "Biomedical Engineer",
          company: "Siemens Healthineers",
          type: "MNC",
          location: "Bangalore",
          salary: "₹15-30 LPA",
          experience: "2-5 years",
          posted: "2 days ago",
          skills: ["Biomedical Equipment", "Engineering", "Healthcare"],
          applylink: "https://www.siemens-healthineers.com/careers"
        },
        {
          id: 12,
          title: "Clinical Research Associate",
          company: "Novartis",
          type: "MNC",
          location: "Mumbai",
          salary: "₹10-20 LPA",
          experience: "1-4 years",
          posted: "5 days ago",
          skills: ["Clinical Trials", "Research", "Regulatory Affairs"],
          applylink: "https://www.novartis.com/careers"
        }
      ]
    },
    {
      category: "Manufacturing",
      jobs: [
        {
          id: 13,
          title: "Production Manager",
          company: "Tata Motors",
          type: "Corporate",
          location: "Pune",
          salary: "₹12-24 LPA",
          experience: "5-8 years",
          posted: "3 days ago",
          skills: ["Production Planning", "Team Management", "Lean Manufacturing"],
          applylink: "https://www.tatamotors.com/careers/"
        },
        {
          id: 14,
          title: "Quality Engineer",
          company: "Larsen & Toubro",
          type: "Corporate",
          location: "Chennai",
          salary: "₹9-18 LPA",
          experience: "2-4 years",
          posted: "1 week ago",
          skills: ["Quality Control", "Six Sigma", "Process Improvement"],
          applylink: "https://www.larsentoubro.com/corporate/careers/"
        },
        {
          id: 15,
          title: "Supply Chain Manager",
          company: "Hindustan Unilever",
          type: "MNC",
          location: "Mumbai",
          salary: "₹15-30 LPA",
          experience: "4-7 years",
          posted: "2 days ago",
          skills: ["Supply Chain", "Logistics", "Inventory Management"],
          applylink: "https://careers.unilever.com/india"
        }
      ]
    }
  ];

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredJobs = trendingJobs
    .filter(category => filters.category === "all" || category.category === filters.category)
    .map(category => ({
      ...category,
      jobs: category.jobs.filter(job => {
        return (
          (filters.location === "" || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
          (filters.type === "" || job.type === filters.type) &&
          (filters.salary === "" || parseInt(job.salary.split('-')[0].replace('₹', '').replace(' LPA', '')) >= parseInt(filters.salary))
        );
      })
    }))
    .filter(category => category.jobs.length > 0);

  return (
    <div className="jobs-page">
      <div className="jobs-hero">
        <div className="jobs-hero-content">
          <h1>Find Your Dream Job</h1>
          <p>Discover {trendingJobs.reduce((total, category) => total + category.jobs.length, 0)}+ opportunities from top companies</p>
        </div>
      </div>

      <div className="jobs-container">
        <div className="jobs-sidebar">
          <JobFilter filters={filters} onFilterChange={handleFilterChange} />
          
          <div className="ad-section">
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
        </div>

        <div className="jobs-main">
          <div className="jobs-header">
            <h2>Trending Jobs</h2>
            <p className="jobs-subtitle">
              Explore the latest job opportunities from top MNCs and Corporates
            </p>
            <div className="results-count">
              {filteredJobs.reduce((total, category) => total + category.jobs.length, 0)} jobs found
            </div>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="no-jobs">
              <i className="fas fa-search"></i>
              <h3>No jobs match your criteria</h3>
              <p>Try adjusting your filters to see more results</p>
            </div>
          ) : (
            filteredJobs.map((category, index) => (
              <div key={index} className="job-category">
                <h3 className="category-title">
                  <span className="category-icon">
                    {category.category === "Technology" && <i className="fas fa-laptop-code"></i>}
                    {category.category === "Finance" && <i className="fas fa-chart-line"></i>}
                    {category.category === "Healthcare" && <i className="fas fa-heartbeat"></i>}
                    {category.category === "Manufacturing" && <i className="fas fa-industry"></i>}
                  </span>
                  {category.category} Jobs
                </h3>
                <div className="job-grid">
                  {category.jobs.map((job) => (
                    <div key={job.id} className="job-card">
                      <div className="job-card-header">
                        <div className="company-logojobs">
                          {job.company.charAt(0)}
                        </div>
                        <div className="job-title-section">
                          <h4>{job.title}</h4>
                          <p className="company-name">{job.company}</p>
                        </div>
                        <span className="job-type">{job.type}</span>
                      </div>
                      
                      <div className="job-details">
                        <div className="detail-item">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>{job.location}</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-money-bill-wave"></i>
                          <span>{job.salary}</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-briefcase"></i>
                          <span>{job.experience}</span>
                        </div>
                        <div className="detail-item">
                          <i className="fas fa-clock"></i>
                          <span>{job.posted}</span>
                        </div>
                      </div>
                      
                      <div className="job-skills">
                        {job.skills.map((skill, idx) => (
                          <span key={idx} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                      
                      <div className="job-card-footer">
                        <a
                          href={job.applylink}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="apply-button"
                        >
                          <i className="fas fa-paper-plane"></i>
                          Apply Now
                        </a>
                        <button className="save-job">
                          <i className="far fa-bookmark"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="jobs-newsletter">
        <div className="newsletter-content">
          <h3>Get Job Alerts</h3>
          <p>Subscribe to receive the latest job opportunities directly in your inbox</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
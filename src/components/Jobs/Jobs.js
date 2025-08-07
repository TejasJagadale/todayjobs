import React from "react";
import "./Jobs.css";
import AdSense from "../AdSense/AdSense";

const Jobs = () => {
  const trendingJobs = [
    {
      category: "Technology",
      jobs: [
        {
          title: "Software Engineer",
          company: "Google",
          type: "MNC",
          location: "Bangalore",
          salary: "₹15-30 LPA",
          applylink:
            "https://www.google.com/about/careers/applications/jobs/results?utm_source=about&utm_medium=referral&utm_campaign=footer-link"
        },
        {
          title: "Data Scientist",
          company: "Amazon",
          type: "MNC",
          location: "Hyderabad",
          salary: "₹18-35 LPA",
          applylink: "https://amazon.jobs/en/"
        },
        {
          title: "Frontend Developer",
          company: "Microsoft",
          type: "MNC",
          location: "Pune",
          salary: "₹12-25 LPA",
          applylink: "https://careers.microsoft.com/v2/global/en/home.html"
        },
        {
          title: "DevOps Engineer",
          company: "IBM",
          type: "MNC",
          location: "Chennai",
          salary: "₹14-28 LPA",
          applylink: "https://www.ibm.com/in-en/careers"
        },
        {
          title: "Full Stack Developer",
          company: "TCS",
          type: "Corporate",
          location: "Mumbai",
          salary: "₹10-20 LPA",
          applylink: "https://www.tcs.com/careers"
        }
      ]
    },
    {
      category: "Finance",
      jobs: [
        {
          title: "Financial Analyst",
          company: "Goldman Sachs",
          type: "MNC",
          location: "Bangalore",
          salary: "₹16-32 LPA",
          applylink: "https://www.goldmansachs.com/worldwide/india/careers"
        },
        {
          title: "Investment Banker",
          company: "JP Morgan",
          type: "MNC",
          location: "Mumbai",
          salary: "₹20-40 LPA",
          applylink: "https://www.jpmorganchase.com/careers"
        },
        {
          title: "Accountant",
          company: "Deloitte",
          type: "MNC",
          location: "Delhi",
          salary: "₹8-15 LPA",
          applylink:
            "https://www.deloitte.com/global/en/careers/job-search.html"
        },
        {
          title: "Risk Analyst",
          company: "KPMG",
          type: "Corporate",
          location: "Hyderabad",
          salary: "₹10-18 LPA",
          applylink: "https://kpmg.com/xx/en/careers.html"
        }
      ]
    },
    {
      category: "Healthcare",
      jobs: [
        {
          title: "Medical Officer",
          company: "Apollo Hospitals",
          type: "Corporate",
          location: "Chennai",
          salary: "₹12-25 LPA",
          applylink: "https://www.apollohospitals.com/corporate/careers/"
        },
        {
          title: "Biomedical Engineer",
          company: "Siemens Healthineers",
          type: "MNC",
          location: "Bangalore",
          salary: "₹15-30 LPA",
          applylink: "https://www.siemens-healthineers.com/careers"
        },
        {
          title: "Clinical Research Associate",
          company: "Novartis",
          type: "MNC",
          location: "Mumbai",
          salary: "₹10-20 LPA",
          applylink: "https://www.novartis.com/careers"
        }
      ]
    },
    {
      category: "Manufacturing",
      jobs: [
        {
          title: "Production Manager",
          company: "Tata Motors",
          type: "Corporate",
          location: "Pune",
          salary: "₹12-24 LPA",
          applylink: "https://www.tatamotors.com/careers/"
        },
        {
          title: "Quality Engineer",
          company: "Larsen & Toubro",
          type: "Corporate",
          location: "Chennai",
          salary: "₹9-18 LPA",
          applylink: "https://www.larsentoubro.com/corporate/careers/"
        },
        {
          title: "Supply Chain Manager",
          company: "Hindustan Unilever",
          type: "MNC",
          location: "Mumbai",
          salary: "₹15-30 LPA",
          applylink: "https://careers.unilever.com/india"
        }
      ]
    }
  ];

  return (
    <div className="jobs-containerjobs">
      <h1>Trending Jobs</h1>
      <p className="subtitle">
        Explore the latest job opportunities from top MNCs and Corporates
      </p>

      {/* <AdSense slot="3581145953" format="auto" responsive="true" /> */}
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

      {trendingJobs.map((category, index) => (
        <div key={index} className="job-category">
          <h2>{category.category}</h2>
          <div className="job-list">
            {category.jobs.map((job, jobIndex) => (
              <div key={jobIndex} className="job-card">
                <h3>{job.title}</h3>
                <p>
                  <strong>Company:</strong> {job.company} ({job.type})
                </p>
                <p>
                  <strong>Location:</strong> {job.location}
                </p>
                <p>
                  <strong>Salary:</strong> {job.salary}
                </p>
                <a
                  href={job.applylink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="apply-btn"> Apply Now</button>
                </a>{" "}
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* <AdSense slot="3581145953" format="auto" responsive="true" /> */}
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
  );
};

export default Jobs;

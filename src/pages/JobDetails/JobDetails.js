import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import AdSense from '../../components/AdSense/AdSense';
import Footer from '../../components/Footer/Footer';
import jobsData from '../../data/jobs.json';
import './JobDetails.css';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const foundJob = jobsData.jobs.find(job => job.id === parseInt(id));
      setJob(foundJob);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return <div className="loading">Loading job details...</div>;
  }

  if (!job) {
    return <div className="not-found">Job not found</div>;
  }

  return (
    <div className="job-details-page">
      <Header />
      
      <main className="main-content">
        <div className="job-details-container">
          <div className="job-header">
            <h1 className="job-title">{job.title}</h1>
            <p className="company-name">{job.company}</p>
            <div className="job-meta">
              <span className="location">{job.location}</span>
              <span className="salary">{job.salary}</span>
              <span className="job-type">{job.type}</span>
              <span className="posted-date">Posted {job.posted}</span>
            </div>
            <div className="job-actions">
              <button className="save-job-btn">Save Job</button>
              <button className="apply-now-btn">Apply Now</button>
            </div>
          </div>
          
          <AdSense slot="1122334455" format="auto" responsive="true" />
          
          <div className="job-content">
            <div className="job-description">
              <h2>Job Description</h2>
              <p>{job.description}</p>
            </div>
            
            <div className="job-requirements">
              <h2>Requirements</h2>
              <ul>
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            
            <div className="how-to-apply">
              <h2>How to Apply</h2>
              <p>Click the "Apply Now" button above to submit your application for this position.</p>
            </div>
          </div>
          
          <AdSense slot="5566778899" format="auto" responsive="true" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobDetails;
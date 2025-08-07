import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, showJobTypeFilter }) => {
  const [searchData, setSearchData] = useState({
    keyword: '',
    location: '',
    jobType: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchData);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-group">
        <div className="search-field">
          <i className="fas fa-search"></i>
          <input
            type="text"
            name="keyword"
            placeholder="Job title, keywords, or company"
            value={searchData.keyword}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="search-field">
          <i className="fas fa-map-marker-alt"></i>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={searchData.location}
            onChange={handleInputChange}
          />
        </div>
        
        {showJobTypeFilter && (
          <div className="search-field">
            <i className="fas fa-briefcase"></i>
            <select
              name="jobType"
              value={searchData.jobType}
              onChange={handleInputChange}
            >
              <option value="">All Job Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        )}
        
        <button type="submit" className="search-button">
          Search Jobs
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
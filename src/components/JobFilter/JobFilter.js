// JobFilter.js
import React from "react";
import "./JobFilter.css";

const JobFilter = ({ filters, onFilterChange }) => {
  const categories = ["all", "Technology", "Finance", "Healthcare", "Manufacturing"];
  const locations = ["", "Bangalore", "Mumbai", "Delhi", "Hyderabad", "Chennai", "Pune"];
  const types = ["", "MNC", "Corporate"];
  const salaries = ["", "10", "15", "20", "25"];

  const handleChange = (field, value) => {
    onFilterChange({
      ...filters,
      [field]: value
    });
  };

  return (
    <div className="job-filter">
      <h3>Filter Jobs</h3>
      
      <div className="filter-group">
        <label>Category</label>
        <select 
          value={filters.category} 
          onChange={(e) => handleChange("category", e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat === "all" ? "All Categories" : cat}
            </option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <label>Location</label>
        <select 
          value={filters.location} 
          onChange={(e) => handleChange("location", e.target.value)}
        >
          {locations.map(loc => (
            <option key={loc} value={loc}>
              {loc === "" ? "All Locations" : loc}
            </option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <label>Job Type</label>
        <select 
          value={filters.type} 
          onChange={(e) => handleChange("type", e.target.value)}
        >
          {types.map(type => (
            <option key={type} value={type}>
              {type === "" ? "All Types" : type}
            </option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <label>Minimum Salary (LPA)</label>
        <select 
          value={filters.salary} 
          onChange={(e) => handleChange("salary", e.target.value)}
        >
          {salaries.map(salary => (
            <option key={salary} value={salary}>
              {salary === "" ? "Any Salary" : `₹${salary}+ LPA`}
            </option>
          ))}
        </select>
      </div>
      
      <button 
        className="reset-filters"
        onClick={() => onFilterChange({
          category: "all",
          location: "",
          type: "",
          salary: ""
        })}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default JobFilter;
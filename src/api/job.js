import axios from 'axios';

const API_URL = 'http://localhost:3100/api/jobs';

export const fetchJobs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

export const fetchGovernmentLinks = async () => {
  try {
    const response = await axios.get('http://localhost:3100/api/links');
    return response.data;
  } catch (error) {
    console.error('Error fetching government links:', error);
    throw error;
  }
};
import axios from 'axios';

const API_URL = 'https://todayjobsbackend-ermy.onrender.com/api/jobs';

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
    const response = await axios.get('https://todayjobsbackend-ermy.onrender.com/api/links');
    return response.data;
  } catch (error) {
    console.error('Error fetching government links:', error);
    throw error;
  }
};
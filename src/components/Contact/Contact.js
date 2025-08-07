import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="subtitle">We're here to help you with your career journey</p>
      
      <div className="contact-content">
        <div className="contact-methods">
          <div className="contact-card">
            <h3>Phone Support</h3>
            <p>+91 8508508590</p>
            <p>Monday to Friday, 9:00 AM to 6:00 PM IST</p>
          </div>
          
          <div className="contact-card">
            <h3>Email Us</h3>
            <p>todaytalks.office@gmail.com</p>
          </div>

          </div>
          <div className="contact-methods">
          <div className="contact-card">
            <h3>Social Media</h3>
            <div className="social-links">
              <a href="https://facebook.com/TodayJobs" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com/TodayJobs" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com/company/TodayJobs" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://instagram.com/TodayJobs" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
          
          <div className="contact-card">
            <h3>Mobile App</h3>
            <p>Download our app for better experience</p>
            <div className="app-links">
              <a href="https://play.google.com/store/apps/details?id=com.TodayJobs" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" className="app-badge" />
              </a>
            </div>
          </div>
          
        </div>
        
        {/* <div className="contact-form">
          <h2>Send us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="What's this about?" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
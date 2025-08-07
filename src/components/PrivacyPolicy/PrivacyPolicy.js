import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Helmet>
        <title>Privacy Policy | Your Job Portal</title>
      </Helmet>

      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>1. Information We Collect</h2>
      <p>We collect information when you:</p>
      <ul>
        <li>Search for jobs on our platform</li>
        <li>Submit applications through our site</li>
        <li>Subscribe to our newsletter</li>
      </ul>

      <h2>2. How We Use Information</h2>
      <p>We use your data to:</p>
      <ul>
        <li>Personalize job recommendations</li>
        <li>Improve our services</li>
        <li>Communicate with you about jobs</li>
      </ul>

      <h2>3. Advertising and Google AdSense</h2>
      <p>
        We use Google AdSense to display ads on our site. Google uses cookies to serve ads based on:
      </p>
      <ul>
        <li>Your prior visits to our website</li>
        <li>Your interests as inferred from browsing</li>
      </ul>
      <p>
        Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.
      </p>
      <p>
        You may opt out of personalized advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Google's Ad Settings</a>.
      </p>

      <h2>4. Third-Party Services</h2>
      <p>We use:</p>
      <ul>
        <li><strong>Google Analytics</strong>: To analyze traffic</li>
        <li><strong>Google AdSense</strong>: For advertising</li>
        <li><strong>Job posting APIs</strong>: To fetch job listings</li>
      </ul>

      <h2>5. Data Security</h2>
      <p>We implement security measures including:</p>
      <ul>
        <li>HTTPS encryption</li>
        <li>Regular security audits</li>
        <li>Limited access to personal data</li>
      </ul>

      <h2>6. Your Rights</h2>
      <p>You can:</p>
      <ul>
        <li>Request access to your data</li>
        <li>Ask for corrections</li>
        <li>Request deletion of your account</li>
      </ul>

      <h2>7. Contact Us</h2>
      <p>
        For questions about this policy, contact us at:<br />
        <a href="mailto:todaytalks.office@gmail.com">todaytalks.office@gmail.com</a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
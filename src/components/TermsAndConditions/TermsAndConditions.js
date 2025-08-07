import React from 'react';
import './LegalPages.css';

const TermsAndConditions = () => {
  return (
    <div className="legal-container">
      <h1>Terms and Conditions</h1>
      <p className="last-updated">Last Updated: June 1, 2023</p>
      
      <div className="legal-content">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the TodayJobs platform, you agree to be bound by these Terms and Conditions.</p>
        </section>

        <section>
          <h2>2. User Accounts</h2>
          <p>To access certain features, you must create an account. You are responsible for:</p>
          <ul>
            <li>Maintaining account confidentiality</li>
            <li>Providing accurate information</li>
            <li>All activities under your account</li>
          </ul>
        </section>

        <section>
          <h2>3. Job Applications</h2>
          <p>When applying for jobs through TodayJobs:</p>
          <ul>
            <li>You certify that all information provided is truthful</li>
            <li>We are not responsible for hiring decisions</li>
            <li>Employers may conduct background checks</li>
          </ul>
        </section>

        <section>
          <h2>4. Prohibited Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the service for illegal purposes</li>
            <li>Post false or misleading information</li>
            <li>Harass other users</li>
            <li>Reverse engineer our platform</li>
            <li>Use bots or automated systems</li>
          </ul>
        </section>

        <section>
          <h2>5. Intellectual Property</h2>
          <p>All content on TodayJobs is our property or licensed to us. You may not reproduce, distribute, or create derivative works without permission.</p>
        </section>

        <section>
          <h2>6. Disclaimer of Warranties</h2>
          <p>TodayJobs is provided "as is." We make no warranties about:</p>
          <ul>
            <li>Accuracy of job listings</li>
            <li>Availability of the service</li>
            <li>Results from using our service</li>
          </ul>
        </section>

        <section>
          <h2>7. Limitation of Liability</h2>
          <p>We shall not be liable for:</p>
          <ul>
            <li>Any employment decisions</li>
            <li>Unauthorized access to your data</li>
            <li>Interruptions in service</li>
            <li>Indirect or consequential damages</li>
          </ul>
        </section>

        <section>
          <h2>8. Termination</h2>
          <p>We may terminate or suspend your account for violations of these terms.</p>
        </section>

        <section>
          <h2>9. Governing Law</h2>
          <p>These terms are governed by the laws of India/TamilNadu.</p>
        </section>

        <section>
          <h2>10. Changes to Terms</h2>
          <p>We may modify these terms at any time. Continued use constitutes acceptance.</p>
        </section>

        <section>
          <h2>11. Contact Information</h2>
          <p>For questions about these terms:</p>
          <p>Email: todaytalks.office@gmail.com</p>
          <p>Phone: +1 (555) 987-6543</p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
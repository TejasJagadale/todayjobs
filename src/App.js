import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Jobs from "./components/Jobs/Jobs";
import Companies from "./components/Companies/Companies";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(
    localStorage.getItem('cookiesAccepted') !== 'true'
  );

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner" style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '15px',
      background: '#333',
      color: 'white',
      textAlign: 'center',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px'
    }}>
      <p>We use cookies for ads and analytics. <a href="/privacy-policy" style={{ color: '#4CAF50' }}>Learn more</a></p>
      <button 
        onClick={acceptCookies}
        style={{
          padding: '8px 20px',
          background: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Accept
      </button>
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
        </Routes>
      </div>
      <Footer />
      <CookieBanner />
    </Router>
  );
}

export default App;
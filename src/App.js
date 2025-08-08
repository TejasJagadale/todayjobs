import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/jobs"
          element={
            <PageTransition>
              <Jobs />
            </PageTransition>
          }
        />
        <Route
          path="/companies"
          element={
            <PageTransition>
              <Companies />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <PageTransition>
              <PrivacyPolicy />
            </PageTransition>
          }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <PageTransition>
              <TermsAndConditions />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
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
    <motion.div 
      className="cookie-banner"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      style={{
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
      }}
    >
      <p>We use cookies for ads and analytics. <a href="/privacy-policy" style={{ color: '#4CAF50' }}>Learn more</a></p>
      <motion.button 
        onClick={acceptCookies}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
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
      </motion.button>
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <div className="App">
        <AnimatedRoutes />
      </div>
      <Footer />
      <CookieBanner />
    </Router>
  );
}

export default App;
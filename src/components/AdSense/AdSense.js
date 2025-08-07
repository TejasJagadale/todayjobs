import React, { useEffect } from 'react';
import './AdSense.css';

const AdSense = ({ slot, format = "auto", responsive = true }) => {
  useEffect(() => {
    // Only attempt to load ads if this ins element doesn't already have ads
    if (!window.adsbygoogle || !window.adsbygoogle.loaded) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, [slot]); // Add slot to dependency array to reload if slot changes

  return (
    <div className="adsense-container">
      <ins 
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1915488793968759" 
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      ></ins>
    </div>
  );
};

export default AdSense;
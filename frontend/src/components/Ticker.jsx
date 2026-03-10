import React from 'react';
import './Ticker.css';

const items = [
  "SYSTEM ONLINE // MONITORING ACTIVE",
  "NOMINATIM GEOCODING // ACTIVE",
  "RSS SCRAPER // RUNNING",
  "DEDUPLICATION ENGINE // ACTIVE",
  "CRON SCHEDULE // 30MIN INTERVAL",
  "MONGODB // CONNECTED",
  "THREAT LEVEL // ELEVATED",
  "INDIA // INCIDENT MONITOR v0.1.0",
];

const Ticker = () => {
  return (
    <div className="ticker">
      <div className="ticker-label">⬤ LIVE</div>
      <div className="ticker-track">
        <div className="ticker-scroll">
          {[...items, ...items].map((item, i) => (
            <div className="ticker-item" key={i}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
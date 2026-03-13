import './FilterPanel.css';
import { useState, useEffect } from 'react';
import { getNews } from '../services/api';

const typeColors = {
  Rape: '#ff3d57',
  Murder: '#ff6b35',
  Riot: '#ffc107',
  Protest: '#a78bfa',
  Rally: '#00ff88',
};

const filters = [
  { label: 'All Incidents', type: 'all', color: '#8ab8c2' },
  { label: 'Sexual Assault', type: 'Rape', color: typeColors.Rape },
  { label: 'Murder', type: 'Murder', color: typeColors.Murder },
  { label: 'Riot', type: 'Riot', color: typeColors.Riot },
  { label: 'Protest', type: 'Protest', color: typeColors.Protest },
  { label: 'Rally', type: 'Rally', color: typeColors.Rally },
];

const FilterPanel = ({ activeFilter, onFilterChange }) => {
  const [mockArticles, setMockArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const newsData = await getNews();
      setMockArticles(newsData);
    };
    fetchNews();
  }, []);
  const counts = { all: mockArticles.length, Rape: 0, Murder: 0, Riot: 0, Protest: 0, Rally: 0 };
  mockArticles.forEach(a => { if (counts[a.incidentType] !== undefined) counts[a.incidentType]++; });

  let filtered;
  if (activeFilter === 'all') {
    filtered = mockArticles;
  } else {
    filtered = mockArticles.filter(a => a.incidentType === activeFilter);
  }

  let countDisplay;
  if (activeFilter === 'all') {
    countDisplay = 'ALL';
  } else {
    countDisplay = activeFilter.toUpperCase();
  }

  return (
    <div className="filter-panel">
      <div className="panel-header">
        <span>FILTER // TYPE</span>
        <span className="count">{countDisplay}</span>
      </div>

      <div className="filters">
        <div className="filter-label">Incident Classification</div>
        {filters.map(f => {
          let activeClass = '';
          if (activeFilter === f.type) {
            activeClass = 'active';
          }
          
          return (
            <button
              key={f.type}
              className={`filter-btn ${activeClass}`}
              onClick={() => onFilterChange(f.type)}
            >
              <span className="dot" style={{ background: f.color }}></span>
              {f.label}
              <span className="num">{counts[f.type] ?? counts.all}</span>
            </button>
          );
        })}
      </div>

      <div className="panel-header">
        <span>LIVE FEED</span>
      </div>

      <div className="feed">
        {filtered.map((a, i) => {
          let borderColor = typeColors[a.incidentType] || '#8ab8c2';
          let textColor = typeColors[a.incidentType] || '#8ab8c2';
          
          return (
            <div key={i} className="feed-item" style={{ borderLeft: `2px solid ${borderColor}` }}>
              <div className="feed-type" style={{ color: textColor }}>{a.incidentType}</div>
              <div className="feed-title">{a.title}</div>
              <div className="feed-meta">
                <span>{a.source}</span>
                <span>{new Date(a.pubDate).toLocaleDateString()}</span>
                {a.location?.city && <span>{a.location.city}</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterPanel;
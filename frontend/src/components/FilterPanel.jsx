import './FilterPanel.css';

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

const FilterPanel = ({ activeFilter, onFilterChange, articles = [] }) => {
  const counts = { all: articles.length, Rape: 0, Murder: 0, Riot: 0, Protest: 0, Rally: 0 };
  articles.forEach(a => { if (counts[a.incidentType] !== undefined) counts[a.incidentType]++; });

  const filtered = activeFilter === 'all' ? articles : articles.filter(a => a.incidentType === activeFilter);
  const countDisplay = activeFilter === 'all' ? 'ALL' : activeFilter.toUpperCase();

  const handleFeedItemClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

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
        {filtered.map((a, i) => (
          <div 
            key={i} 
            className="feed-item" 
            style={{ borderLeft: `2px solid ${typeColors[a.incidentType] || '#8ab8c2'}` }}
            onClick={() => handleFeedItemClick(a.url)}
            role="button"
            tabIndex={0}
          >
            <div className="feed-type" style={{ color: typeColors[a.incidentType] || '#8ab8c2' }}>{a.incidentType}</div>
            <div className="feed-title">{a.title}</div>
            <div className="feed-meta">
              <span>{a.source}</span>
              <span>{new Date(a.pubDate).toLocaleDateString()}</span>
              {a.location?.city && <span>{a.location.city}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
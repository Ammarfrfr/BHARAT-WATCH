import { useState } from 'react';
import Header from './components/Header.jsx';
import FilterPanel from './components/FilterPanel.jsx';
import Map from './components/Map.jsx';
import StatsPanel from './components/StatsPanel.jsx';
import Ticker from "./components/Ticker.jsx"
import './App.css';

const App = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Header isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <div className="main">
        <FilterPanel activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <Map activeFilter={activeFilter} isDark={isDark} />
        <StatsPanel />
      </div>
      <Ticker />
    </div>
  );
};

export default App;
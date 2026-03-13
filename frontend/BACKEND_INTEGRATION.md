# Backend Integration - Frontend Connected ✅

The navbar and all components are now **FULLY CONNECTED** to the backend. Here's what changed:

---

## 🔄 What Changed

### 1. **App.jsx** — Now fetches articles from backend
```jsx
// Added axios import
import axios from 'axios';

// Backend URL
const BACKEND_URL = 'http://localhost:8000/api/v1/news';

// Fetch articles on mount
useEffect(() => {
  const fetchNews = async () => {
    const response = await axios.get(BACKEND_URL);
    const data = response.data.data || [];
    setArticles(data);
    
    // Update last sync time
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
    setLastSync(timeString);
  };

  fetchNews();
  // Fetch every 30 seconds for live updates
  const interval = setInterval(fetchNews, 30000);
  return () => clearInterval(interval);
}, []);
```

**What this does:**
- Fetches news articles from backend on app load
- Refetches every 30 seconds for live updates
- Updates `lastSync` timestamp
- Passes articles down to all child components

---

### 2. **Header.jsx** — Now shows REAL data
```jsx
// Before (hardcoded)
<div className="meta-item">INCIDENTS: <strong>142</strong></div>
<div className="meta-item">LAST SYNC: <strong>12:34:56</strong></div>

// After (from props)
<div className="meta-item">INCIDENTS: <strong>{totalIncidents}</strong></div>
<div className="meta-item">LAST SYNC: <strong>{lastSync}</strong></div>
```

**What it gets:**
- `totalIncidents` — total number of articles from backend
- `lastSync` — timestamp of last fetch (updates every 30 seconds)

---

### 3. **FilterPanel.jsx** — Uses articles from App
**Before:** Imported and fetched news separately inside the component  
**After:** Receives articles as a prop from App

```jsx
// Before
const FilterPanel = ({ activeFilter, onFilterChange }) => {
  const [mockArticles, setMockArticles] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const newsData = await getNews();
      setMockArticles(newsData);
    };
    fetchNews();
  }, []);

// After
const FilterPanel = ({ activeFilter, onFilterChange, articles = [] }) => {
  // No fetching, just use articles prop
```

**Why this is better:**
- Single source of truth (App fetches once, passes to all)
- No duplicate API calls
- All components stay in sync

---

### 4. **Map.jsx** — Uses articles from App
**Before:** Fetched articles separately  
**After:** Receives articles as a prop

```jsx
// Before
const Map = ({ activeFilter }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const newsData = await getNews();
      setArticles(newsData);
    };
    fetchNews();
  }, []);

// After
const Map = ({ activeFilter, articles = [] }) => {
  // No fetching, just use articles prop
```

**Also simplified:**
- Changed all `let` with if/else to ternary operators
- `filtered`, `tileUrl`, `popupClass`, `mapWrapperClass`, `buttonText` all use ternaries

---

### 5. **StatsPanel.jsx** — Uses articles from App
**Before:** Fetched articles separately  
**After:** Receives articles as a prop

```jsx
// Before
const StatsPanel = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const newsData = await getNews();
      setArticles(newsData);
    };
    fetchNews();
  }, []);

// After
const StatsPanel = ({ articles = [] }) => {
  // No fetching, just use articles prop
```

---

## 🚀 How to Test

### Start Backend
```bash
cd Backend
npm install    # if not done
npm run dev    # starts on http://localhost:8000
```

### Start Frontend
```bash
cd frontend
npm install    # if not done
npm run dev    # starts on http://localhost:5173
```

### What to expect
1. App loads with loading screen for 3 seconds
2. Header shows **REAL incident count** from database
3. Header shows **REAL last sync time** (updates every 30s)
4. FilterPanel shows incidents from database
5. Map markers show real incident locations
6. StatsPanel shows real statistics

---

## 📊 Data Flow

```
Backend Database
       ↓
/api/v1/news endpoint
       ↓
App.jsx (fetches & stores in state)
       ↓
       ├──► Header (totalIncidents, lastSync)
       ├──► FilterPanel (articles)
       ├──► Map (articles)
       └──► StatsPanel (articles)
```

---

## ⚙️ Configuration

**Backend URL:** `http://localhost:8000/api/v1/news`

If your backend runs on a different port or URL, change this in `App.jsx`:

```jsx
const BACKEND_URL = 'http://localhost:8000/api/v1/news';
// Change 8000 to your backend port
```

---

## 🔄 Auto-Refresh

The app refetches articles **every 30 seconds** automatically:

```jsx
const interval = setInterval(fetchNews, 30000); // 30000ms = 30 seconds
```

To change refresh interval, modify this number (in milliseconds):
- 5 seconds = 5000
- 10 seconds = 10000
- 60 seconds = 60000

---

## ✅ Checklist

- [x] App fetches from backend on load
- [x] Header shows real incident count
- [x] Header shows real last sync time
- [x] FilterPanel shows real articles
- [x] Map shows real incident locations
- [x] StatsPanel calculates from real data
- [x] Auto-refresh every 30 seconds
- [x] All components connected to single data source

---

## 🐛 Troubleshooting

**Q: Header still shows hardcoded numbers**
A: Make sure backend is running on port 8000 and the fetch didn't error. Check browser console for errors.

**Q: Map doesn't show markers**
A: Backend articles need `location.lat` and `location.lng` fields. Check your database.

**Q: Nothing loads**
A: Check CORS is enabled in backend (`cors({origin: "*"})` in app.js).

**Q: Data doesn't update**
A: The app fetches every 30 seconds. Wait a bit or restart the frontend.

---

## 📝 Next Steps

You can now:
1. Add real incident data to MongoDB
2. Modify the API endpoint if needed
3. Add more statistics to Header
4. Add filtering/searching on the backend side

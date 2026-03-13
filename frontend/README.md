# India Monitor - Frontend

A real-time incident monitoring dashboard for India, built with React and Vite. The application displays various incidents (riots, protests, murders, etc.) on an interactive map with filtering, statistics, and live feed capabilities.

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                         App.jsx                              │
│  (Root component - manages theme & filter state)            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                    Header.jsx                        │   │
│  │  Logo | Live Status | Incident Count | Theme Toggle │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌───────────────────────────────────────────────────────┐ │
│  │                     main (flex)                        │ │
│  │ ┌──────────┐  ┌──────────────┐  ┌──────────────────┐ │ │
│  │ │FilterPanel│  │   Map.jsx    │  │  StatsPanel.jsx  │ │ │
│  │ │          │  │              │  │                  │ │ │
│  │ │- Filters │  │- Leaflet Map │  │- Total Incidents │ │ │
│  │ │- Live    │  │- Markers     │  │- Geo-Located     │ │ │
│  │ │  Feed    │  │- Popups      │  │- Threat Index    │ │ │
│  │ │          │  │              │  │- Distribution    │ │ │
│  │ │          │  │              │  │- Hot Zones       │ │ │
│  │ └──────────┘  └──────────────┘  └──────────────────┘ │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                   Ticker.jsx                         │   │
│  │        Scrolling system status messages              │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── main.jsx           # Entry point - renders App to DOM
│   ├── App.jsx            # Root component with state management
│   ├── App.css            # Global app styles
│   ├── index.css          # Base CSS styles
│   └── components/
│       ├── Header.jsx     # Top navigation bar with theme toggle
│       ├── Header.css
│       ├── FilterPanel.jsx # Left sidebar with filters & live feed
│       ├── FilterPanel.css
│       ├── Map.jsx        # Interactive Leaflet map with markers
│       ├── Map.css
│       ├── StatsPanel.jsx # Right sidebar with analytics
│       ├── StatsPanel.css
│       ├── Ticker.jsx     # Bottom scrolling status bar
│       ├── Ticker.css
│       ├── Loading.jsx    # Initial loading screen
│       └── Loading.css
├── public/                # Static assets
├── index.html             # HTML template
├── package.json           # Dependencies & scripts
├── vite.config.js         # Vite configuration
└── eslint.config.js       # ESLint configuration
```

## 🔄 Application Workflow

### 1. **Initialization Flow**

```
main.jsx
    │
    └──► App.jsx (with Loading state)
            │
            ├── isLoading = true ──► Loading.jsx (3 second splash)
            │
            └── isLoading = false ──► Render full dashboard
```

### 2. **State Management**

The app uses React's `useState` for local state management:

| State | Location | Purpose |
|-------|----------|---------|
| `isLoading` | App.jsx | Controls loading screen display |
| `isDark` | App.jsx | Theme toggle (dark/light mode) |
| `activeFilter` | App.jsx | Current incident type filter |
| `mapLightMode` | Map.jsx | Map tile theme toggle |

### 3. **Data Flow**

```
App.jsx
    │
    ├── isDark ────────────────► Header.jsx (theme toggle button)
    │
    ├── activeFilter ──────────► FilterPanel.jsx (filter buttons)
    │                           │
    │                           └── onFilterChange ──► Updates App state
    │
    └── activeFilter ──────────► Map.jsx (filters map markers)
```

### 4. **Component Responsibilities**

| Component | Responsibility |
|-----------|----------------|
| **App.jsx** | State container, theme class, layout orchestration |
| **Header.jsx** | Brand identity, live status indicators, theme toggle |
| **FilterPanel.jsx** | Incident type filters, live feed list, filter counts |
| **Map.jsx** | Interactive India map, incident markers, popups, map theme |
| **StatsPanel.jsx** | Analytics dashboard, distribution charts, hot zones |
| **Ticker.jsx** | System status ticker, scrolling messages |
| **Loading.jsx** | Initial loading animation and splash screen |

## 🎨 Incident Types & Color Coding

| Type | Color | Hex Code |
|------|-------|----------|
| Sexual Assault (Rape) | Red | `#ff3d57` |
| Murder | Orange | `#ff6b35` |
| Riot | Yellow | `#ffc107` |
| Protest | Purple | `#a78bfa` |
| Rally | Green | `#00ff88` |
| Other | Cyan | `#8ab8c2` |

## 🗺️ Map Features

- **Library**: React-Leaflet with Leaflet.js
- **Tile Provider**: CartoDB (dark/light themes)
- **Bounds**: Locked to India region
- **Markers**: Color-coded CircleMarkers with popups
- **Zoom**: Min 4, Max 12

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.2.0 | UI framework |
| react-dom | ^19.2.0 | React DOM renderer |
| react-leaflet | ^5.0.0 | React wrapper for Leaflet |
| leaflet | ^1.9.4 | Interactive maps |
| axios | ^1.13.6 | HTTP client (for API calls) |
| tailwindcss | ^4.2.1 | Utility-first CSS |
| vite | ^7.3.1 | Build tool & dev server |

## 🔌 Backend Integration

Currently using mock data. To connect to the backend:

1. The backend runs on a separate server (see `Backend/` folder)
2. Use `axios` to fetch from `/api/news` endpoints
3. Replace `mockArticles` arrays with API responses

## 🎯 Future Improvements

- [ ] Connect to live backend API
- [ ] Add real-time WebSocket updates
- [ ] Implement date range filtering
- [ ] Add search functionality
- [ ] User authentication
- [ ] Incident reporting feature

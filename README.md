# भारत-WATCH

<div align="center">

![Bharat Watch](https://img.shields.io/badge/Bharat-Watch-FF9933?style=for-the-badge&logo=india&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

**A full-stack web application for monitoring India — news, data, and real-time insights in one place.**

[🌐 Live Demo](https://bharat-watch.vercel.app) · [🐛 Report Bug](https://github.com/Abdullah-ext1/BHARAT-WATCH/issues) · [✨ Request Feature](https://github.com/Abdullah-ext1/BHARAT-WATCH/issues)

</div>

---



---

## 🔭 About the Project

**Bharat Watch** (India Monitor) is a full-stack web application that serves as a centralized dashboard for tracking information relevant to India. Whether it's news, data metrics, or real-time updates, Bharat Watch brings it all together in a clean, accessible interface.

The project is structured as a decoupled architecture with a dedicated REST API backend and a responsive frontend — making it easy to extend, maintain, and scale independently.

---

## ✨ Features

- 📰 **News Aggregation** — Curated India-focused news feed
- 📊 **Data Dashboard** — Key metrics and indicators at a glance
- 🔄 **Real-time Updates** — Live data fetched from the backend API
- 📱 **Responsive Design** — Fully mobile-friendly layout
- ⚡ **Fast Performance** — Optimized frontend with minimal overhead
- 🔗 **RESTful API** — Clean, documented backend endpoints

---

## 🛠️ Tech Stack

This project is built on the **MERN Stack** — a powerful JavaScript-based full-stack framework:

```
M — MongoDB      → NoSQL database for storing application data
E — Express.js   → Backend web framework for Node.js
R — React.js     → Frontend UI library
N — Node.js      → JavaScript server runtime
```

### Frontend
| Technology | Purpose |
|---|---|
| React.js | Component-based UI library |
| HTML5 | Markup & structure |
| CSS3 | Styling & responsive layout |
| JavaScript (ES6+) | Interactivity & API calls |

### Backend
| Technology | Purpose |
|---|---|
| Node.js | Server runtime |
| Express.js | REST API framework |
| MongoDB | NoSQL database |
| Mongoose | MongoDB object modeling |

### Infrastructure
| Technology | Purpose |
|---|---|
| Vercel | Frontend hosting & deployment |
| Render | Backend hosting & deployment |
| GitHub | Version control |

---

## 📁 Project Structure

```
BHARAT-WATCH/
│
├── Backend/                    # Node.js Express API
│   ├── routes/                 # API route definitions
│   ├── controllers/            # Request handlers & logic
│   ├── models/                 # Data models / schemas
│   ├── middleware/             # Auth, error handling, etc.
│   ├── config/                 # Configuration files
│   ├── .env.example            # Example environment variables
│   ├── package.json
│   └── server.js               # Entry point
│
├── frontend/                   # Client-side application
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Page-level views
│   │   ├── styles/             # CSS stylesheets
│   │   └── utils/              # Helper functions, API calls
│   ├── index.html
│   └── package.json
│
└── README.md
```

> **Note:** The structure above reflects common conventions for this type of project. Actual file names may vary — refer to the source for exact paths.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v16.0.0 or higher
- [npm](https://www.npmjs.com/) v7+ or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/try/download/community) (local) or a [MongoDB Atlas](https://www.mongodb.com/atlas) account
- [Git](https://git-scm.com/)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Abdullah-ext1/BHARAT-WATCH.git
cd BHARAT-WATCH
```

**2. Install Backend dependencies**

```bash
cd Backend
npm install
```

**3. Install Frontend dependencies**

```bash
cd ../frontend
npm install
```

### Environment Variables

Create a `.env` file inside the `Backend/` directory based on `.env.example`:

```env
# Server
PORT=5000
NODE_ENV=development

# MongoDB
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/bharatwatch

# API Keys
NEWS_API_KEY=your_news_api_key_here

# CORS
ALLOWED_ORIGIN=http://localhost:3000
```

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

### Running Locally

**Start the Backend server:**

```bash
cd Backend
npm run dev       # Development mode with auto-reload
# or
npm start         # Production mode
```

The API will be available at `http://localhost:5000`.

**Start the Frontend:**

```bash
cd frontend
npm run dev       # Development server
# or
npm start
```

The frontend will be available at `http://localhost:3000`.

Open your browser and navigate to `http://localhost:3000`.

---

## 🌐 Deployment

### Frontend — Vercel

The frontend is deployed via [Vercel](https://vercel.com). To deploy your own fork:

1. Fork this repository
2. Go to [vercel.com](https://vercel.com) and import the forked repo
3. Set the **Root Directory** to `frontend`
4. Add any required environment variables in the Vercel dashboard
5. Deploy!

### Backend — Render

The backend is deployed on [Render](https://render.com). To deploy your own instance:

1. Fork this repository
2. Go to [render.com](https://render.com) and click **New → Web Service**
3. Connect your GitHub account and select the forked repo
4. Configure the service:
   - **Root Directory:** `Backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Add environment variables under **Environment → Add Environment Variable**:
   - `MONGO_URI` — your MongoDB Atlas connection string
   - `NEWS_API_KEY` — your news API key
   - `ALLOWED_ORIGIN` — your Vercel frontend URL
   - `NODE_ENV` — `production`
6. Click **Create Web Service** — Render will build and deploy automatically

> Once deployed, copy your Render service URL and set it as the API base URL in your frontend config before deploying to Vercel.

---

## 📡 API Reference

Base URL: `http://localhost:5000/api` (development)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Health check |
| `GET` | `/news` | Fetch latest India news |
| `GET` | `/news/:category` | News by category |
| `GET` | `/data` | Dashboard metrics |

> This is a provisional reference based on typical project conventions. Check the `Backend/routes/` directory for the full, definitive list of endpoints.

---


## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn and build. Any contributions you make are **greatly appreciated**!

**Steps to contribute:**

1. Fork the project
2. Create your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```bash
   git commit -m "feat: add AmazingFeature"
   ```
4. Push to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

**Commit message convention:**

Use [Conventional Commits](https://www.conventionalcommits.org/) format:

| Prefix | When to use |
|--------|-------------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation changes |
| `style:` | Formatting, no logic change |
| `refactor:` | Code restructure, no feature/fix |
| `chore:` | Build process, tooling |

---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

## 📬 Contact

**Abdullah** — [@Abdullah-ext1](https://github.com/Abdullah-ext1)
**Ammar**  — [@Ammarfrfr](https://github.com/Ammarfrfr)

Project Link: [https://github.com/Abdullah-ext1/BHARAT-WATCH](https://github.com/Abdullah-ext1/BHARAT-WATCH)

Live App: [https://bharat-watch.vercel.app](https://bharat-watch.vercel.app)

---

<div align="center">
  Made with ❤️ for Bharat
</div>

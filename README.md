# Yassine DBAICHI - Portfolio Presentations

This repository contains two major project presentations from my academic work at École Hassania des Travaux Publics (EHTP) during the 2024/2025 academic year.

## 📂 Projects

### 1. Book Marketplace Platform with Route Optimization
**Department:** MIG - GIS Specialization
**Supervisor:** Prof. Hatim LECHGAR

An integrated e-commerce platform combining book marketplace functionality with automatic delivery route optimization using TSP algorithm.

**Key Features:**
- React 19 web application with responsive design
- Flutter mobile app for sellers
- TSP algorithm for optimal delivery route planning
- Integration with OpenRouteService, Google Maps, and Waze
- Node.js + Express backend with MongoDB
- Real-time route planning and turn-by-turn navigation

**Tech Stack:** React, Flutter, Node.js, MongoDB, OpenRouteService API

### 2. Infrastructure as Code Support in Graal CI
**Organization:** Oracle Labs - GraalVM RISQ Team
**Type:** Internship Project

A production-ready Infrastructure as Code framework for Oracle Labs' GraalVM team, reducing deployment time by 90%.

**Key Features:**
- JSON-driven infrastructure configuration
- Python framework with Pulumi SDK
- 7 OCI resource types supported
- GitLab CI/CD pipeline integration
- Factory pattern + dependency resolution
- Automatic resource provisioning

**Tech Stack:** Python, Pulumi, Oracle Cloud Infrastructure, GitLab CI/CD

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB connection (for Oracle presentation notes feature)

### Installation

1. Install dependencies:
```bash
npm install
```

2. (Optional) Set MongoDB URI as environment variable:
```bash
export MONGODB_URI="your-mongodb-connection-string"
```

3. Start the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

### Access Presentations

Once the server is running, open your browser:

- **Portfolio Home:** http://localhost:3000/
- **Book Marketplace:** http://localhost:3000/presentations/book-marketplace/presentation.html
- **Oracle IaC:** http://localhost:3000/presentations/oracle-iac/presentation.html
- **Oracle Presenter View:** http://localhost:3000/presentations/oracle-iac/presenter.html

## 🎮 Presentation Controls

### Keyboard Shortcuts
- **Arrow Right / Space:** Next slide
- **Arrow Left:** Previous slide
- **Home:** Go to first slide
- **End:** Go to last slide
- **P:** Open presenter view (Oracle presentation only)

### Navigation Bar
- Click section names to jump directly to that section
- Visual indicator shows current section

### Oracle Presentation - Presenter Mode
The Oracle IaC presentation includes an advanced presenter mode with:
- Dual-screen support (projector + presenter views)
- Current slide + next slide preview
- Real-time sync using BroadcastChannel API
- Editable speaker notes (persisted in MongoDB)
- Timer for presentation duration

## 📁 Project Structure

```
dbaichi/
├── index.html                          # Portfolio landing page
├── server.js                          # Express server
├── package.json                       # Node.js dependencies
├── README.md                          # This file
├── presentations/
│   ├── book-marketplace/
│   │   ├── presentation.html          # Main presentation
│   │   └── images/                    # Presentation images
│   └── oracle-iac/
│       ├── presentation.html          # Main presentation
│       ├── presenter.html             # Presenter view
│       ├── server.js                  # Original server (reference)
│       └── images/                    # Presentation images
└── [other project folders...]
```

## 🔧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 3000 |
| `MONGODB_URI` | MongoDB connection string | Embedded connection (not recommended for production) |

## 📝 Notes

### Security Notice
For production deployment, always use environment variables for sensitive data like MongoDB credentials. Never commit secrets to version control.

### Browser Compatibility
Presentations are optimized for modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### BroadcastChannel API
The Oracle presentation's dual-screen sync requires BroadcastChannel API support (available in all modern browsers).

## 📊 Presentation Statistics

| Presentation | Slides | Duration | Features |
|--------------|--------|----------|----------|
| Book Marketplace | 30 | ~20 min | Section navigation, image slides |
| Oracle IaC | 58 | ~30 min | Presenter mode, notes, dual-screen |

## 📞 Contact

**Yassine DBAICHI**
École Hassania des Travaux Publics
Department of MIG - GIS Specialization
Academic Year 2024-2025

## 📄 License

MIT License - See individual projects for specific licensing information.

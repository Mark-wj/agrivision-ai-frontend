# 🌱 AgroVision AI - Frontend

> Modern web interface for AI-powered plant disease detection

[![React](https://img.shields.io/badge/React-18-61DAFB.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 🎯 Overview

Beautiful, responsive web application for AgroVision AI that enables farmers to detect plant diseases instantly by uploading leaf images. Built with React and Tailwind CSS for a smooth, intuitive user experience.

**Key Features:**
- 📸 Drag-and-drop image upload
- ⚡ Real-time disease detection
- 💊 Actionable treatment recommendations
- 📱 Mobile-responsive design
- 🎨 Modern, farmer-friendly UI
- 🌍 Works on any device

**Supporting UN SDG 2: Zero Hunger** 🌾

---

## 🖼️ Screenshots

### Desktop View
```
┌─────────────────────────────────────────────────────────┐
│  🌱 AgroVision AI                    SDG 2: Zero Hunger │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌─────────────────┐    ┌──────────────────────────┐  │
│  │  Upload Image   │    │   Results & Diagnosis     │  │
│  │                 │    │                           │  │
│  │  📷 Drag & Drop │    │  ✅ Tomato___healthy     │  │
│  │  or Click       │    │  Confidence: 98.5%        │  │
│  │                 │    │                           │  │
│  │  [Analyze]      │    │  📋 Recommendations:      │  │
│  │                 │    │  • Continue watering      │  │
│  └─────────────────┘    │  • Monitor regularly      │  │
│                          └──────────────────────────┘  │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Mobile View
Fully responsive design optimized for smartphones used by farmers in the field.

---

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- Backend API running (see [backend repo](https://github.com/YOUR_USERNAME/agrovision-backend))

### Installation

```bash
# Clone repository
git clone https://github.com/Mark-wj/agrivision-ai-frontend.git
cd agrovision-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```



## 🛠️ Tech Stack

### Core
- **React 18** - UI library
- **Vite 5** - Build tool (⚡ super fast!)
- **Tailwind CSS 3** - Utility-first CSS

### Libraries
- **Lucide React** - Beautiful icons
- **Fetch API** - HTTP requests

### Development
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes
- **ESLint** - Code linting

---

## 📁 Project Structure

```
agrovision-frontend/
├── public/              # Static assets
│   └── vite.svg
├── src/
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles (Tailwind)
├── .env.example         # Environment variables template
├── .env.production      # Production environment (not in git)
├── .gitignore
├── index.html           # HTML template
├── package.json         # Dependencies
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── README.md
```


## 🎨 Features

### Image Upload
- Drag-and-drop support
- Click to browse files
- File type validation (JPG, PNG)
- Image preview before analysis

### Disease Detection
- Real-time API communication
- Loading indicators
- Error handling
- Confidence scores

### Results Display
- Color-coded health status (🟢 Healthy / 🔴 Disease)
- Disease name and description
- Confidence percentage with visual bar
- Severity level indicator
- Alternative possible diagnoses

### Treatment Recommendations
- Step-by-step action items
- Numbered list for clarity
- Disease-specific advice
- Agricultural best practices

### User Experience
- Responsive design (mobile, tablet, desktop)
- Intuitive interface
- Clear visual hierarchy
- Accessible color schemes
- Fast load times

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Code Style
- Use functional components
- Follow React Hooks best practices
- Use Tailwind utility classes
- Keep components small and focused
- Add comments for complex logic

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file

---

## 🙏 Acknowledgments

- **React** - UI library by Meta
- **Vite** - Build tool by Evan You
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide** - Beautiful icon library

---

## 📞 Contact & Support

- **Issues:** [GitHub Issues](https://github.com/YOUR_USERNAME/agrovision-frontend/issues)
- **Backend Repo:** [agrovision-backend](https://github.com/YOUR_USERNAME/agrovision-backend)
- **Email:** your.email@agrovision.com
- **Live Demo:** [https://agrovision.vercel.app](https://agrovision.vercel.app)

---

## 🗺️ Roadmap

- [ ] Add user authentication
- [ ] History of past analyses
- [ ] Multi-language support
- [ ] Offline mode (PWA)
- [ ] Camera capture on mobile
- [ ] Batch upload multiple images
- [ ] Export results as PDF
- [ ] Dark mode support

---

## 📈 Stats

![GitHub Stars](https://img.shields.io/github/stars/YOUR_USERNAME/agrovision-frontend?style=social)
![GitHub Forks](https://img.shields.io/github/forks/YOUR_USERNAME/agrovision-frontend?style=social)
![Vercel](https://img.shields.io/badge/deployed-vercel-black)

---

**Built with ❤️ for sustainable agriculture**

Supporting **UN SDG 2: Zero Hunger** 🌾
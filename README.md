# Farah Family Solutions - Internal Dashboard

A modern, responsive internal dashboard for team collaboration, client management, and organizational resources.

---

## 🚀 Quick Start

### Local Development

**Option 1: Using live-server (Recommended)**
```bash
cd /Users/meltilib/Downloads/farahfamily-html
live-server
```
- Auto-refreshes on file changes
- Opens browser automatically
- Default: http://127.0.0.1:8080

**Option 2: Using Python**
```bash
cd /Users/meltilib/Downloads/farahfamily-html
python3 -m http.server 8000
```
- Visit: http://localhost:8000
- Manual refresh required

---

## 📁 Project Structure

```
farahfamily-html/
├── index.html              # Main dashboard page
├── pages/                  # Additional pages (future)
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   └── main.css        # Custom styles
│   ├── js/
│   │   ├── jquery.min.js
│   │   ├── bootstrap.bundle.min.js
│   │   └── app.js          # Main application logic
│   ├── images/             # Team photos, gallery images
│   ├── fonts/              # FontAwesome, Keenicons
│   └── plugins/            # Third-party plugins
├── .gitignore
├── CLAUDE.md               # AI assistant instructions
└── README.md               # This file
```

---

## 🎨 Design System

**Color Palette:**
- Primary: `#AE00EB` (Purple)
- Secondary: `#684DF4` (Blue-purple)
- Background: `#FAE9FF` (Light lavender)
- Text: `#646464` (Gray)

**Typography:**
- Font: Space Grotesk (Google Fonts)
- Weights: 300-700

**UI Style:**
- 30px border-radius on all cards/buttons
- Purple gradient backgrounds
- Glassmorphism effects on dropdowns

---

## 🔧 Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, animations
- **Bootstrap 4** - Grid system & components
- **jQuery** - DOM manipulation
- **MasterSlider** - Hero carousel
- **Fancybox** - Lightbox functionality
- **Custom Scrollbar** - Styled scrollbars

---

## 📝 Development Notes

### Current Status
- ✅ Responsive dashboard layout
- ✅ Team collaboration widget
- ✅ Announcements system
- ✅ Media gallery with hover effects
- ⚠️ All navigation links are placeholders (`#`)
- ⚠️ Static data (no backend)

### Next Steps
1. Create additional pages in `/pages` folder
2. Add backend integration (optional)
3. Replace placeholder links
4. Add real-time notifications

---

## 🐛 Known Issues

- Missing `video.mp4` file (video section commented out)
- Spelling errors in announcements (placeholders)
- Weather widget shows static data (34°C)
- Notifications are hardcoded

---

## 📄 License

© 2025 Farah Family Solutions - All Rights Reserved

---

## 💡 Tips

- Edit `assets/css/main.css` for styling changes
- Edit `assets/js/app.js` for JavaScript functionality
- Add new pages in `/pages` folder
- Team member photos go in `assets/images/`

For AI assistance, see `CLAUDE.md` for project-specific instructions.

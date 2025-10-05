# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML website for **Farah Family Solutions**, a therapy and mental health services organization. The site serves as an internal dashboard/portal for team collaboration, client management, and organizational resources.

## Running the Project

**Option 1: Using live-server (Recommended)**
```bash
live-server
```
- Auto-refreshes on file changes
- Opens browser automatically at http://127.0.0.1:8080

**Option 2: Using Python**
```bash
python3 -m http.server 8000
```
- Visit http://localhost:8000
- Manual refresh required

## Technology Stack

- **Frontend**: Static HTML with Bootstrap 4
- **CSS**: Bootstrap 4 + Custom CSS (main.css with CSS custom properties)
- **JavaScript**: jQuery 3.x + modular app.js
- **Key Plugins**:
  - MasterSlider (hero carousel)
  - Fancybox (lightbox/video player)
  - Custom Scrollbar (jquery.mCustomScrollbar)
  - Owl Carousel (included but not in use)
  - Font Awesome + Keenicons (icon systems)

## File Structure

```
farahfamily-html/
├── index.html                  # Main dashboard page (primary entry point)
├── assets/
│   ├── index.html             # Duplicate (legacy)
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   ├── main.css           # ALL custom styles and CSS variables
│   │   └── animate.min.css
│   ├── js/
│   │   ├── jquery.min.js
│   │   ├── bootstrap.bundle.min.js
│   │   └── app.js             # Main application logic (extracted from inline)
│   ├── images/                # Team photos, gallery, logo
│   ├── fonts/                 # FontAwesome, Keenicons
│   └── plugins/               # Third-party libraries
│       ├── masterslider/
│       ├── fancybox/
│       ├── customscrollbar/
│       └── owlcarousel/       # Not currently used
└── README.md / CLAUDE.md      # Documentation
```

## Design System

### Color Palette (defined in main.css)
- **Primary**: `#AE00EB` (purple)
- **Secondary**: `#684DF4` (blue-purple)
- **Background**: `#FAE9FF` (light purple)
- **Background Gray**: `#f2f2f2`
- **Text**: `#646464` (gray)

### Typography
- **Font Family**: Space Grotesk (Google Fonts)
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold)
- **Base Size**: 16px
- **Line Height**: 1.7

## Key Components

### Layout Components
1. **Header** (`.header`): Fixed top navigation with search, notifications, weather widget, and user profile
2. **Sidebar** (`.aside`): Left vertical navigation menu with app sections
3. **Main Content** (`.mainContent`): Main content area with dashboard widgets
4. **Footer**: Simple copyright footer

### Content Sections
- **Hero Slider**: MasterSlider with mental health content slides
- **Team Collaboration**: Scrollable list of team member activities
- **Announcements**: System and organizational announcements
- **Media Gallery**: Grid of therapy-related media albums

### Interactive Elements
- Search toggle (opens search form overlay)
- Dropdown menus (Bootstrap-based)
- Custom scrollbars for content areas
- Back-to-top button
- Loading screen animation

## Architecture & Code Organization

### JavaScript Structure (assets/js/app.js)
All application logic is in `app.js`, which initializes:
- **Loading screen**: Fades out on window load
- **Search toggle**: Opens/closes search overlay
- **MasterSlider**: Hero carousel with 3 mental health content slides
- **Custom scrollbar**: Applied to `.scrollable` containers
- **Back-to-top**: Smooth scroll button that appears after 200px scroll

### CSS Architecture
- **CSS Variables**: All design tokens in `:root` (colors, fonts, weights)
- **Custom Styles**: 100% in `main.css` (no inline styles)
- **Bootstrap Grid**: Base layout and responsive system
- **Border Radius**: Consistent 30px on cards/buttons

### HTML Structure
- **Single-page dashboard**: All content on index.html
- **Fixed header**: Navigation, search, notifications, user dropdown
- **Sidebar**: Vertical navigation with icon menu items
- **Main content sections**:
  1. Hero slider + about + quick links (3-column)
  2. Team collaboration + Announcements (2-column cards)
  3. Media gallery (5-item grid)

### Important Notes
- **No backend**: All data is static HTML
- **Placeholder links**: All navigation uses `href="#"`
- **Two index.html files**: Root file is primary, `assets/index.html` is duplicate
- **Missing assets**: `video.mp4` referenced but not present (commented out)
- **Static data**: Weather (34°C), notifications (hardcoded)
- **Referenced but missing**: `corres-form-view.html` page

## Common Development Tasks

### Styling Changes
- **Modify colors**: Edit CSS variables in `assets/css/main.css` `:root` selector
- **Add/modify styles**: Edit `assets/css/main.css` (do NOT add inline styles)
- **Font weights**: Use CSS variables (`var(--fw-light)` through `var(--fw-bold)`)

### Content Updates
- **Edit dashboard content**: Modify root `index.html`
- **Add team members**:
  1. Add photo to `assets/images/`
  2. Add card in Team Collaboration section (lines 329-431)
- **Update slider content**: Modify `.ms-slide` divs (lines 236-278)
- **Add gallery items**: Add `.gallery-item` in Media Gallery section (lines 514-545)

### JavaScript Changes
- **Add/modify interactions**: Edit `assets/js/app.js` (NOT inline in HTML)
- **Plugin configuration**: MasterSlider config is in `app.js` (lines 29-39)

### Adding New Pages
1. Create HTML file at root level
2. Copy header/footer/sidebar structure from `index.html`
3. Update navigation links in header (lines 34-59) and sidebar (lines 166-224)
4. Maintain consistent asset paths (`assets/css/...`, `assets/js/...`)

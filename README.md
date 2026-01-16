# 🍎 macOS Portfolio

A stunning, interactive macOS-themed web application built with Next.js, React, and TypeScript. This project recreates the look and feel of macOS, complete with working applications, animations, and system features.

## Overview

This is a fully functional portfolio website styled as a macOS operating system. It features authentic macOS UI components, a boot sequence, login screen, desktop environment, and multiple built-in applications. Perfect for developers and designers looking to showcase their work in a creative and memorable way.

## ✨ Features

### System Features
- **Boot Sequence**: Animated startup screen that transitions to login
- **Login Screen**: Secure authentication flow with username/password
- **Desktop Environment**: Fully interactive macOS-style desktop
- **Sleep Mode**: Dimmed screen state with wake capability
- **Shutdown/Restart**: System state management with proper transitions
- **Control Center**: Settings for brightness, dark mode, and system controls
- **Spotlight Search**: Quick search functionality for apps and content

### Built-in Applications
- **Finder**: File browser and system navigation
- **Safari**: Web browser simulation
- **Mail**: Email client interface
- **Music**: Audio player with album art
- **Photos**: Image gallery application
- **Notes**: Text editor and note-taking app
- **Terminal**: Command-line interface
- **VS Code**: Code editor integration
- **FaceTime**: Video calling interface
- **GitHub**: GitHub profile viewer
- **Spotify**: Music streaming integration
- **Weather**: Weather information display
- **Settings**: System preferences and configuration
- **YouTube**: Video player
- **Snake**: Interactive game
- **Website**: Custom website showcase

### UI/UX
- **Dark Mode**: Toggle between light and dark themes
- **Brightness Control**: Adjustable screen brightness
- **Dock**: Application launcher with favorites
- **Menubar**: System menu with status indicators
- **Window Management**: Draggable, resizable windows
- **Liquid Glass Design**: Modern frosted glass effect components
- **Smooth Animations**: Polished transitions throughout the interface

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.5+**: React framework for production
- **React 18+**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible UI component library
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel/slider component

### Styling & Animation
- **Liquid Glass React**: Frosted glass effect
- **Use Gesture**: Gesture recognition and animations
- **PostCSS**: CSS processing
- **Autoprefixer**: Browser compatibility

### Forms & Utilities
- **React Hook Form**: Efficient form management
- **Date-fns**: Date utilities
- **Clsx/Class Variance Authority**: Dynamic class management
- **Sonner**: Toast notifications

### Deployment
- **Docker**: Containerization
- **Google Cloud Run**: Serverless deployment
- **Node.js 20 Alpine**: Lightweight runtime

## 📋 Prerequisites

- Node.js 18+ (v20 recommended)
- npm or pnpm package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
# Run development server
npm run dev
# or
pnpm dev
```

The application will be available at `http://localhost:3000`

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 📦 Project Structure

```
.
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Main page with system states
│   └── globals.css              # Global styles
├── components/
│   ├── boot-screen.tsx          # macOS boot animation
│   ├── login-screen.tsx         # Login interface
│   ├── desktop.tsx              # Main desktop environment
│   ├── dock.tsx                 # Application dock
│   ├── menubar.tsx              # Top menu bar
│   ├── control-center.tsx       # System settings
│   ├── spotlight.tsx            # Search functionality
│   ├── wallpaper.tsx            # Desktop wallpaper
│   ├── window.tsx               # Window component
│   ├── sleep-screen.tsx         # Sleep mode
│   ├── shutdown-screen.tsx      # Shutdown screen
│   ├── apps/                    # Built-in applications
│   │   ├── finder.tsx
│   │   ├── safari.tsx
│   │   ├── terminal.tsx
│   │   ├── vscode.tsx
│   │   ├── music.tsx
│   │   ├── notes.tsx
│   │   └── ...
│   └── ui/                      # Reusable UI components
│       ├── button.tsx
│       ├── dialog.tsx
│       ├── card.tsx
│       └── ... (Radix UI primitives)
├── lib/
│   ├── utils.ts                 # Utility functions
│   └── liquid-glass-config.ts  # Styling configuration
├── public/                       # Static assets
├── styles/                       # Additional stylesheets
├── types.ts                      # TypeScript type definitions
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.mjs              # Next.js configuration
├── postcss.config.mjs           # PostCSS configuration
├── Dockerfile                    # Docker configuration
└── package.json                 # Dependencies and scripts
```

## 🎨 Customization

### Changing Wallpaper
Edit the `wallpaper.tsx` component to modify the background image or gradient.

### Adding New Applications
1. Create a new component in `components/apps/`
2. Add the app configuration to the application registry
3. Update the dock configuration to include the new app

### Theme Customization
- Modify `tailwind.config.ts` for color scheme changes
- Edit `globals.css` for font and spacing adjustments
- Adjust `liquid-glass-config.ts` for glass effect styling

### Dark Mode
The application supports system-wide dark mode toggle accessible through the Control Center.

## 🐳 Docker Deployment

### Build Docker Image
```bash
docker build -t nextjs-app .
```

### Run Docker Container
```bash
docker run -p 8080:3000 nextjs-app
```

## ☁️ Google Cloud Run Deployment

### Prerequisites
- Google Cloud SDK installed
- Active Google Cloud project

### Deployment Steps

```bash
# Set project ID
export PROJECT_ID=your-project-id

# Build and push image
gcloud builds submit --tag gcr.io/$PROJECT_ID/nextjs-app

# Deploy to Cloud Run
gcloud run deploy nextjs-app \
  --image gcr.io/$PROJECT_ID/nextjs-app \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080
```

## 🎯 Key Features Explained

### System States
The application manages several system states:
- `booting`: Initial startup animation
- `login`: Login screen
- `desktop`: Main operating system interface
- `sleeping`: Power-saving mode
- `shutdown`: System shutdown sequence
- `restarting`: System restart cycle

### Window Management
- Draggable windows with smooth animations
- Resizable window boundaries
- Z-index management for window stacking
- Window minimize/maximize/close functionality

### Local Storage
The application persists user preferences:
- Dark mode preference
- Screen brightness level
- Window positions and sizes
- Application state

## 🔧 Configuration Files

### `tailwind.config.ts`
Tailwind CSS configuration with custom colors and extensions.

### `next.config.mjs`
Next.js configuration with experimental features and optimizations enabled.

### `tsconfig.json`
TypeScript compiler options and path aliases.

### `components.json`
Shadcn/ui component configuration.

## 📱 Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers with modern CSS support

## 🚀 Performance Optimizations

- **Image Optimization**: Next.js image optimization
- **Code Splitting**: Automatic code splitting per route
- **Parallel Builds**: Webpack build worker enabled
- **Analytics**: Integrated Vercel Analytics

## 📝 License

See LICENSE file for details.

## 👨‍💻 Author

Created as an interactive portfolio project showcasing modern web development skills and UI/UX design.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and enhancement requests.

## 📧 Contact

For inquiries and feedback, please reach out through the portfolio website.

---

**Enjoy exploring the macOS-themed portfolio!** 🎉

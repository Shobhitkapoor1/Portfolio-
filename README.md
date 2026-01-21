# macOS Portfolio OS

A macOS-inspired operating system built entirely in the browser to serve as an interactive developer portfolio.

This project is not a website.  
It is a system.

---

## Overview

This portfolio recreates a full desktop operating system experience, including:

- Boot screen  
- Login screen  
- Desktop environment  
- Window manager  
- Dock and menubar  
- Spotlight search  
- Control Center  
- Launchpad  
- Sleep and shutdown states  

Each application inside the OS represents a different aspect of the developer’s profile, skills, and projects.

Instead of scrolling a resume, users operate the portfolio.

---

## Vibe Coding with Gemini & Antigravity

This project was built using a development approach I call **vibe coding** — designing software through system-level intuition, rapid iteration, and architectural flow rather than rigid step-by-step construction.

### Gemini as a System Designer

Gemini was used as a thinking partner rather than a code generator.

With Gemini in Google AI Studio, I explored:

- Operating system interaction patterns  
- Window management logic models  
- UI state orchestration strategies  
- Component responsibility boundaries  
- Performance and edge-case prediction  

Instead of asking for finished code, I asked Gemini to reason about architecture, behavior, and trade-offs. This allowed me to design the system first and implement with clarity.

Gemini helped transform ideas into structured system concepts before they became components.

### Antigravity as a Development Accelerator

Antigravity acted as the execution layer of vibe coding.

It enabled:

- Rapid scaffolding of complex component structures  
- System-wide refactoring without breaking behavior  
- Parallel experimentation with UI and logic  
- Fast iteration across interconnected files  

Antigravity allowed me to maintain creative momentum while preserving architectural discipline.

### The Vibe Coding Loop

The workflow followed a continuous loop:

1. Conceptualize system behavior with Gemini  
2. Validate architecture and edge cases  
3. Implement and refine with Antigravity  
4. Observe system behavior  
5. Iterate again  

This loop allowed the OS to evolve organically as a cohesive system rather than a collection of isolated components.

---

## Features

### Window Management System

- Drag windows by title bar  
- Resize from eight directions  
- Minimize, maximize, and close controls  
- Active window focus handling  
- Z-index management  
- Restore previous size and position after maximize  

### Desktop Architecture

The desktop acts as the system kernel and manages:

- Open windows registry  
- Active window state  
- Overlay visibility  
- Theme state  
- Screen brightness  
- Persistent preferences  

### UI Components

- Wallpaper with dynamic theme switching  
- Dock with magnification effect and running app indicators  
- Menubar with real-time clock, battery, WiFi, and system controls  
- Control Center with system toggles  
- Spotlight with keyboard navigation  
- Launchpad grid  

### Applications

Located in the `apps` directory:

- Finder  
- Notes (Markdown support)  
- Terminal  
- Safari  
- GitHub  
- VSCode  
- Mail  
- FaceTime  
- YouTube  
- Spotify  
- Photos  
- Weather (Canvas animations)  
- Snake game  

Each application demonstrates different UI, state, and interaction patterns.

---

## Tech Stack

- Next.js  
- React  
- TypeScript  
- Tailwind CSS  
- Radix UI / shadcn UI  
- Google Cloud Run  

---

## Architecture

Application Root
└── Desktop.tsx (System Controller)
├── Wallpaper
├── Menubar
│ └── Control Center
│ └── Spotlight
├── Dock
├── Window Manager
│ └── App Components
├── Launchpad
└── System Overlays

Windows are dynamically rendered using a component mapping system, allowing applications to be injected without modifying the window manager.

---

## State Management

Desktop maintains centralized control over:

- openWindows  
- activeWindowId  
- overlay visibility states  
- theme mode  
- brightness level  

All child components receive controlled callbacks for predictable behavior.

---

## Performance Optimizations

- Conditional rendering for overlays and windows  
- useRef for drag and resize operations  
- Debounced visual transitions  
- Minimal re-render strategy  
- No heavy animation libraries  

---

## Responsive Behavior

- Desktop layout for large screens  
- Touch-optimized window behavior for mobile  
- Dock overflow menu on small screens  
- Simplified interactions without breaking OS logic  

---

## Data Persistence

Uses localStorage for:

- WiFi state  
- Theme preference  

---

## Development Philosophy

This project follows three rules:

1. No uncontrolled state  
2. No visual shortcuts  
3. No UI without architectural justification  

The goal is system realism, not visual imitation.

---

## Deployment

The project is deployed using Google Cloud Run.

To deploy:

1. Build Docker image  
2. Push to Google Container Registry  
3. Deploy to Cloud Run with port 8080 exposed  

---

## Purpose

This project serves as an interactive developer portfolio that demonstrates:

- System-level thinking  
- UI architecture  
- State management discipline  
- Component design  
- Performance awareness  

---

## License

This project is for portfolio and educational purposes.

---

If you reached this far, you didn’t read a README.

You explored a system.

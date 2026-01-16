"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { MoreHorizontal } from "lucide-react"
import type { AppWindow } from "@/types"

const dockApps = [
  { id: "finder", title: "Finder", icon: "/finder.png", component: "Finder"},
  { id: "launchpad", title: "Launchpad", icon: "/launchpad.png", component: "Launchpad", isSystem: true },
  { id: "safari", title: "Safari", icon: "/safari.png", component: "Safari" },
  { id: "mail", title: "Mail", icon: "/mail.png", component: "Mail" },
  { id: "vscode", title: "VS Code", icon: "/vscode.png", component: "VSCode" },
  { id: "notes", title: "Notes", icon: "/notes.png", component: "Notes" },
  { id: "photos", title: "Photos", icon: "/photos.png", component: "Photos" },
  { id: "facetime", title: "FaceTime", icon: "/facetime.png", component: "FaceTime" },
  { id: "terminal", title: "Terminal", icon: "/terminal.png", component: "Terminal" },
  { id: "github", title: "GitHub", icon: "/github.png", component: "GitHub" },
  { id: "spotify", title: "Spotify", icon: "/spotify.png", component: "Spotify" },
]

interface DockProps {
  onAppClick: (app: AppWindow) => void
  onLaunchpadClick: () => void
  activeAppIds: string[]
  isDarkMode: boolean
}

export default function Dock({
  onAppClick,
  onLaunchpadClick,
  activeAppIds,
  isDarkMode,
}: DockProps) {
  const [mouseX, setMouseX] = useState<number | null>(null)
  const dockRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  useEffect(() => {
    if (!showMobileMenu) return
    const handler = (e: MouseEvent) => {
      if (dockRef.current && !dockRef.current.contains(e.target as Node)) {
        setShowMobileMenu(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [showMobileMenu])

  const handleAppClick = (app: (typeof dockApps)[0]) => {
    if (app.id === "launchpad") {
      onLaunchpadClick()
      return
    }

    onAppClick({
      id: app.id,
      title: app.title,
      component: app.component,
      position: { x: Math.random() * 200 + 100, y: Math.random() * 100 + 50 },
      size: { width: 800, height: 600 },
    })

    if (showMobileMenu) setShowMobileMenu(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dockRef.current || isMobile) return
    const rect = dockRef.current.getBoundingClientRect()
    setMouseX(e.clientX - rect.left)
  }

  const getIconScale = (index: number, count: number) => {
    if (mouseX === null || isMobile) return 1
    const dockWidth = dockRef.current?.offsetWidth || 0
    const iconWidth = dockWidth / count
    const center = iconWidth * (index + 0.5)
    const dist = Math.abs(mouseX - center)
    const maxDist = iconWidth * 2.5
    if (dist > maxDist) return 1
    return 1 + (2 - 1) * Math.pow(1 - dist / maxDist, 2)
  }

  const visibleApps = isMobile ? dockApps.slice(0, 4) : dockApps
  const hiddenApps = isMobile ? dockApps.slice(4) : []

  return (
    <div ref={dockRef} className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50">

      {/* Mobile menu */}
      {isMobile && showMobileMenu && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[280px]
          bg-white/20 backdrop-blur-2xl
          border border-gray-400/40 shadow-xl
          rounded-xl p-4 mb-2">

          <div className="grid grid-cols-4 gap-4">
            {hiddenApps.map(app => (
              <div key={app.id} onClick={() => handleAppClick(app)}
                className="flex flex-col items-center cursor-pointer">
                <img src={app.icon} className="w-12 h-12" />
                <span className="text-xs text-white mt-1">{app.title}</span>
                {activeAppIds.includes(app.id) && (
                  <div className="w-1 h-1 bg-white rounded-full mt-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Dock */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMouseX(null)}
        className={`px-3 py-2 rounded-2xl
        bg-white/20 backdrop-blur-2xl
        border border-gray-400/40 shadow-xl
        flex items-end ${isMobile ? "h-20" : "h-16"}`}
      >
        {visibleApps.map((app, i) => {
          const scale = getIconScale(i, visibleApps.length)

          return (
            <div
              key={app.id}
              onClick={() => handleAppClick(app)}
              className={`flex flex-col items-center justify-end h-full ${isMobile ? "px-3" : "px-2"}`}
              style={{
                transform: isMobile ? "none" : `translateY(${(scale - 1) * -8}px)`,
                zIndex: scale > 1 ? 10 : 1,
              }}
            >
              <div
                style={{
                  transform: isMobile ? "none" : `scale(${scale})`,
                  transformOrigin: "bottom center",
                }}
              >
                <img
                  src={app.icon}
                  className={`object-contain ${isMobile ? "w-14 h-14" : "w-12 h-12"}`}
                />

                {!isMobile && scale > 1.5 && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1
                    bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {app.title}
                  </div>
                )}

                {activeAppIds.includes(app.id) && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2
                    w-1 h-1 bg-white rounded-full" />
                )}
              </div>
            </div>
          )
        })}

        {isMobile && (
          <div onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="flex flex-col items-center justify-end h-full px-3 cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
              <MoreHorizontal className="w-8 h-8 text-white" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

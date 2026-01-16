"use client"

import { ChevronLeft, ChevronRight, Grid3x3, List, Share2, Tag, Search } from "lucide-react"

interface FinderProps {
  isDarkMode?: boolean
}

const applications = [
  { name: "Safari", icon: "/safari.png" },
  { name: "Mail", icon: "/mail.png" },
  { name: "Terminal", icon: "/terminal.png" },
  { name: "VS Code", icon: "/vscode.png" },
  { name: "Notes", icon: "/notes.png" },
  { name: "FaceTime", icon: "/facetime.png" },
  { name: "GitHub", icon: "/github.png" },
  { name: "YouTube", icon: "/youtube.png" },
  { name: "Spotify", icon: "/spotify.png" },
  { name: "Weather", icon: "/weather.png" },
  { name: "Snake", icon: "/snake.png" },
  
]

export default function Finder({ isDarkMode = true }: FinderProps) {
  return (
    <div className={`h-full flex ${isDarkMode ? "bg-[#1e1e1e] text-white" : "bg-white text-gray-900"}`}>
      
      {/* Sidebar with macOS Glass Effect */}
      <div className="w-48 relative border-r border-white/5 text-[13px]">
        {/* Glass background layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/60 via-gray-800/50 to-gray-900/60 backdrop-blur-2xl backdrop-saturate-150"></div>
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}>
        </div>
        
        {/* Inner highlight on right edge */}
        <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Favourites */}
          <div className="px-3 pt-4 pb-2">
            <p className="text-xs font-semibold mb-2 opacity-50">Favourites</p>
            <SidebarItem icon="" name="Applications" color="text-blue-400" active />
            <SidebarItem icon="" name="Desktop" color="text-blue-400" />
            <SidebarItem icon="" name="Documents" color="text-blue-400" />
            <SidebarItem icon="" name="Downloads" color="text-blue-400" />
            <SidebarItem icon="" name="Movies" color="text-red-400" />
            <SidebarItem icon="" name="Music" color="text-red-400" />
            <SidebarItem icon="" name="Pictures" color="text-blue-400" />
          </div>

          {/* iCloud */}
          <div className="px-3 pt-2 pb-2 border-t border-white/5">
            <p className="text-xs font-semibold mb-2 opacity-50">iCloud</p>
            <SidebarItem icon="" name="iCloud Drive" color="text-blue-400" />
          </div>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        
        {/* Toolbar */}
        <div className={`h-[52px] flex items-center px-4 border-b ${isDarkMode ? "border-gray-700 bg-[#2d2d2d]" : "border-gray-300 bg-gray-50"}`}>
          <div className="flex items-center gap-3">
            <button className="p-1 hover:bg-white/10 rounded">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-1 hover:bg-white/10 rounded">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <h2 className="font-semibold text-[15px]">Applications</h2>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-1 hover:bg-white/10 rounded">
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button className="p-1 hover:bg-white/10 rounded">
              <List className="w-5 h-5" />
            </button>
            <button className="p-1 hover:bg-white/10 rounded">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-1 hover:bg-white/10 rounded">
              <Tag className="w-5 h-5" />
            </button>
            <button className="p-1 hover:bg-white/10 rounded">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 overflow-auto">
          <div className="grid grid-cols-4 gap-6">
            {applications.map((app, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
              >
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center">
                  <img 
                    src={app.icon} 
                    alt={app.name}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <span className="text-[13px] text-center">{app.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SidebarItem({ icon, name, color = "", active = false }: { icon: string; name: string; color?: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-2 px-2 py-1 rounded cursor-pointer transition-colors ${
      active ? "bg-blue-500/20" : "hover:bg-white/5"
    }`}>
      <span className={color || ""}>{icon}</span>
      <span className="text-[13px]">{name}</span>
    </div>
  )
}

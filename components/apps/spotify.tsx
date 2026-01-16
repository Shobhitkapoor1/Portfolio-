"use client"

import { useEffect, useRef } from "react"

interface SpotifyProps {
  isDarkMode?: boolean
}

export default function Spotify({ isDarkMode = true }: SpotifyProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  return (
    <div className={`h-full flex flex-col ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>

      {/* Header */}
      <div className={`flex items-center px-4 py-3 border-b ${isDarkMode ? "border-white/10" : "border-black/10"}`}>
        <img src="/spotify.png" className="w-7 h-7 mr-3" />
        <span className="font-medium">Spotify</span>
      </div>

      {/* Spotify Embed */}
      <div className="flex-1 relative">
        <iframe
          ref={iframeRef}
          src="https://open.spotify.com/embed/playlist/2HBIMnwHxqq2Q79LFJkBtB"
          className="w-full h-full border-none"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>

    </div>
  )
}

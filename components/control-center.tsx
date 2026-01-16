"use client"

import { useState, useEffect } from "react"
import {
  Wifi,
  Bluetooth,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Maximize,
  Airplay,
} from "lucide-react"

interface ControlCenterProps {
  onClose: () => void
  isDarkMode: boolean
  onToggleDarkMode: () => void
  brightness: number
  onBrightnessChange: (value: number) => void
}

export default function ControlCenter({
  onClose,
  isDarkMode,
  onToggleDarkMode,
  brightness,
  onBrightnessChange,
}: ControlCenterProps) {
  const [wifiEnabled, setWifiEnabled] = useState(true)
  const [bluetoothEnabled, setBluetoothEnabled] = useState(true)
  const [volume, setVolume] = useState(60)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const savedWifi = localStorage.getItem("wifiEnabled")
    if (savedWifi !== null) setWifiEnabled(savedWifi === "true")
    setIsFullscreen(!!document.fullscreenElement)
  }, [])

  const toggleWifi = () => {
    const next = !wifiEnabled
    setWifiEnabled(next)
    localStorage.setItem("wifiEnabled", next.toString())
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  const glass =
    "bg-gradient-to-b from-black/50 to-black/30 backdrop-blur-xl border border-white/10"

  return (
    <div
      className={`fixed top-8 right-4 w-[360px] rounded-2xl shadow-2xl z-40 ${glass}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-4 space-y-3">

        {/* Top Grid */}
        <div className="grid grid-cols-2 gap-3">

          {/* WiFi + Bluetooth */}
          <div className="rounded-xl p-3 bg-white/10 border border-white/10 space-y-3">
            <ToggleRow
              icon={<Wifi />}
              title="Wi-Fi"
              subtitle="Home Network"
              active={wifiEnabled}
              onClick={toggleWifi}
            />
            <ToggleRow
              icon={<Bluetooth />}
              title="Bluetooth"
              subtitle={bluetoothEnabled ? "On" : "Off"}
              active={bluetoothEnabled}
              onClick={() => setBluetoothEnabled(!bluetoothEnabled)}
            />
            <ToggleRow
              icon={<Airplay />}
              title="AirDrop"
              subtitle="Contacts Only"
              active
              onClick={() => {}}
            />
          </div>

          {/* Toggles */}
          <div className="space-y-3">
            <SquareToggle
              icon={isDarkMode ? <Moon /> : <Sun />}
              label={`Dark Mode\n${isDarkMode ? "On" : "Off"}`}
              active={isDarkMode}
              onClick={onToggleDarkMode}
            />
            <SquareToggle
              icon={<Maximize />}
              label={`Fullscreen\n${isFullscreen ? "On" : "Off"}`}
              active={isFullscreen}
              onClick={toggleFullscreen}
            />
          </div>
        </div>

        {/* Brightness */}
        <SliderCard
          title="Display"
          value={brightness}
          onChange={onBrightnessChange}
          icon=""
        />

        {/* Volume */}
        <SliderCard
          title="Sound"
          value={volume}
          onChange={setVolume}
          icon={volume === 0 ? "" : ""}
        />

        {/* Music */}
        <div className="rounded-xl p-3 bg-white/10 border border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 bg-black/40 rounded-lg flex items-center justify-center">
            🎵
          </div>
          <span className="text-white text-sm flex-1">Music</span>
          <span className="opacity-60">▶</span>
          <span className="opacity-40">⏭</span>
        </div>

      </div>
    </div>
  )
}

/* ---------- Helpers ---------- */

function ToggleRow({
  icon,
  title,
  subtitle,
  active,
  onClick,
}: any) {
  return (
    <div className="flex items-center gap-3 cursor-pointer" onClick={onClick}>
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          active ? "bg-blue-500" : "bg-white/20"
        }`}
      >
        {icon}
      </div>
      <div>
        <div className="text-white text-sm font-medium">{title}</div>
        <div className="text-white/60 text-xs">{subtitle}</div>
      </div>
    </div>
  )
}

function SquareToggle({ icon, label, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-xl p-3 border border-white/10 flex items-center gap-3 ${
        active ? "bg-orange-400/80" : "bg-white/10"
      }`}
    >
      <div className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-white text-xs whitespace-pre-line text-left">
        {label}
      </span>
    </button>
  )
}

function SliderCard({ title, value, onChange, icon }: any) {
  return (
    <div className="rounded-xl p-3 bg-white/10 border border-white/10">
      <div className="flex justify-between text-white text-sm mb-2">
        <span>{title}</span>
        <span>{value}%</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min="10"
          max="100"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full appearance-none h-4 rounded-full bg-white/20"
        />
        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-black/60">
          {icon}
        </span>
      </div>
    </div>
  )
}

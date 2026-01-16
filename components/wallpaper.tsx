export default function Wallpaper({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: isDarkMode ? "url('/wal-day.png')" : "url('/wal-night.webp')",
      }}
    />
  )
}

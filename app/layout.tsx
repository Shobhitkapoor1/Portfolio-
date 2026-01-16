import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'macOS Portfolio',
  description: 'Personal portfolio, showcasing web development projects and skills',
  icons: {
    icon: '/apple.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children} <Analytics /></body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "The Geek Chronicle - Computer Science & Programming Blog",
  description:
    "A vintage-styled newspaper blog about computer science, programming, Linux, and geek culture by Shayan GeeDook",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-serif bg-vintage">{children}</body>
    </html>
  )
}

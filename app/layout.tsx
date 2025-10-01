import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Max Market Pros - Grow Your Local Business with SEO, Web Design & CRM",
  description:
    "Custom websites, Google rankings, review tools, and an all-in-one CRM built for service-based businesses.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${inter.variable} font-sans relative antialiased`}>{children}</body>
      </html>
    </>
  )
}

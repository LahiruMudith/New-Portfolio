import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Lahiru Mudith | Web Developer Portfolio | IJSE Student",
  description:
    "Lahiru Mudith - Web developer, freelancer on Fiverr and student at IJSE. Check out my projects, skills, and contact details.",
  keywords: [
    "Lahiru Mudith",
    "IJSE Student",
    "Web Developer",
    "Fiverr Freelancer",
    "Portfolio",
    "HTML CSS JS",
    "Sri Lanka",
  ],
  authors: [{ name: "Lahiru Mudith" }],
  openGraph: {
    title: "Lahiru Mudith - Web Developer Portfolio",
    description: "Visit Lahiru Mudith's portfolio website to explore projects, skills, and contact information.",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

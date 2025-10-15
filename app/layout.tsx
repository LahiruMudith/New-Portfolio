import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
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
        url: "https://www.lahirumudith.me",
        images: [
            {
                url: "https://res.cloudinary.com/dkidles6w/image/upload/v1759949482/white_logo_piyl1z.png",
                width: 400,
                height: 400,
                alt: "Lahiru Mudith Logo",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Lahiru Mudith - Web Developer Portfolio",
        description: "Check out Lahiru Mudith's web development portfolio, projects, and contact details.",
        images: [
            {
                url: "https://res.cloudinary.com/dkidles6w/image/upload/v1759949285/white_logo_qrnnod.png",
                width: 400,
                height: 400,
                alt: "Lahiru Mudith Logo",
            },
        ],
        creator: "@LahiruMudith"
    },
    generator: "v0.app",
    icons: {
        icon: "https://res.cloudinary.com/dkidles6w/image/upload/v1759949285/white_logo_qrnnod.png",
        shortcut: "https://res.cloudinary.com/dkidles6w/image/upload/v1759949482/white_logo_piyl1z.png",
        apple: "https://res.cloudinary.com/dkidles6w/image/upload/v1759949482/white_logo_piyl1z.png",
    },
    metadataBase: new URL("https://www.lahirumudith.me"),
    alternates: {
        canonical: "https://www.lahirumudith.me",
    }
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <head>
            {/*<link rel="icon" href="../assets/favicon.ico" type="image/x-icon"/>*/}
            {/* Optional: add PNG or SVG for more formats */}
            {/* <link rel="icon" href="../assets/favicon.png" type="image/png"/>*/}
            <meta name="google-adsense-account" content="ca-pub-6959983258605789" />
        </head>
        <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <SpeedInsights />
        </body>
        </html>
    )
}
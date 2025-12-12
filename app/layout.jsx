import React from "react"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tech Nova Digital | Web Development & UI Design",
  description:
    "We build clean, fast and modern websites for businesses. Offering web development, UI design, and digital solutions tailored to your brand.",
  icons: {
    icon: "/favicon.ico"
  },
  keywords: [
    "web development",
    "UI design",
    "website design",
    "portfolio website",
    "modern web design",
    "frontend developer",
    "next.js developer",
    "India web developer"
  ],
  authors: [{ name: "Tech Nova Digital" }],
  metadataBase: new URL("https://technova-digital.vercel.app"),

  openGraph: {
    title: "Tech Nova Digital | Web Development & UI Design",
    description:
      "Professional web development and UI design services to grow your online presence.",
    url: "https://technova-digital.vercel.app",
    siteName: "Tech Nova Digital",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Tech Nova Digital | Web Development & UI Design",
    description:
      "Professional web development and UI design services."
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta 
          name="google-site-verification" 
          content="566672fc59c1767e" 
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://technova-digital.vercel.app/"
                }
              ]
            }
          `
          }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Tech Nova Digital",
              "url": "https://technova-digital.vercel.app",
              "image": "https://technova-digital.vercel.app/logo.png",
              "telephone": "+918983939755",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              }
            }
          `
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

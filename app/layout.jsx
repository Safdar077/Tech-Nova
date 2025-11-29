import React from "react"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Tech Nova Digital | Web Development & UI Design Agency",
  description:
    "Transform your digital presence with cutting-edge web development and stunning UI/UX design. Tech Nova Digital delivers innovative solutions for modern businesses.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification"
        content="566672fc59c1767e" />
        <script type="application/ld+json">
    {`
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
    `}
  </script>

  <script type="application/ld+json">
    {`
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
    `}
  </script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

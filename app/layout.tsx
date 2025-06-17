import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dwarka Bike Rentals - Best Bike Rental Service in Dwarka, Gujarat",
  description:
    "Rent bikes in Dwarka at affordable prices. Explore Dwarka temples, beaches, and attractions on two wheels. Easy booking, quality bikes, and excellent service guaranteed.",
  keywords:
    "bike rental Dwarka, rent bike Dwarka, Dwarka bicycle rental, Dwarka bike hire, Dwarka sightseeing bikes, Dwarka temple tour bike, Dwarka beach bike rental, affordable bike rental Dwarka, bike booking Dwarka, Dwarka tourism bikes, Dwarka bike tours, bicycle on rent in Dwarka, Dwarka bike rental service, Dwarka bike rental near me, best bike rental in Dwarka",
  openGraph: {
    title: "Dwarka Bike Rentals - Best Bike Rental Service in Dwarka, Gujarat",
    description:
      "Rent bikes in Dwarka at affordable prices. Explore Dwarka temples, beaches, and attractions on two wheels. Easy booking, quality bikes, and excellent service guaranteed.",
    url: "https://dwarkabikes.com",
    siteName: "Dwarka Bike Rentals",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dwarka Bike Rentals - Explore Dwarka on two wheels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwarka Bike Rentals - Best Bike Rental Service in Dwarka, Gujarat",
    description:
      'Rent bikes in Dwarka at affordable prices. Explore Dwarka temples, beaches, and attractions on "Rent bikes in Dwarka at affordable prices. Explore Dwarka temples, beaches, and attractions on two wheels. Easy booking, quality bikes, and excellent service guaranteed.',
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://dwarkabikes.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        {children}
        <ScrollToTop />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Reset scroll position on page load
            window.onload = function() {
              window.scrollTo(0, 0);
            }
            
            // Add click event listener to all internal links
            document.addEventListener('click', function(e) {
              const link = e.target.closest('a');
              if (link && link.href.startsWith(window.location.origin)) {
                window.scrollTo(0, 0);
              }
            });
          `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Dwarka Bike Rentals",
              "image": "https://dwarkabikes.com/logo.jpg",
              "url": "https://dwarkabikes.com",
              "telephone": "+918141182184",
              "email": "rkmotivaras77@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Beach Road",
                "addressLocality": "Dwarka",
                "addressRegion": "Gujarat",
                "postalCode": "361335",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 22.2376,
                "longitude": 68.9674
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "08:00",
                "closes": "20:00"
              },
              "priceRange": "₹₹",
              "description": "Dwarka Bike Rentals offers affordable bike rentals in Dwarka, Gujarat. Explore temples, beaches, and attractions on two wheels.",
              "sameAs": [
                "https://facebook.com/dwarkabikes",
                "https://instagram.com/dwarkabikes",
                "https://twitter.com/dwarkabikes"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Bike Rentals",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mountain Bike Rental"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "City Bike Rental"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hybrid Bike Rental"
                    }
                  }
                ]
              }
            }
          `,
          }}
        />
      </body>
    </html>
  )
}

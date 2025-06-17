import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import BikeCarousel from "@/components/bike-carousel"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import HowItWorks from "@/components/how-it-works"
import DwarkaTouristSpots from "@/components/dwarka-tourist-spots"
import BikeRentalFAQ from "@/components/bike-rental-faq"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dwarka Bike Rentals - Best Bike Rental Service in Dwarka, Gujarat",
  description:
    "Rent bikes in Dwarka at affordable prices. Explore Dwarka temples, beaches, and attractions on two wheels. Easy booking, quality bikes, and excellent service guaranteed.",
  keywords:
    "bike rental Dwarka, rent bike Dwarka, Dwarka bicycle rental, Dwarka bike hire, Dwarka sightseeing bikes, Dwarka temple tour bike, Dwarka beach bike rental, affordable bike rental Dwarka, bike booking Dwarka, Dwarka tourism bikes, Dwarka bike tours, bicycle on rent in Dwarka, Dwarka bike rental service, Dwarka bike rental near me, best bike rental in Dwarka",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-12 space-y-24">
        <HowItWorks />
        <BikeCarousel />
        <DwarkaTouristSpots />
        <Testimonials />
        <BikeRentalFAQ />
      </div>
      <Footer />
    </main>
  )
}

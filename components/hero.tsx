import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/bike2.jpg"
        alt="Scenic view of Dwarka with bikes - Rent bikes in Dwarka"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Rent Quality Bikes in Dwarka - Explore the City on Two Wheels
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Dwarka's premier bike rental service offering well-maintained bikes for temple visits, beach trips, and city
            exploration. Quality bikes, flexible rental options, and excellent service guaranteed.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-medium transition-transform hover:scale-105"
              asChild
            >
              <a href="tel:+918141182184" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>Call to Rent: 8141182184</span>
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10" asChild>
              <Link href="#how-it-works">How It Works</Link>
            </Button>
          </div>
          <div className="pt-4">
            <p className="text-white/80 text-sm">
              <strong>Popular searches:</strong> Bike rental in Dwarka, Dwarka temple tour bikes, Rent bicycle in
              Dwarka, Affordable bike hire Dwarka, Dwarka sightseeing on bike
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import Link from "next/link"

const bikes = [
  {
    id: 1,
    name: "Mountain Explorer Pro",
    type: "Mountain",
    image: "/placeholder.svg?height=400&width=600",
    pricePerHour: 150,
    pricePerDay: 600,
    rating: 4.8,
    available: true,
    provider: "Adventure Bikes",
  },
  {
    id: 2,
    name: "City Cruiser Deluxe",
    type: "City",
    image: "/placeholder.svg?height=400&width=600",
    pricePerHour: 100,
    pricePerDay: 400,
    rating: 4.5,
    available: true,
    provider: "Urban Wheels",
  },
  {
    id: 3,
    name: "Beach Rider Elite",
    type: "Hybrid",
    image: "/placeholder.svg?height=400&width=600",
    pricePerHour: 120,
    pricePerDay: 500,
    rating: 4.7,
    available: true,
    provider: "Coastal Cycles",
  },
  {
    id: 4,
    name: "Temple Tour Special",
    type: "City",
    image: "/placeholder.svg?height=400&width=600",
    pricePerHour: 90,
    pricePerDay: 350,
    rating: 4.6,
    available: true,
    provider: "Heritage Bikes",
  },
  {
    id: 5,
    name: "Adventure X-Treme",
    type: "Mountain",
    image: "/placeholder.svg?height=400&width=600",
    pricePerHour: 180,
    pricePerDay: 700,
    rating: 4.9,
    available: false,
    provider: "Adventure Bikes",
  },
  {
    id: 6,
    name: "Eco Rider",
    type: "Hybrid",
    image: "/placeholder.svg?height=400&width=600",
    pricePerHour: 110,
    pricePerDay: 450,
    rating: 4.4,
    available: true,
    provider: "Green Wheels",
  },
  {
    id: 7,
    name: "Family Tandem",
    type: "Specialty",
    image: "/placeholder.svg?height=400&width=600",
    pricePerHour: 200,
    pricePerDay: 800,
    rating: 4.7,
    available: true,
    provider: "Family Cycles",
  },
  {
    id: 8,
    name: "Kids Explorer",
    type: "Kids",
    image: "/placeholder.svg?height=400&width=600",
    pricePerHour: 80,
    pricePerDay: 300,
    rating: 4.5,
    available: true,
    provider: "Little Riders",
  },
]

// Duplicate the bikes array to create an infinite scroll effect
const infiniteBikes = [...bikes, ...bikes]

export default function BikeCards() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const totalWidth = scrollContainer.scrollWidth
    const containerWidth = scrollContainer.clientWidth
    const maxScroll = totalWidth - containerWidth
    const scrollSpeed = 0.5

    const scroll = () => {
      if (!scrollContainer) return

      scrollPosition += scrollSpeed

      // Reset position when we reach the end of the duplicated content
      if (scrollPosition >= maxScroll / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    // Start the animation
    animationId = requestAnimationFrame(scroll)

    // Pause animation on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId)
    }

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Explore Bike Selection</h2>
        <p className="text-slate-600 mt-2">Discover a variety of bikes available for your Dwarka adventure</p>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto hide-scrollbar gap-6 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {infiniteBikes.map((bike, index) => (
          <Card
            key={`${bike.id}-${index}`}
            className="min-w-[280px] max-w-[280px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
              <Image
                src={bike.image || "/placeholder.svg"}
                alt={bike.name}
                fill
                className="object-cover transition-transform hover:scale-105 duration-500"
              />
              <Badge className="absolute top-2 right-2 bg-yellow-400 text-slate-900 hover:bg-yellow-500">
                {bike.type}
              </Badge>
            </div>

            <CardContent className="pt-4">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg text-slate-900">{bike.name}</h3>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{bike.rating}</span>
                </div>
              </div>

              <p className="mt-1 text-xs text-slate-500">Provider: {bike.provider}</p>

              <div className="mt-2 space-y-1">
                <p className="text-sm text-slate-600">
                  <span className="font-medium text-slate-900">₹{bike.pricePerHour}</span> per hour
                </p>
                <p className="text-sm text-slate-600">
                  <span className="font-medium text-slate-900">₹{bike.pricePerDay}</span> per day
                </p>
              </div>
            </CardContent>

            <CardFooter>
              <Button
                className={`w-full ${
                  bike.available
                    ? "bg-yellow-400 hover:bg-yellow-500 text-slate-900"
                    : "bg-slate-200 text-slate-500 cursor-not-allowed"
                }`}
                disabled={!bike.available}
                asChild={bike.available}
              >
                {bike.available ? <Link href="/#booking">Order Now</Link> : <span>Currently Unavailable</span>}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

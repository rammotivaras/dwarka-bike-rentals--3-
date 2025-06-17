"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const featuredBikes = [
  {
    id: 1,
    name: "Dwarka Trail Blazer",
    image: "/biker (1).jpg",
    description: "Sturdy and reliable for exploring offbeat paths and scenic routes around Dwarka’s outskirts.",
  },
  {
    id: 2,
    name: "City Glide",
    image: "/biker (2).jpg",
    description: "Smooth and comfortable for cruising through Dwarka’s busy streets and local markets.",
  },
  {
    id: 3,
    name: "Coastal Voyager",
    image: "/pulsar.jpg",
    description: "Perfect for long coastal rides to beaches like Shivrajpur and Beyt Dwarka — sporty and fast.",
  },
  {
    id: 4,
    name: "Temple Hopper",
    image: "/activa.jpg",
    description: "Lightweight and efficient for visiting multiple temples and spiritual spots with ease.",
  },
];


export default function BikeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === featuredBikes.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? featuredBikes.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, currentIndex])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <section id="bikes" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Featured Bike Options</h2>
        <p className="text-slate-600 mt-2">Discover popular bike types available through our partner network</p>
      </div>

      <div
        className="relative overflow-hidden rounded-xl shadow-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex transition-transform duration-500 ease-out h-[400px] md:h-[500px]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {featuredBikes.map((bike) => (
            <div key={bike.id} className="min-w-full relative">
              <Image src={bike.image || "/placeholder.svg"} alt={bike.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white">{bike.name}</h3>
                <p className="text-white/90 mt-2">{bike.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {featuredBikes.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all",
                currentIndex === index ? "bg-yellow-400 w-8" : "bg-white/50 hover:bg-white/80",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

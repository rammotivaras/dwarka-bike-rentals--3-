"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Rahul Mehta",
    role: "Traveler from Mumbai",
    quote:
      "Yashoda Travels made my trip to Dwarka truly unforgettable. Excellent service and on-time pickup!",
  },
  {
    id: 2,
    name: "Sneha Patel",
    role: "Tourist",
    quote:
      "The booking process was super easy and the bike was in perfect condition. Highly recommended!",
  },
  {
    id: 3,
    name: "Amit mittal",
    role: "Gujarat",
    quote:
      "Shivrajpur Beach ride was amazing! Great experience renting from Yashoda Travels.",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => setCurrentIndex(index)

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 6000)
    }

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isAutoPlaying])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <section id="testimonials" className="py-14 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800">What Our Customers Say</h2>
        <p className="text-slate-600 mt-2 text-lg">Real stories from happy travelers</p>
      </div>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden px-6 sm:px-10 py-10 transition-all duration-300"
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((t) => (
            <div key={t.id} className="min-w-full px-2">
              <div className="flex flex-col items-center text-center space-y-4">
                <Quote className="h-10 w-10 text-yellow-400" />
                <p className="text-xl text-slate-700 italic max-w-xl">“{t.quote}”</p>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-slate-800 shadow-sm rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-slate-800 shadow-sm rounded-full"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        {/* Dots */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2.5 rounded-full transition-all",
                currentIndex === index ? "bg-yellow-500 w-6" : "bg-slate-300 w-2.5 hover:bg-slate-400"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

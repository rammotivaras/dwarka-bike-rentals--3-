import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Phone, ChevronDown } from "lucide-react"
import Link from "next/link"
import { FaFlag, FaWhatsappSquare } from "react-icons/fa"

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/bike2.jpg"
        alt="Bike rental in Dwarka"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/30" />

      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-2xl bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl space-y-6 mt-32 md:mt-0">
          
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Explore Dwarka's Hidden Gems on Two Wheels
          </h1>

      <div className="rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 py-3 px-4 text-center shadow-lg border border-yellow-300">
  <p className="text-lg font-bold text-slate-900">
    ⭐ Dwarka Bike Rentals
  </p>
  <p className="text-sm font-medium text-slate-800">
    Fast Booking • Well Maintained Vehicles • Local Guidance
  </p>
</div>



<div className="relative">
  <p className="text-lg text-white/90">
    Rent bikes & scooters near Dwarkadhish Temple.
    <span className="text-yellow-300 font-medium ml-1">Perfect for Republic Day!</span>
  </p>
  <div className="inline-flex items-center mt-3 px-4 py-2 bg-gradient-to-r from-orange-500 to-green-500 rounded-full">
    <span className="text-white font-bold tracking-wider flex items-center gap-2">
      <FaFlag className="h-3 w-3" />
      Happy Republic Day 2026
      <FaFlag className="h-3 w-3" />
    </span>
  </div>
</div>

          {/* CALL + WHATSAPP */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white"
              asChild
            >
              <a href="tel:+918141182184" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Us
              </a>
            </Button>

            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
              asChild
            >
              <a href="https://wa.me/918141182184" target="_blank">
                <FaWhatsappSquare className="h-6 w-6" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* 🚕 DWARKA CAB PROMOTION (IMPORTANT) */}
          <div className="mt-4 bg-yellow-400/90 text-slate-900 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
            <div>
              <p className="font-bold text-lg">🚕 Need Taxi in Dwarka?</p>
              <p className="text-sm font-medium">
                Book trusted <span className="underline">Dwarka Cab Service</span> for sightseeing near Dwarka,
  Somnath & Gir Sasan.
              </p>
            </div>

            <Link
              href="https://dwarkacab.in"
              target="_blank"
              className="bg-slate-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-slate-800 transition"
            >
              Book Cab
            </Link>
          </div>

          {/* TRUST POINTS */}
          <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
            <span>✔ Near Dwarkadhish Temple</span>
            <span>✔ Best Price</span>
            <span>✔ Easy Booking</span>
          </div>
        </div>

        <Link
          href="/"
          className="absolute bottom-2 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="h-10 w-10 text-black" />
        </Link>
      </div>
    </div>
  )
}

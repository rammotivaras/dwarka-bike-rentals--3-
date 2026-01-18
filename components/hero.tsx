import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaWhatsapp } from "react-icons/fa"
import { FaFlag } from "react-icons/fa6"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/bike2.jpg"
        alt="Bike rental in Dwarka"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full px-4 flex items-center">
        <div className="max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl space-y-6">

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Discover Dwarka on <span className="text-yellow-400">Two Wheels</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/90">
            Rent bikes & scooters near Dwarkadhish Temple.  
            Affordable • Reliable • Easy Booking
          </p>

          {/* Republic Day Highlight */}
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 via-white to-green-500 px-5 py-2 rounded-full shadow">

  {/* Left waving flag */}
  <span className="mini-flag wave">
    <svg viewBox="0 0 60 40" className="flag-svg">
      <rect width="60" height="13.33" y="0" fill="#FF9933" />
      <rect width="60" height="13.33" y="13.33" fill="#FFFFFF" />
      <rect width="60" height="13.33" y="26.66" fill="#138808" />
      <circle cx="30" cy="20" r="4" stroke="#000080" strokeWidth="1.2" fill="none" />
    </svg>
  </span>

  <span className="font-bold text-slate-900 tracking-wide">
    Republic Day Special
  </span>

  {/* Right waving flag */}
  <span className="mini-flag wave delay">
    <svg viewBox="0 0 60 40" className="flag-svg">
      <rect width="60" height="13.33" y="0" fill="#FF9933" />
      <rect width="60" height="13.33" y="13.33" fill="#FFFFFF" />
      <rect width="60" height="13.33" y="26.66" fill="#138808" />
      <circle cx="30" cy="20" r="4" stroke="#000080" strokeWidth="1.2" fill="none" />
    </svg>
  </span>

</div>



          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white flex gap-2 text-base"
              asChild
            >
              <a href="tel:+918141182184">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>

            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white flex gap-2 text-base"
              asChild
            >
              <a href="https://wa.me/918141182184" target="_blank">
                <FaWhatsapp className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Taxi Promotion */}
          <div className="mt-6 bg-yellow-400/95 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
            <div>
              <p className="text-lg font-bold text-slate-900">
                🚕 Need Taxi in Dwarka?
              </p>
              <p className="text-sm font-medium text-slate-800">
                Book trusted cab service for Dwarka, Somnath & Gir Sasan
              </p>
            </div>

            <Link
              href="https://dwarkacab.in"
              target="_blank"
              className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-slate-800 transition"
            >
              Book Cab
            </Link>
          </div>

          {/* Trust Points */}
          <div className="flex flex-wrap gap-4 text-sm text-white/80 pt-2">
            <span>✔ Near Temple</span>
            <span>✔ Best Price</span>
            <span>✔ Instant Booking</span>
            <span>✔ Local Support</span>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-10 w-10 text-white/70" />
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Phone, ChevronDown } from "lucide-react"
import Link from "next/link"
import { FaWhatsappSquare } from "react-icons/fa";

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
  
  <div className="space-y-4">
    {/* Diwali Offer Message placed below the main heading */}
    <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white py-3 px-4 rounded-lg text-center animate-pulse">
      <div className="text-lg font-bold flex items-center justify-center gap-2">
        <span>🎉 NewYear Special!</span>
        <span className="bg-white text-red-600 px-2 py-1 rounded-md text-sm">BEST FARE</span>
      </div>
      <div className="text-sm mt-1 opacity-90">
        Flat rates • No surge pricing • Limited time offer
      </div>
    </div>

    <p className="text-lg text-white/90 leading-relaxed">
      Rent our premium bikes to visit sacred sites like Nageshwar Temple, 
      explore the mystical Bet Dwarka island, discover Gopi Talav's serene beauty, 
      or cruise along the golden shores of Shivrajpur Beach.
    </p>
    
    <div className="flex flex-wrap gap-4">
      <Button
        size="lg"
        className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-medium transition-all shadow-lg hover:shadow-yellow-500/30"
        asChild
      >
        <a href="tel:+918141182184" className="flex items-center gap-2">
          <Phone className="h-5 w-5" />
          <span>Call Us: 8141182184</span>
        </a>
      </Button>
      
      <Button 
        size="lg" 
        className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 transition-all shadow-lg hover:shadow-green-500/30"
        asChild
      >
        <a href="https://wa.me/918141182184" target="_blank" rel="noopener">
          <FaWhatsappSquare className="!h-7 !w-7" />
          <span>WhatsApp Us</span>
        </a>
      </Button>
    </div>
    
    <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
      <span className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-green-400"></span>
        Affordable rates
      </span>
      <span className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-blue-400"></span>
        Near Dwarkadhish Temple
      </span>
      <span className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
        Easy booking
      </span>
      <span className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-red-400"></span>
        NewYear Special Offer
      </span>
    </div>
  </div>
</div>

        {/* Scroll down arrow */}
        <Link 
          href="/" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="h-10 w-10 text-white/80 hover:text-white cursor-pointer transition-colors" />
        </Link>
      </div>
    </div>
  )
}
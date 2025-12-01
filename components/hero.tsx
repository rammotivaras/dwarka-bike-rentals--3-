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

      {/* Snow Fall Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 text-white opacity-70 snowflake" style={{ left: '10%', animationDelay: '0.5s' }}>❄</div>
        <div className="absolute top-0 text-white opacity-70 snowflake" style={{ left: '25%', animationDelay: '1.2s' }}>❄</div>
        <div className="absolute top-0 text-white opacity-70 snowflake" style={{ left: '40%', animationDelay: '0.8s' }}>❄</div>
        <div className="absolute top-0 text-white opacity-70 snowflake" style={{ left: '55%', animationDelay: '2.1s' }}>❄</div>
        <div className="absolute top-0 text-white opacity-70 snowflake" style={{ left: '70%', animationDelay: '1.5s' }}>❄</div>
        <div className="absolute top-0 text-white opacity-70 snowflake" style={{ left: '85%', animationDelay: '2.8s' }}>❄</div>
        <div className="absolute top-0 text-white opacity-70 snowflake" style={{ left: '15%', animationDelay: '3.2s' }}>❄</div>
        <div className="absolute top-0 text-white opacity-70 snowflake" style={{ left: '30%', animationDelay: '2.5s' }}>❄</div>
        <div className="absolute top-0 text-white opacity-70 snowflake" style={{ left: '45%', animationDelay: '1.8s' }}>❄</div>
        <div className="absolute top-0 text-white opacity-70 snowflake" style={{ left: '60%', animationDelay: '3.5s' }}>❄</div>
        <div className="absolute top-0 text-white opacity-70 snowflake" style={{ left: '5%', animationDelay: '4.1s' }}>❄</div>
        <div className="absolute top-0 text-white opacity-70 snowflake" style={{ left: '95%', animationDelay: '0.3s' }}>❄</div>
        <div className="absolute top-0 text-white opacity-70 snowflake" style={{ left: '75%', animationDelay: '2.3s' }}>❄</div>
        <div className="absolute top-0 text-white opacity-70 snowflake" style={{ left: '35%', animationDelay: '1.7s' }}>❄</div>
      </div>

      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
       <div className="max-w-2xl bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl space-y-6 mt-32 md:mt-0">
  <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
    Explore Dwarka's Hidden Gems on Two Wheels 🎄
  </h1>
  
  <div className="space-y-4">
    {/* Christmas Offer Message placed below the main heading */}
    <div className="bg-gradient-to-r from-green-600 to-red-600 text-white py-3 px-4 rounded-lg text-center pulse border-2 border-yellow-400">
      <div className="text-lg font-bold flex items-center justify-center gap-2">
        <span>🎅 Christmas Special Offer!</span>
 <div className="text-3xl">₹199</div>
                    <div className="text-sm font-semibold">Starting Price</div>
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
        className="bg-red-600 hover:bg-red-700 text-white font-medium transition-all shadow-lg hover:shadow-red-500/30"
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
        <a href="https://wa.me/918141182184" target="_blank" rel="noopener noreferrer">
          <FaWhatsappSquare className="!h-7 !w-7" />
          <span>WhatsApp Us</span>
        </a>
      </Button>
    </div>
    
  <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
  <span className="flex items-center gap-1.5">
    <span className="h-2 w-2 rounded-full bg-green-400 pulse"></span>
    Starting at just ₹199
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
    <span className="h-2 w-2 rounded-full bg-red-400 pulse"></span>
    Christmas Special Offer
  </span>
</div>
  </div>
</div>

        {/* Scroll down arrow */}
        <Link 
          href="/" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce"
        >
          <ChevronDown className="h-10 w-10 text-white/80 hover:text-white cursor-pointer transition-colors" />
        </Link>
      </div>
    </div>
  )
}
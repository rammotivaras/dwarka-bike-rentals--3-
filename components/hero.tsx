import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Phone, MessageCircle, ChevronDown } from "lucide-react"
import Link from "next/link"

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
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Explore Dwarka's Hidden Gems on Two Wheels
          </h1>
          <p className="text-lg text-white/90">
            Rent our bikes to visit Nageshwar Temple, explore Bet Dwarka island, 
            discover Gopi Talav's beauty, or ride along Shivrajpur Beach. Perfect for pilgrims 
            and travelers alike.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-medium"
              asChild
            >
              <a href="tel:+918141182184" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>Call Us: 8141182184</span>
              </a>
            </Button>
            
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white"
              asChild
            >
              <a href="https://wa.me/918141182184" target="_blank" rel="noopener">
                <MessageCircle className="h-5 w-5 mr-2" />
                <span>WhatsApp Us</span>
              </a>
            </Button>
          </div>

         <p className="text-white/80 text-sm">
  Affordable rates • Near Dwarkadhish Temple • Easy booking
</p>
        </div>

        {/* Scroll down arrow */}
        <Link 
          href="/" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="h-10 w-10 text-white/80 hover:text-white cursor-pointer" />
        </Link>
      </div>
    </div>
  )
}
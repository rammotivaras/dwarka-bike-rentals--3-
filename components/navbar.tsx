"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Bike, Phone} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Rental Info", href: "/rental-info" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Taxi Service", href: "https://dwarkacab.in" }, // ✅ IMPORTANT
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all",
      isScrolled ? "bg-white/95 shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Bike className="h-8 w-8 text-yellow-400" />
            <span className="font-bold text-xl text-yellow-400">Dwarka Bike Rentals</span>
          </Link>

          {/* DESKTOP */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : "_self"}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === link.href ? "text-yellow-500" : "text-slate-900 hover:text-yellow-500"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-yellow-400 text-slate-900" asChild>
              <a href="tel:+918141182184">
                <Phone className="h-4 w-4 mr-1" /> 8141182184
              </a>
            </Button>
          </nav>

          {/* MOBILE */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white shadow-lg mt-3 p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : "_self"}
                onClick={() => setIsOpen(false)}
                className="block text-slate-700"
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full bg-yellow-400 text-slate-900" asChild>
              <a href="tel:+918141182184">Call Now</a>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}

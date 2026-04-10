"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Bike, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Rental Info", href: "/rental-info" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Auto Rickshaw", href: "/auto-rickshaw-dwarka" },
  { name: "Taxi Service", href: "https://dwarkacab.in" }, 
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
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Bike className="h-8 w-8 text-yellow-400 group-hover:scale-110 transition-transform" />
            <span className={cn(
              "font-bold text-xl transition-colors",
              isScrolled ? "text-slate-900" : "text-yellow-400"
            )}>
              Dwarka Bike Rentals
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith("http");
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target={isExternal ? "_blank" : "_self"}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-yellow-500",
                    isActive ? "text-yellow-500" : isScrolled ? "text-slate-900" : "text-slate-800"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <Button className="bg-yellow-400 text-slate-900 hover:bg-yellow-500" asChild>
              <a href="tel:+918141182184">
                <Phone className="h-4 w-4 mr-1" /> 8141182184
              </a>
            </Button>
          </nav>

          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden p-2 text-slate-900" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-4 space-y-4 animate-in slide-in-from-top-2">
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith("http");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target={isExternal ? "_blank" : "_self"}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block text-base font-medium p-2 rounded-md",
                    pathname === link.href ? "bg-yellow-50 text-yellow-600" : "text-slate-700 hover:bg-slate-50"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <Button className="w-full bg-yellow-400 text-slate-900 py-6 text-lg" asChild>
              <a href="tel:+918141182184">
                <Phone className="h-5 w-5 mr-2" /> Call Now
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
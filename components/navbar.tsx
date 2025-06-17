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
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Bike className="h-8 w-8 text-yellow-400" />
            <span className="font-bold text-xl text-slate-900">Dwarka Bike Rentals</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative group",
                  pathname === link.href ? "text-yellow-500" : "text-slate-700 hover:text-yellow-500",
                )}
                onClick={() => window.scrollTo(0, 0)}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full",
                    pathname === link.href ? "w-full" : "w-0",
                  )}
                />
              </Link>
            ))}
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900" asChild>
              <a href="tel:+918141182184" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>8141182184</span>
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium py-2 transition-colors",
                    pathname === link.href ? "text-yellow-500" : "text-slate-700 hover:text-yellow-500",
                  )}
                  onClick={() => {
                    setIsOpen(false)
                    window.scrollTo(0, 0)
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 w-full" asChild>
                <a href="tel:+918141182184" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>8141182184</span>
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

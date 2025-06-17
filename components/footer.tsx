"use client"

import Link from "next/link"
import { Bike, Facebook, Instagram, Twitter, Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FaWhatsapp } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Bike className="h-8 w-8 text-yellow-400" />
              <span className="font-bold text-xl">Dwarka Bikes</span>
            </div>
            <p className="text-slate-300">
              Connecting tourists and locals with quality bike providers in Dwarka. The easiest way to find and book a
              bike for your adventure.
            </p>
            <div className="flex space-x-4">
  <Link
    href="https://wa.me/918141182184"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-300 hover:text-yellow-400 flex items-center"
    aria-label="WhatsApp"
  >
    <FaWhatsapp className="h-5 w-5" />
    <span className="sr-only">WhatsApp</span>
  </Link>
  <Link
    href="https://www.linkedin.com/in/ram-motivaras"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-300 hover:text-yellow-400 flex items-center"
    aria-label="LinkedIn"
  >
    <Linkedin className="h-5 w-5" />
    <span className="sr-only">LinkedIn</span>
  </Link>
</div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-yellow-400 transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-slate-300 hover:text-yellow-400 transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/rental-info"
                  className="text-slate-300 hover:text-yellow-400 transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Rental Info
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-yellow-400 transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-yellow-400 transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/partner-with-us"
                  className="text-slate-300 hover:text-yellow-400 transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Become a Partner
                </Link>
              </li> */}
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-slate-300 hover:text-yellow-400 transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300"> Dwarka, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-3">
  <Phone className="h-5 w-5 text-yellow-400 flex-shrink-0" />
  <a href="tel:+918141182184" className="text-slate-300 hover:text-white transition-colors duration-200">
    +91 8141182184
  </a>
</li>
<li className="flex items-center gap-3">
  <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0" />
  <a href="mailto:rkmotivaras77@gmail.com" className="text-slate-300 hover:text-white transition-colors duration-200">
    rkmotivaras77@gmail.com
  </a>
</li>

            </ul>
          </div>

          {/* Newsletter */}
         <div className="space-y-4">
  <h3 className="text-lg font-semibold">Opening Hours</h3>
  <ul className="text-slate-300 space-y-1">
    <li>Monday - Sunday: 7:00 AM - 9:00 PM</li>
    <li>24/7 Online Booking Available</li>
  </ul>
</div>
 
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Dwarka Bike Rentals. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/terms-and-conditions" className="hover:text-yellow-400">
              Terms & Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

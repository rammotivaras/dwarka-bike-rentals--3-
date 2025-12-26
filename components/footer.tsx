"use client"

import Link from "next/link"
import { Bike, Mail, Phone, MapPin } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Bike className="h-8 w-8 text-yellow-400" />
              <span className="font-bold text-xl">Dwarka Bike Rentals</span>
            </div>

            <p className="text-slate-300">
              Affordable bike & scooter rentals in Dwarka for tourists and locals.
              Easy booking near Dwarkadhish Temple.
            </p>

          <div className="flex space-x-4">
  <Link
    href="https://wa.me/918141182184"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="flex items-center justify-center h-10 w-10 rounded-full 
               bg-green-500 hover:bg-green-600 
               text-white transition-all duration-300 shadow-md"
  >
    <FaWhatsapp className="h-5 w-5" />
  </Link>
</div>

          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "How It Works", href: "/how-it-works" },
                { name: "Rental Info", href: "/rental-info" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Terms & Conditions", href: "/terms-and-conditions" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-yellow-400 transition-colors"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-0.5" />
                <span className="text-slate-300">Dwarka, Gujarat, India</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <a
                  href="tel:+918141182184"
                  className="text-slate-300 hover:text-white"
                >
                  +91 8141182184
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <a
                  href="mailto:rkmotivaras77@gmail.com"
                  className="text-slate-300 hover:text-white"
                >
                  rkmotivaras77@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* 🚕 OTHER SERVICES (DWARKA CAB – SEO GOLD) */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Other Services</h3>

            <p className="text-slate-300 text-sm">
              Traveling with family or luggage? Book our trusted taxi service.
            </p>

            <Link
              href="https://dwarkacab.in"
              target="_blank"
              className="inline-block mt-2 bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              🚕 Dwarka Cab Service
            </Link>

            <p className="text-slate-400 text-xs mt-2">
              Dwarka • Somnath • Gir Sasan • Airport Pickup & Drop
            </p>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Dwarka Bike Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

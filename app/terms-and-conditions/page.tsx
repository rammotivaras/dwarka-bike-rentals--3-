import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Info, Shield } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions | Dwarka Bike Rentals - Bike Rental Policies",
  description:
    "Read the terms and conditions for Dwarka Bike Rentals. Important information about our bike rental policies, liability disclaimers, and booking terms for Dwarka bike rentals.",
  keywords:
    "Dwarka bike rental terms, bike rental conditions Dwarka, Dwarka bike booking terms, bike rental policies Dwarka, Dwarka bicycle rental agreement, bike rental liability Dwarka",
}

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-slate-900">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Terms and conditions background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms and Conditions</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Please read these terms carefully before renting our bikes
          </p>
        </div>
      </div>

      {/* Terms Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
            <p className="text-slate-700 mb-4">
              Welcome to Dwarka Bike Rentals. These Terms and Conditions govern your use of our website and rental
              services. By accessing our website or renting our bikes, you agree to be bound by these Terms and
              Conditions.
            </p>
            <p className="text-slate-700">
              Dwarka Bike Rentals is a bike rental service that provides quality bikes for tourists and locals to
              explore Dwarka. We own and maintain all bikes offered through our service.
            </p>
          </div>

          {/* Rental Agreement */}
          <Card className="border-amber-200 bg-amber-50 mb-12">
            <CardHeader className="bg-amber-100 border-b border-amber-200">
              <CardTitle className="flex items-center text-amber-800">
                <AlertTriangle className="h-5 w-5 text-amber-600 mr-2" />
                Rental Agreement
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4 text-amber-800">
                <p>
                  <strong>IMPORTANT:</strong> By renting a bike from Dwarka Bike Rentals, you acknowledge and agree to
                  the following terms:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    You will return the bike in the same condition as when it was rented, normal wear and tear excepted.
                  </li>
                  <li>
                    You are responsible for any damage to the bike during your rental period beyond normal wear and
                    tear.
                  </li>
                  <li>You will follow all traffic laws and regulations while using our bikes.</li>
                  <li>
                    You will not use the bike for any illegal purposes or in a manner that could endanger yourself or
                    others.
                  </li>
                  <li>
                    You understand that cycling involves inherent risks, and you assume all responsibility for your
                    safety while using our bikes.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Liability */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Liability</h2>
            <Card className="border-slate-200 mb-6">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-2 rounded-full flex-shrink-0">
                    <Info className="h-5 w-5 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Assumption of Risk</h3>
                    <p className="text-slate-700">
                      Cycling involves inherent risks. By renting our bikes, you acknowledge these risks and assume full
                      responsibility for your safety. We recommend wearing a helmet (provided with your rental) at all
                      times while riding.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-2 rounded-full flex-shrink-0">
                    <Shield className="h-5 w-5 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Damage and Loss</h3>
                    <p className="text-slate-700">
                      You are responsible for any damage to the bike during your rental period beyond normal wear and
                      tear. In case of theft or loss, you will be charged the full replacement value of the bike and
                      accessories.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Rental Requirements */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Rental Requirements</h2>
            <p className="text-slate-700 mb-4">To rent a bike from us, you must:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span className="text-slate-700">
                  Provide a valid government-issued ID (Aadhar Card, Driving License, or Passport).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span className="text-slate-700">Pay a refundable security deposit.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span className="text-slate-700">Be at least 18 years of age (or accompanied by an adult).</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span className="text-slate-700">
                  Inspect the bike before accepting it and report any issues immediately.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span className="text-slate-700">Agree to return the bike at the specified time and location.</span>
              </li>
            </ul>
          </div>

          {/* Booking and Cancellation */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Booking and Cancellation</h2>
            <p className="text-slate-700 mb-4">Our booking and cancellation policies:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span className="text-slate-700">
                  Reservations can be made online, by phone, or in person at our shop.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span className="text-slate-700">
                  Free cancellation is available up to 24 hours before your scheduled pickup time.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span className="text-slate-700">
                  Cancellations within 24 hours may incur a fee of 50% of the rental amount.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span className="text-slate-700">No-shows will be charged the full rental amount.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span className="text-slate-700">
                  We reserve the right to refuse service to anyone at our discretion.
                </span>
              </li>
            </ul>
          </div>

          {/* Privacy */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Privacy</h2>
            <p className="text-slate-700 mb-4">
              We collect and process your personal information in accordance with our Privacy Policy. By using our
              services, you consent to our collection and use of your personal information as described in our Privacy
              Policy.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to Terms</h2>
            <p className="text-slate-700 mb-4">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective
              immediately upon posting on our website. Your continued use of our services after any changes indicates
              your acceptance of the modified terms.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
            <p className="text-slate-700 mb-4">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <ul className="space-y-2">
              <li className="text-slate-700">
                <strong>Email:</strong> rkmotivaras77@gmail.com
              </li>
              <li className="text-slate-700">
                <strong>Phone:</strong> +91 8141182184
              </li>
            </ul>
          </div>

          {/* Last Updated */}
          <div className="mt-12 text-sm text-slate-500">
            <p>Last Updated: May 15, 2025</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

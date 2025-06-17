import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Info } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Service Fees | Dwarka Bike Rentals",
  description: "Transparent information about our service fees and how we connect you with bike providers in Dwarka.",
  keywords: "bike rental fees, service charges, Dwarka bike booking, bike rental commission, bike booking platform",
}

export default function ServiceFeesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-slate-900">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Service fees background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Service Fees</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Transparent information about our booking service and associated fees
          </p>
        </div>
      </div>

      {/* Service Fee Explanation */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How Our Service Works</h2>
            <p className="text-slate-600">
              We connect you with trusted bike providers in Dwarka, making it easy to find and book the perfect bike for
              your adventure. Our platform charges a small service fee to maintain this service and ensure quality
              standards.
            </p>
          </div>

          <Card className="border-slate-200 mb-12">
            <CardHeader className="bg-yellow-50 border-b border-yellow-100">
              <CardTitle className="flex items-center text-slate-900">
                <Info className="h-5 w-5 text-yellow-500 mr-2" />
                Our Service Fee Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-slate-700 mb-6">
                We charge a small service fee of 10% on each booking made through our platform. This fee helps us:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-slate-700">Maintain and improve our booking platform</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-slate-700">Verify and onboard quality bike providers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-slate-700">Provide customer support throughout your booking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-slate-700">Process secure payments and booking confirmations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-slate-700">Handle any issues that may arise during your rental</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Example Pricing */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Example Pricing</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-slate-200">
              <CardHeader className="bg-slate-50 border-b border-slate-100">
                <CardTitle className="text-slate-900 text-center">Daily Rental Example</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Base bike rental price:</span>
                    <span className="font-medium text-slate-900">₹500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Service fee (10%):</span>
                    <span className="font-medium text-yellow-500">₹50</span>
                  </div>
                  <div className="border-t border-slate-200 pt-3 flex justify-between items-center">
                    <span className="font-medium text-slate-900">Total you pay:</span>
                    <span className="font-bold text-slate-900">₹550</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader className="bg-slate-50 border-b border-slate-100">
                <CardTitle className="text-slate-900 text-center">Weekly Rental Example</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Base bike rental price:</span>
                    <span className="font-medium text-slate-900">₹2,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Service fee (10%):</span>
                    <span className="font-medium text-yellow-500">₹250</span>
                  </div>
                  <div className="border-t border-slate-200 pt-3 flex justify-between items-center">
                    <span className="font-medium text-slate-900">Total you pay:</span>
                    <span className="font-bold text-slate-900">₹2,750</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Additional Services</h2>
          <Card className="border-slate-200 mb-12">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Bike Delivery</h3>
                  <p className="text-slate-700">
                    Some providers offer bike delivery to your accommodation. Delivery fees vary by provider and
                    distance, typically ranging from ₹100-₹300.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Equipment Rental</h3>
                  <p className="text-slate-700">
                    Additional equipment like helmets, locks, and child seats may be available for an extra fee,
                    typically ₹50-₹150 per item per day.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Extended Hours</h3>
                  <p className="text-slate-700">
                    If you need to extend your rental beyond the original booking, additional hourly or daily rates will
                    apply based on the provider's pricing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Information */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Payment Information</h2>
          <Card className="border-slate-200 mb-12">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Payment Methods</h3>
                  <p className="text-slate-700">
                    We accept all major credit/debit cards, UPI payments, and online bank transfers. Payment is
                    processed securely at the time of booking.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Security Deposit</h3>
                  <p className="text-slate-700">
                    Most providers require a refundable security deposit, which is handled directly between you and the
                    provider at the time of pickup. Typical deposits range from ₹1,000-₹3,000 depending on the bike
                    type.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Cancellation Policy</h3>
                  <p className="text-slate-700">
                    Free cancellation is available up to 24 hours before your scheduled pickup time. Cancellations
                    within 24 hours may incur a fee of 50% of the total booking amount.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* For Bike Providers */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">For Bike Providers</h2>
              <p className="text-slate-600 mt-2">
                Are you a bike rental business in Dwarka? Partner with us to reach more customers.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Join Our Partner Network</h3>
                  <p className="text-slate-700 mb-4">
                    As a bike provider on our platform, you'll benefit from increased visibility, a steady stream of
                    bookings, and our easy-to-use management system.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-slate-700">Access to a wider customer base</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-slate-700">Simple booking management system</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-slate-700">Secure and timely payments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-slate-700">Marketing support and increased visibility</span>
                    </li>
                  </ul>
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900" asChild>
                    <Link href="/partner-with-us">Become a Partner</Link>
                  </Button>
                </div>
                <div className="relative h-64 md:h-auto rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Bike provider partnership"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-400 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Book Your Bike?</h2>
          <p className="text-lg text-slate-800 mb-8 max-w-2xl mx-auto">
            With transparent pricing and no hidden fees, you can book with confidence through our platform.
          </p>
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white" asChild>
            <Link href="/#booking">Book a Bike Now</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Info, Calendar, Clock, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rental Information | Dwarka Bike Rentals - Bike Rental Terms & Guidelines",
  description:
    "Everything you need to know about renting bikes in Dwarka. Learn about our rental requirements, booking process, and guidelines for exploring Dwarka on two wheels.",
  keywords:
    "Dwarka bike rental information, bike rental terms Dwarka, Dwarka bike rental guidelines, rent bike Dwarka requirements, Dwarka bicycle rental rules, bike booking information Dwarka, Dwarka bike rental documents",
}

export default function RentalInfoPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-slate-900">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/biker (2).jpg"
            alt="Rental information background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Rental Information</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Everything you need to know about renting bikes in Dwarka
          </p>
        </div>
      </div>

      {/* Rental Guidelines */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Rental Guidelines</h2>
            <p className="text-slate-600">
              Our bike booking service connects you with trusted providers in Dwarka. Here's what you need to know
              before making a reservation.
            </p>
          </div>

          <Card className="border-slate-200 mb-12">
            <CardHeader className="bg-yellow-50 border-b border-yellow-100">
              <CardTitle className="flex items-center text-slate-900">
                <Info className="h-5 w-5 text-yellow-500 mr-2" />
                Rental Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Required Documents</h3>
                  <p className="text-slate-700 mb-2">To rent a bike through our service, you'll need to provide:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-slate-700">
                        Valid government-issued ID (Aadhar, Passport, Driving License)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-slate-700">Security deposit (refundable upon return)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-slate-700">Contact information (phone and email)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Age Requirements</h3>
                  <p className="text-slate-700">
                    Renters must be at least 18 years old to book a bike through our service. Some providers may have
                    additional age requirements for specific bike types.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rental Duration */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Rental Duration</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-yellow-100 p-3 rounded-full mb-4">
                    <Clock className="h-6 w-6 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Hourly Rentals</h3>
                  <p className="text-slate-600">
                    Perfect for short trips around Dwarka. Contact us for current hourly rates.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-yellow-100 p-3 rounded-full mb-4">
                    <Calendar className="h-6 w-6 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Daily Rentals</h3>
                  <p className="text-slate-600">Ideal for full-day exploration. Contact us for current daily rates.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-yellow-100 p-3 rounded-full mb-4">
                    <Shield className="h-6 w-6 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Security Deposit</h3>
                  <p className="text-slate-600">
                    A refundable deposit is required, which will be returned upon bike return in good condition.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Process */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Booking Process</h2>
          <Card className="border-slate-200 mb-12">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">1. Browse and Select</h3>
                  <p className="text-slate-700">
                    Browse available bikes on our platform and select the one that best suits your needs. You can filter
                    by type, location, and availability.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">2. Make a Reservation</h3>
                  <p className="text-slate-700">
                    Complete the booking form with your details, preferred dates, and pickup location. You'll receive a
                    booking confirmation via email.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">3. Pickup</h3>
                  <p className="text-slate-700">
                    Visit our location at your scheduled time. Present your ID, pay the security deposit, and complete
                    any necessary paperwork.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">4. Return</h3>
                  <p className="text-slate-700">
                    Return the bike to the same location at the agreed time. We will inspect the bike and refund your
                    security deposit if everything is in order.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cancellation Policy */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Cancellation Policy</h2>
          <Card className="border-slate-200 mb-12">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-slate-700">
                  We understand that plans can change. Here's our standard cancellation policy:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-slate-700">
                      <strong>More than 24 hours before pickup:</strong> Full refund of any prepaid amounts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-slate-700">
                      <strong>Less than 24 hours before pickup:</strong> Cancellation fee may apply
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-slate-700">
                      <strong>No-show:</strong> Full booking amount may be charged
                    </span>
                  </li>
                </ul>
                <p className="text-slate-700 mt-4">
                  Please contact us directly for specific cancellation requests or questions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Safety Tips */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Biking Safety Tips</h2>
            <p className="text-slate-600 mt-2">Stay safe while exploring Dwarka on two wheels</p>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Always wear a helmet</h3>
                      <p className="text-sm text-slate-600">
                        Protect your head at all times, regardless of the distance.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Check the bike before riding</h3>
                      <p className="text-sm text-slate-600">Ensure brakes, tires, and gears are working properly.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Follow traffic rules</h3>
                      <p className="text-sm text-slate-600">
                        Obey all traffic signals and ride in the same direction as traffic.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Stay hydrated</h3>
                      <p className="text-sm text-slate-600">Carry water, especially during hot weather.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Use bike lights</h3>
                      <p className="text-sm text-slate-600">
                        Use front and rear lights when riding at dawn, dusk, or night.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Secure your belongings</h3>
                      <p className="text-sm text-slate-600">
                        Use a backpack or bike basket to keep your hands free for steering.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-400 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Explore Dwarka?</h2>
          <p className="text-lg text-slate-800 mb-8 max-w-2xl mx-auto">
            With our transparent rental information and trusted service, you can book with confidence.
          </p>
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white" asChild>
            <Link href="/">Find a Bike</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}

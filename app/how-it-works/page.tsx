import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, CheckCircle, ShieldCheck, Clock, Headphones } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How It Works | Dwarka Bike Rentals - Easy Bike Rental Process",
  description:
    "Learn how to rent bikes in Dwarka with our simple rental process. Easy steps to rent the perfect bike for exploring Dwarka temples, beaches, and attractions.",
  keywords:
    "how to rent bike in Dwarka, Dwarka bike rental process, rent bike Dwarka, Dwarka bike rental steps, rent bicycle Dwarka process, Dwarka bike rental guide, easy bike rental Dwarka",
}

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-slate-900">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/biker (2).jpg"
            alt="How it works background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Your simple guide to renting the perfect bike in Dwarka
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-12">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
                  Step 1
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Choose Your Bike</h2>
                <p className="text-slate-600 mb-4">
                  Browse our wide selection of well-maintained bikes. We offer mountain bikes, city bikes, hybrid bikes,
                  and kids' bikes to suit all your needs and preferences.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-slate-700">Multiple bike types and models</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-slate-700">Transparent pricing information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-slate-700">Detailed specifications and photos</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
                <Image src="/placeholder.svg?height=400&width=600" alt="Browsing bikes" fill className="object-cover" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Booking process"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
                  Step 2
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Make Your Reservation</h2>
                <p className="text-slate-600 mb-4">
                  Once you've found the right bike, simply call us or fill out our booking form with your details,
                  preferred dates, and pickup location. Our simple process makes booking quick and easy.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-slate-700">Simple booking form</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-slate-700">Secure payment options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-slate-700">Instant booking confirmation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
                  Step 3
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Pickup Your Bike</h2>
                <p className="text-slate-600 mb-4">
                  Visit our shop at the scheduled time to pick up your bike. We'll provide all necessary equipment and
                  information. For your convenience, we also offer bike delivery to hotels and accommodations in Dwarka.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-slate-700">Quick and easy pickup process</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-slate-700">Helmets and accessories included</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-slate-700">Optional delivery service available</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
                <Image src="/placeholder.svg?height=400&width=600" alt="Bike pickup" fill className="object-cover" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Enjoying Dwarka"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
                  Step 4
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Enjoy Your Ride</h2>
                <p className="text-slate-600 mb-4">
                  Explore Dwarka at your own pace. Visit temples, beaches, and attractions with the freedom that only a
                  bike can provide. When your rental period is over, simply return the bike to our shop.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-slate-700">Freedom to explore at your pace</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-slate-700">Simple return process</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-slate-700">Option to extend rental if needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Service Benefits */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Our Service</h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
              We make renting a bike in Dwarka simple, secure, and stress-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-yellow-100 p-3 rounded-full mb-4">
                    <ShieldCheck className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Quality Bikes</h3>
                  <p className="text-slate-600">
                    Our fleet consists of well-maintained, high-quality bikes that undergo regular safety checks and
                    maintenance.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-yellow-100 p-3 rounded-full mb-4">
                    <Clock className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Flexible Options</h3>
                  <p className="text-slate-600">
                    From hourly to weekly rentals, we offer flexible rental options to suit your schedule and budget.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-yellow-100 p-3 rounded-full mb-4">
                    <MapPin className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Convenient Locations</h3>
                  <p className="text-slate-600">
                    Our rental shops are strategically located near major attractions and hotels in Dwarka for your
                    convenience.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-yellow-100 p-3 rounded-full mb-4">
                    <Headphones className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Customer Support</h3>
                  <p className="text-slate-600">
                    Our dedicated team is available to assist you throughout your rental period with any questions or
                    issues.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
            Find answers to common questions about our bike rental service
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">What types of bikes do you offer?</h3>
              <p className="text-slate-600">
                We offer a variety of bikes including mountain bikes, city bikes, hybrid bikes, and kids' bikes. All our
                bikes are well-maintained and suitable for exploring Dwarka's attractions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Do I need to make a reservation in advance?</h3>
              <p className="text-slate-600">
                While walk-ins are welcome, we recommend making a reservation in advance, especially during peak tourist
                season (October to March) to ensure availability of your preferred bike type.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">What happens if the bike breaks down?</h3>
              <p className="text-slate-600">
                In the rare event of a breakdown, please call our customer service number immediately. We'll arrange for
                a replacement bike or repair as quickly as possible. All our bikes come with roadside assistance within
                the Dwarka city limits.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Can I cancel my booking?</h3>
              <p className="text-slate-600">
                Yes, you can cancel your booking according to our cancellation policy. Most bookings can be cancelled
                free of charge up to 24 hours before the scheduled pickup time. Please check the specific terms when
                making your booking.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Do you offer bike delivery?</h3>
              <p className="text-slate-600">
                Yes, we offer bike delivery to hotels and accommodations in Dwarka for an additional fee. You can select
                this option during the booking process.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-400 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Rent Your Bike?</h2>
          <p className="text-lg text-slate-800 mb-8 max-w-2xl mx-auto">
            Start exploring Dwarka on two wheels. Our simple rental process makes it easy to get on the road.
          </p>
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white" asChild>
            <a href="tel:+918141182184">Call to Rent Now</a>
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}

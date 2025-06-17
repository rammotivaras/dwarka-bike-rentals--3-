import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bike, Users, Award, Clock, MapPin, Heart } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Dwarka Bike Rentals - Bike Rental Service in Dwarka",
  description:
    "Learn about Dwarka Bike Rentals, the premier bike rental service in Dwarka. Quality bikes for temple visits, beach trips, and city exploration since 2015.",
  keywords:
    "Dwarka bike rental company, about Dwarka Bike Rentals, bike rental history Dwarka, Dwarka bike rental service, quality bikes Dwarka, bike rental experience Dwarka",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-slate-900">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image  src="/activa.jpg" alt="About us background" fill className="object-cover" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Dwarka Bikes</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Helping tourists and locals explore the beautiful city of Dwarka since 2015
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image src="/biker (2).jpg" alt="Our bike shop" fill className="object-cover" />
          </div>

         <div>
  <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
 <div className="space-y-4 text-slate-700">
  <p>
    Dwarka Bikes is an easy-to-use bike booking platform built to help travelers explore Dwarka on their own terms.
  </p>
  <p>
    Whether you're planning a temple visit, a beach ride, or just a quick local trip, our platform lets you book the right bike in just a few clicks.
  </p>
  <p>
    We aim to make your journey smooth and memorable by offering reliable rentals, transparent pricing, and a team that’s always ready to assist.
  </p>
</div>

</div>

        </div>
      </div>

      {/* Our Values */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-yellow-100 p-3 rounded-full mb-4">
                    <Bike className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Quality & Safety</h3>
                  <p className="text-slate-600">
                    We maintain our bikes to the highest standards, ensuring a safe and enjoyable experience for every
                    rider.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-yellow-100 p-3 rounded-full mb-4">
                    <Users className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Customer First</h3>
                  <p className="text-slate-600">
                    We're dedicated to providing exceptional service and creating memorable experiences for every
                    customer.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-yellow-100 p-3 rounded-full mb-4">
                    <Heart className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Environmental Responsibility</h3>
                  <p className="text-slate-600">
                    We promote eco-friendly tourism and sustainable practices to preserve Dwarka's natural beauty.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Why Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-100 p-2 rounded-full">
              <Award className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Quality Bikes</h3>
              <p className="text-slate-600">
                Our fleet consists of well-maintained, high-quality bikes suitable for all ages and experience levels.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-yellow-100 p-2 rounded-full">
              <MapPin className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Convenient Locations</h3>
              <p className="text-slate-600">
                With multiple pickup points across Dwarka, you can start your adventure from wherever is most
                convenient.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-yellow-100 p-2 rounded-full">
              <Clock className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Flexible Rental Options</h3>
              <p className="text-slate-600">
                From hourly to weekly rentals, we offer flexible options to suit your schedule and budget.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-yellow-100 p-2 rounded-full">
              <Users className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Expert Local Knowledge</h3>
              <p className="text-slate-600">
                Our team provides insider tips on the best routes, attractions, and hidden gems in Dwarka.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-yellow-100 p-2 rounded-full">
              <Heart className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Community Involvement</h3>
              <p className="text-slate-600">
                We actively participate in local initiatives and promote sustainable tourism in Dwarka.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-yellow-100 p-2 rounded-full">
              <Bike className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Accessories Included</h3>
              <p className="text-slate-600">
                Helmets, locks, and basic accessories are included with every rental for your convenience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-400 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Experience Dwarka on Two Wheels?</h2>
          <p className="text-lg text-slate-800 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have explored Dwarka with our bikes.
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

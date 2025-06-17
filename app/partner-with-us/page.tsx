"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, TrendingUp, Shield } from "lucide-react"
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PartnerWithUsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    location: "",
    bikeCount: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle the form submission here
    console.log("Form submitted:", formData)
    setFormSubmitted(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        businessName: "",
        ownerName: "",
        email: "",
        phone: "",
        location: "",
        bikeCount: "",
        message: "",
      })
    }, 5000)
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-slate-900">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Partner with us background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Partner With Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join our network of trusted bike providers and grow your business
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Why Partner With Us</h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
            Discover the advantages of listing your bikes on our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-100 p-3 rounded-full mb-4">
                  <Users className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Expanded Customer Base</h3>
                <p className="text-slate-600">
                  Reach thousands of tourists and locals looking for bike rentals in Dwarka through our platform.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-100 p-3 rounded-full mb-4">
                  <TrendingUp className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Increased Revenue</h3>
                <p className="text-slate-600">
                  Boost your bookings and maximize your bike fleet utilization with our steady stream of customers.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-100 p-3 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Secure Payments</h3>
                <p className="text-slate-600">
                  Enjoy reliable payment processing and reduced no-shows with our secure booking system.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">How It Works For Partners</h2>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold text-yellow-600">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Sign Up as a Partner</h3>
                <p className="text-slate-600">
                  Complete our partner application form with details about your bike rental business. Our team will
                  review your application and contact you to proceed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold text-yellow-600">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">List Your Bikes</h3>
                <p className="text-slate-600">
                  Once approved, you'll gain access to our partner dashboard where you can add your bikes, set
                  availability, and manage pricing. Upload high-quality photos and detailed descriptions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold text-yellow-600">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Receive Bookings</h3>
                <p className="text-slate-600">
                  Customers will browse and book your bikes through our platform. You'll receive notifications for new
                  bookings, and all details will be available in your dashboard.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold text-yellow-600">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Provide the Service</h3>
                <p className="text-slate-600">
                  Meet the customer at the agreed pickup location, complete any paperwork, and provide the bike. After
                  the rental period, receive the bike back and confirm the return in the system.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold text-yellow-600">5</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Get Paid</h3>
                <p className="text-slate-600">
                  Receive secure payments directly to your account. We transfer the rental amount minus our service fee
                  according to our payment schedule.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Application Form */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Become a Partner</h2>

          {formSubmitted ? (
            <Card className="border-green-200 bg-green-50">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Application Submitted Successfully!</h3>
                <p className="text-green-700 mb-4">
                  Thank you for your interest in partnering with us. Our team will review your application and contact
                  you within 2-3 business days.
                </p>
              </CardContent>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name</Label>
                <Input
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Your bike rental business name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ownerName">Owner/Manager Name</Label>
                <Input
                  id="ownerName"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your business email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your business phone"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Business Location in Dwarka</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Your business address"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bikeCount">Number of Bikes in Your Fleet</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select number of bikes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1-5 bikes</SelectItem>
                    <SelectItem value="6-10">6-10 bikes</SelectItem>
                    <SelectItem value="11-20">11-20 bikes</SelectItem>
                    <SelectItem value="21-50">21-50 bikes</SelectItem>
                    <SelectItem value="50+">More than 50 bikes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell Us About Your Business</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share details about your bike rental business, types of bikes you offer, and any special services"
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                Submit Application
              </Button>

              <p className="text-sm text-slate-500 text-center">
                By submitting this form, you agree to our partner terms and conditions. We'll contact you within 2-3
                business days to discuss the next steps.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">What Our Partners Say</h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
              Hear from bike providers who have grown their business with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Partner testimonial"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-slate-600 italic mb-4">
                    "Partnering with Dwarka Bikes has increased our bookings by 40%. Their platform is easy to use and
                    the team is always responsive to our needs."
                  </p>
                  <h4 className="font-semibold text-slate-900">Rajesh Kumar</h4>
                  <p className="text-sm text-slate-500">Adventure Bikes, Dwarka</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Partner testimonial"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-slate-600 italic mb-4">
                    "The booking management system saves us hours of administrative work each week. We can focus on
                    providing great service instead of paperwork."
                  </p>
                  <h4 className="font-semibold text-slate-900">Priya Sharma</h4>
                  <p className="text-sm text-slate-500">Urban Wheels, Dwarka</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Partner testimonial"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-slate-600 italic mb-4">
                    "As a new bike rental business, this platform helped us get established quickly. The steady flow of
                    customers has been crucial for our growth."
                  </p>
                  <h4 className="font-semibold text-slate-900">Amit Patel</h4>
                  <p className="text-sm text-slate-500">Coastal Cycles, Dwarka</p>
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
            Common questions from bike providers interested in partnering with us
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">What are your commission rates?</h3>
              <p className="text-slate-600">
                We charge a 10% commission on each booking made through our platform. This fee covers our marketing
                efforts, platform maintenance, customer service, and payment processing.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">How do I receive payments?</h3>
              <p className="text-slate-600">
                Payments are processed securely through our platform and transferred to your registered bank account.
                Payouts are made weekly, with a detailed breakdown of all bookings and fees.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Can I set my own prices and availability?</h3>
              <p className="text-slate-600">
                Yes, you have full control over your pricing, availability, and the types of bikes you offer. You can
                update this information at any time through your partner dashboard.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">What happens if a customer damages a bike?</h3>
              <p className="text-slate-600">
                You manage your own security deposits and damage policies directly with the customer. We recommend
                clearly documenting the bike's condition at pickup and return. Our platform includes features to help
                you manage this process.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Is there a contract or minimum commitment?</h3>
              <p className="text-slate-600">
                We offer flexible partnership terms with no long-term contracts. You can join our platform with a simple
                agreement and discontinue the partnership with 30 days' notice if needed.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-400 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Grow Your Bike Rental Business?</h2>
          <p className="text-lg text-slate-800 mb-8 max-w-2xl mx-auto">
            Join our network of trusted bike providers and start receiving bookings through our platform.
          </p>
          <Button
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Apply Now
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}

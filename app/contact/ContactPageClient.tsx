"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function ContactPageClient() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
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
            src="/biker (2).jpg"
            alt="Contact us background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We're here to help with any questions about our bike rentals
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-100 p-3 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Call Us</h3>
                <p className="text-slate-600">
                  <a href="tel:+918141182184" className="hover:text-yellow-500">
                    +91 8141182184
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-100 p-3 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Email Us</h3>
                <p className="text-slate-600">
                  <a href="mailto:rkmotivaras77@gmail.com" className="hover:text-yellow-500">
                    rkmotivaras77@gmail.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-100 p-3 rounded-full mb-4">
                  <Clock className="h-6 w-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Working Hours</h3>
                <p className="text-slate-600">Monday - Sunday: 7:00 AM - 9:00 PM</p>
                <p className="text-slate-600">Holiday Hours May Vary</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Send Us a Message</h2>

          {formSubmitted ? (
            <Card className="border-green-200 bg-green-50">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                <p className="text-green-700 mb-4">
                  Thank you for contacting us. We'll get back to you as soon as possible.
                </p>
              </CardContent>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message here..."
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto grid gap-6">
            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">How do I make a reservation?</h3>
                <p className="text-slate-600">
                  You can make a reservation through our website, by calling us, or by sending us an email. We recommend
                  booking in advance, especially during peak tourist season.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">What documents do I need to rent a bike?</h3>
                <p className="text-slate-600">
                  You'll need a valid government-issued ID (such as Aadhar Card, Driving License, or Passport) and a
                  security deposit. For international visitors, a passport is required.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Do you offer bike delivery to hotels?</h3>
                <p className="text-slate-600">
                  Yes, we offer bike delivery to hotels and accommodations within Dwarka. Please contact us in advance
                  to arrange delivery.
                </p>
              </CardContent>
            </Card>


            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Can I extend my rental period?</h3>
                <p className="text-slate-600">
                  Yes, you can extend your rental if the bike is available. Please contact us at least 2 hours before
                  your scheduled return time to check availability and arrange the extension.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-yellow-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Need Urgent Assistance?</h2>
          <p className="text-lg text-slate-700 mb-6">
            Our emergency support line is available from 7:00 AM to 10:00 PM daily
          </p>
          <div className="inline-flex items-center justify-center bg-yellow-400 px-6 py-3 rounded-lg">
            <Phone className="h-5 w-5 mr-2 text-slate-900" />
            <span className="font-bold text-xl text-slate-900">+91 8141182184</span>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

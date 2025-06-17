"use client"

import type React from "react"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

const bikeTypes = [
  { value: "mountain", label: "Mountain Bike" },
  { value: "city", label: "City Bike" },
  { value: "hybrid", label: "Hybrid Bike" },
  { value: "kids", label: "Kids Bike" },
  { value: "tandem", label: "Tandem Bike" },
]

const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

const locations = [
  { value: "main", label: "Main Office - 123 Beach Road" },
  { value: "temple", label: "Temple Area Partner - 45 Temple Circle" },
  { value: "beach", label: "Beach Area Partner - 78 Coastal Highway" },
]

export default function BookingForm() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [pickupTime, setPickupTime] = useState<string | undefined>(undefined)
  const [returnTime, setReturnTime] = useState<string | undefined>(undefined)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle the form submission here
    setFormSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false)
      setDate(undefined)
      setPickupTime(undefined)
      setReturnTime(undefined)
    }, 3000)
  }

  return (
    <section id="booking" className="py-12 bg-slate-100 rounded-xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Book Your Bike</h2>
        <p className="text-slate-600 mt-2">Quick and easy booking process to connect you with a bike provider</p>
      </div>

      {formSubmitted ? (
        <div className="max-w-md mx-auto bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <svg
            className="w-16 h-16 text-green-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <h3 className="text-xl font-semibold text-green-800 mb-2">Booking Request Sent!</h3>
          <p className="text-green-700">
            Thank you for your booking request. We will connect you with a suitable bike provider shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6 bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Enter your full name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="Enter your phone number" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bike-type">Bike Type</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select bike type" />
              </SelectTrigger>
              <SelectContent>
                {bikeTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Pickup Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Pickup Time</Label>
              <Select value={pickupTime} onValueChange={setPickupTime} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select time">
                    {pickupTime ? (
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        {pickupTime}
                      </div>
                    ) : (
                      "Select time"
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Return Time</Label>
              <Select value={returnTime} onValueChange={setReturnTime} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select time">
                    {returnTime ? (
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        {returnTime}
                      </div>
                    ) : (
                      "Select time"
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Preferred Pickup Location</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {location.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900">
            Request Booking
          </Button>
        </form>
      )}
    </section>
  )
}

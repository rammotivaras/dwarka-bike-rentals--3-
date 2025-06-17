import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us | Dwarka Bike Rentals - Bike Rental Service in Dwarka",
  description:
    "Contact Dwarka Bike Rentals for bike rentals in Dwarka. Call us at +91 8141182184 or email rkmotivaras77@gmail.com for bookings and inquiries.",
  keywords:
    "contact Dwarka Bike Rentals, bike rental contact Dwarka, Dwarka bike booking contact, bike rental phone number Dwarka, Dwarka bike rental email, book bike in Dwarka, rent bike Dwarka contact",
}

export default function ContactPage() {
  return <ContactPageClient />
}

import { Card, CardContent } from "@/components/ui/card"
import { Bike, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const touristSpots = [
  {
    name: "Dwarkadhish Temple",
    description:
      "The famous 2000-year-old temple dedicated to Lord Krishna, also known as Jagat Mandir. A must-visit spiritual destination in Dwarka.",
    image: "/dwarka-tample.jpeg",
    distance: "1.5 km from city center",
    bikeTime: "5-7 minutes by bike",
  },
  {
    name: "Beyt Dwarka",
    description:
      "An island off the coast of Dwarka with beautiful temples and beaches. Take your bike to the ferry point and enjoy the island.",
    image: "/beyt.jpeg",
    distance: "30 km from Dwarka",
    bikeTime: "45-50 minutes by bike to ferry point",
  },
  {
    name: "Nageshwar Jyotirlinga Temple",
    description:
      "One of the 12 Jyotirlinga shrines of Lord Shiva, featuring a massive Shiva statue. Easily accessible by bike.",
    image: "/nageshwar.jpeg",
    distance: "15 km from Dwarka",
    bikeTime: "25-30 minutes by bike",
  },
  {
    name: "Rukmini Devi Temple",
    description:
      "Ancient temple dedicated to Rukmini, the chief queen of Lord Krishna. A perfect bike ride from the city center.",
    image: "/rukmani.jpeg",
    distance: "2.5 km from Dwarka",
    bikeTime: "8-10 minutes by bike",
  },
 {
  name: "Gopi Talav",
  description:
    "A sacred pond associated with the legend of Lord Krishna and the Gopis. Devotees believe the Gopis reunited with Krishna here. Pilgrims often stop for a holy dip before visiting the Dwarkadhish Temple.",
  image: "/gopi.jpeg",
  distance: "22 km from Dwarka",
  bikeTime: "35 minutes by bike",
}
,
 {
  name: "Shivrajpur Beach",
  description:
    "A pristine beach known for its golden sands and crystal-clear waters. It is Gujarat's first Blue Flag certified beach, ideal for family outings, swimming, and water sports.",
  image: "/shivrajpur.jpeg",
  distance: "14 km from Dwarka",
  bikeTime: "25 minutes by bike",
}
,
]

export default function DwarkaTouristSpots() {
  return (
    <section className="py-12" id="tourist-spots">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Explore Dwarka on Two Wheels</h2>
        <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
          Discover these popular tourist destinations in Dwarka that are easily accessible by bike
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {touristSpots.map((spot, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image src={spot.image || "/placeholder.svg"} alt={spot.name} fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{spot.name}</h3>
              <p className="text-slate-600 mb-4">{spot.description}</p>
              <div className="flex items-center text-sm text-slate-500 mb-1">
                <MapPin className="h-4 w-4 mr-1 text-yellow-500" />
                <span>{spot.distance}</span>
              </div>
              <div className="flex items-center text-sm text-slate-500">
                <Bike className="h-4 w-4 mr-1 text-yellow-500" />
                <span>{spot.bikeTime}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-10">
        <p className="text-slate-700 max-w-2xl mx-auto">
          Renting a bike is the perfect way to explore these attractions at your own pace. Our bikes make it easy to
          navigate Dwarka's narrow streets and reach places that might be difficult to access by car.
        </p>
        <Link
          href="tel:+918141182184"
          className="inline-flex items-center mt-4 text-yellow-500 hover:text-yellow-600 font-medium"
        >
          <Bike className="h-4 w-4 mr-1" />
          <span>Call us to book a bike for your Dwarka exploration</span>
        </Link>
      </div>
    </section>
  )
}

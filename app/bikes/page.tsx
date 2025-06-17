import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Bike data
const bikes = [
  {
    id: 1,
    name: "Mountain Explorer Pro",
    type: "Mountain",
    image: "/placeholder.svg?height=400&width=600",
    pricePerHour: 150,
    pricePerDay: 600,
    rating: 4.8,
    available: true,
    description: "Perfect for exploring Dwarka's hilly terrains with advanced suspension and gearing.",
    features: ["21-speed gearing", "Front suspension", "Disc brakes", "Lightweight frame", "All-terrain tires"],
  },
  {
    id: 2,
    name: "City Cruiser Deluxe",
    type: "City",
    image: "/placeholder.svg?height=400&width=600",
    pricePerHour: 100,
    pricePerDay: 400,
    rating: 4.5,
    available: true,
    description: "Comfortable rides through the city streets with an upright riding position.",
    features: ["7-speed gearing", "Comfortable saddle", "Front basket", "Rear rack", "LED lights"],
  },
  {
    id: 3,
    name: "Beach Rider Elite",
    type: "Hybrid",
    image: "/placeholder.svg?height=400&width=600",
    pricePerHour: 120,
    pricePerDay: 500,
    rating: 4.7,
    available: true,
    description: "Ideal for coastal adventures along Dwarka's beaches with sand-friendly tires.",
    features: ["Wide tires", "Rust-resistant chain", "Water bottle holder", "Adjustable seat", "Quick-release wheels"],
  },
  {
    id: 4,
    name: "Temple Tour Special",
    type: "City",
    image: "/placeholder.svg?height=400&width=600",
    pricePerHour: 90,
    pricePerDay: 350,
    rating: 4.6,
    available: true,
    description: "Visit all the sacred temples with ease on this specially designed city bike.",
    features: ["Step-through frame", "Padded seat", "Easy gearing", "Rear carrier", "Bell"],
  },
  {
    id: 5,
    name: "Adventure X-Treme",
    type: "Mountain",
    image: "/placeholder.svg?height=400&width=600",
    pricePerHour: 180,
    pricePerDay: 700,
    rating: 4.9,
    available: false,
    description: "For the most challenging terrains and adventurous trails around Dwarka.",
    features: ["Full suspension", "Hydraulic disc brakes", "27-speed", "Tubeless tires", "Dropper post"],
  },
  {
    id: 6,
    name: "Eco Rider",
    type: "Hybrid",
    image: "/placeholder.svg?height=400&width=600",
    pricePerHour: 110,
    pricePerDay: 450,
    rating: 4.4,
    available: true,
    description: "Environmentally friendly hybrid bike for all types of urban and light trail riding.",
    features: ["Recycled materials", "Puncture-resistant tires", "Lightweight", "10-speed", "Ergonomic grips"],
  },
  {
    id: 7,
    name: "Family Tandem",
    type: "Specialty",
    image: "/placeholder.svg?height=400&width=600",
    pricePerHour: 200,
    pricePerDay: 800,
    rating: 4.7,
    available: true,
    description: "Share the riding experience with a partner on this comfortable tandem bike.",
    features: ["Two-person seating", "Multiple gears", "Dual braking system", "Comfortable saddles", "Stable frame"],
  },
  {
    id: 8,
    name: "Kids Explorer",
    type: "Kids",
    image: "/placeholder.svg?height=400&width=600",
    pricePerHour: 80,
    pricePerDay: 300,
    rating: 4.5,
    available: true,
    description: "Specially sized for children to enjoy the sights of Dwarka safely.",
    features: ["Adjustable height", "Training wheels option", "Safety features", "Bright colors", "Lightweight design"],
  },
]

export default function BikesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-slate-900">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image src="/placeholder.svg?height=600&width=1200" alt="Bikes background" fill className="object-cover" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Bike Collection</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Choose from our wide range of quality bikes for your perfect Dwarka adventure
          </p>
        </div>
      </div>

      {/* Bike Categories */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-5 sm:grid-cols-5">
              <TabsTrigger value="all" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900">
                All Bikes
              </TabsTrigger>
              <TabsTrigger
                value="mountain"
                className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
              >
                Mountain
              </TabsTrigger>
              <TabsTrigger
                value="city"
                className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
              >
                City
              </TabsTrigger>
              <TabsTrigger
                value="hybrid"
                className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
              >
                Hybrid
              </TabsTrigger>
              <TabsTrigger
                value="specialty"
                className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
              >
                Specialty
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {bikes.map((bike) => (
                <BikeCard key={bike.id} bike={bike} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mountain" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {bikes
                .filter((bike) => bike.type === "Mountain")
                .map((bike) => (
                  <BikeCard key={bike.id} bike={bike} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="city" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {bikes
                .filter((bike) => bike.type === "City")
                .map((bike) => (
                  <BikeCard key={bike.id} bike={bike} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="hybrid" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {bikes
                .filter((bike) => bike.type === "Hybrid")
                .map((bike) => (
                  <BikeCard key={bike.id} bike={bike} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="specialty" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {bikes
                .filter((bike) => bike.type === "Specialty" || bike.type === "Kids")
                .map((bike) => (
                  <BikeCard key={bike.id} bike={bike} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-400 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Explore Dwarka?</h2>
          <p className="text-lg text-slate-800 mb-8 max-w-2xl mx-auto">
            Book your bike now and start your adventure through the beautiful city of Dwarka.
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

// Bike Card Component
function BikeCard({ bike }: { bike: (typeof bikes)[0] }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={bike.image || "/placeholder.svg"}
          alt={bike.name}
          fill
          className="object-cover transition-transform hover:scale-105 duration-500"
        />
        <Badge className="absolute top-2 right-2 bg-yellow-400 text-slate-900 hover:bg-yellow-500">{bike.type}</Badge>
      </div>

      <CardContent className="pt-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg text-slate-900">{bike.name}</h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{bike.rating}</span>
          </div>
        </div>

        <p className="mt-2 text-sm text-slate-600 line-clamp-2">{bike.description}</p>

        <div className="mt-3 space-y-1">
          <p className="text-sm text-slate-600">
            <span className="font-medium text-slate-900">₹{bike.pricePerHour}</span> per hour
          </p>
          <p className="text-sm text-slate-600">
            <span className="font-medium text-slate-900">₹{bike.pricePerDay}</span> per day
          </p>
        </div>

        <div className="mt-3">
          <h4 className="text-sm font-medium text-slate-900 mb-1">Features:</h4>
          <ul className="text-xs text-slate-600 space-y-1">
            {bike.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-1.5 text-yellow-500">•</span> {feature}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          className={`w-full ${
            bike.available
              ? "bg-yellow-400 hover:bg-yellow-500 text-slate-900"
              : "bg-slate-200 text-slate-500 cursor-not-allowed"
          }`}
          disabled={!bike.available}
          asChild={bike.available}
        >
          {bike.available ? <Link href="/#booking">Rent Now</Link> : <span>Currently Unavailable</span>}
        </Button>
      </CardFooter>
    </Card>
  )
}

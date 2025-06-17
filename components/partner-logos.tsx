import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const bikeTypes = [
  { name: "Mountain Bikes", logo: "/placeholder.svg?height=100&width=200" },
  { name: "City Bikes", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Hybrid Bikes", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Kids Bikes", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Tandem Bikes", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Electric Bikes", logo: "/placeholder.svg?height=100&width=200" },
]

export default function BikeTypeShowcase() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Our Bike Collection</h2>
        <p className="text-slate-600 mt-2">Quality bikes for every type of adventure in Dwarka</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {bikeTypes.map((type, index) => (
          <Card key={index} className="border-slate-200 hover:border-yellow-200 transition-all">
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <div className="relative h-12 w-full mb-3">
                <Image src={type.logo || "/placeholder.svg"} alt={`${type.name}`} fill className="object-contain" />
              </div>
              <p className="text-sm text-slate-700 text-center">{type.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

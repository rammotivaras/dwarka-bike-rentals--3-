import { Card, CardContent } from "@/components/ui/card"
import { Search, Calendar, Bike, MapPin } from "lucide-react"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
        <p className="text-slate-600 mt-2">Simple steps to rent the perfect bike for your Dwarka adventure</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-slate-200">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <Search className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">1. Choose Your Bike</h3>
              <p className="text-slate-600">
                Browse our wide selection of well-maintained bikes for all ages and riding styles.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <Calendar className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">2. Book Your Dates</h3>
              <p className="text-slate-600">
                Select your rental dates and duration. Call us or book online for quick reservation.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">3. Pickup Your Bike</h3>
              <p className="text-slate-600">
                Visit our convenient location to pick up your bike, or request delivery to your accommodation.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <Bike className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">4. Enjoy Dwarka</h3>
              <p className="text-slate-600">
                Explore Dwarka at your own pace. Return the bike to our shop when your rental period ends.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

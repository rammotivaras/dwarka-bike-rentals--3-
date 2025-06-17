import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, HelpCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Pricing data
const hourlyPricing = [
  {
    name: "Kids Bikes",
    price: "₹80",
    description: "Perfect for children exploring Dwarka",
    features: [
      "Sized for children",
      "Safety features",
      "Helmet included",
      "Training wheels available",
      "Bright colors for visibility",
    ],
    popular: false,
  },
  {
    name: "City Bikes",
    price: "₹100",
    description: "Comfortable rides through city streets",
    features: ["Upright riding position", "Easy gearing", "Front basket", "Comfortable saddle", "Bell and lights"],
    popular: true,
  },
  {
    name: "Hybrid Bikes",
    price: "₹120",
    description: "Versatile bikes for all terrains",
    features: [
      "Multi-terrain capability",
      "Lightweight frame",
      "Multiple gears",
      "Water bottle holder",
      "Adjustable seat height",
    ],
    popular: false,
  },
  {
    name: "Mountain Bikes",
    price: "₹150",
    description: "For adventurous trails and rough terrain",
    features: ["Front suspension", "Disc brakes", "All-terrain tires", "Multiple gears", "Durable construction"],
    popular: false,
  },
]

const dailyPricing = [
  {
    name: "Kids Bikes",
    price: "₹300",
    description: "Perfect for children exploring Dwarka",
    features: [
      "Sized for children",
      "Safety features",
      "Helmet included",
      "Training wheels available",
      "Bright colors for visibility",
    ],
    popular: false,
  },
  {
    name: "City Bikes",
    price: "₹400",
    description: "Comfortable rides through city streets",
    features: ["Upright riding position", "Easy gearing", "Front basket", "Comfortable saddle", "Bell and lights"],
    popular: true,
  },
  {
    name: "Hybrid Bikes",
    price: "₹500",
    description: "Versatile bikes for all terrains",
    features: [
      "Multi-terrain capability",
      "Lightweight frame",
      "Multiple gears",
      "Water bottle holder",
      "Adjustable seat height",
    ],
    popular: false,
  },
  {
    name: "Mountain Bikes",
    price: "₹600",
    description: "For adventurous trails and rough terrain",
    features: ["Front suspension", "Disc brakes", "All-terrain tires", "Multiple gears", "Durable construction"],
    popular: false,
  },
]

const weeklyPricing = [
  {
    name: "Kids Bikes",
    price: "₹1,500",
    description: "Perfect for children exploring Dwarka",
    features: [
      "Sized for children",
      "Safety features",
      "Helmet included",
      "Training wheels available",
      "Bright colors for visibility",
    ],
    popular: false,
  },
  {
    name: "City Bikes",
    price: "₹2,000",
    description: "Comfortable rides through city streets",
    features: ["Upright riding position", "Easy gearing", "Front basket", "Comfortable saddle", "Bell and lights"],
    popular: true,
  },
  {
    name: "Hybrid Bikes",
    price: "₹2,500",
    description: "Versatile bikes for all terrains",
    features: [
      "Multi-terrain capability",
      "Lightweight frame",
      "Multiple gears",
      "Water bottle holder",
      "Adjustable seat height",
    ],
    popular: false,
  },
  {
    name: "Mountain Bikes",
    price: "₹3,000",
    description: "For adventurous trails and rough terrain",
    features: ["Front suspension", "Disc brakes", "All-terrain tires", "Multiple gears", "Durable construction"],
    popular: false,
  },
]

// Additional services
const additionalServices = [
  {
    name: "Helmet Rental",
    price: "₹50/day",
    description: "Safety first! Helmets available in all sizes.",
  },
  {
    name: "Bike Lock",
    price: "₹30/day",
    description: "Secure your bike when you stop to explore.",
  },
  {
    name: "Child Seat",
    price: "₹100/day",
    description: "Safe and comfortable seats for children.",
  },
  {
    name: "Repair Kit",
    price: "₹80/day",
    description: "Basic tools and supplies for minor repairs.",
  },
  {
    name: "GPS Navigation",
    price: "₹150/day",
    description: "Never get lost with our GPS devices.",
  },
  {
    name: "Guided Tour",
    price: "₹500/person",
    description: "Expert guides to show you the best of Dwarka.",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-slate-900">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image src="/placeholder.svg?height=600&width=1200" alt="Pricing background" fill className="object-cover" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">Choose the rental duration that fits your adventure</p>
        </div>
      </div>

      {/* Pricing Tabs */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="hourly" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger
                value="hourly"
                className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
              >
                Hourly
              </TabsTrigger>
              <TabsTrigger
                value="daily"
                className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
              >
                Daily
              </TabsTrigger>
              <TabsTrigger
                value="weekly"
                className="data-[state=active]:bg-yellow-400 data-[state=active]:text-slate-900"
              >
                Weekly
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="hourly" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hourlyPricing.map((plan) => (
                <PricingCard key={plan.name} plan={plan} duration="hour" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="daily" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dailyPricing.map((plan) => (
                <PricingCard key={plan.name} plan={plan} duration="day" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="weekly" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {weeklyPricing.map((plan) => (
                <PricingCard key={plan.name} plan={plan} duration="week" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Additional Services */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Additional Services</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <Card key={service.name} className="border-slate-200">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{service.name}</span>
                    <span className="text-yellow-500">{service.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Group Discounts */}
      <div className="bg-slate-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-1 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Group Discounts</h2>
                <p className="text-slate-600 mb-6">
                  Planning to explore Dwarka with friends or family? Get special discounts when you rent multiple bikes!
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-slate-700">5% off when renting 3-5 bikes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-slate-700">10% off when renting 6-10 bikes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-slate-700">15% off when renting more than 10 bikes</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-slate-900" asChild>
                  <Link href="/#booking">Book Group Rental</Link>
                </Button>
              </div>
              <div className="md:flex-1 relative min-h-[250px] md:min-h-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Group of cyclists"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto grid gap-6">
          <FaqItem
            question="Do I need to pay a security deposit?"
            answer="Yes, we require a refundable security deposit of ₹1,000 per bike, which will be returned when you bring back the bike in good condition."
          />
          <FaqItem
            question="What happens if the bike gets damaged?"
            answer="Minor wear and tear is expected, but significant damage may result in charges. We recommend our optional damage protection plan for peace of mind."
          />
          <FaqItem
            question="Can I extend my rental period?"
            answer="Yes, you can extend your rental if the bike is available. Please contact us at least 2 hours before your scheduled return time."
          />
          <FaqItem
            question="Do you offer delivery services?"
            answer="Yes, we offer bike delivery to hotels and accommodations within Dwarka for a small fee of ₹100 per delivery."
          />
          <FaqItem
            question="What payment methods do you accept?"
            answer="We accept cash, all major credit/debit cards, UPI payments, and online bank transfers."
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-400 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-lg text-slate-800 mb-8 max-w-2xl mx-auto">
            Book your bike now and explore the beautiful city of Dwarka at your own pace.
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

// Pricing Card Component
function PricingCard({ plan, duration }: { plan: (typeof hourlyPricing)[0]; duration: string }) {
  return (
    <Card className={`relative overflow-hidden ${plan.popular ? "border-yellow-400 shadow-lg" : "border-slate-200"}`}>
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
          POPULAR
        </div>
      )}

      <CardHeader>
        <CardTitle>{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
          <span className="text-slate-600">/{duration}</span>
        </div>

        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-slate-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button className={`w-full ${plan.popular ? "bg-yellow-400 hover:bg-yellow-500 text-slate-900" : ""}`} asChild>
          <Link href="/#booking">Rent Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

// FAQ Item Component
function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <HelpCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
          {question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600">{answer}</p>
      </CardContent>
    </Card>
  )
}

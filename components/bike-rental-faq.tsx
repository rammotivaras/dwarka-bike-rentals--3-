import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What types of bikes are available for rent in Dwarka?",
    answer:
      "We offer a variety of bikes including mountain bikes, city bikes, hybrid bikes, and kids' bikes. All bikes are well-maintained and suitable for exploring Dwarka's attractions.",
  },
  {
    question: "How much does it cost to rent a bike in Dwarka?",
    answer:
      "Bike rental rates in Dwarka vary depending on the type of bike and rental duration. Please contact us directly for current pricing information and any ongoing special offers.",
  },
  {
    question: "Do I need to make a reservation in advance to rent a bike in Dwarka?",
    answer:
      "While walk-ins are welcome, we recommend making a reservation in advance, especially during peak tourist season (October to March) to ensure availability of your preferred bike type.",
  },
  {
    question: "What documents do I need to rent a bike in Dwarka?",
    answer:
      "You'll need to provide a valid government-issued ID (such as Aadhar Card, Driving License, or Passport) and a security deposit. For international visitors, a passport is required.",
  },
  {
    question: "Can I rent a bike for multiple days in Dwarka?",
    answer:
      "Yes, we offer flexible rental periods including hourly, daily, and weekly rentals. Multi-day rentals often come with discounted rates compared to daily rentals.",
  },
  {
    question: "What are the best places to explore by bike in Dwarka?",
    answer:
      "Dwarka offers many bike-friendly destinations including Dwarkadhish Temple, Rukmini Devi Temple, Gomti Ghat, Dwarka Beach, and nearby attractions like Nageshwar Temple. Our bikes make it easy to visit these places at your own pace.",
  },
  {
    question: "Do you provide helmets and safety equipment with bike rentals in Dwarka?",
    answer:
      "Safety is our priority. Basic safety equipment like helmets can be provided with your bike rental. We recommend always wearing a helmet while cycling in Dwarka.",
  },
  {
    question: "What happens if the bike breaks down while exploring Dwarka?",
    answer:
      "In the rare event of a breakdown, please contact us immediately at our customer service number. We'll arrange assistance as quickly as possible to ensure your Dwarka exploration continues smoothly.",
  },
]

export default function BikeRentalFAQ() {
  return (
    <section className="py-12" id="faq">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
          Common questions about renting bikes in Dwarka for your exploration
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-slate-900">{item.question}</AccordionTrigger>
              <AccordionContent className="text-slate-700">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="text-center mt-10">
        <p className="text-slate-700">
          Have more questions about renting bikes in Dwarka? Contact us at{" "}
          <a href="tel:+918141182184" className="text-yellow-500 hover:text-yellow-600 font-medium">
            +91 8141182184
          </a>{" "}
          or{" "}
          <a href="mailto:rkmotivaras77@gmail.com" className="text-yellow-500 hover:text-yellow-600 font-medium">
            rkmotivaras77@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}

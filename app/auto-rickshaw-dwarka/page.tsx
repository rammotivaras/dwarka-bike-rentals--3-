import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Auto Rickshaw Booking in Dwarka Gujarat | Local Auto Near Dwarkadhish Temple & Railway Station",
  description:
    "Book trusted auto rickshaw in Dwarka Gujarat for Dwarkadhish Temple darshan, railway station pickup, Nageshwar Jyotirlinga visit and Bet Dwarka ferry drop. 24/7 local auto service available.",
  keywords: [
    "auto rickshaw in dwarka",
    "dwarka auto booking",
    "auto near dwarkadhish temple",
    "dwarka railway station auto",
    "local auto service in dwarka gujarat",
    "auto for nageshwar jyotirlinga",
    "bet dwarka auto service",
  ],
  alternates: {
    canonical: "https://dwarkabikerentals.in/auto-rickshaw-dwarka",
  },
  openGraph: {
    title: "Auto Rickshaw in Dwarka | 24/7 Local Auto Booking Service",
    description:
      "Affordable and reliable auto service in Dwarka Gujarat for temple darshan, station pickup and sightseeing.",
    url: "https://dwarkabikerentals.in/auto-rickshaw-dwarka",
    siteName: "Dwarka Bike Rentals",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://dwarkabikerentals.in/auto.jpg",
        width: 1200,
        height: 630,
        alt: "Auto Rickshaw Service in Dwarka Gujarat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Rickshaw Booking in Dwarka",
    description:
      "Fast & trusted auto service near Dwarkadhish Temple and Dwarka Railway Station.",
    images: ["https://dwarkabikerentals.in/auto.jpg"],
  },
};

export default function AutoRickshawPage() {
  return (
    <>
      <Navbar />

      <div className="bg-white text-gray-800">
        {/* HERO SECTION */}
        <section className="relative h-[85vh] flex items-center justify-center text-center text-white">
          <Image
            src="/auto.jpg"
            alt="Auto Rickshaw Service in Dwarka Gujarat"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Auto Rickshaw Booking in Dwarka
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
              24/7 trusted local auto service near Dwarkadhish Temple,
              Dwarka Railway Station and major sightseeing places.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/918141182184"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full font-semibold shadow-lg transition"
              >
                WhatsApp Booking
              </a>

              <a
                href="tel:8141182184"
                className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg transition"
              >
                Call 8141182184
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Auto Rickshaw Services in Dwarka
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              img="/dwarkatample.jpeg"
              title="Dwarkadhish Temple Darshan"
              desc="Easy and quick auto service for Dwarkadhish Temple visit."
              alt="Auto Service Near Dwarkadhish Temple Dwarka"
            />

            <ServiceCard
              img="/auto.jpg"
              title="Railway Station Pickup"
              desc="Reliable auto pickup and drop from Dwarka Railway Station."
              alt="Auto Pickup from Dwarka Railway Station"
            />

            <ServiceCard
              img="/nageshwar.jpeg"
              title="Nageshwar Jyotirlinga Visit"
              desc="Comfortable auto ride to Nageshwar Temple near Dwarka."
              alt="Auto for Nageshwar Jyotirlinga Visit"
            />

            <ServiceCard
              img="/beyt.jpeg"
              title="Bet Dwarka Ferry Drop"
              desc="Convenient auto service to Bet Dwarka ferry boarding point."
              alt="Auto Service for Bet Dwarka Ferry Point"
            />
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gray-900 text-white py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Book Auto Rickshaw in Dwarka Today
          </h2>

          <p className="mb-8 text-gray-300">
            Call or WhatsApp now for fast and reliable auto service anywhere in Dwarka Gujarat.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/918141182184"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full font-semibold transition"
            >
              WhatsApp Now
            </a>

            <a
              href="tel:8141182184"
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full font-semibold transition"
            >
              Call 8141182184
            </a>
          </div>
        </section>

        {/* SCHEMA MARKUP */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Dwarka Bike Rentals - Auto Rickshaw Service",
              image: "https://dwarkabikerentals.in/auto.jpg",
              url: "https://dwarkabikerentals.in/auto-rickshaw-dwarka",
              telephone: "+918141182184",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dwarka",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              areaServed: "Dwarka Gujarat",
              serviceType: "Auto Rickshaw Booking",
            }),
          }}
        />
      </div>
<div className="border-t border-green-600 ">
  <Footer />
</div>
    </>
  );
}

/* Reusable Card Component */
type ServiceCardProps = {
  img: string;
  title: string;
  desc: string;
  alt: string;
};

function ServiceCard({ img, title, desc, alt }: ServiceCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      <Image
        src={img}
        alt={alt}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
}
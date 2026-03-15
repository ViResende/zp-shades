import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const cities: Record<string, {
  name: string;
  neighborhoods: string[];
  description: string;
  extra: string;
}> = {
  seattle: {
    name: "Seattle",
    neighborhoods: ["Capitol Hill", "Ballard", "Queen Anne", "Fremont", "West Seattle"],
    description:
      "ZP Shades provides professional window shade and drapery installation services throughout Seattle, Washington. We install roller shades, solar shades, blackout shades, zebra shades, cellular shades, and motorized window treatments for homes and businesses across the city.",
    extra:
      "From modern condos in Capitol Hill to craftsman homes in Ballard and Queen Anne, we handle every installation with precision and care. Whether you purchased your shades online, from a designer, or a local retailer, we ensure a clean, professional result.",
  },
  bellevue: {
    name: "Bellevue",
    neighborhoods: ["Downtown Bellevue", "West Bellevue", "Bridle Trails", "Somerset"],
    description:
      "ZP Shades offers professional shade and drapery installation services in Bellevue, Washington. We specialize in motorized shades, roller shades, zebra shades, solar shades, and custom drapery systems for residential and commercial properties.",
    extra:
      "From luxury homes in West Bellevue to modern offices in Downtown Bellevue, we deliver precise installations that look and function perfectly. We work with all major brands including Hunter Douglas, Lutron, and The Shade Store.",
  },
  redmond: {
    name: "Redmond",
    neighborhoods: ["Downtown Redmond", "Education Hill", "Overlake", "Willows"],
    description:
      "ZP Shades provides expert shade and drapery installation in Redmond, Washington. We install roller shades, motorized systems, cellular shades, drapery rods, and curtain tracks for homes and businesses throughout Redmond.",
    extra:
      "Serving neighborhoods from Overlake to Education Hill, we bring professional-grade installation directly to your location. No need to haul your window treatments anywhere — we come to you and handle everything on site.",
  },
  kirkland: {
    name: "Kirkland",
    neighborhoods: ["Downtown Kirkland", "Juanita", "Bridle Trails", "Totem Lake"],
    description:
      "ZP Shades delivers professional window treatment installation services in Kirkland, Washington. From roller shades and zebra shades to motorized systems and custom drapery, we handle all types of installations for Kirkland homes and businesses.",
    extra:
      "Whether you live near the waterfront in Downtown Kirkland or in the neighborhoods of Juanita and Totem Lake, our installers bring the same level of precision and professionalism to every job.",
  },
  "mercer-island": {
    name: "Mercer Island",
    neighborhoods: ["First Hill", "Island Crest", "North End", "East Seattle"],
    description:
      "ZP Shades provides premium shade and drapery installation on Mercer Island, Washington. We specialize in motorized shades, solar shades, blackout systems, and custom drapery for the island's residential and waterfront properties.",
    extra:
      "Mercer Island homes often feature large windows with stunning views, our solar shades and motorized systems are perfect for light control without sacrificing the scenery. We handle every install with care and precision.",
  },
  renton: {
    name: "Renton",
    neighborhoods: ["Downtown Renton", "Highlands", "Kennydale", "Cascade"],
    description:
      "ZP Shades offers professional shade and drapery installation throughout Renton, Washington. We install roller shades, roman shades, blinds, motorized systems, and drapery for residential homes and commercial spaces in Renton.",
    extra:
      "From the Highlands to Kennydale and Downtown Renton, we serve the entire area with fast scheduling and clean, professional installs. Already bought your shades? We handle everything from there.",
  },
  tacoma: {
    name: "Tacoma",
    neighborhoods: ["Downtown Tacoma", "North End", "Stadium District", "Proctor"],
    description:
      "ZP Shades provides professional window shade and drapery installation services in Tacoma, Washington. We install all types of window treatments including roller shades, zebra shades, cellular shades, motorized systems, and custom drapery.",
    extra:
      "Serving historic homes in the Stadium District, craftsman properties in the North End, and modern spaces throughout Downtown Tacoma, we ensure every installation is perfectly measured, level, and professionally finished.",
  },
  "bainbridge-island": {
    name: "Bainbridge Island",
    neighborhoods: ["Winslow", "Rolling Bay", "Lynwood Center"],
    description:
      "ZP Shades offers expert shade and drapery installation on Bainbridge Island, Washington. We specialize in solar shades, motorized window treatments, roller shades, and custom drapery for island homes and waterfront properties.",
    extra:
      "Bainbridge Island homes enjoy beautiful natural light and scenic views — our solar shades and motorized systems let you control light and privacy without losing what makes island living special.",
  },
  issaquah: {
    name: "Issaquah",
    neighborhoods: ["Downtown Issaquah", "Talus", "Squak Mountain", "South Cove"],
    description:
      "ZP Shades provides professional shade and drapery installation throughout Issaquah, Washington. We install roller shades, cellular shades, roman shades, motorized systems, and drapery for homes and businesses in Issaquah.",
    extra:
      "From newer construction homes in Talus to established neighborhoods near Downtown Issaquah, we bring fast scheduling and clean installations directly to your door. No hassle, no guesswork.",
  },
  "north-bend": {
    name: "North Bend",
    neighborhoods: ["Downtown North Bend", "Tanner", "Wilderness Rim", "Cedar Falls"],
    description:
      "ZP Shades offers professional window treatment installation in North Bend, Washington. We install roller shades, blackout shades, solar shades, motorized systems, and custom drapery for North Bend homes and properties.",
    extra:
      "North Bend homes often feature large windows to take in the surrounding mountain scenery. Our solar shades and motorized window systems are ideal for light management while keeping those stunning views intact.",
  },
  sammamish: {
    name: "Sammamish",
    neighborhoods: ["Plateau", "East Lake Sammamish", "Klahanie"],
    description:
      "ZP Shades provides professional shade and drapery installation throughout Sammamish, Washington. We install roller shades, zebra shades, motorized systems, cellular shades, and custom drapery for Sammamish homes and businesses.",
    extra:
      "Sammamish is one of the fastest growing communities in the region — whether you are in a new build on the Plateau or an established home near East Lake Sammamish, we deliver precise, professional results every time.",
  },
  puyallup: {
    name: "Puyallup",
    neighborhoods: ["Downtown Puyallup", "South Hill", "Frederickson"],
    description:
      "ZP Shades offers professional window shade and drapery installation in Puyallup, Washington. We install roller shades, roman shades, blinds, motorized systems, and drapery for residential and commercial properties throughout Puyallup.",
    extra:
      "From South Hill to Downtown Puyallup and Frederickson, we serve the entire area with clean, professional installations. Already purchased your shades? Just book a service and we will take care of everything.",
  },
};

export async function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = cities[citySlug];
  if (!city) return {};
  return {
    title: `Shade Installation in ${city.name} WA | ZP Shades`,
    description: `Professional shade and drapery installation in ${city.name}, Washington. Roller shades, motorized systems, zebra shades, drapery, and more. Call (929) 471-2067.`,
    openGraph: {
      title: `Shade Installation in ${city.name} | ZP Shades`,
      description: `Professional window treatment installation in ${city.name}, WA. Serving ${city.neighborhoods.join(", ")}.`,
      url: `https://zpshades.com/shade-installation/${citySlug}`,
      siteName: "ZP Shades",
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = cities[citySlug];
  if (!city) notFound();

  return (
    <div>
      {/* Hero */}
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">
            ZP Shades · {city.name}, WA
          </p>
          <h1 className="text-4xl tracking-wide mb-4">
            Professional Shade Installation in {city.name}
          </h1>
          <p className="text-gray-400 max-w-xl">
            Serving {city.neighborhoods.join(", ")}, and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/book"
              className="inline-block bg-white text-black px-8 py-4 text-xs tracking-widest uppercase hover:bg-gray-100 transition-colors"
            >
              Book Installation
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-white text-white px-8 py-4 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-2xl tracking-wide mb-6">
              Shade & Drapery Installation in {city.name}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {city.description}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {city.extra}
            </p>
          </div>
          <div className="space-y-4">
            {[
              "Roller Shades",
              "Zebra Shades",
              "Solar Shades",
              "Cellular Shades",
              "Roman Shades",
              "Motorized Systems",
              "Drapery & Curtains",
              "Curtain Rods & Tracks",
            ].map((service) => (
              <div
                key={service}
                className="border-t border-gray-200 pt-4 text-sm font-medium"
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Neighborhoods */}
        <div className="border-t border-gray-200 pt-12 mb-16">
          <h2 className="text-2xl tracking-wide mb-6">
            Areas We Serve in {city.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {city.neighborhoods.map((n) => (
              <div
                key={n}
                className="border border-gray-200 p-4 text-sm font-medium"
              >
                {n}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-stone-50 p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl tracking-wide mb-2">
              Ready to book in {city.name}?
            </h2>
            <p className="text-gray-500 text-sm">
              Fast scheduling, clean work, done right the first time.
            </p>
          </div>
          <Link
            href="/book"
            className="shrink-0 inline-block bg-black text-white px-8 py-4 text-xs tracking-widest uppercase hover:bg-gray-900 transition-colors"
          >
            Book a Service
          </Link>
        </div>

      </main>
    </div>
  );
}
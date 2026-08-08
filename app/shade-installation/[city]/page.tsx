import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";


type CityData = {
  name: string;
  neighborhoods: string[];
  description: string;
  extra: string;
  localHighlight: string;
};

const cities: Record<string, CityData> = {
  seattle: {
    name: "Seattle",
    neighborhoods: [
      "Capitol Hill",
      "Ballard",
      "Queen Anne",
      "Fremont",
      "West Seattle",
    ],
    description:
      "ZP Shades provides professional installation for customer-provided shades, blinds, drapery, shutters, and motorized systems throughout Seattle, Washington.",
    extra:
      "Seattle properties range from downtown condos with large modern windows to older craftsman homes in Ballard, Queen Anne, and West Seattle. We handle each installation based on the window, mounting surface, and product requirements to ensure a secure and professional result.",
    localHighlight:
      "Whether you need motorized shades installed in a modern condo, roller shades in a residential home, or drapery mounted in a commercial space, ZP Shades provides professional installation without requiring you to purchase new window treatments.",

  },

  bellevue: {
    name: "Bellevue",
    neighborhoods: [
      "Downtown Bellevue",
      "West Bellevue",
      "Bridle Trails",
      "Somerset",
    ],
    description:
      "ZP Shades provides professional window treatment installation throughout Bellevue, Washington, including shades, blinds, drapery, shutters, and motorized systems.",
    extra:
      "Bellevue projects often include modern condos, offices, and larger residential properties. We focus on clean mounting, precise alignment, and reliable operation for both residential and commercial installations.",
    localHighlight:
      "If you already purchased your window treatments and need an experienced installer, ZP Shades provides installation support throughout Bellevue without the pressure to purchase new products.",
   
  },

  redmond: {
    name: "Redmond",
    neighborhoods: [
      "Downtown Redmond",
      "Education Hill",
      "Overlake",
      "Willows",
    ],
    description:
      "ZP Shades offers professional shade, blind, drapery, shutter, and motorized window treatment installation throughout Redmond, Washington.",
    extra:
      "From newer homes in Overlake to established neighborhoods around Education Hill, we provide clean, professional installation directly at your property.",
    localHighlight:
      "We help homeowners and businesses in Redmond install window treatments they already purchased, including single-room projects, whole-home installations, and motorized systems.",
  
  },

  kirkland: {
    name: "Kirkland",
    neighborhoods: [
      "Downtown Kirkland",
      "Juanita",
      "Bridle Trails",
      "Totem Lake",
    ],
    description:
      "ZP Shades provides professional installation for customer-provided window treatments throughout Kirkland, Washington.",
    extra:
      "Kirkland homes and businesses range from waterfront properties to modern developments around Totem Lake and established neighborhoods in Juanita. We bring the same attention to detail to every project.",
    localHighlight:
      "Our installation service is ideal for customers who already have their shades, blinds, drapery, shutters, or motorized systems and want them installed correctly and securely.",
    
  },

  "mercer-island": {
    name: "Mercer Island",
    neighborhoods: [
      "First Hill",
      "Island Crest",
      "North End",
      "East Seattle",
    ],
    description:
      "ZP Shades provides professional shade, drapery, blind, shutter, and motorized system installation throughout Mercer Island, Washington.",
    extra:
      "Mercer Island properties often feature large windows and open views, making precise installation especially important. We install customer-provided window treatments with careful attention to alignment, mounting, privacy, and light control.",
    localHighlight:
      "Whether your project involves large roller shades, motorized systems, or custom drapery, we provide professional installation for homes throughout Mercer Island.",
   
  },

  renton: {
    name: "Renton",
    neighborhoods: [
      "Downtown Renton",
      "Highlands",
      "Kennydale",
      "Cascade",
    ],
    description:
      "ZP Shades provides professional window treatment installation throughout Renton, Washington.",
    extra:
      "We serve homes, apartments, rental properties, offices, and commercial spaces across Renton, including Kennydale, the Highlands, and surrounding neighborhoods.",
    localHighlight:
      "Already purchased your shades, blinds, drapery, shutters, or motorized systems? We handle the installation so you do not have to manage complicated mounting or alignment yourself.",
  
  },

  tacoma: {
    name: "Tacoma",
    neighborhoods: [
      "Downtown Tacoma",
      "North End",
      "Stadium District",
      "Proctor",
    ],
    description:
      "ZP Shades provides professional shade, blind, drapery, shutter, and motorized window treatment installation throughout Tacoma, Washington.",
    extra:
      "Tacoma includes historic homes, craftsman properties, apartments, offices, and newer developments. We adjust our installation approach based on the property, mounting surface, and type of window treatment.",
    localHighlight:
      "Our goal is a clean, secure installation that looks professional and operates correctly, whether you are installing a single window treatment or completing a larger project.",
   
  },

  "bainbridge-island": {
    name: "Bainbridge Island",
    neighborhoods: [
      "Winslow",
      "Rolling Bay",
      "Lynwood Center",
    ],
    description:
      "ZP Shades provides professional window treatment installation throughout Bainbridge Island, Washington.",
    extra:
      "Island homes often feature large windows, natural light, and scenic views. We install customer-provided shades, drapery, shutters, and motorized systems with attention to light control, privacy, and proper mounting.",
    localHighlight:
      "We travel to Bainbridge Island for residential and larger installation projects, helping customers complete their window treatments without needing to purchase new products through an installation company.",
    
  },

  issaquah: {
    name: "Issaquah",
    neighborhoods: [
      "Downtown Issaquah",
      "Talus",
      "Squak Mountain",
      "South Cove",
    ],
    description:
      "ZP Shades provides professional window treatment installation throughout Issaquah, Washington.",
    extra:
      "From newer homes in Talus to established properties around Downtown Issaquah and Squak Mountain, we install customer-provided window treatments with precise mounting and a clean finish.",
    localHighlight:
      "Our installation-only service is ideal if you already purchased your shades, blinds, drapery, shutters, or motorized system and want a professional to complete the project.",
 
  },

  "north-bend": {
    name: "North Bend",
    neighborhoods: [
      "Downtown North Bend",
      "Tanner",
      "Wilderness Rim",
      "Cedar Falls",
    ],
    description:
      "ZP Shades provides professional window treatment installation throughout North Bend, Washington.",
    extra:
      "North Bend homes often feature large windows designed to take advantage of mountain views and natural light. We install window treatments carefully so they operate smoothly while maintaining a clean, finished appearance.",
    localHighlight:
      "We install customer-provided roller shades, blackout shades, solar shades, drapery, blinds, and motorized systems for homes throughout North Bend and surrounding communities.",
    
  },

  sammamish: {
    name: "Sammamish",
    neighborhoods: [
      "Sammamish Plateau",
      "East Lake Sammamish",
      "Klahanie",
    ],
    description:
      "ZP Shades provides professional window treatment installation throughout Sammamish, Washington.",
    extra:
      "Sammamish includes newer construction, larger residential properties, and established neighborhoods around the lake and plateau. We provide precise installation for a wide range of window treatment systems.",
    localHighlight:
      "Whether your project involves a few windows or a full-home installation, we provide dependable service for customer-provided window treatments throughout Sammamish.",
  
  },

  puyallup: {
    name: "Puyallup",
    neighborhoods: [
      "Downtown Puyallup",
      "South Hill",
      "Frederickson",
    ],
    description:
      "ZP Shades provides professional window treatment installation throughout Puyallup, Washington.",
    extra:
      "We serve residential homes, apartments, rental properties, and commercial spaces throughout Puyallup, South Hill, and surrounding neighborhoods.",
    localHighlight:
      "If you have already purchased your window treatments, we can handle the installation from there, including shades, blinds, drapery, shutters, and motorized systems.",
   
  },
};

const services = [
  "Roller Shades",
  "Zebra Shades",
  "Solar Shades",
  "Cellular Shades",
  "Roman Shades",
  "Blinds",
  "Motorized Systems",
  "Drapery & Curtains",
  "Shutters",
  "Curtain Rods & Tracks",
];

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

  const canonicalUrl = `https://zpshades.com/shade-installation/${citySlug}`;

  return {
    title: `Shade & Window Treatment Installation in ${city.name}, WA | ZP Shades`,
    description: `Professional installation for customer-provided shades, blinds, drapery, shutters, and motorized systems in ${city.name}, WA. Book installation with ZP Shades.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `Window Treatment Installation in ${city.name}, WA | ZP Shades`,
      description: `Professional installation for customer-provided window treatments in ${city.name}, Washington.`,
      url: canonicalUrl,
      siteName: "ZP Shades",
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = cities[citySlug];

  if (!city) notFound();

  return (
    <div>
      {/* Hero */}
      <section className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-gray-400">
            ZP Shades · {city.name}, WA
          </p>

          <h1 className="mb-5 max-w-3xl text-4xl tracking-wide md:text-5xl">
            Professional Window Treatment Installation in {city.name}
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-gray-400">
            Serving {city.neighborhoods.join(", ")}, and surrounding areas.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/book"
              className="inline-block bg-white px-8 py-4 text-center text-xs uppercase tracking-widest text-black transition-colors hover:bg-gray-100"
            >
              Book Installation
            </Link>

            <Link
              href="/contact"
              className="inline-block border border-white px-8 py-4 text-center text-xs uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <main>
        {/* Intro + services */}
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-gray-400">
                Local installation
              </p>

              <h2 className="mb-6 text-3xl tracking-wide">
                Shade & Window Treatment Installation in {city.name}
              </h2>

              <p className="mb-5 text-sm leading-relaxed text-gray-600">
                {city.description}
              </p>

              <p className="text-sm leading-relaxed text-gray-600">
                {city.extra}
              </p>
            </div>

            <div>
              <p className="mb-5 text-xs uppercase tracking-widest text-gray-400">
                What we install
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((service) => (
                  <div
                    key={service}
                    className="border border-gray-200 bg-white p-4 text-sm font-medium"
                  >
                    {service}
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className="mt-8 inline-block border-b border-black pb-0.5 text-xs uppercase tracking-widest"
              >
                View all services
              </Link>
            </div>
          </div>
        </section>

        {/* Why local */}
        <section className="bg-[#F5F3EF] px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">
                Why ZP Shades
              </p>

              <h2 className="mb-5 text-3xl tracking-wide">
                Professional installation for products you already purchased
              </h2>

              <p className="text-sm leading-relaxed text-gray-600">
                {city.localHighlight}
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
<section className="border-t border-gray-100 px-6 py-10">
  <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <p className="text-sm text-gray-600">
      Serving {city.name} and communities throughout the Puget Sound area.
    </p>

    <Link
      href="/service-areas"
      className="text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
    >
      View All Service Areas →
    </Link>
  </div>
</section>


        {/* CTA */}
        <section className="bg-[#F5F3EF] px-6 py-16">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-gray-500">
                Ready to get started?
              </p>

              <h2 className="mb-3 text-3xl tracking-wide">
                Book your installation in {city.name}
              </h2>

              <p className="max-w-xl text-sm leading-relaxed text-gray-600">
                Tell us what you purchased, how many windows you have, and where
                the project is located.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book"
                className="inline-block bg-black px-8 py-4 text-center text-xs uppercase tracking-widest text-white transition-colors hover:bg-gray-900"
              >
                Book Installation
              </Link>

              <Link
                href="/contact"
                className="inline-block border border-black px-8 py-4 text-center text-xs uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
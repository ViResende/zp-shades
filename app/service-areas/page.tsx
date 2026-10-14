
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shade & Blind Installation Service Areas | ZP Shades",
  description:
    "Professional installation of customer-provided blinds, shades, drapery, shutters, and motorized window treatments across Seattle and Puget Sound.",
  alternates: {
    canonical: "/service-areas",
  },
};

const cities = [
  { name: "Seattle", slug: "seattle" },
  { name: "Bellevue", slug: "bellevue" },
  { name: "Redmond", slug: "redmond" },
  { name: "Kirkland", slug: "kirkland" },
  { name: "Mercer Island", slug: "mercer-island" },
  { name: "Renton", slug: "renton" },
  { name: "Tacoma", slug: "tacoma" },
  { name: "Bainbridge Island", slug: "bainbridge-island" },
  { name: "Issaquah", slug: "issaquah" },
  { name: "North Bend", slug: "north-bend" },
  { name: "Sammamish", slug: "sammamish" },
  { name: "Puyallup", slug: "puyallup" },
];

export default function ServiceAreas() {
  return (
    <main className="bg-[#FAF7F2] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">

        {/* INTRODUCTION */}
        <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mb-16">

          {/* TEXT */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#A8864A] mb-4">
              ZP SHADES · PUGET SOUND
            </p>

            <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
              Service Areas
            </h1>

            <p className="text-gray-600 leading-relaxed mb-5">
              Already purchased your window treatments? ZP Shades
              provides professional installation of blinds, shades,
              drapery, shutters, and motorized systems throughout
              Seattle and the Puget Sound area.
            </p>

            <p className="text-sm text-gray-500">
              Explore the cities we serve below.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative h-[320px] md:h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/images/service-areas.webp"
              alt="Professionally installed cellular window shades in a modern living room"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* SERVICE AREA HEADER */}
        <section>
          <div className="mb-8">
            <p className="text-xs tracking-[0.2em] uppercase text-[#A8864A] mb-3">
              WHERE WE WORK
            </p>

            <h2 className="text-2xl md:text-3xl text-gray-900">
              Cities We Serve
            </h2>
          </div>

          {/* CITY GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/shade-installation/${city.slug}`}
                aria-label={`Shade installation in ${city.name}`}
                className="bg-white border border-[#EEE5D8] p-6 rounded-lg hover:border-[#A8864A] hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium text-lg text-gray-900 group-hover:text-[#A8864A] transition-colors">
                    {city.name}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-[#A8864A] group-hover:translate-x-1 transition-transform"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="mt-16 bg-black text-white rounded-xl px-6 py-14 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl mb-4">
            Ready to Schedule Your Installation?
          </h2>

          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            From a single window to a larger project, ZP Shades
            provides professional installation for your home or business.
          </p>

          <Link
            href="/book"
            className="inline-block bg-[#A8864A] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#93723E] transition-colors"
          >
            Request an Installation Quote
          </Link>
        </section>

      </div>
    </main>
  );
}

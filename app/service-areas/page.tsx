import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas — ZP Shades Seattle",
  description: "ZP Shades provides professional shade and drapery installation across Seattle, Bellevue, Kirkland, Redmond, Mercer Island, Bainbridge Island, North Bend, and surrounding areas.",
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
    <div>
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">ZP Shades</p>
          <h1 className="text-4xl tracking-wide mb-4">Service Areas</h1>
          <p className="text-gray-400 max-w-md">
            Professional shade and drapery installation across Seattle and the Puget Sound area.
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-gray-600 text-sm leading-relaxed mb-12 max-w-2xl">
          ZP Shades serves residential and commercial customers throughout the greater Seattle area. Click your city to learn more about our installation services in your area.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/shade-installation/${city.slug}`}
              aria-label={`Shade installation in ${city.name}`}
              className="border border-gray-200 p-6 hover:border-black transition-colors group"
            >
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">
                Installation services
              </p>
              <p className="font-semibold group-hover:opacity-70 transition-opacity">
                {city.name}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Treatment Installation Services Seattle — ZP Shades",
  description: "Professional installation for roller shades, zebra shades, solar shades, shutters, blinds, motorized systems, drapery, and curtain rods across Seattle and the Puget Sound area.",
};

const products = [
  {
    title: "Roller Shades",
    image: "/images/roller-shades.webp",
    alt: "Roller shades in a modern living room",
  },
  {
    title: "Zebra Shades",
    image: "/images/zebra-shades.webp",
    alt: "Zebra shades in a modern dining room",
  },
  {
    title: "Roman Shades",
    image: "/images/roman-shades.webp",
    alt: "Roman shades in a bay window",
  },
  {
    title: "Cellular Shades",
    image: "/images/cellular-shades.webp",
    alt: "Cellular honeycomb shades on a window",
  },
  {
    title: "Solar Shades",
    image: "/images/sollar-shades.webp",
    alt: "Solar shades on large windows",
  },
  {
    title: "Shutters",
    image: "/images/shutters-shades.webp",
    alt: "White plantation shutters in a living room",
  },
  {
    title: "Blinds",
    image: "/images/blinds-shades.webp",
    alt: "Wood venetian blinds in a living room",
  },
  {
    title: "Motorized Shades",
    image: "/images/motorized-shades.webp",
    alt: "Smart home app controlling motorized shades",
  },
  {
    title: "Drapery",
    image: "/images/drapery-shades.webp",
    alt: "Floor-to-ceiling drapery panels",
  },
  {
    title: "Curtain Rods & Tracks",
    image: "/images/curtains-rods-tracks.webp",
    alt: "Ceiling-mounted curtain track with white panels",
  },
  {
    title: "Smart Home Integration",
    image: "/images/smartintegration.webp",
    alt: "Smart home app showing shade controls",
  },
  {
    title: "Professional Measurement & Consultation",
    image: "/images/consultation.webp",
    alt: "Professional window measurement and shade consultation",
  },
];

export default function Services() {
  return (
    <div>
      {/* Dark hero header */}
      <div className="bg-black text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">
            ZP Shades
          </p>
          <h1 className="text-4xl tracking-wide mb-4">Products We Install</h1>
          <p className="text-gray-400 max-w-md">
            Already have your shades or drapes? We handle the installation.
            Professional, clean, and done right.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/book"
              className="inline-block bg-white text-black px-8 py-3 text-xs tracking-widest uppercase hover:bg-gray-100 transition-colors"
            >
              Book Installation
            </Link>
            <Link
              href="/book"
              className="inline-block border border-white text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
            >
              Book Consultation — $99
            </Link>
          </div>
        </div>
      </div>

      {/* Products grid */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
          {products.map((product) => (
            <div key={product.title} className="group">
              <div className="relative w-full h-64 overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h2 className="text-sm font-semibold tracking-wide">
  {product.title}
</h2>
                {product.title === "Professional Measurement & Consultation" && (
                  <span className="text-xs bg-black text-white px-3 py-1">
                    $99
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 border-t border-gray-200 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl tracking-wide mb-2">Ready to get started?</h2>
            <p className="text-gray-500 text-sm">
              Book your installation or schedule a consultation today.
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
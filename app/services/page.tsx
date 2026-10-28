
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blinds, Shades & Drapery Installation Services | ZP Shades",
  description:
    "Professional installation of blinds, shades, shutters, drapery, curtain rods, and motorized window treatments throughout Seattle and the Puget Sound area.",
  alternates: {
    canonical: "https://www.zpshades.com/services",
  },
};

const products = [
  {
    title: "Roller Shade Installation",
    image: "/images/roller-shades.webp",
    alt: "Roller shades in a modern living room",
  },
  {
    title: "Zebra Shade Installation",
    image: "/images/zebra-shades.webp",
    alt: "Zebra shades in a modern dining room",
  },
  {
    title: "Roman Shade Installation",
    image: "/images/roman-shades.webp",
    alt: "Roman shades in a bay window",
  },
  {
    title: "Cellular Shade Installation",
    image: "/images/cellular-shades.webp",
    alt: "Cellular honeycomb shades on a window",
  },
  {
    title: "Solar Shade Installation",
    image: "/images/sollar-shades.webp",
    alt: "Solar shades on large windows",
  },
  {
    title: "Shutter Installation",
    image: "/images/shutters-shades.webp",
    alt: "White plantation shutters in a living room",
  },
  {
    title: "Blind Installation",
    image: "/images/blinds-shades.webp",
    alt: "Wood venetian blinds in a living room",
  },
  {
    title: "Motorized Shade Installation",
    image: "/images/motorized-shades.webp",
    alt: "Motorized shades with smart controls",
  },
  {
    title: "Drapery Installation",
    image: "/images/drapery-shades.webp",
    alt: "Floor-to-ceiling drapery panels",
  },
  {
    title: "Curtain Rod & Track Installation",
    image: "/images/curtains-rods-tracks.webp",
    alt: "Ceiling-mounted curtain tracks with drapery",
  },
  {
    title: "Smart Home Integration",
    image: "/images/smartintegration.webp",
    alt: "Smart home window shade controls",
  },
  {
    title: "Professional Measurement & Consultation",
    image: "/images/consultation.webp",
    alt: "Professional window measurement and consultation",
  },
];

export default function Services() {
  return (
    <main className="bg-white text-[#171717]">
      {/* Hero */}
      <section className="bg-[#F5F3EF]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#A8864A]">
            ZP SHADES / OUR SERVICES
          </p>

          <h1 className="mb-5 max-w-3xl text-3xl font-medium leading-tight sm:text-4xl">
            Blinds, Shades & Drapery Installation
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-[#59616A]">
            Already purchased your window treatments? ZP Shades
            provides professional installation for blinds, shades,
            drapery, shutters, curtain tracks, and motorized systems
            throughout Seattle and the Puget Sound area.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-black px-7 py-4 text-xs uppercase tracking-wider text-white transition-colors hover:bg-[#333]"
            >
              Book Installation
            </Link>

            <Link
              href="/book"
              className="inline-flex items-center justify-center border border-black px-7 py-4 text-xs uppercase tracking-wider text-black transition-colors hover:bg-white"
            >
              Book Consultation — $99
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-10">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#A8864A]">
            WHAT WE INSTALL
          </p>

          <h2 className="mb-4 text-2xl font-medium sm:text-3xl">
            Our Installation Services
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-[#59616A]">
            From standard blinds to custom drapery and smart shades,
            we install customer-provided window treatments with
            attention to detail and a clean finish.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.title}
              className="group border border-[#E6E6E6] bg-white"
            >
              <div className="relative h-60 overflow-hidden bg-[#F3F3F3]">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex min-h-20 items-center justify-between gap-3 px-5 py-5">
                <h3 className="text-base font-medium">
                  {product.title}
                </h3>

                {product.title ===
                "Professional Measurement & Consultation" ? (
                  <span className="shrink-0 text-sm text-[#A8864A]">
                    $99
                  </span>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Installation explanation */}
      <section className="bg-[#E1ECF1]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#58707C]">
              HOW WE WORK
            </p>

            <h2 className="mb-4 text-2xl font-medium sm:text-3xl">
              You choose the products.
              <span className="block">We handle the installation.</span>
            </h2>
          </div>

          <div>
            <p className="text-sm leading-relaxed text-[#495864]">
              ZP Shades is an independent installation company.
              We install products purchased from retailers, designers,
              and manufacturers. Whether you need one window
              completed or an entire property, our focus is
              professional installation rather than product sales.
            </p>

            <Link
              href="/book"
              className="mt-6 inline-block border-b border-black pb-1 text-xs uppercase tracking-wider"
            >
              Request a Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#F5F3EF]">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#A8864A]">
              READY TO GET STARTED?
            </p>

            <h2 className="mb-3 text-2xl font-medium">
              Your products are ready. Let us handle the installation.
            </h2>

            <p className="text-sm leading-relaxed text-[#59616A]">
              Tell us what you purchased, how many windows you have,
              and where your project is located.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-black px-7 py-4 text-xs uppercase tracking-wider text-white hover:bg-[#333]"
            >
              Book Installation
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-black px-7 py-4 text-xs uppercase tracking-wider text-black hover:bg-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


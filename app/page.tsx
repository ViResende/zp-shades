import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./components/AnimatedSection";

export const metadata: Metadata = {
  metadataBase: new URL("https://zpshades.com"),

  title: "Shade, Drapery & Window Treatment Installation Seattle | ZP Shades",
  description:
    "Professional window shade and drapery installation in Seattle, Bellevue, Kirkland, Mercer Island, Bainbridge Island, and North Bend. Roller shades, motorized systems, zebra shades, drapery, and more. Call (929) 471-2067.",
  keywords:
    "shade installation Seattle, drapery installation Seattle, motorized shades Seattle, window treatment installer Seattle, roller shades Seattle, blind installation Seattle",

  openGraph: {
    title: "ZP Shades — Window Treatment Installation Seattle",
    description:
      "Professional shade and drapery installation across Seattle and the Puget Sound area.",
    siteName: "ZP Shades",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Professional shade installation by ZP Shades in Seattle",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div>

      {/* Hero */}
      <section aria-labelledby="hero-heading" className="relative w-full h-[85vh] min-h-[560px]">
        <Image
          src="/images/hero.webp"
          alt="ZP Shades installer mounting window shades in a Seattle home"
          fill
          priority
          className="object-cover object-[50%_20%]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 pb-20 max-w-6xl mx-auto">
          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl text-white tracking-wide max-w-2xl leading-tight mb-6 animate-fade-in-up"
          >
            Professional Shade & Drapery Installation in Seattle
          </h1>
          <p className="text-gray-300 text-sm max-w-md mb-8 animate-fade-in-up animate-delay-100">
            Professional installation for roller shades, motorized systems, drapery, and more. Serving Seattle and the Puget Sound area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-200">
            <Link
              href="/book"
              className="inline-block bg-white text-black px-8 py-4 text-xs tracking-widest uppercase hover:bg-gray-100 transition-colors"
              aria-label="Book a shade installation service"
            >
              Book a Service
            </Link>
            <Link
              href="/services"
              className="inline-block border border-white text-white px-8 py-4 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
              aria-label="View all window treatment services"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services strip */}
      <section aria-labelledby="services-heading" className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-10">
            What we install
          </p>
          <h2 id="services-heading" className="sr-only">Our installation services</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="border-t border-gray-700 pt-6">
              <h3 className="text-lg font-semibold mb-3">Shades Installation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Roller, solar, blackout, zebra, cellular, and custom shades.
                Professional installation for every window.
              </p>
            </div>
            <div className="border-t border-gray-700 pt-6">
              <h3 className="text-lg font-semibold mb-3">Drapery Installation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Precision mounting for drapery rods, tracks, and custom
                window treatments. Level, centered, done right.
              </p>
            </div>
            <div className="border-t border-gray-700 pt-6">
              <h3 className="text-lg font-semibold mb-3">Motorized Systems</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Smart motorized shades compatible with Somfy, Lutron,
                Alexa, Google Home, and Apple HomeKit.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="text-xs tracking-widest uppercase border-b border-white pb-0.5 hover:opacity-60 transition-opacity"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section aria-labelledby="gallery-heading" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">
                Our work
              </p>
              <h2 id="gallery-heading" className="text-3xl tracking-wide">
                Recent Installations 
              </h2>
            </div>
            <Link
              href="/gallery"
              className="hidden sm:block text-xs tracking-widest uppercase border-b border-black pb-0.5 hover:opacity-60 transition-opacity"
              aria-label="View full installation gallery"
            >
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <AnimatedSection delay={0}>
              <div className="relative h-[420px] overflow-hidden group">
                <Image
                  src="/images/gallery1.webp"
                  alt="Roller shade installation in a Seattle bedroom"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="relative h-[420px] overflow-hidden group">
                <Image
                  src="/images/gallery2.webp"
                  alt="Motorized smart shade installation in a Seattle home office"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="relative h-[420px] overflow-hidden group">
                <Image
                  src="/images/gallery3.webp"
                  alt="Custom drapery installation in a Seattle living room"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
          <div className="mt-8 sm:hidden">
            <Link
              href="/gallery"
              className="text-xs tracking-widest uppercase border-b border-black pb-0.5"
            >
              View all
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose ZP Shades */}
      <AnimatedSection delay={0}>
        <section aria-labelledby="why-heading" className="py-20 px-6 border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">
                  Why choose us
                </p>
                <h2 id="why-heading" className="text-3xl tracking-wide mb-6">
                  Why Choose ZP Shades
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  ZP Shades provides professional window shade and drapery installation services across Seattle and the surrounding areas. We specialize in installing <Link href="/services">shades, drapery systems, and motorized window treatments with precision and attention to detail.</Link>
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Our service is designed to be convenient for homeowners and businesses. All installations are performed directly at your location, so you don't need to worry about complicated setups or spending hours trying to install window treatments yourself.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We work with a wide variety of systems including roller shades, solar shades, blackout shades, zebra shades, cellular shades, drapery rods, curtain tracks, and motorized smart shade systems. Whether you purchased your shades online, through a retailer, or from a designer. We ensure they are installed correctly, safely, and perfectly aligned. You can view examples of our recent work in our <Link href="/gallery">installation gallery</Link>.
                </p>
              </div>
              <div className="space-y-8">
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-semibold mb-2">
                    Professional Installation Without the Hassle
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Installing shades or drapery systems can be more complicated than it looks. Incorrect measurements, uneven brackets, or improper mounting can affect how your window treatments look and function. ZP Shades takes care of the entire installation process so you don't have to worry about it. We make sure every bracket is level, every shade operates smoothly, and every system is securely mounted.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-semibold mb-2">
                    Already Purchased Your Shades?
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    If you already purchased your shades but need professional installation, we are here to help. Just schedule a service and we will take care of the rest.
                  </p>
                  <Link
                    href="/book"
                    className="text-xs tracking-widest uppercase border-b border-black pb-0.5 hover:opacity-60 transition-opacity"
                    aria-label="Book a window shade installation"
                  >
                    Book Installation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Residential & Commercial */}
      <AnimatedSection delay={0}>
        <section aria-labelledby="residential-heading" className="bg-stone-50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">
                  Who we serve
                </p>
                <h2 id="residential-heading" className="text-3xl tracking-wide mb-6">
                  Residential & Commercial Projects
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  ZP Shades provides installation services for both residential homes and commercial spaces throughout the Seattle area. From a single window to an entire building, we ensure every installation is clean, secure, and professionally finished.
                </p>
                <Link
                  href="/book"
                  className="inline-block bg-black text-white px-8 py-4 text-xs tracking-widest uppercase hover:bg-gray-900 transition-colors"
                  aria-label="Book a residential or commercial installation"
                >
                  Book a Service
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4" role="list" aria-label="Project types we serve">
                {[
                  "Homes & Apartments",
                  "Offices & Workspaces",
                  "Retail Stores",
                  "Restaurants & Cafes",
                  "Rental Properties",
                  "Airbnb Units",
                ].map((item) => (
                  <div
                    key={item}
                    role="listitem"
                    className="border border-gray-200 bg-white p-4 text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Service Areas */}
<AnimatedSection delay={0}>
  <section aria-labelledby="areas-heading" className="py-16 px-6 border-t border-gray-100">
    <div className="max-w-6xl mx-auto text-center">
      <h2 id="areas-heading" className="text-2xl tracking-wide mb-4">
        Serving Seattle and the Puget Sound Area
      </h2>
      <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-6">
        Seattle · Bellevue · Redmond · Kirkland · Mercer Island · Bainbridge Island · and surrounding areas
      </p>
      <Link
        href="/service-areas"
        className="text-xs tracking-widest uppercase border-b border-gray-400 pb-0.5 hover:text-black transition-colors"
      >
        View all service areas
      </Link>
    </div>
  </section>
</AnimatedSection>

      {/* Bottom CTA */}
      <section aria-labelledby="cta-heading" className="bg-stone-50 py-20 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-3">
              Get started
            </p>
            <h2 id="cta-heading" className="text-3xl tracking-wide mb-3">
              Ready to upgrade your space?
            </h2>
            <p className="text-gray-500 text-sm max-w-md">
              We handle the installation. Fast scheduling, clean work, and done right the first time.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link
              href="/book"
              className="inline-block bg-black text-white px-8 py-4 text-xs tracking-widest uppercase text-center hover:bg-gray-900 transition-colors"
              aria-label="Book a shade installation service"
            >
              Book a Service
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-black text-black px-8 py-4 text-xs tracking-widest uppercase text-center hover:bg-black hover:text-white transition-colors"
              aria-label="Contact ZP Shades"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
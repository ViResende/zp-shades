import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import AnimatedSection from "./components/AnimatedSection";

const mainServiceAreas = [
  { name: "Seattle", href: "/shade-installation/seattle" },
  { name: "Bellevue", href: "/shade-installation/bellevue" },
  { name: "Redmond", href: "/shade-installation/redmond" },
  { name: "Kirkland", href: "/shade-installation/kirkland" },
  { name: "Mercer Island", href: "/shade-installation/mercer-island" },
  { name: "Bainbridge Island", href: "/shade-installation/bainbridge-island" },
];

const brands = [
  { name: "Hunter Douglas", image: "/images/brands/hunter-douglas.webp" },
  { name: "Lutron", image: "/images/brands/lutron.png" },
  { name: "Somfy", image: "/images/brands/somfy.svg" },
  { name: "Graber", image: "/images/brands/graber.svg" },
  { name: "Norman", image: "/images/brands/norman.svg" },
  { name: "Levolor", image: "/images/brands/levolor.svg" },
  { name: "SelectBlinds", image: "/images/brands/selectblinds.svg" },
  { name: "Blinds.com", image: "/images/brands/blinds.svg" },
  { name: "Home Depot", image: "/images/brands/homedepot.svg" },
  { name: "Lowe's", image: "/images/brands/lowes.svg" },
  { name: "Amazon", image: "/images/brands/amazon.svg" },
  { name: "Costco", image: "/images/brands/costco.svg" },
  { name: "IKEA", image: "/images/brands/ikea.svg" },
  { name: "The Shade Store", image: "/images/brands/theshadestore.svg" },
];

const testimonials = [
  {
    quote:
      "This was the second time we've hired Zef to install curtains, and they looked amazing both times. His pricing is fair, the work is high quality, and he's a great person to work with.",
    name: "Winston L.",
    location: "Redmond, WA",
  },
  {
    quote:
      "We recently added shades to our home, and we absolutely love them. The whole process was smooth from start to finish. Zef's attention to detail really shows. Everything looks clean, polished, and works perfectly.",
    name: "Keyla F.",
    location: "Puyallup, WA",
  },
  {
    quote:
      "I had a great experience! Everyone was kind, professional, and respectful of my home. The service was excellent, and I'm very happy with the results. I highly recommend them.",
    name: "Ediane R.",
    location: "Seattle, WA",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL("https://zpshades.com"),

  title: "Window Treatment Installation Seattle | ZP Shades",

  description:
    "Already purchased your window treatments? ZP Shades professionally installs shades, blinds, drapery, shutters, curtain tracks, and motorized systems across Seattle and the Puget Sound area.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "ZP Shades | Window Treatment Installation in Seattle",
    description:
      "Professional installation for customer-provided shades, blinds, drapery, shutters, and motorized systems across Seattle and the Puget Sound area.",
    url: "https://zpshades.com",
    siteName: "ZP Shades",
    images: [
      {
        url: "/images/heroimage.webp",
        width: 1200,
        height: 630,
        alt: "Professional window treatment installation by ZP Shades",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ZP Shades",
    url: "https://zpshades.com",
    telephone: "+1-929-471-2067",
    image: "https://zpshades.com/images/heroimage.webp",
    description:
      "Professional installation of customer-provided shades, blinds, drapery, shutters, curtain rods, tracks, and motorized window treatment systems.",
    areaServed: mainServiceAreas.map((area) => area.name),
    serviceType: [
      "Window shade installation",
      "Blind installation",
      "Drapery installation",
      "Motorized shade installation",
      "Shutter installation",
      "Curtain rod and track installation",
    ],
  };

  return (
    <div>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="relative h-screen min-h-[580px] w-full"
      >
        <Image
          src="/images/heroimage.webp"
          alt="Professional shade installation in a Seattle-area home"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_45%]"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col justify-center px-6 pb-16">
          <div className="mx-auto w-full max-w-6xl">
            <h1
              id="hero-heading"
              className="max-w-3xl text-4xl leading-tight tracking-wide text-white md:text-6xl"
            >
              Professional Shade & Drapery Installation in Seattle
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-200 md:text-base">
              Already purchased your window treatments? We professionally
              install shades, blinds, drapery, shutters, and motorized systems
              throughout Seattle and the Puget Sound area.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book"
                className="inline-block bg-white px-8 py-4 text-center text-xs uppercase tracking-widest text-black transition-colors hover:bg-gray-100"
              >
                Book a Service
              </Link>

              <Link
                href="/contact"
                className="inline-block border border-white px-8 py-4 text-center text-xs uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services — restored organized layout */}
      <section
        aria-labelledby="services-heading"
        className="bg-black px-6 py-16 text-white"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-xs uppercase tracking-widest text-gray-400">
            What we install
          </p>

          <h2 id="services-heading" className="sr-only">
            Our installation services
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            <article className="border-t border-gray-700 pt-6">
              <h3 className="mb-3 text-lg font-semibold">Shades Installation</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Roller, solar, blackout, zebra, cellular, Roman, and custom
                shades. Professional installation for every window.
              </p>
            </article>

            <article className="border-t border-gray-700 pt-6">
              <h3 className="mb-3 text-lg font-semibold">Drapery Installation</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Precision mounting for drapery rods, tracks, curtains, and
                custom window treatments. Level, centered, and secure.
              </p>
            </article>

            <article className="border-t border-gray-700 pt-6">
              <h3 className="mb-3 text-lg font-semibold">Motorized Systems</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Professional mounting and setup for smart and motorized shade
                systems, including compatible home automation products.
              </p>
            </article>
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="border-b border-white pb-0.5 text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Moving brand logos */}
      <AnimatedSection delay={0}>
        <section
          aria-labelledby="brands-heading"
          className="overflow-hidden bg-[#eef4f7] py-16"
        >
          <div className="mx-auto mb-10 max-w-6xl px-6 text-center">
            <p className="mb-3 text-xs uppercase tracking-widest text-[#58707c]">
              Brands we work with
            </p>
            <h2 id="brands-heading" className="text-3xl tracking-wide">
              We install all major window treatment brands
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
              Already purchased your products? We install customer-provided
              shades, blinds, drapery, shutters, and motorized systems from
              major retailers, designers, and manufacturers.
            </p>
          </div>

          <div className="brand-marquee">
            <div className="brand-marquee-track">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="brand-logo-card"
                  aria-hidden={index >= brands.length}
                >
<Image
  src={brand.image}
  alt={index < brands.length ? `${brand.name} logo` : ""}
  width={150}
  height={70}
  className={`w-auto object-contain opacity-100 transition-all duration-300 ${
    brand.name === "Blinds.com"
      ? "h-24"
      : brand.name === "SelectBlinds" || brand.name === "The Shade Store"
      ? "h-16"
      : "h-10"
  }`}
/>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 px-6 text-center text-xs text-gray-500">
            Brand names are shown only to identify products we install. ZP
            Shades is an independent installation company.
          </p>
        </section>
      </AnimatedSection>

      {/* Gallery */}
      <section aria-labelledby="gallery-heading" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest text-gray-400">
                Our work
              </p>
              <h2 id="gallery-heading" className="text-3xl tracking-wide">
                Recent Installations
              </h2>
            </div>

            <Link
              href="/gallery"
              className="hidden border-b border-black pb-0.5 text-xs uppercase tracking-widest transition-opacity hover:opacity-60 sm:block"
            >
              View all
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                src: "/images/gallery1.webp",
                alt: "Professionally installed roller shade in a bedroom",
              },
              {
                src: "/images/gallery2.webp",
                alt: "Motorized shade installation in a home office",
              },
              {
                src: "/images/gallery3.webp",
                alt: "Custom drapery installation in a living room",
              },
            ].map((image, index) => (
              <AnimatedSection key={image.src} delay={index * 150}>
                <div className="group relative h-[420px] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with color */}
      <AnimatedSection delay={0}>
        <section
          aria-labelledby="testimonials-heading"
          className="bg-[#FCF8EE] px-6 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="mb-4 text-xs uppercase tracking-widest text-[#9a6b00]">
                Customer feedback
              </p>
              <h2 id="testimonials-heading" className="text-3xl tracking-wide">
                What Our Customers Say
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article
                  key={`${testimonial.name}-${testimonial.location}`}
                  className="border border-[#ead99c] bg-white p-8 shadow-sm"
                >
                  <p
                    aria-label="5 out of 5 stars"
                    className="mb-6 text-lg tracking-[0.18em] text-[#e2a500]"
                  >
                    ★★★★★
                  </p>

                  <blockquote className="text-sm leading-relaxed text-gray-700">
                    “{testimonial.quote}”
                  </blockquote>

                  <footer className="mt-6 border-t border-gray-100 pt-5">
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="mt-1 text-xs text-gray-500">
                      {testimonial.location}
                    </p>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why choose us */}
<AnimatedSection delay={0}>
  <section
    aria-labelledby="why-heading"
    className="border-t border-gray-100 px-6 py-20"
  >
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <p className="mb-4 text-xs uppercase tracking-widest text-gray-400">
          Why choose us
        </p>

        <h2 id="why-heading" className="text-3xl tracking-wide">
          Professional installation without the sales pressure
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-600">
          Already purchased your window treatments? ZP Shades specializes in
          installing customer-provided products for homes and businesses
          throughout the Seattle area.
        </p>
      </div>

      <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: "✓",
            title: "Installation Only",
            text: "We focus on professional installation instead of selling window treatments.",
          },
          {
            icon: "⌂",
            title: "Residential & Commercial",
            text: "Homes, apartments, offices, rentals, retail spaces, and larger projects.",
          },
          {
            icon: "◇",
            title: "All Major Brands",
            text: "We install customer-provided products from major retailers, brands, and designers.",
          },
          {
            icon: "★",
            title: "Attention to Detail",
            text: "Secure mounting, precise alignment, smooth operation, and a clean finish.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="flex h-full flex-col items-center border border-gray-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span
              aria-hidden="true"
              className="mb-6 block text-3xl text-gray-700"
            >
              {item.icon}
            </span>

            <h3 className="mb-3 text-sm font-semibold">{item.title}</h3>

            <p className="text-sm leading-relaxed text-gray-600">
              {item.text}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <Link
          href="/book"
          className="inline-block bg-black px-8 py-4 text-center text-xs uppercase tracking-widest text-white transition-colors hover:bg-gray-900"
        >
          Book Installation
        </Link>
      </div>
    </div>
  </section>
</AnimatedSection>

      {/* Residential & Commercial */}
      <AnimatedSection delay={0}>
        <section
          aria-labelledby="projects-heading"
          className="bg-stone-50 px-6 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div>
                <p className="mb-4 text-xs uppercase tracking-widest text-gray-400">
                  Who we serve
                </p>
                <h2 id="projects-heading" className="mb-6 text-3xl tracking-wide">
                  Residential & Commercial Projects
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  From a single window to an entire property, ZP Shades
                  provides professional installation for customer-provided
                  window treatments.
                </p>

                <Link
                  href="/book"
                  className="inline-block bg-black px-8 py-4 text-xs uppercase tracking-widest text-white transition-colors hover:bg-gray-900"
                >
                  Book a Service
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
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

      {/* Better service area layout */}
      <AnimatedSection delay={0}>
        <section
          aria-labelledby="areas-heading"
          className="bg-[#dfeaf0] px-6 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="mb-4 text-xs uppercase tracking-widest text-[#58707c]">
                  Service area
                </p>
                <h2 id="areas-heading" className="text-3xl tracking-wide">
                  Serving Seattle and the Puget Sound area
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  These are some of our main service areas. We also travel to
                  surrounding communities for installation projects.
                </p>
              </div>

              <Link
                href="/service-areas"
                className="w-fit border-b border-black pb-0.5 text-xs uppercase tracking-widest"
              >
                View all service areas
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {mainServiceAreas.map((city) => (
                <Link
                  key={city.name}
                  href={city.href}
                  className="group flex items-center justify-between border border-white/70 bg-white/80 p-6 transition-transform hover:-translate-y-1 hover:bg-white"
                >
                  <span className="text-lg font-medium">{city.name}</span>
                  <span
                    aria-hidden="true"
                    className="text-xl transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

{/* Instagram and Google */}
<AnimatedSection delay={0}>
  <section
  aria-labelledby="social-heading"
  className="border-t border-[#EEE5D8] bg-white px-6 py-20"
>
    <div className="mx-auto max-w-6xl">
      <div className="mb-10 text-center">
        <p className="mb-4 text-xs uppercase tracking-widest text-[#A8864A]">
          Follow and review
        </p>

        <h2 id="social-heading" className="text-3xl tracking-wide">
          See Our Work and Customer Reviews
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
          Follow our recent installations on Instagram or visit our Google
          Business Profile to read customer reviews.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
       <a
  href="https://www.instagram.com/zpshades/"
  target="_blank"
  rel="noopener noreferrer"
className="group rounded-lg border border-[#E8DCC3] bg-[#FCFBF8] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
  <div className="mb-5 flex items-center gap-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 text-[#A8864A]"
    >
      <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm9.6 2.15a.9.9 0 110 1.8.9.9 0 010-1.8zM12 6.5A5.5 5.5 0 1112 17.5 5.5 5.5 0 0112 6.5zm0 2A3.5 3.5 0 1012 15.5 3.5 3.5 0 0012 8.5z"/>
    </svg>

    <p className="text-xs uppercase tracking-widest text-[#A8864A]">
      Instagram
    </p>
  </div>

  <h3 className="mb-3 text-2xl tracking-wide">
    Follow Us on Instagram
  </h3>

  <p className="mb-6 text-sm leading-relaxed text-gray-600">
    See our latest shade, drapery, shutter, and motorized system
    installations throughout the Puget Sound area.
  </p>

  <span className="text-xs uppercase tracking-widest transition-colors group-hover:text-[#A8864A]">
    View Instagram →
  </span>
</a>

        <a
          href="https://g.page/r/CdPvqM1vVegsEAE/review"
          target="_blank"
          rel="noopener noreferrer"
className="group rounded-lg border border-[#E8DCC3] bg-[#FCFBF8] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"        >
          <p className="mb-4 text-lg tracking-[0.18em] text-[#C79B2C]">
            ★★★★★
          </p>

          <h3 className="mb-3 text-2xl tracking-wide">
            Read Our Google Reviews
          </h3>

          <p className="mb-6 text-sm leading-relaxed text-gray-600">
            See what local homeowners and businesses say about working with
            ZP Shades.
          </p>

          <span className="text-xs uppercase tracking-widest">
            View Google Reviews →
          </span>
        </a>
      </div>
    </div>
  </section>
</AnimatedSection>

      {/* CTA — clearly separate from footer */}
<section
  aria-labelledby="cta-heading"
  className="bg-[#F5F3EF] px-6 py-20 text-black"
>
  <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
    <div>
      <p className="mb-3 text-xs uppercase tracking-widest text-[#A8864A]">
  Ready to get started?
</p>

      <h2 id="cta-heading" className="mb-3 text-3xl tracking-wide">
        Your products are ready. Let us handle the installation.
      </h2>

      <p className="max-w-xl text-sm leading-relaxed text-gray-600">
        Tell us what you purchased, how many windows you have, and where
        the project is located.
      </p>
    </div>

    <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
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
    </div>
  );
}
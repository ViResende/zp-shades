
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedSection from "../components/AnimatedSection";

const images = [
  {
    src: "/images/gallery4.webp",
    alt: "Drapes installation in a living room",
  },
  {
    src: "/images/gallery5.webp",
    alt: "Drapes installation in an office",
  },
  {
    src: "/images/gallery6.webp",
    alt: "Shutter installation in a living room",
  },
  {
    src: "/images/gallery7new.webp",
    alt: "Zebra shades installation in a living room",
  },
  {
    src: "/images/gallery8.webp",
    alt: "Shutters installation in a kitchen",
  },
  {
    src: "/images/gallery9.webp",
    alt: "Cornices installation in a living room",
  },
  {
    src: "/images/gallery11.webp",
    alt: "Roller shades and drapes in a living room",
  },
  {
    src: "/images/gallery10.webp",
    alt: "Shutters installation at a closet",
  },
  {
    src: "/images/gallery12new.webp",
    alt: "Roller shades installation in a living room",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const handlePrev = () => {
    setSelected((current) =>
      current === null
        ? null
        : (current - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setSelected((current) =>
      current === null ? null : (current + 1) % images.length
    );
  };

  useEffect(() => {
    if (selected === null) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") handlePrev();
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [selected]);

  return (
    <main className="bg-white text-[#171717]">
      {/* Hero */}
      <section className="bg-[#F5F3EF]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#A8864A]">
            ZP SHADES / OUR WORK
          </p>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h1 className="mb-5 text-3xl font-medium leading-tight sm:text-4xl">
                Our Installation Gallery
              </h1>

              <p className="text-sm leading-relaxed text-[#59616A]">
                Explore some of our completed blinds, shades,
                shutters, and drapery installations throughout
                Seattle and the Puget Sound area.
              </p>
            </div>

            <Link
              href="/book"
              className="inline-flex shrink-0 items-center justify-center self-start bg-black px-7 py-4 text-xs uppercase tracking-wider text-white transition-colors hover:bg-[#333] md:self-auto"
            >
              Book Installation
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-9">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#A8864A]">
            RECENT INSTALLATIONS
          </p>

          <h2 className="mb-3 text-2xl font-medium sm:text-3xl">
            Our Work
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-[#59616A]">
            Every project is different. Browse our installations
            and click any photo to take a closer look.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <AnimatedSection key={image.src} delay={index * 80}>
              <button
                type="button"
                onClick={() => setSelected(index)}
                aria-label={`View larger: ${image.alt}`}
                className="group relative block aspect-[4/3] w-full overflow-hidden border border-[#E6E6E6] bg-[#F5F3EF] text-left"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

                <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center border border-white/70 bg-white/90 text-lg text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  +
                </span>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* About our work */}
      <section className="bg-[#E1ECF1]">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:px-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#58707C]">
              THE DETAILS MATTER
            </p>

            <h2 className="text-2xl font-medium leading-snug sm:text-3xl">
              Professional installation,
              <span className="block">done right.</span>
            </h2>
          </div>

          <div>
            <p className="text-sm leading-relaxed text-[#495864]">
              From a single window to an entire property, we focus
              on secure mounting, precise alignment, and a clean
              finished look. ZP Shades installs customer-provided
              window treatments for residential and commercial spaces.
            </p>
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
              Let's get your window treatments installed.
            </h2>

            <p className="text-sm leading-relaxed text-[#59616A]">
              Already purchased your blinds, shades, or drapery?
              Tell us about your project and request an installation
              quote.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-black px-7 py-4 text-xs uppercase tracking-wider text-white transition-colors hover:bg-[#333]"
            >
              Book Installation
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-black px-7 py-4 text-xs uppercase tracking-wider text-black transition-colors hover:bg-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Image lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Installation gallery image viewer"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSelected(null);
            }}
            className="absolute right-5 top-5 z-20 px-3 py-2 text-2xl text-white transition-opacity hover:opacity-60"
            aria-label="Close image viewer"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 px-3 py-4 text-3xl text-white transition-opacity hover:opacity-60 sm:left-6"
            aria-label="Previous image"
          >
            ←
          </button>

          <div
            className="relative h-[75vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[selected].src}
              alt={images[selected].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 px-3 py-4 text-3xl text-white transition-opacity hover:opacity-60 sm:right-6"
            aria-label="Next image"
          >
            →
          </button>

          <div className="absolute bottom-5 left-1/2 w-full max-w-xl -translate-x-1/2 px-6 text-center">
            <p className="text-sm text-gray-200">
              {images[selected].alt}
            </p>

            <p className="mt-2 text-xs tracking-widest text-gray-400">
              {selected + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import AnimatedSection from "../components/AnimatedSection";
import Link from "next/link";

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
    if (selected === null) return;
    setSelected(selected === 0 ? images.length - 1 : selected - 1);
  };

  const handleNext = () => {
    if (selected === null) return;
    setSelected(selected === images.length - 1 ? 0 : selected + 1);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selected === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selected]);

return (
    <div>
      {/* Dark hero header */}
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">
              ZP Shades
            </p>
            <h1 className="text-4xl tracking-wide mb-4">Installation Gallery</h1>
            <p className="text-gray-400 max-w-md">
              A selection of our recent shade, blind, and drapery installations across Seattle and the Puget Sound area.
            </p>
          </div>
          <Link
            href="/book"
            className="shrink-0 inline-block bg-white text-black px-8 py-4 text-xs tracking-widest uppercase hover:bg-gray-100 transition-colors"
          >
            Book a Service
          </Link>
        </div>
      </div>

      {/* Gallery grid */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <AnimatedSection key={image.src} delay={index * 80}>
              <button
                onClick={() => setSelected(index)}
                className="w-full relative aspect-[4/3] overflow-hidden group block"
                aria-label={`View larger: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </button>
            </AnimatedSection>
          ))}
        </div>
      </main>

<section className="border-t border-gray-100 py-12 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto mb-3">
      Professional installations across Seattle, Bellevue, Kirkland, and the Puget Sound area.
    </p>
    <p className="text-gray-400 text-sm leading-relaxed mx-auto">
    Every installation is measured carefully and completed with attention to detail to ensure a clean and precise finish.
    </p>
  </div>
</section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 text-white text-3xl px-4 py-2 hover:opacity-60 transition-opacity"
            aria-label="Previous image"
          >
            ←
          </button>

          <div
            className="relative w-full max-w-4xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selected].src}
              alt={images[selected].alt}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 text-white text-3xl px-4 py-2 hover:opacity-60 transition-opacity"
            aria-label="Next image"
          >
            →
          </button>

          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 text-white text-2xl px-4 py-2 hover:opacity-60 transition-opacity"
            aria-label="Close lightbox"
          >
            ✕
          </button>

          <p className="absolute bottom-8 text-gray-300 text-sm text-center max-w-xl px-4">
            {images[selected].alt}
          </p>
          <p className="absolute bottom-4 text-gray-500 text-xs tracking-widest uppercase">
            {selected + 1} / {images.length}
          </p>
        </div>
      )}
    </div>
  );
}
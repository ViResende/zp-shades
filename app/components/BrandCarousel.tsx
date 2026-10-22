
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Brand = {
  name: string;
  image: string;
};

export default function BrandCarousel({
  brands,
}: {
  brands: Brand[];
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const pauseUntil = useRef(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    const group = groupRef.current;
    if (!viewport || !group || !brands.length) return;

    let frame = 0;
    let previous = 0;
    const width = group.offsetWidth;

    viewport.scrollLeft = width;

    const animate = (time: number) => {
      if (!previous) previous = time;
      const delta = Math.min(time - previous, 50);
      previous = time;

      if (!dragging.current && time > pauseUntil.current) {
        viewport.scrollLeft -= (delta * 110) / 1000;
      }

      if (viewport.scrollLeft < width * 0.5) {
        viewport.scrollLeft += width;
      } else if (viewport.scrollLeft > width * 1.5) {
        viewport.scrollLeft -= width;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [brands]);

  const move = (direction: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    pauseUntil.current = performance.now() + 1200;
    viewport.scrollBy({
      left: direction * 244,
      behavior: "smooth",
    });
  };

  return (
    <div className="brand-marquee">
      <button
        type="button"
        aria-label="Scroll brands left"
        className="brand-carousel-arrow brand-carousel-left"
        onClick={() => move(-1)}
      >
        ‹
      </button>

      <div
        ref={viewportRef}
        className="brand-carousel-viewport"
        onPointerDown={(e) => {
          if (e.pointerType === "mouse") {
            dragging.current = true;
            startX.current = e.clientX;
            startScroll.current = e.currentTarget.scrollLeft;
            e.currentTarget.setPointerCapture(e.pointerId);
          } else {
            dragging.current = true;
          }
        }}
        onPointerMove={(e) => {
          if (!dragging.current || e.pointerType !== "mouse") return;
          e.currentTarget.scrollLeft =
            startScroll.current - (e.clientX - startX.current);
        }}
        onPointerUp={() => {
          dragging.current = false;
          pauseUntil.current = performance.now() + 700;
        }}
        onPointerCancel={() => {
          dragging.current = false;
        }}
        onWheel={() => {
          pauseUntil.current = performance.now() + 1200;
        }}
      >
        <div className="brand-carousel-track">
          {[0, 1, 2].map((copy) => (
            <div
              key={copy}
              ref={copy === 0 ? groupRef : undefined}
              className="brand-carousel-group"
              aria-hidden={copy !== 1}
            >
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="brand-logo-card"
                >
                  <Image
                    src={brand.image}
                    alt={copy === 1 ? `${brand.name} logo` : ""}
                    width={150}
                    height={70}
                    draggable={false}
                    className={`w-auto max-w-full object-contain opacity-100 transition-all duration-300 ${
                      brand.name === "Blinds.com"
                        ? "h-24"
                        : brand.name === "TWOPAGES" ||
                            brand.name === "Everhem"
                        ? "h-20"
                        : brand.name === "SelectBlinds" ||
                            brand.name === "The Shade Store"
                        ? "h-16"
                        : "h-10"
                    }`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Scroll brands right"
        className="brand-carousel-arrow brand-carousel-right"
        onClick={() => move(1)}
      >
        ›
      </button>
    </div>
  );
}

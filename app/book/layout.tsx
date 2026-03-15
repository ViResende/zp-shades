import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Shade Installation — ZP Shades Seattle",
  description: "Book a professional shade installation or consultation with ZP Shades. Serving Seattle and surrounding areas. Same-week scheduling available.",
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
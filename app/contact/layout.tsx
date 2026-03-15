import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ZP Shades — Shade Installation Seattle",
  description: "Contact ZP Shades for professional shade and drapery installation in Seattle. Call (929) 471-2067. Serving Seattle, Bellevue, Kirkland, Mercer Island, North Bend, and Bainbridge Island.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
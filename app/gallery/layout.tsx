import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shade Installation Gallery Seattle — ZP Shades",
  description: "View our portfolio of professional window shade and drapery installations across Seattle, Bellevue, Mercer Island, and surrounding areas.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


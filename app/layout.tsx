import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zpshades.com"),

  title: "ZP Shades | Window Treatment Installation",

  description:
    "Professional shade, blind, drapery, shutter, and motorized window treatment installation serving Seattle, Bellevue, and the Puget Sound area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RF4160NCQ9"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-RF4160NCQ9');
  `}
        </Script>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ZP Shades",
              "image": "https://zpshades.com/images/heroimage.webp",
              "telephone": "+1-929-471-2067",
              "areaServed": "Puget Sound",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Seattle",
                "addressRegion": "WA",
                "addressCountry": "US"
              },
              "service": [
                "Shade Installation",
                "Drapery Installation",
                "Motorized Shades Installation"
              ]
            })
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
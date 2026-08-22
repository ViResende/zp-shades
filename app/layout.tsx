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
  src="https://www.googletagmanager.com/gtag/js?id=G-RF416DNCX9"
  strategy="afterInteractive"
/>

        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-RF416DNCX9');
  `}
        </Script>


        <Script id="lead-attribution" strategy="afterInteractive">
  {`
    try {
      const existingSource = sessionStorage.getItem("zp_traffic_source");

      if (!existingSource) {
        const params = new URLSearchParams(window.location.search);
        const referrer = document.referrer || "";

        const utmSource = params.get("utm_source") || "";
        const utmMedium = params.get("utm_medium") || "";
        const utmCampaign = params.get("utm_campaign") || "";
        const gclid = params.get("gclid") || "";

        let trafficSource = utmSource;
        let trafficMedium = utmMedium;

        if (!trafficSource) {
          if (gclid) {
            trafficSource = "Google";
            trafficMedium = "paid";
          } else if (referrer.includes("google.")) {
            trafficSource = "Google";
            trafficMedium = "organic";
          } else if (
            referrer.includes("instagram.com") ||
            referrer.includes("l.instagram.com")
          ) {
            trafficSource = "Instagram";
            trafficMedium = "social";
          } else if (referrer.includes("facebook.com")) {
            trafficSource = "Facebook";
            trafficMedium = "social";
          } else if (referrer.includes("chatgpt.com")) {
            trafficSource = "ChatGPT";
            trafficMedium = "ai-assistant";
          } else if (referrer) {
            trafficSource = referrer;
            trafficMedium = "referral";
          } else {
            trafficSource = "Direct";
            trafficMedium = "none";
          }
        }

        sessionStorage.setItem("zp_traffic_source", trafficSource);
        sessionStorage.setItem("zp_traffic_medium", trafficMedium);
        sessionStorage.setItem("zp_referrer", referrer);
        sessionStorage.setItem("zp_landing_page", window.location.href);
        sessionStorage.setItem("zp_utm_source", utmSource);
        sessionStorage.setItem("zp_utm_medium", utmMedium);
        sessionStorage.setItem("zp_utm_campaign", utmCampaign);
      }
    } catch (error) {
      console.error("Lead attribution error:", error);
    }
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
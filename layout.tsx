import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://data.proptechusa.ai"),
  applicationName: "PropTechUSA Custom Data Solutions",
  authors: [{ name: "PropTechUSA.ai", url: "https://www.proptechusa.ai" }],
  creator: "PropTechUSA.ai",
  publisher: "PropTechUSA.ai",
  category: "Data Infrastructure",
  alternates: { canonical: "/" },
  title: "Custom Data Solutions for Real Estate & Sports | PropTechUSA.ai",
  description:
    "Custom APIs, data feeds, licensing, embedded intelligence, and data engineering for real estate and sports products—built around your exact response contract.",
  keywords: [
    "custom data solutions",
    "real estate data API",
    "sports data API",
    "custom API development",
    "property data licensing",
    "sports data feeds",
    "PropData",
    "PropSports",
    "data engineering",
  ],
  openGraph: {
    title: "Your Data Product, Engineered Around the Outcome",
    description:
      "Custom real-estate and sports data infrastructure: source, normalize, resolve, enrich, validate, and deliver the exact contract your product needs.",
    url: "https://data.proptechusa.ai",
    siteName: "PropTechUSA Custom Data Solutions",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "PropTechUSA Custom Data Solutions for real estate and sports" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Data Solutions | PropTechUSA.ai",
    description: "The exact real-estate or sports data contract your product needs—engineered for production.",
    images: ["/opengraph-image"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07182e",
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.proptechusa.ai/#organization",
      name: "PropTechUSA.ai",
      url: "https://www.proptechusa.ai",
      email: "sales@proptechusa.ai",
      telephone: "+1-888-784-3881",
      sameAs: [
        "https://propdata.proptechusa.ai",
        "https://propsports.proptechusa.ai",
        "https://propsecure.proptechusa.ai",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://data.proptechusa.ai/#website",
      name: "PropTechUSA Custom Data Solutions",
      url: "https://data.proptechusa.ai",
      publisher: { "@id": "https://www.proptechusa.ai/#organization" },
    },
    {
      "@type": "Service",
      "@id": "https://data.proptechusa.ai/#service",
      name: "Custom Data Solutions for Real Estate and Sports",
      serviceType: "Custom data engineering, APIs, feeds, licensing, and embedded intelligence",
      provider: { "@id": "https://www.proptechusa.ai/#organization" },
      url: "https://data.proptechusa.ai",
      areaServed: "US",
      audience: { "@type": "BusinessAudience", audienceType: "Product, engineering, data, and enterprise teams" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Custom Data Delivery",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom APIs" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real-time and bulk data feeds" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Embedded intelligence" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data licensing" } },
        ],
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}

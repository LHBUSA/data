import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://data.proptechusa.ai"),
  applicationName: "PropTechUSA Custom Data Solutions",
  generator: "Next.js",
  authors: [{ name: "PropTechUSA.ai", url: "https://www.proptechusa.ai" }],
  creator: "PropTechUSA.ai",
  publisher: "PropTechUSA.ai",
  category: "Data Infrastructure",
  classification: "B2B data infrastructure and engineering services",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  title: "Custom Real Estate & Sports Data Solutions | PropTechUSA.ai",
  description:
    "Custom APIs, real-time feeds, data licensing, embedded intelligence, and production data engineering for real estate and sports products.",
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
    "entity resolution",
    "embedded data products",
    "real-time sports data",
    "property intelligence",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Hard-to-Source Data, Engineered Into Your Advantage",
    description:
      "Custom real-estate and sports data systems—sourced, resolved, enriched, validated, and delivered around your exact product decision.",
    url: "https://data.proptechusa.ai",
    siteName: "PropTechUSA Custom Data Solutions",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "PropTechUSA Custom Data Solutions for real estate and sports" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Data Solutions | PropTechUSA.ai",
    description: "Custom real-estate and sports data contracts, engineered for production.",
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
      legalName: "PropTechUSA.ai",
      url: "https://www.proptechusa.ai",
      logo: { "@id": "https://data.proptechusa.ai/#logo" },
      description: "Independent data infrastructure and product engineering for real estate and sports.",
      email: "sales@proptechusa.ai",
      telephone: "+1-888-784-3881",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "sales@proptechusa.ai",
        telephone: "+1-888-784-3881",
        areaServed: "US",
        availableLanguage: "English",
      },
      knowsAbout: [
        "Real estate data",
        "Sports data",
        "Property intelligence",
        "Entity resolution",
        "Custom APIs",
        "Data feeds",
        "Embedded intelligence",
      ],
      sameAs: [
        "https://propdata.proptechusa.ai",
        "https://propsports.proptechusa.ai",
        "https://propsecure.proptechusa.ai",
      ],
    },
    {
      "@type": "ImageObject",
      "@id": "https://data.proptechusa.ai/#logo",
      url: "https://data.proptechusa.ai/favicon.svg",
      contentUrl: "https://data.proptechusa.ai/favicon.svg",
      caption: "PropTechUSA Custom Data Solutions shield",
    },
    {
      "@type": "ImageObject",
      "@id": "https://data.proptechusa.ai/#primaryimage",
      url: "https://data.proptechusa.ai/images/data-hero.webp",
      contentUrl: "https://data.proptechusa.ai/images/data-hero.webp",
      width: 1672,
      height: 941,
      caption: "Real estate and sports data infrastructure across an American city",
    },
    {
      "@type": "WebSite",
      "@id": "https://data.proptechusa.ai/#website",
      name: "PropTechUSA Custom Data Solutions",
      url: "https://data.proptechusa.ai",
      publisher: { "@id": "https://www.proptechusa.ai/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://data.proptechusa.ai/#webpage",
      url: "https://data.proptechusa.ai",
      name: "Custom Real Estate and Sports Data Solutions",
      description: "Custom data products, APIs, feeds, licensing, and embedded intelligence for real estate and sports.",
      isPartOf: { "@id": "https://data.proptechusa.ai/#website" },
      about: { "@id": "https://data.proptechusa.ai/#service" },
      primaryImageOfPage: { "@id": "https://data.proptechusa.ai/#primaryimage" },
      breadcrumb: { "@id": "https://data.proptechusa.ai/#breadcrumb" },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ContactAction",
          target: "https://data.proptechusa.ai/#contact",
          name: "Start a custom data brief",
        },
        {
          "@type": "ScheduleAction",
          target: "https://calendly.com/proptechusa/new-meeting-1",
          name: "Book an integration working session",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://data.proptechusa.ai/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "PropTechUSA.ai",
          item: "https://www.proptechusa.ai",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Custom Data Solutions",
          item: "https://data.proptechusa.ai",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://data.proptechusa.ai/#service",
      name: "Custom Data Solutions for Real Estate and Sports",
      serviceType: "Custom data engineering, APIs, feeds, licensing, and embedded intelligence",
      description: "Customer-specific data systems that source, resolve, normalize, enrich, validate, and deliver real estate or sports intelligence through production-ready contracts.",
      provider: { "@id": "https://www.proptechusa.ai/#organization" },
      url: "https://data.proptechusa.ai",
      areaServed: { "@type": "Country", name: "United States" },
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
    {
      "@type": "FAQPage",
      "@id": "https://data.proptechusa.ai/#faq",
      isPartOf: { "@id": "https://data.proptechusa.ai/#webpage" },
      mainEntity: [
        {
          "@type": "Question",
          name: "What counts as a custom data solution?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A purpose-built API, joined dataset, licensed feed, embedded experience, customer-specific coverage, derived score, AI tool, or workflow that requires more than an off-the-shelf endpoint.",
          },
        },
        {
          "@type": "Question",
          name: "Can you work from a response schema or sample JSON?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A target response is often the fastest starting point. PropTechUSA can work backward into sources, identity, freshness, validation, and delivery requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Do you support both real estate and sports projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. PropData anchors property intelligence, and PropSports anchors sports, odds, and performance intelligence. Custom contracts can extend either foundation.",
          },
        },
        {
          "@type": "Question",
          name: "Can the data be delivered inside our product?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Delivery can be a versioned API, webhook, bulk or delta feed, MCP tool, white-label component, internal dashboard, or a combination.",
          },
        },
        {
          "@type": "Question",
          name: "How does a project begin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with the decision the data needs to support. The engagement then defines the response contract, source plan, acceptance criteria, delivery surface, and implementation path.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}

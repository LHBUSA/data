import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: "https://data.proptechusa.ai/sitemap.xml",
    host: "https://data.proptechusa.ai",
  };
}

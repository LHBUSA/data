import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://data.proptechusa.ai", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}

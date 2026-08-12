import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PropTechUSA Custom Data Solutions",
    short_name: "Data Solutions",
    description: "Custom real-estate and sports data infrastructure built around your product outcome.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f9fc",
    theme_color: "#07182e",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}

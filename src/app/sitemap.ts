import type { MetadataRoute } from "next"

const siteUrl = "https://saurabhgaikwad.in"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ]
}

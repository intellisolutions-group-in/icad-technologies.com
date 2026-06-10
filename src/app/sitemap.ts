import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { industriesData } from "@/data/industries";
import { blogArticles } from "@/data/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://icadtech.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/careers",
    "/contact",
    "/services",
    "/industries",
    "/blog",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Services dynamic routes
  const serviceRoutes = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Industries dynamic routes
  const industryRoutes = Object.keys(industriesData).map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog dynamic routes
  const blogRoutes = Object.keys(blogArticles).map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...blogRoutes];
}

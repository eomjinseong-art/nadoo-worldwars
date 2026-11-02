import type { MetadataRoute } from "next";
import { battles } from "@/data/battles";
import { issues } from "@/data/issues";
import { people } from "@/data/people";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/summary",
    "/map",
    "/phases",
    "/timeline",
    "/issues",
    "/battles",
    "/people",
    "/aftermath",
    "/bridge",
    "/quiz",
    "/films",
    "/sources",
    ...issues.map((item) => `/issues/${item.slug}`),
    ...battles.map((item) => `/battles/${item.slug}`),
    ...people.map((item) => `/people/${item.slug}`),
  ];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}

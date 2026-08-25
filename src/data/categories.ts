import type { Category } from "@/types";

/**
 * All blog categories with display metadata.
 */
export const categories: Category[] = [
  {
    slug: "product-recommendations",
    name: "Product Recommendations",
    description: "Curated picks for tools, gadgets, and gear that deliver real value.",
    icon: "📦",
  },
  {
    slug: "platform-recommendations",
    name: "Platform Recommendations",
    description: "Compare the best platforms for commerce, hosting, and growth.",
    icon: "🌐",
  },
  {
    slug: "tech-reviews",
    name: "Tech Reviews",
    description: "In-depth reviews of hardware and software that power your workflow.",
    icon: "⚡",
  },
  {
    slug: "business-tools",
    name: "Business Tools",
    description: "Essential software for CRM, accounting, and team operations.",
    icon: "🛠️",
  },
  {
    slug: "saas-guides",
    name: "SaaS Guides",
    description: "Practical guides to building and optimizing your SaaS stack.",
    icon: "☁️",
  },
];

/**
 * Lookup category by slug.
 * @param slug - Category identifier
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

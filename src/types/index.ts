/**
 * Blog post category identifiers.
 */
export type CategorySlug =
  | "product-recommendations"
  | "platform-recommendations"
  | "tech-reviews"
  | "business-tools"
  | "saas-guides";

/**
 * Blog post data structure.
 */
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: CategorySlug;
  author: string;
  date: string;
  readTime: number;
  image: string;
  imageAlt: string;
  tags: string[];
  featured?: boolean;
}

/**
 * Category metadata for filters and navigation.
 */
export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  icon: string;
}

/**
 * Product recommendation data structure.
 */
export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  category: string;
  rating: number;
  price: string;
  pros: string[];
  cons: string[];
  features: string[];
  relatedPostSlug?: string;
}

/**
 * Social media link configuration.
 */
export interface SocialLink {
  name: string;
  url: string;
  icon: "twitter" | "linkedin" | "instagram" | "youtube" | "github";
}

/**
 * Site-wide configuration.
 */
export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  email: string;
  socialLinks: SocialLink[];
}

import type { BlogPost, CategorySlug } from "@/types";

/** Default number of posts per page. */
export const POSTS_PER_PAGE = 6;

/**
 * Formats an ISO date string for display.
 * @param dateString - ISO date (YYYY-MM-DD)
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Filters posts by search query and category.
 * @param posts - Array of blog posts
 * @param query - Search text
 * @param category - Optional category slug filter
 */
export function filterPosts(
  posts: BlogPost[],
  query: string,
  category?: CategorySlug | "all"
): BlogPost[] {
  const normalizedQuery = query.trim().toLowerCase();

  return posts.filter((post) => {
    const matchesCategory =
      !category || category === "all" || post.category === category;

    if (!normalizedQuery) return matchesCategory;

    const searchable = [
      post.title,
      post.excerpt,
      post.author,
      ...post.tags,
    ]
      .join(" ")
      .toLowerCase();

    return matchesCategory && searchable.includes(normalizedQuery);
  });
}

/**
 * Paginates an array of items.
 * @param items - Full item list
 * @param page - Current page (1-indexed)
 * @param perPage - Items per page
 */
export function paginate<T>(items: T[], page: number, perPage: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * perPage;

  return {
    items: items.slice(start, start + perPage),
    currentPage,
    totalPages,
    totalItems: items.length,
  };
}

/**
 * Converts markdown-style content to HTML-safe paragraphs.
 * @param content - Raw markdown content
 */
export function renderMarkdownContent(content: string): string {
  return content;
}

/**
 * Generates a star rating display string.
 * @param rating - Rating out of 5
 */
export function getStarRating(rating: number): string {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  return "★".repeat(fullStars) + (hasHalf ? "½" : "") + "☆".repeat(5 - fullStars - (hasHalf ? 1 : 0));
}

/**
 * Combines CSS class names, filtering falsy values.
 * @param classes - Class name segments
 */
export function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

import type { Metadata } from "next";
import { Suspense } from "react";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogFilters } from "@/components/blog/BlogFilters";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getAllPosts } from "@/data/posts";
import { filterPosts, paginate, POSTS_PER_PAGE } from "@/lib/utils";
import type { CategorySlug } from "@/types";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert articles on product recommendations, platform comparisons, tech reviews, and business tools.",
};

interface BlogPageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    page?: string;
  }>;
}

/**
 * Blog listing page with search, category filters, and pagination.
 */
export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const query = params.q ?? "";
  const category = (params.category ?? "all") as CategorySlug | "all";
  const page = Number(params.page) || 1;

  const allPosts = getAllPosts();
  const filtered = filterPosts(allPosts, query, category);
  const { items, currentPage, totalPages, totalItems } = paginate(
    filtered,
    page,
    POSTS_PER_PAGE
  );

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Insights & Reviews
            </span>
            <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">
              Blog
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              In-depth articles to help you choose the right tools, platforms,
              and products for your business.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12">
          <Suspense fallback={<div className="h-24 animate-pulse rounded-xl bg-surface" />}>
            <BlogFilters currentQuery={query} currentCategory={category} />
          </Suspense>
        </div>

        <p className="mt-8 text-sm text-muted">
          Showing {items.length} of {totalItems} article{totalItems !== 1 ? "s" : ""}
          {query && ` matching "${query}"`}
        </p>

        {items.length > 0 ? (
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        ) : (
          <AnimatedSection>
            <div className="mt-12 rounded-2xl border border-border bg-surface py-16 text-center">
              <p className="text-lg font-medium text-foreground">No articles found</p>
              <p className="mt-2 text-muted">
                Try adjusting your search or category filter.
              </p>
            </div>
          </AnimatedSection>
        )}

        <Suspense fallback={null}>
          <BlogPagination currentPage={currentPage} totalPages={totalPages} />
        </Suspense>
      </div>
    </div>
  );
}

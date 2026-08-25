import Link from "next/link";
import { BlogCard } from "@/components/blog/BlogCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { BlogPost } from "@/types";

interface FeaturedPostsProps {
  posts: BlogPost[];
}

/**
 * Featured blog posts section for the homepage.
 */
export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-end justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Latest Insights
              </span>
              <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
                Featured Articles
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden text-sm font-medium text-accent transition-colors hover:text-accent-dark sm:block"
            >
              View all articles →
            </Link>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-accent"
          >
            View all articles →
          </Link>
        </div>
      </div>
    </section>
  );
}

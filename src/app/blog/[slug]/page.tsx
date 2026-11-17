import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogContent } from "@/components/blog/BlogContent";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getCategoryBySlug } from "@/data/categories";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/data/posts";
import { formatDate } from "@/lib/utils";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generates static paths for all blog posts.
 */
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

/**
 * Generates metadata for a blog post detail page.
 */
export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

/**
 * Individual blog article detail page.
 */
export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const category = getCategoryBySlug(post.category);
  const relatedPosts = getRelatedPosts(post);

  return (
    <article>
      <div className="relative h-[40vh] min-h-[300px] max-h-[500px]">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          unoptimized={post.image.startsWith("http")}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <AnimatedSection>
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-accent-dark"
          >
            ← Back to Blog
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-accent/10 px-3 py-1 font-medium text-accent">
              {category?.icon} {category?.name}
            </span>
            <time dateTime={post.date} className="text-muted">
              {formatDate(post.date)}
            </time>
            <span className="text-muted">{post.readTime} min read</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-muted">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center gap-3 border-b border-border pb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{post.author}</p>
              <p className="text-xs text-muted">Contributor</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="mt-8">
            <BlogContent content={post.content} />
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted"
              >
                #{tag}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {relatedPosts.length > 0 && (
        <section className="border-t border-border bg-surface py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground">Related Articles</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related, index) => (
                <BlogCard key={related.slug} post={related} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
